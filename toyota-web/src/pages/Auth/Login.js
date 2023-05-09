import * as React from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useFormik, Formik, Form, replace } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../validations";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputPassword from "../../components/form/InputPassword";
import Select from "../../components/form/Select";
import "./login.css";
import DatePicker from "../../components/form/DatePicker";
import axios from "axios";
import "react-simple-keyboard/build/css/index.css";
import { useEffect, useState, useRef, useContext } from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import VirtualKeyboard from "../../components/VirtualKeyboard/VirtualKeyboard";
import "react-simple-keyboard/build/css/index.css";
import translate from "../../translation/translate";
import { LoginSchema2 } from "../../validations/LoginSchema2";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Login() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [sicil, setSicil] = useState();
  const [montaj, setMontaj] = useState();
  const [body, setBody] = useState();
  const [focus, setFocus] = useState();
  const [options, setOptions] = useState([]);
  const [vardiya, setVardiya] = useState([]);
  const [option, setOption] = useState([]);
  const [control, setControl] = useState(false);
  const { state } = useLocation();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [numLength, setNumLength] = useState(null);
  const [term, setTerm] = useState(true);
  const [pasValue, setPasValue] = useState();
  const [numPad, setNumPad] = useState(false);
  const navigateToContacts = () => {
    Logout(`../../`);
  };

  const keyboard = useRef(null);

  useEffect(() => {
    keyboard?.current.setInput("");
  }, [focus]);
  const parseInputs = (value, setFieldValue, setFieldTouched) => {
    switch (focus) {
      case "sicil":
        setSicil(value);
        setFieldValue("sicilNo", value, true);
        setTimeout(() => setFieldTouched("sicilNo", true), 1);
        break;
      case "montaj":
        setMontaj(value);
        setFieldValue("montaj", value, true);
        setTimeout(() => setFieldTouched("montaj", true), 1);

        break;
      case "pass":
        setPasValue(value);
        setFieldValue("pass", value, true);
        setTimeout(() => setFieldTouched("pass", true), 1);

        break;
      case "body":
        setBody(value);
        setFieldValue("body", value, true);
        setTimeout(() => setFieldTouched("body", true), 1);

        break;
    }
  };

  const onChangeInput = (event, length, setFieldValue, setFieldTouched) => {
    if (focus != "pass" && (event == "" || event == "NaN")) {
      if (event == "") {
        parseInputs("");
      }
      return;
    }
    if (!event.target) {
      const t = event;
      event = { target: {} };
      event.target.value = t;
    }
    if (focus != "pass") {
      event.target.value = Math.max(0, parseInt(event.target.value))
        .toString()
        .slice(0, length);
    }
    const input = event.target.value;
    parseInputs(input, setFieldValue, setFieldTouched);
    keyboard?.current.setInput(input);
  };

  const goToEntryDefect = (filterCode, depCode) => {
    {
      !term &&
        navigate(`/defectentry/${filterCode}/${depCode}/3070725`, {
          replace: true,
          state: { filterCode, depCode },
        });
    }
    {
      term &&
        navigate(`/errorList/${filterCode}/${depCode}`, {
          replace: true,
          state: { filterCode, depCode },
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPass(false);
  };

  useEffect(() => {
    if (state.filterCode === "HAT") {
      setTerm(false);
    }
  }, []);
  useEffect(() => {
    if (state.linkCount > 1) {
      axios
        .get(`../../../../db/${state.filterCode}.json`)
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

      .get("../../../../db/shifts.json")
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

  const { setUser } = useAuth();

  const [pass, setPass] = useState(false);
  const authenticateUser = (sicil, password, montaj, body) => {
    return new Promise((resolve, reject) => {
      {
        sicil == "99619" && password === "toyota" && montaj == "222"
          ? resolve("Login successful")
          : sicil == 99619 && password === "toyota" && body == 55555
          ? resolve("Login successful")
          : setPass(true);
        reject("Invalid sicil,montaj or password");
      }
      setSicil("");
      setPasValue("");
      setMontaj("");
      setBody("");
    });
  };

  return (
    <div className="login">
      <Container maxWidth="md" className="round1">
        <Stack style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
          CVQS (TMMT)
        </Stack>
        <hr />
        <Box textAlign={"center"} component="form">
          <Formik
            validateOnChange={false}
            enableReinitialize={true}
            initialValues={{
              terminalListe: "",
              sicilNo: "",
              pass: "",
              montaj: "",
              body: "",
              date: { date },
              vardiya: "#12a6eb",
            }}
            onSubmit={(values, actions) => {
              authenticateUser(
                values.sicilNo,
                values.pass,
                values.montaj,
                values.body
              )
                .then(() => {
                  actions.setSubmitting(false);
                  setUser(values);
                  alert(JSON.stringify(values, null, 2));
                  goToEntryDefect(state.depCode, state.filterCode);
                })
                .catch(() => {
                  setTimeout(() => {
                    actions.setSubmitting(false);
                  }, 2000);
                  setTimeout(() => {
                    actions.resetForm();
                  }, 2000);
                });
            }}
            validationSchema={term ? LoginSchema2 : LoginSchema}
          >
            {({
              submitForm,
              touched,
              values,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
              errors,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Select
                value = { values.terminalListe || "" }
                error={errors.terminalListe && touched.terminalListe}
                  open={open}
                  onBlur={handleBlur}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  label={translate("Terminal Listesi")}
                  name="terminalListe"
                  options={
                    control
                      ? [{ key: option.termId, value: option.termName }]
                      : options.map((option) => {
                          return {
                            key: option.termId,
                            value: option.termName,
                          };
                        })
                  }
                />
                {errors.terminalListe &&  (
                  <div className="input-feedback">{errors.terminalListe}</div>
                )}
                <br />
                <Input
                  error={errors.sicilNo && touched.sicilNo}
                  onFocus={(e) =>
                    setFocus("sicil", setNumPad(true), setNumLength(5))
                  }
                  onChange={(e) => {
                    onChangeInput(e, 5, setFieldValue, setFieldTouched);
                  }}
                  onInput={(e) => onChangeInput(e, 5)}
                  onBlur={handleBlur}
                  inputProps={{
                    maxLength: 5,
                    pattern: "[0-9]*",
                    min: 1,
                    max: 99999,
                    value: sicil,
                  }}
                  type="number"
                  label={translate("Sicil No")}
                  name="sicilNo"
                />
                {errors.sicilNo && touched.sicilNo && (
                  <div className="input-feedback">{errors.sicilNo}</div>
                )}
                <br />
                <InputPassword
                  error={errors.pass && touched.pass}
                  onBlur={handleBlur}
                  onFocus={(e) => setFocus("pass", setNumPad(false))}
                  onChange={(e) =>
                    onChangeInput(e, 100, setFieldValue, setFieldTouched)
                  }
                  onInput={(e) => onChangeInput(e, 100)}
                  name="pass"
                  inputProps={{
                    value: pasValue,
                  }}
                />
                {errors.pass && touched.pass && (
                  <div className="input-feedback">{errors.pass}</div>
                )}
                {!term && (
                  <Input
                    error={errors.montaj && touched.montaj}
                    onBlur={handleBlur}
                    onFocus={(e) =>
                      setFocus("montaj", setNumPad(true), setNumLength(3))
                    }
                    onChange={(e) =>
                      onChangeInput(e, 3, setFieldValue, setFieldTouched)
                    }
                    onInput={(e) => onChangeInput(e, 3)}
                    inputProps={{
                      maxLength: 3,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      min: 1,
                      max: 999,
                      value: montaj,
                    }}
                    type="number"
                    label={translate("Montaj No")}
                    name="montaj"
                  />
                )}
                {term && (
                  <Input
                    error={errors.body && touched.body}
                    onFocus={(e) =>
                      setFocus("body", setNumPad(true), setNumLength(5))
                    }
                    onChange={(e) => onChangeInput(e, 5)}
                    onInput={(e) => onChangeInput(e, 5)}
                    inputProps={{
                      maxLength: 5,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      min: 1,
                      max: 99999,
                      value: body,
                    }}
                    type="number"
                    label={translate("Body No")}
                    name="body"
                  />
                )}
                {errors.montaj && touched.montaj && (
                  <div className="input-feedback">{errors.montaj}</div>
                )}
                {errors.body && touched.body && (
                  <div className="input-feedback">{errors.body}</div>
                )}
                <br />
                <div
                  className="dene"
                  style={{ backgroundColor: values.vardiya }}
                >
                  <DatePicker setFieldValue={date} name="date" label={translate("Tarih")} />
                  <br />
                  <Select
                  setFieldValue="#12a6eb"
                    dropDown={false}
                    className="vardiya"
                    label={translate("Vardiya")}
                    name="vardiya"
                    inputProps={{
                      defaultValue: "#12a6eb",
                    }}
                    options={vardiya.map((vardiya) => {
                      return {
                        key: vardiya.rgbColor,
                        value: vardiya.shiftCode,
                      };
                    })}
                  />{" "}
                  <br />
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
                    onClick={(e) => {
                      submitForm();
                    }}
                    variant="contained"
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-black h-10 rounded text-sm text-white disabled:opacity-40"
                    startIcon={<LoginIcon />}
                    color="success"
                  >
                    {isSubmitting
                      ? translate("Giriş yapılıyor...")
                      : translate("Giriş Yap")}
                  </Button>
                  <Button
                    type="logout"
                    variant="contained"
                    disabled={isSubmitting}
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={navigateToContacts}
                  >
                    {translate("Kapat")}
                  </Button>
                </Stack>
                <VirtualKeyboard
                  keyboardRef={keyboard}
                  onChange={(e) =>
                    onChangeInput(e, numLength, setFieldValue, setFieldTouched)
                  }
                  ip={numPad}
                />
                {/* <pre>{JSON.stringify(values,null, 2)}</pre> */}
              </form>
            )}
          </Formik>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={pass}
        autoHideDuration={5000}
        onClose={alertClose}
      >
        <Alert
          onClose={alertClose}
          open={pass}
          severity="error"
          sx={{ width: "100%" }}
        >
          Girdiğiniz bilgiler hatalıdır!
        </Alert>
      </Snackbar>
    </div>
  );
}
