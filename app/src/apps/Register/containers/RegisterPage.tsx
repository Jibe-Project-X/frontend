import React, { useState } from "react";
import Register from "../components";

interface IRegisterPageContainerProps {}

const RegisterPage = (props: IRegisterPageContainerProps) => {
    const [regForm, setRegForm] = useState({
        firstname: "",
        lastname: "",
        username: "",
        dob: "",
        email: "",
        password: "",
        passwordDup: "",
        terms: ""
    });

    const validate = (type: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const validation = {
            "firstname": () => {},
            "lastname": () => {},
            "username": () => {},
            "dob": () => {},
            "email": () => {},
            "password": () => {},
            "passwordDup": () => {
                if (regForm["password"] !== event.target.value) {
                    event.target.setCustomValidity("Password mismatch!")
                    event.target.reportValidity();
                } else {
                    event.target.setCustomValidity("")
                }
            },
            "terms": () => {}
        }
        return validation[type as keyof typeof regForm]();
    }

    const formOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        validate(event.target.id, event);
        setRegForm(previousState => {
            const newState = { ...previousState };
            newState[event.target.id as keyof typeof regForm] = event.target.value
            return { ...newState }
        });
    }

    const createAccountHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("zzzzzzzzzz", event.target)
    }

    return (
        <Register
            registerHandler = {createAccountHandler}
            fieldHandler = {formOnChangeHandler}
            regFormAttr = {regForm}
        />
    );
}

export default RegisterPage;
