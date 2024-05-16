import { useState } from "react";
import { Input } from "../Input";

import {
  validateDescription,
  validateTitle,
  descriptionValidateMessage,
  validateTitleMessage,
  validateMateria,
  materiaValidateMessage,
  validationIma,
  imaValidationMessage
} from "../../shared/validators";

import { useAddPublicacion } from "../../shared/hooks/useAddPublicaciones";


export const AddPublicacion = ({ switchPublicHandler }) => {
  const { addpublicacion, isLoading } = useAddPublicacion();

  const [formState, setFormState] = useState({
    img: {
      value: "",
      isValid: false,
      showError: false,
    },
    titulo: {
      value: "",
      isValid: false,
      showError: false,
    },
    descripcion: {
      value: "",
      isValid: false,
      showError: false,
    },
    materia: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "img":
        isValid = validationIma(value);
        break;
      case "titulo":
        isValid = validateTitle(value);
        break;
      case "descripcion":
        isValid = validateDescription(value);
        break;
      case "materia":
        isValid = validateMateria(value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleAddPublicacion = (event) => {
    event.preventDefault();
    addpublicacion(formState.img.value,formState.titulo.value, formState.descripcion.value, formState.materia.value);
  };

  const isSubmitButtonDisabled =
    isLoading || !formState.img.isValid || !formState.titulo.isValid || !formState.descripcion.isValid || !formState.materia.isValid;

  return (
    <div className="mini-ventana">
      <form>
        <Input
          field="img"
          label="Imagen:"
          value={formState.img.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.img.showError}
          validationMessage={imaValidationMessage}
        />
        <Input
          field="titulo"
          label="Titulo Publicación"
          value={formState.titulo.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.titulo.showError}
          validationMessage={validateTitleMessage}
        />
        <Input
          field="descripcion"
          label="Descripcion"
          value={formState.descripcion.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.descripcion.showError}
          validationMessage={descriptionValidateMessage}
        />
        <label htmlFor="materia">Materia:</label>
        <select
          id="materia"
          value={formState.materia.value}
          onChange={(e) => handleInputValueChange(e.target.value, "materia")}
          onBlur={() => handleInputValidationOnBlur(formState.materia.value, "materia")}
        >
          <option value="">Selecciona una materia</option>
          <option value="taller">Taller</option>
          <option value="tecnologia">Tecnología</option>
          <option value="practica supervisada">Práctica Supervisada</option>
        </select>

        <button onClick={handleAddPublicacion} disabled={isSubmitButtonDisabled}>
          Agregar Publicacion
        </button>
      </form>
    </div>
  );
};