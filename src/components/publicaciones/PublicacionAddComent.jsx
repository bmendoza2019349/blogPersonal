import { useState } from "react";
import { Input } from "../Input";

import {
    validateComentario,
    comentarioValidateMessage
} from "../../shared/validators";

import { useAddComentario } from "../../shared/hooks/useAddComentario";
import { useParams } from "react-router-dom";

export const AddComentario = () => {
    const { comments, isLoading } = useAddComentario();
    const {id} = useParams();
    const [formState, setFormState] = useState({
        texto: {
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
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "texto":
                isValid = validateComentario(value);
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

    const handleAddComentario = (event) => {
        event.preventDefault();
        console.log(id, formState.texto.value)
        comments(id, formState.texto.value);
        
    }

    const isSubmitButtonDisabled =
    isLoading || !formState.texto.isValid

    return (
        <div className="mini-ventana">
          <form>
            <Input
              field="texto"
              label="Que opinas?"
              value={formState.texto.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.texto.showError}
              validationMessage={comentarioValidateMessage}
            />
    
            <button onClick={handleAddComentario} id="id" disabled={isSubmitButtonDisabled}>
              Agregar Comentario
            </button>
          </form>
        </div>
      );
}