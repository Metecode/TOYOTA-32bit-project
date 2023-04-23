import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
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
        <div>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            {...keyboardLayout}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onRender={() => console.log("Rendered")}
          />
          <select
            defaultValue={keyboardLayout}
            onChange={(e) => onChangeLanguage(e)}
          >
            <option value={"turkish"}>Turkish</option>
            <option value={"russianLayout"}>Russian</option>
            <option value={"japaneseLayout"}>Japanese</option>
            <option value={"englishLayout"}>English</option>
            <option value={"czechLayout"}>Czech</option>
            <option value={"frenchLayout"}>French</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default VirtualKeyboard;
