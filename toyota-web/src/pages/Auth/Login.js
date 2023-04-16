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
import { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import VirtualKeyboard from "../../components/VirtualKeyboard/VirtualKeyboard";
import "react-simple-keyboard/build/css/index.css";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Login() {
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
  const [term, setTerm] = useState(true);
  const [pasValue, setPasValue]=useState();
  const [numPad, setNumPad]=useState(false);
  const navigateToContacts = () => {
    Logout(`../../`);
  };
  
  const [input, setInput] = useState();
  const keyboard = useRef(null);
  // const onChangeInput = (event) => {
  //   const input = event.target.value;
  //   setInput(input);
  //   keyboard.current.setInput(input);
  // };

  useEffect(() => {
    keyboard?.current.setInput("");
  }, [focus]);
  const parseInputs = (value,setFieldValue,setFieldTouched) => {
    switch (focus) {
      case "sicil":
        setSicil(value);
    setFieldValue("sicilNo", value,true);setTimeout(() => setFieldTouched('sicilNo', true), 1)
        break;
      case "montaj":
        setMontaj(value);
    setFieldValue("montaj", value,true);setTimeout(() => setFieldTouched('montaj', true),1)
        
        break;
        case "pass":
        setPasValue(value);
    setFieldValue("pass", value,true);setTimeout(() => setFieldTouched('pass', true),1)

        break;
        case "body":
          setBody(value);
        break;
    }
  };

  const onChangeInput = (event, length,setFieldValue,setFieldTouched) => {
    if (focus != "pass" && (event == "" || event == "NaN")) {
      if (event == "") {
        parseInputs("");
      }
      return;
    }
    if (!event.target) {
      const t = event;
      console.log({ event, t, length });
      event = { target: {} };
      event.target.value = t;
    }
    console.log(event, "event", focus);
    if(focus!= "pass"){
      event.target.value = Math.max(0, parseInt(event.target.value))
        .toString()
        .slice(0, length);
    }
    const input = event.target.value;
    parseInputs(input,setFieldValue,setFieldTouched);
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
  // console.log(state.filterCode, state.linkCount, state.depCode, state.termName);
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
  console.log(location.state.depCode, location.state.filterCode);

  const { setUser } = useAuth();

  const [pass, setPass] = useState(false);
  const authenticateUser = (sicil, password, montaj, body) => {
    return new Promise((resolve, reject) => {
      // Check if the sicil,montaj and password are correct
      // if (sicil === 99619 && password === "toyota" && montaj === 222) {
      //   // If they are correct, return a success message

      //   resolve("Login successful");
      // }
      
      {
        sicil == "99619" && password === "toyota" && montaj == "222"
          ? resolve("Login successful")
          : sicil == 99619 && password === "toyota" && body == 55555
          ? resolve("Login successful")
          : setPass(true);
        reject("Invalid sicil,montaj or password");
      }
      setSicil("")
              setPasValue("")
              setMontaj("");
              setBody("");
      // else if(sicil === 99619 && password === "toyota" && body === 55555){
      //   resolve("Login successful");
      // }
      // else {
      //   // If they are not correct, return an error message
      //   setPass(true);
      //   reject("Invalid sicil,montaj or password");
    });
  };
  console.log(term);
  return (
    <div>
      <Container maxWidth="sm" className="round1">
        <Stack style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
          CVQS (TMMT)
        </Stack>
        <hr />
        <Box textAlign={"center"} component="form">
          <Formik
          enableReinitialize={true}
            initialValues={{
              terminalListe: "",
              sicilNo: "",
              pass: "",
              montaj: "",
              body: "",
              date: "",
              vardiya: "",
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
            validationSchema={LoginSchema}
            
          >
            {({ submitForm, values, handleSubmit, isSubmitting ,setFieldValue,setFieldTouched}) => (
              <form onSubmit={handleSubmit}>
                <Select
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  label="Terminal listesi"
                  name="terminalListe"
                  // control ? {key: option.termId, value: option.termName} :
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
                <br />
                <Input
                  onFocus={(e) => setFocus("sicil",setNumPad(true))}
                  onChange={(e) => {onChangeInput(e, 5,setFieldValue,setFieldTouched)}}
                  onInput={(e) => onChangeInput(e, 5)}
                  inputProps={{
                    maxLength: 5,
                    pattern: "[0-9]*",
                    min: 1,
                    max: 99999,
                    value: sicil,
                  }}
                  type="number"
                  label="Sicil No"
                  name="sicilNo"
                />{" "}
                <br />
                {/* <Input label="Parola" name="password" type="password" /> <br /> */}
                <InputPassword
                  onFocus={(e) => setFocus("pass",setNumPad(false))}
                  onChange={(e) => onChangeInput(e, 100,setFieldValue,setFieldTouched)}
                  onInput={(e) => onChangeInput(e, 100)}
                  name="pass"
                  inputProps={{
                    value:pasValue,
                  }}
                />{" "}
                {!term && (
                  <Input
                    onFocus={(e) => setFocus("montaj",setNumPad(true))}
                    onChange={(e) => onChangeInput(e, 3,setFieldValue,setFieldTouched)}
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
                    label="Montaj No"
                    name="montaj"
                  />
                )}
                {term && (
                  <Input
                  onFocus={(e) => setFocus("body",setNumPad(true))}
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
                    label="Body No"
                    name="body"
                  />
                )}{" "}
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
                    onClick={e=>{submitForm()}}
                    variant="contained"
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-black h-10 rounded text-sm text-white disabled:opacity-40"
                    startIcon={<LoginIcon />}
                    color="success"
                  >
                    {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
                  </Button>
                  <Button
                    type="logout"
                    variant="contained"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={navigateToContacts}
                  >
                    Kapat
                  </Button>
                </Stack>
                {/* <input
                  value={input}
                  placeholder={"Tap on the virtual keyboard to start"}
                  onChange={(e) => onChangeInput(e)}
                /> */}
                <VirtualKeyboard
                  keyboardRef={keyboard}
                  onChange={(e) => onChangeInput(e, 5,setFieldValue,setFieldTouched)}
                  ip={numPad}
                />
              <pre>{JSON.stringify(values,null, 2)}</pre>
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
