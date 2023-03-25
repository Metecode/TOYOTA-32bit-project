import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useField, ErrorMessage } from "formik";
import { useEffect, useState, useRef } from "react";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./form.css";
export default function Input({
  label,
  options,
  dropDown = true,
  original = false,
  ...props
}) {
  const [field, meta, helpers] = useField(props);
  const [menuItems, setMenuItems] = useState([]);
  const [index, setIndex] = useState(0);
  const selectRef = useRef(null);
  const changeHandle = (e) => {
    let selected = options.find((option) => option.key === +e.target.value);
    helpers.setValue(original ? selected : e.target.value);
  };

  setTimeout(()=>{
    if(menuItems.length==0){

      setMenuItems(options.slice(index, index + 10));
      selectRef.current.focus();
    }
  },100)
  const scrollToUp = () => {
    if (index == 0) {
      return;
    }
    setIndex(index - 1);
  };
  const scrollToDown = () => {
    if (index == options.length - 10) {
      return;
    }
    setIndex(index + 1);

    console.log({ s: selectRef.current });
    // selectRef.current.scrollTop += 50
    selectRef.current.scrollTo(0, 100);
  };
  useEffect(() => {
    setMenuItems(options.slice(index, index + 10));
  }, [index]);
  
  return (
    <label className="block w-full">
      <FormControl required sx={{ m: 1, minWidth: 400 }}>
        <InputLabel size="small" id="demo-simple-select-required-label">
          {label}
        </InputLabel>
        <Select
        
          ref={selectRef}
          id="demo-simple-select-error"
          size="small"
          label={label}
          style={{display:"block", float: "left"}}
          // value={menuItems[0].value}
          // defaultValue={menuItems[0] ? menuItems[0].value : 'seciniz'}
          {...props}
          onChange={changeHandle}
        >
          
          <FormControl style={{float:"right"}} >
          {dropDown && <Button  size="large" onClick={scrollToUp}><ArrowDropUpIcon/></Button>}
          {dropDown && <Button size="large" onClick={scrollToDown}> <ArrowDropDownIcon/> </Button>}
      </FormControl>
         
          {menuItems.map((option, key) => (
            <MenuItem value={option.key} key={key}>
              {option.value}
            </MenuItem>
          ))}
          
        </Select>
        
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      {/* <select  className="w-full  border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props}>
                
            </select> */}
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
      {/* <button onClick={() => handleScroll(-10)}>Up</button>
        <button onClick={() => handleScroll(10)}>Up</button> */}
    </label>
  );
}
