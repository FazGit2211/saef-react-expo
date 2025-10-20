import { useState } from "react";
import { PlayerType } from "../context/PlayerContext";

interface ErrorType {
    errorValue: boolean,
    name: string,
    email: string,
    state: string,
}

export interface FormType {
    initialForm: PlayerType
};

const useForm = ({ initialForm }: FormType) => {
    //Inicializar form con valores vacios
    const [form, setForm] = useState<PlayerType>(initialForm);
    //Estado para obtener los errores
    const [errorInfo, setErrorInfo] = useState<ErrorType>({ errorValue: true, name: "", email: "", state: ""});
    //Expreciones regulares
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    //Funciones para detectar el ingreso de datos en los inputs
    const handleChangeName = (e: string) => {
        setForm({
            ...form, name: e
        });
    };

    const handleBlurName = () => {
        if ((!form.name.trim()) || (!regexName.test(form.name.trim()))) {
            setErrorInfo({
                ...errorInfo, errorValue: true, name: "El nombre no puede estar vacio"
            })
        } else {
            setErrorInfo({ ...errorInfo, errorValue: false, name: "" })
        };
    };

    const handleChangeEmail = (e: string) => {
        setForm({
            ...form, email: e
        });
    };

    const handleBlurEmail = () => {
        if ((!form.email.trim()) || (!regexEmail.test(form.email.trim()))) {
            setErrorInfo({ ...errorInfo, errorValue: true, email: "El email no puede estar vacio" })
        } else {
            setErrorInfo({ ...errorInfo, errorValue: false, email: "" })
        }
    };

    const handleChangeState = (e: string) => {
        setForm({ ...form, state: e });
    };

    const handleBlurState = () => {
        if ((!form.state.trim()) || (!regexName.test(form.state.trim()))) {
            setErrorInfo({
                ...errorInfo, errorValue: true, name: "El estado no puede estar vacio"
            })
        } else {
            setErrorInfo({ ...errorInfo, errorValue: false, name: "" })
        };
    };

    return { form, errorInfo, setForm, handleChangeName, handleBlurName, handleChangeEmail, handleBlurEmail, handleChangeState, handleBlurState}
}

export default useForm;