import { useState } from "react";
import { Input } from "../Input.jsx";

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
import { useParams } from "react-router-dom";

const inputs = [
    {
        field: 'img',
        label: 'Imagen',
        validationMessage: imaValidationMessage,
        type: 'text'
    },
    {
        field: 'titulo',
        label: 'Titulo',
        validationMessage: validateTitleMessage,
        type: 'text'
    },
    {
        field: 'descripcion',
        label: 'Descripcion',
        validationMessage: descriptionValidateMessage,
        type: 'text'
    },
    {
        field: 'materia',
        label: 'Materia',
        validationMessage: materiaValidateMessage,
        type: 'select',
        options: [
            { value: 'taller', label: 'Taller' },
            { value: 'practica supervisada', label: 'Practica Supervisada' },
            { value: 'tecnologia', label: 'Tecnologia' },
        ]
    },

]

export const PublicacionSettings = ({ settings, saveSettings }) => {
    const {id} = useParams();
    const [formState, setFormState] = useState({
        img: {
            isValid: validationIma(settings.img),
            showError: false,
            value: settings.img
        },
        titulo: {
            isValid: validateTitle(settings.titulo),
            showError: false,
            value: settings.titulo
        },
        descripcion: {
            isValid: validateDescription(settings.descripcion),
            showError: false,
            value: settings.descripcion
        },
        materia: {
            isValid: validateMateria(settings.materia),
            showError: false,
            value: settings.materia
        },

    })

    console.log(formState)
    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handelInputValidationOnBlur = (value, field) => {
        let isValid = false

        switch (field) {
            case 'img':
                isValid = validationIma(value)
                break;
            case 'titulo':
                isValid = validateTitle(value)
                break;
            case 'descripcion':
                isValid = validateDescription(value)
                break;
            case 'materia':
                isValid = validateMateria(value)
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        saveSettings({
            id,
            img: formState.img.value,
            titulo: formState.titulo.value,
            descripcion: formState.descripcion.value,
            materia: formState.materia.value,
        })

        console.log(formState)
    }
    const isSubmitButtonDisabled = !formState.img.isValid ||
        !formState.titulo.isValid ||
        !formState.descripcion.isValid ||
        !formState.materia.isValid

    return (
        <div className="mini-ventana">
            <form>
                {inputs.map((input) => (
                    <Input
                        key={input.field}
                        field={input.field}
                        label={input.label}
                        value={formState[input.field].value}
                        onChangeHandler={handleInputValueChange}
                        onBlurHandler={handelInputValidationOnBlur}
                        showErrorMessage={formState[input.field].showError}
                        validationMessage={input.validationMessage}
                        type={input.type}
                        options={input.options}
                    />

                ))}
                <button onClick={handleFormSubmit} disabled={isSubmitButtonDisabled}>
                    Guardar
                </button>
            </form>
        </div>
    )

}
