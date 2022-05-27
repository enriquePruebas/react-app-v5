import { useFormik } from 'formik';
import * as Yup from "yup";
import '../styles/styles.css';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Debe de tener 15 caracteres o menos")
                .required("Requerido"),
            lastName: Yup.string()
                .max(10, "Debe ser menos de 10 caracteres")
                .required(),
            email: Yup.string()
                .email("Debe de ser un email")
                .required()
        })
    });

    return (
        <div>
            <h1>Formil Yup Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type="text" {...getFieldProps('firstName')}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input type="text"  {...getFieldProps('firstName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email Adress</label>
                <input type="email" {...getFieldProps('firstName')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
