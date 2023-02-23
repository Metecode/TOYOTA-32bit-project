import * as React from 'react';
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useFormik, Formik, Form } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../validations";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputPassword from '../../components/form/InputPassword';
import Select from "../../components/form/Select";
import "./login.css"

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { setUser } = useAuth();

  const loginHandle = () => {
    setUser({
      id: 1,
      username: "meteucar",
    });
    navigate(location?.state?.return_url || "/", {
      replace: true,
    });
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser(values);
      navigate(location?.state?.return_url || "/", {
        replace: true,
      });
    },
  });

  return (
    <div>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className='round1' >
        <Box textAlign={'center'} component="form">

      Login page <br />
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          setUser(values);
          navigate(location?.state?.return_url || "/", {
            replace: true,
          }); 
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          }, 3000);
        }}
        validationSchema={LoginSchema}
      >
        {({ value, isSubmitting }) => (
          <Form className="grid gap-y-3 p-4">
            <h1 className="text-2xl font-bold mb-3">Giris Yap </h1>
            <Select
              name="gender"
              options={[
                { key: 1, value: "Kadin" },
                { key: 2, value: "Erkek" },
              ]}
            />
            <Input  label="Kullanici Adi" name="username" /> <br />
            {/* <Input label="Parola" name="password" type="password" /> <br /> */}
            <InputPassword name="password" /> 
            <Input  label="Montaj No" name="montaj" /> <br />

            <button type="reset">Formu Resetle</button>
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-black h-10 rounded text-sm text-white disabled:opacity-40"
            >
              Giris yap
            </button>
          </Form>
        )}
      </Formik>
        </Box>
        
      </Container>
    </React.Fragment>
    </div>
  );
}
