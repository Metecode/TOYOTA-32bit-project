import * as React from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useFormik, Formik, Form, replace } from "formik";
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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Login() {
  const [options, setOptions] = useState([]);
  const [vardiya, setVardiya] = useState([]);
  const [option, setOption] = useState([]);
  const [control, setControl] = useState(false);
  const { state } = useLocation();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [term , setTerm] = useState(true)
  const navigateToContacts = () => {
    Logout(`../../`);
  };

  const goToEntryDefect = (filterCode, depCode) => {
   {!term && navigate(
      `/defectentry/${filterCode}/${depCode}/3070725`, 
      {replace:true, state: { filterCode, depCode } } 
    );}
    {term && navigate(
      `/errorList/${filterCode}/${depCode}`,
      {replace:true, state: { filterCode, depCode } }
    );}
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
  useEffect(()=>{
    if(state.filterCode === "HAT"){
      setTerm(false)
    }
  },[])
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
  const [pass, setPass] = useState(false);
  const authenticateUser = (sicil, password, montaj,body) => {
    return new Promise((resolve, reject) => {
      // Check if the sicil,montaj and password are correct
      // if (sicil === 99619 && password === "toyota" && montaj === 222) {
      //   // If they are correct, return a success message

      //   resolve("Login successful");
      // } 

      {sicil === 99619 && password === "toyota" && montaj === 222 ? resolve("Login successful") :
      sicil === 99619 && password === "toyota" && body === 55555 ? resolve("Login successful") :setPass(true)
      reject("Invalid sicil,montaj or password");}
      // else if(sicil === 99619 && password === "toyota" && body === 55555){
      //   resolve("Login successful");
      // }
      // else {
      //   // If they are not correct, return an error message
      //   setPass(true);
      //   reject("Invalid sicil,montaj or password");
      
    });
  };
  console.log(term)
  return (
    <div>
      <Container maxWidth="sm" className="round1">
        <Stack style={{textAlign:"center",fontSize:"20px",color:'red'}}>CVQS (TMMT)</Stack>
          
          <hr />
        <Box textAlign={"center"} component="form">
          <Formik
            initialValues={{
              terminalListe: "",
              sicilNo: "",
              pass: "",
              montaj: "",
              body:"",
              date: "",
              vardiya: "",
            }}
            onSubmit={(values, actions) => {
              //   actions.setSubmitting(false);
              //     actions.resetForm();
              console.log(values);
              authenticateUser(values.sicilNo, values.pass, values.montaj,values.body)
                .then(() => {
                  actions.setSubmitting(false);
                  setUser(values);
                  alert(JSON.stringify(values, null, 2));
                  goToEntryDefect(state.depCode, state.filterCode);
                })
                .catch(() => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                });
            }}
            validationSchema={LoginSchema}
          >
            {({
              submitForm,
              values,
              handleSubmit,
              isSubmitting,
            }) => (
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
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 5);
                  }}
                  inputProps={{
                    maxLength: 5,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    min: 1,
                    max: 99999,
                  }}
                  type="number"
                  label="Sicil No"
                  name="sicilNo"
                />{" "}
                <br />
                {/* <Input label="Parola" name="password" type="password" /> <br /> */}
                <InputPassword name="pass" />{" "}
               {!term && <Input
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 3);
                  }}
                  inputProps={{
                    maxLength: 3,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    min: 1,
                    max: 999,
                  }}
                  type="number"
                  label="Montaj No"
                  name="montaj"
                />}
                {term && <Input
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 5);
                  }}
                  inputProps={{
                    maxLength: 5,
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    min: 1,
                    max: 99999,
                  }}
                  type="number"
                  label="Body No"
                  name="body"
                />}
                {" "}
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
                    onClick={submitForm}
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
                <Keyboard
                    keyboardRef={(r) => (keyboard.current = r)}
                    layoutName={layout}
                    // onChange={onChange}
                    // onKeyPress={onKeyPress}
                  />
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
