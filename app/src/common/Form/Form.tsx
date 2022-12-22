import React from "react";
import styles from './Form.module.css';
import { Button } from "../index";

enum inputType {
    checkbox = "checkbox",
    date = "date",
    text = "text",
    email = "email",
    password = "password"
}

interface infoField {
    name: string,
    label: string
    type: inputType,
}

enum fieldsType {
    single = "single",
    double = "double",
}

interface infoComponent {
    fields: Array<infoField>
    type: fieldsType
}

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className: string,
    components: Array<infoComponent>,
    formAttrs: Object,
    fieldHandler: any,
    submitButton: string,
    submitHandler: any,
}

const renderFields = (
    fields: Array<infoField>,
    type: fieldsType,
    formAttrs: any,
    fieldHandler: any
) => {
    if ((type === "single" && fields.length !== 1) || (type === "double" && fields.length !== 2)) return;
    return (
        fields.map((field, index) => {
            if (field.type === "checkbox") {
                return (
                    <div key={index} className={styles[`info-field-checkbox`]}>
                        <input id={field.name} type="checkbox" value={formAttrs[field.name]} onChange={fieldHandler} required />
                        <label htmlFor={field.name}>{field.label}</label>
                    </div>                
                )
            }
            return (
                <div key={index} className={styles[`info-field-${type}`]}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input id={field.name} type={field.type} value={formAttrs[field.name]} onChange={fieldHandler} required />
                </div>
            )
        })
    )
}

const renderComponents = (
    components: Array<infoComponent>,
    formAttrs: any,
    fieldHandler: any
) => {
    return (
        components.map((component, index) => {
            return(
                <div key={index} className={styles["info-component"]}>
                    {
                        component.fields && component.fields.length !== 0 &&
                        renderFields(component.fields, component.type, formAttrs, fieldHandler)
                    }
                </div>
            )
        })
    )
}


const Form = (props: FormProps) => {
    return (
        <form className={`${styles.form} ${props.className}`} onSubmit={props.submitHandler}>
            {
                props.components && props.components.length !== 0 &&
                renderComponents(props.components, props.formAttrs, props.fieldHandler)
            }
            <Button className={styles["submit-button"]} type="submit">{props.submitButton}</Button>
        </form>
    );
}

export default Form;