import { useState } from "react";
import { Input } from "../Input";

import {
    validateDescription,
    validateTitle,
    descriptionValidateMessage,
    validateTitleMessage
} from "../../shared/validators";

import { useAddPublicacion } from "../../shared/hooks/useAddPublicaciones";


export const AddPublicacion = ({ switchPublicHandler }) => {
    const { addpublicacion, isLoading } = useAddPublicacion();
  
    const [formState, setFormState] = useState({
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
        case "titulo":
          isValid = validateTitle(value);
          break;
        case "descripcion":
          isValid = validateDescription(value);
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
      addpublicacion(formState.titulo.value, formState.descripcion.value);
    };
  
    const isSubmitButtonDisabled =
      isLoading || !formState.titulo.isValid || !formState.descripcion.isValid;
  
    return (
      <div className="mini-ventana">
        <form>
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
  
          <button onClick={handleAddPublicacion} disabled={isSubmitButtonDisabled}>
            Agregar Publicacion
          </button>
        </form>
      </div>
    );
  };