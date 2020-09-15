import React from "react";
import "./style.css";

export default function App() {
  const [dragStyles, setdragStyles] = React.useState({width:'350px', height:'300px', border:'2px solid black', backgroundColor:'#538692'});

  function dragOver (e) {
    e.preventDefault ();
    setdragStyles({width:'350px', height:'300px', border:'2px solid black', backgroundColor:'#F6CFC9'});
  }

  function drop (e) {
    e.dataTransfer.getData ('file');
    setdragStyles({width:'350px', height:'300px', border:'2px solid black', backgroundColor:'#538692'});
  }

  function dragEnter (e) {}

  function dragLeave (e) {}

  return (
    <div 
      onDragOver={dragOver} 
      onDrop={drop} 
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      style={dragStyles}
    >
    <input style={{height:'300px', width:'350px',}} type='file'></input>
    </div>
  );
}

