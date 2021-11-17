import * as yup from "yup";

const validationSchema = yup.object({
    firstName: yup.string("Enter your First Name").required("Required"),
    lastName: yup.string("Enter Your Last Name").required("Required"),
    email: yup
        .string("Enter your email")
        .email("Enter a vaild email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password should be a minimum 8 charecters length")
        .required("No paswword provided"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const validator = {
    initialValues: {
        firstName: "John",
        lastName: "Doe",
        email: "JohnDoe@example.com",
        password: "123123123",
        confirmPassword: "123123123",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
    },
};
