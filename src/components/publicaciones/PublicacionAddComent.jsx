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
        comments(id, formState.texto.value);
        
    }

    const handleUpdateComentario = async (commentId) => {
        try {
            await updateComentario(id, commentId, formState.texto.value);
            navigate(`/public/${id}`);
        } catch (error) {
            console.error('Error al actualizar comentario:', error);
            toast.error('Ocurrió un error al actualizar el comentario, intenta de nuevo');
        }
    };

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