import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Min 6 chars")
        .required("Password required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/profile");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="fullName"
        placeholder="Full Name"
        {...formik.getFieldProps("fullName")}
      />
      <div>{formik.touched.fullName && formik.errors.fullName}</div>

      <input
        name="email"
        placeholder="Email"
        {...formik.getFieldProps("email")}
      />
      <div>{formik.touched.email && formik.errors.email}</div>

      <input
        name="password"
        type="password"
        placeholder="Password"
        {...formik.getFieldProps("password")}
      />
      <div>{formik.touched.password && formik.errors.password}</div>

      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        {...formik.getFieldProps("confirmPassword")}
      />
      <div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
