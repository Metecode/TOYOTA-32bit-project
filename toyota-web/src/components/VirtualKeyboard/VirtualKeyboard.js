import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import englishLayout from "simple-keyboard-layouts/build/layouts/english";
import turkish from "simple-keyboard-layouts/build/layouts/turkish";
import japaneseLayout from "simple-keyboard-layouts/build/layouts/japanese";
import russianLayout from "simple-keyboard-layouts/build/layouts/russian";
import czechLayout from "simple-keyboard-layouts/build/layouts/czech";
import frenchLayout from "simple-keyboard-layouts/build/layouts/french";
import "./index.css";

const VirtualKeyboard = ({ ip, onChange, keyboardRef }) => {
  const [layoutName, setLayoutName] = useState("default");
  const [keyboardLayout, setKeyboardLayout] = useState(turkish);
  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };
  const onChangeLanguage = (event) => {
    const language = event.target.value;
    console.log(language);

    switch (language) {
      case "turkish":
        setKeyboardLayout(turkish);
        break;
      case "russianLayout":
        setKeyboardLayout(russianLayout);
        break;
      case "japaneseLayout":
        setKeyboardLayout(japaneseLayout);
        break;
      case "englishLayout":
        setKeyboardLayout(englishLayout);
        break;
      case "czechLayout":
        setKeyboardLayout(czechLayout);
        break;
        case "frenchLayout":
        setKeyboardLayout(frenchLayout);
        break;
    }
  };

  return (
    <div>
      {ip ? (
        <div>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            {...keyboardLayout}
            layoutName={"ip"}
            layout={{
              default: [""],
              ip: ["7 8 9", "4 5 6", "1 2 3", "{bksp} 0"],
            }}
            display={{
              "{bksp}": "del",
              "{enter}": "enter",
            }}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onRender={() => console.log("Rendered")}
          />
        </div>
      ) : (
        <div className="keyboard-select">
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            {...keyboardLayout}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onRender={() => console.log("Rendered")}
          />
          <Select
            onChange={(e) => onChangeLanguage(e)}
            inputProps={
              {defaultValue:"turkish"}
            }
          >
            <MenuItem value={"turkish"}>Turkish</MenuItem>
            <MenuItem value={"russianLayout"}>Russian</MenuItem>
            <MenuItem value={"japaneseLayout"}>Japanese</MenuItem>
            <MenuItem value={"englishLayout"}>English</MenuItem>
            <MenuItem value={"czechLayout"}>Czech</MenuItem>
            <MenuItem value={"frenchLayout"}>French</MenuItem>
          </Select>
        </div>
      )}
    </div>
  );
};

export default VirtualKeyboard;
