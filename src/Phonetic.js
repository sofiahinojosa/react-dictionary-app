import React from "react";
import { Brb } from "react-brb";


export default function Phonetic(props) {
  return <div className="Phonetic">
    <a href={props.phonetic.audio} target="_blank" rel="noreferrer">Listen</a>
    <Brb />
    {props.phonetic.text}
  </div>
}