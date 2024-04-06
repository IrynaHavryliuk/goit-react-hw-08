import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={css.div}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name"></Field>
          </label>
          <label className={css.label}>
            Email
            <Field className={css.field} type="email" name="email"></Field>
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.field}
              type="password"
              name="password"
            ></Field>
          </label>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <Link className={css.link} to="/login">
        Log in
      </Link>
    </div>
  );
}