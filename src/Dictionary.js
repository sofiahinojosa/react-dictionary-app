import React, { useState } from "react";
//import axios from "axios";
import "./Dictionary.css"

export default function Dictionary() {
  let [keyword, setKeyword] =useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} >
        <input placeholder="Enter a word here" type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  )
}