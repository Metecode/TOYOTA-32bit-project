import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import "../../fonts/carMapper.css"

//ES6 way
const CarMapper = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  let MAP2 = {
    name: "my-map",
    areas: [
      { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
      { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
      { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
      { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
      { name: "5", shape: "circle", coords: [170, 100, 25 ] },
    ]
  };

  let MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "#0000ff"
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink",
        lineWidth: 10,
        strokeColor: "#0000ff"
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        preFillColor: "yellow", // this is mandatory for stroke color to work
        lineWidth: 10,
        strokeColor: "#6afd09"
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red"
      },
      {
        name: "5",
        shape: "circle",
        coords: [170, 100, 25],
        preFillColor: "rgb(255,255,255,0.3)",
        lineWidth: 2
      },
      {
        name: "6",
        shape: "rect",
        coords: [270, 100, 200, 50],
        lineWidth: 2,
        preFillColor: "rgba(255, 255, 255, 0.3)",
        strokeColor: "#6afd09"
      }
    ]
  };

  var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";

  const load = () => {
    setMsg("Interact with image !");
  };

  const clicked = (area) => {
    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
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
    setHoveredArea(null);
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      'You moved on ' +
        area.shape +
        ' ' +
        area.name +
        ' at coords {"x":'+
        coords.x +
        ',"y":' +
        coords.y + '} !'
    );
  };

  const getTipPosition = (area) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  return (
    <div className="grid">
      <div className="presenter"> 
        <div style={{ position: "relative" }}>
          <ImageMapper
            src={URL}
            map={MAP2}
            width={500}
            onLoad={() => load()}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
            lineWidth={4}
            strokeColor={"white"}
          />

          {hoveredArea && (
            <span 
            className="tooltip"
            style={{ ...getTipPosition(hoveredArea) }}>
              {hoveredArea && hoveredArea.name}
            </span>
          )}
        </div>

        <pre className="message">{msg ? msg : null}</pre>
        <pre>{moveMsg ? moveMsg : null}</pre>
      </div>
    </div>
  );
  //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
};

export default CarMapper;
