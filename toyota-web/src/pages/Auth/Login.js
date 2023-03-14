import * as React from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useFormik, Formik, Form } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../validations";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputPassword from "../../components/form/InputPassword";
import Select from "../../components/form/Select";
import "./login.css";
import DatePicker from "../../components/form/DatePicker";
import Keyboard from "react-simple-keyboard";
import axios from "axios";
import "react-simple-keyboard/build/css/index.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
export default function Login() {
  const [options, setOptions] = useState([]);
  const [vardiya, setVardiya] = useState([]);
  const [option, setOption] = useState([]);
  const [control, setControl] = useState(false);
  const { state } = useLocation();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const navigateToContacts = () => {
    Logout(`../../`);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(state.filterCode, state.linkCount, state.depCode, state.termName);

  useEffect(() => {
    if (state.linkCount > 1) {
      axios
        .get(`../../../db/${state.filterCode}.json`)
        .then((res) => {
          let data = res.data.data.map((item) => {
            return {
              termName: `${item.termName}`,
              termId: `${item.termId}`,
            };
          });
          setOptions(data);
        })
        .catch((err) => console.log(err));
    } else {
      setControl(true);
      let data = {
        termName: state.termName,
        termId: state.filterCode,
      };
      setOption(data);
    }

    axios

      .get("../../../db/shifts.json")
      .then((res) => {
        let data = res.data.data.map((item) => {
          return {
            shiftId: `${item.shiftId}`,
            shiftName: `${item.shiftName}`,
            shiftCode: `${item.shiftCode}`,
            rgbColor: `${item.rgbColor}`,
          };
        });
        setVardiya(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Logout = useNavigate();
  const location = useLocation();
  // const [usernameInput, setusernameInput] = React.useState("");
  // const [montajInput, setmontajInput] = React.useState("");
  // const [passwordInput, setPasswordInput] = React.useState("");

  const [layout, setLayout] = React.useState("default");
  const keyboard = React.useRef();

  // const onChange = (input) => {
  //   setusernameInput(input);
  //   setmontajInput(input);
  //   setPasswordInput(input);
  // };
  // const onChangeP = (input) => {
  //   setPasswordInput(input);
  // };
  // const handleShift = () => {
  //   const newLayoutName = layout === "default" ? "shift" : "default";
  //   setLayout(newLayoutName);
  // };

  // const onKeyPress = (button) => {
  //   /**
  //    * If you want to handle the shift and caps lock buttons
  //    */
  //   if (button === "{shift}" || button === "{lock}") handleShift();
  // };

  // const onChangeInput = (event) => {
  //   const input = event.target.value;
  //   setusernameInput(input);
  //   setmontajInput(input);

  //   keyboard.current.setusernameInput(input);
  //   keyboard.current.setmontajInput(input);
  // };
  // const onChangePassword = (event) => {
  //   const password = event.target.value;
  //   setPasswordInput(password);
  //   keyboard.current.setPasswordInput(password);
  // };
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
        <Container maxWidth="sm" className="round1">
          <Box textAlign={"center"} component="form">
            Login page <br />
            <Formik
              initialValues={{
                terminalListesi: "",
                sicilNo: "",
                password: "",
                montaj: "",
                date: "",
                vardiya: "",
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
              // onSubmit={(values) => {
              //   console.log(values);
              // }}
              validationSchema={LoginSchema}
            >
              {({ values, isSubmitting }) => (
                <Form className="grid gap-y-3 p-4">
                  <h1 className="text-2xl font-bold mb-3">Giris Yap </h1>
                  <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    label="Terminal listesi"
                    name="terminalListesi"
                    // control ? {key: option.termId, value: option.termName} :
                    options={control ? [ { key: option.termId, value: option.termName} ] :options.map((option) => {
                      return {
                        key: option.termId,
                        value: option.termName,
                      };
                    })}
                  />
                  <br />
                  <Input
                    inputProps={{ min: 0 }}
                    type="number"
                    label="Sicil No"
                    name="sicilNo"
                  />{" "}
                  <br />
                  {/* <Input label="Parola" name="password" type="password" /> <br /> */}
                  <InputPassword name="password" />
                  <Input
                    inputProps={{ min: 0 }}
                    type="number"
                    label="Montaj No"
                    name="montaj"
                  />{" "}
                  <br />
                  <div
                    className="dene"
                    style={{ backgroundColor: values.vardiya }}
                  >
                    <DatePicker name="date" />
                    <div>
                      <Select
                        
                      dropDown={false}
                        className="vardiya"
                        label="Vardiya"
                        name="vardiya"
                        options={vardiya.map((vardiya) => {
                          return {
                            key: vardiya.rgbColor,
                            value: vardiya.shiftCode,
                          };
                        })}
                      />{" "}
                      <br />
                    </div>
                  </div>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    mt={1}
                    mb={2}
                    spacing={2}
                    direction="row"
                  >
                    <Button
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                      className="bg-black h-10 rounded text-sm text-white disabled:opacity-40"
                      startIcon={<LoginIcon />}
                    >
                      Giris yap
                    </Button>
                    <Button
                      type="Logout "
                      variant="contained"
                      color="primary"
                      startIcon={<LogoutIcon />}
                      onClick={navigateToContacts}
                    >
                      Kapat
                    </Button>
                  </Stack>
                  <Keyboard
                    keyboardRef={(r) => (keyboard.current = r)}
                    layoutName={layout}
                    // onChange={onChange}
                    // onKeyPress={onKeyPress}
                  />
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
