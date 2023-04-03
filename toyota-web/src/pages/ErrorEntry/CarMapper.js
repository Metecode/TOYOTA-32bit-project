import React, { useState, useEffect, useReducer } from "react";
import ImageMapper from "react-img-mapper";
import "../../fonts/carMapper.css";
import Select from "../../components/form/Select.js";
import axios from "axios";
import { siteReducer } from "../../reducer";
import { useFormik, Formik, Form, useFormikContext } from "formik";

const CarMapper = ({ hide, defects,defectsName }) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);
  const [box, setBox] = useState(null);
  const [carImg, dispatch] = useReducer(siteReducer, {
    image: "./assets/img/car.jpg",
  });
  const [extendedAreas, setExtendedAreas] = useState([]);
  const [data, setData] = useState("defectScreen");
  const [partDefects, setPartDefects] = useState([]);
  const [open, setOpen] = React.useState(true);
  const [show, setShow] = useState(false);
  const [showBox, setShowBox] = useState(true);
  const [controlClick, setControlClick] = useState(true);
  const [controlSelect, setControlSelect] = useState(false);
  const [controlCursor, setControlCursor] = useState(false);
  let active = false;
  const [defect, setDefect] = useState("")
  const handleClose = async () => {
    setOpen(false);
    setControlCursor(true);
    setShowBox(false);
    hide(active);
    defectsName(defect)
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  const getCenterCoords = (box) => {
    return box.map((area) => {
      const n = area.coords.length / 2;
      const { y: scaleY, x: scaleX } = area.coords.reduce(
        ({ y, x }, val, idx) =>
          !(idx % 2) ? { y, x: x + val / n } : { y: y + val / n, x },
        { y: 0, x: 0 }
      );
      return { ...area, center: { x: scaleX, y: scaleY } };
    });
  };

  const dataCoord = async () => {
    await axios
      .get(`../db/${data}.json`)
      .then((res) => {
        let data = res.data.data[0].defectButtonRecords.map((x) => {
          return {
            id: x.buttonId,
            childPicID: x.childPicID,
            title: x.labelText,
            name: x.labelText,
            picId: x.picId,
            childPicID: x.childPicID,
            boxX: x.boxX,
            boxY: x.boxY,
            boxColor: x.boxColor,
            labelColor: x.labelColor,
            boxWidth: x.boxWidth,
            boxHeight: x.boxHeight,
            preFillColor: "rgba(255, 255, 255, 0)",
            lineWidth: 5,
            shape: "rect",
            coords: [x.boxX, x.boxY, x.boxX + x.boxWidth, x.boxY + x.boxHeight],
            strokeColor: x.boxColor,
            color: x.labelColor,
          };
        });
        setBox({ name: "my-map2", areas: data });
        setExtendedAreas(getCenterCoords(data));
        let partDefect = res.data.data[0].partDefects.map((x) => {
          return {
            defectId: x.defectId,
            defectName: x.defectName,
            harigami: x.harigami,
          };
        });
        setPartDefects(partDefect);
      })
      .catch((err) => console.log(err));
    };
    
  const dataDefect = async () => {
    await axios
      .get(`../db/${data}.json`)
      .then((res) => {
        let partDefect = res.data.data[0].partDefects.map((x) => {
          return {
            defectId: x.defectId,
            defectName: x.defectName,
            harigami: x.harigami,
          };
        });
        setPartDefects(partDefect);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dataCoord();
    dataDefect();
  }, [data]);

  const load = (imageRef) => {
    setMsg("Interact with image !");
  };

  const clicked = async (area) => {
    setControlClick(false);
    setData(area.childPicID);
    setDefect(area.name)
    dispatch({ type: "TOGGLE_IMAGE", value: area.childPicID });
    console.log(partDefects);
    setShow(true);
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };
  
  const [style, setStyle] = useState(null);
  const clickedChildPic = async (area, evt) => {
    setControlSelect(true);
    setStyle({ x: 439, y: 243 });
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };
  
  const clickedOutside = async (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
    setStyle({ x: coords.x, y: coords.y });
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  };

  const enterArea = (area) => {
    //hoveredArea: area, ???
    setHoveredArea(area);
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const leaveArea = (area) => {
    // setHoveredArea(null);
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      "You moved on " +
        area.shape +
        " " +
        area.name +
        ' at coords {"x":' +
        coords.x +
        ',"y":' +
        coords.y +
        "} !"
    );
  };const AutoSubmitCode = () => {
    const { values, submitForm } = useFormikContext();
    useEffect(() => {
        submitForm();
    }, [values]);
    return null;
  };
  // const getTipPosition = (area) => {
  //   return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  // };
  
  return (
    <div className="gridd">
      <div className="presenter">
        <div style={{ position: "relative" }}>
          <ImageMapper
            src={carImg.image}
            map={
              showBox && box != null ? box : { name: "undefined", areas: [] }
            }
            width={1000}
            height={600}
            onLoad={() => load()}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={
              controlClick
                ? (area) => clicked(area)
                : (area, _, evt) => clickedChildPic(area, evt)
            }
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
            // lineWidth={4}
            strokeColor={"white"}
          />
          {controlCursor && (
            <img
              src="./assets/img/cursor.gif"
              style={{
                position: "absolute",
                left: style.x,
                top: style.y,
                zIndex: 1,
                height: 50,
                width: 50,
              }}
            />
          )}
          {showBox &&
            extendedAreas.map((area) => (
              <span
                key={area.id}
                className="tooltip"
                style={{
                  position: "absolute",
                  top: area.center.y - 12,
                  left: area.center.x,
                  zIndex: 1000,
                  overflowWrap: "break-word",
                  color: area.color,
                }}
              >
                {area.title}
              </span>
            ))}
          {/* {hoveredArea && (
            <span
              className="tooltip"
              style={{ ...getTipPosition(hoveredArea) }}
            >
              {hoveredArea && hoveredArea.name}
            </span>
          )} */}
        </div>
        {controlSelect && (
          <Formik
            initialValues={{
              defect: "",
            }}
            onSubmit={(value) => {
              defects(value)
            }}
          >
            {({ values }) => (
              <div
                style={{
                  position: "absolute",
                  left: data.boxX,
                  top: data.boxY,
                }}
              >
                {show && (
                  <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    isSubmitting={true}
                    label=""
                    name="defect"
                    options={partDefects.map((option) => {
                      return {
                        key: option.defectName,
                        value: option.defectName,
                      };
                    })}
                  />
                )}   
            <AutoSubmitCode></AutoSubmitCode>
              </div>
              
            )}
            
          </Formik>
        )}
        <pre className="message">{msg ? msg : null}</pre>
        <pre>{moveMsg ? moveMsg : null}</pre>
      </div>
    </div>
  );
  //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
};

export default CarMapper;
