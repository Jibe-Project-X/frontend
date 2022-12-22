import React from "react";
import { Card, Form } from "../../../common";
import styles from './Register.module.css';

interface IRegisterForm {
    username: string,
    password: string,
    passwordDup: string,
    email: string,
    dob: string,
    firstname: string,
    lastname: string,
    terms: string
};

interface IRegisterProps {
    registerHandler: any,
    fieldHandler: any,
    regFormAttr: IRegisterForm,
};

const registerFormComponents: any = [
    {
        type: "double",
        fields: [
            {
                name: "firstname",
                label: "Firstname",
                type: "text",
            },
            {
                name: "lastname",
                label: "Lastname",
                type: "text",
            }
        ]
    },
    {
        type: "double",
        fields: [
            {
                name: "username",
                label: "Username",
                type: "text",
            },
            {
                name: "dob",
                label: "Date of Birth",
                type: "date",
            }
        ]
    },
    {
        type: "single",
        fields: [
            {
                name: "email",
                label: "Email",
                type: "email",
            }
        ]
    },
    {
        type: "single",
        fields: [
            {
                name: "password",
                label: "Password",
                type: "password",
            }
        ]
    },
    {
        type: "single",
        fields: [
            {
                name: "passwordDup",
                label: "Re-type Password",
                type: "password",
            }
        ]
    },
    {
        type: "single",
        fields: [
            {
                name: "terms",
                label: "Agree Terms & Conditions",
                type: "checkbox",
            }
        ]
    }
]

const Register = (props: IRegisterProps) => {
    return (
        <Card className={styles["account-card"]}>
            <div className={styles["left-card"]}></div>
            <div className={styles["right-card"]}>
                <h1>
                    Create account
                </h1>
                <Form
                    className={styles["account-form"]}
                    components={registerFormComponents}
                    formAttrs={props.regFormAttr}
                    fieldHandler={props.fieldHandler}
                    submitButton={"Create Account"}
                    submitHandler={props.registerHandler}
                />
            </div>
        </Card>
    );
}

export default Register;