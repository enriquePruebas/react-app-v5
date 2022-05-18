import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, "Debe de tener 15 caracteres o menos")
                            .required("Requerido"),
                        lastName: Yup.string()
                            .max(10, "Debe ser menos de 10 caracteres")
                            .required("Requerido"),
                        email: Yup.string()
                            .email("Debe de ser un email")
                            .required("Requerido"),
                        terms: Yup.boolean()
                            .oneOf([true], "Debe de aceptar las condiciones"),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], "Esta opcion no es permitida")
                            .required("Requerido")

                    })}
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder='Name'
                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder='LastName'
                            />
                            <MyTextInput
                                label="Email"
                                name="email"
                                placeholder='email'
                                type='email'
                            />

                            <MySelect label="jobType" name="jobType">
                                <option value="" >Pick something</option>
                                <option value="developer" >Developer</option>
                                <option value="designer" >Designer</option>
                                <option value="it-senior" >IT Senior</option>
                                <option value="it-jr" >IT Junior</option>
                            </MySelect>

                            <MyCheckBox label="Terms and Conditions" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
