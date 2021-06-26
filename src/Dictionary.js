import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] =useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
      <form onSubmit={search} >
        <input placeholder="Enter a word here" type="search" onChange={handleKeywordChange} />
      </form>
      <small>Coded by <a href="https://www.instagram.com/sofiahinojosadl_/">Sofia Hinojosa</a> and is open-sourced in <a href="https://github.com/sofiahinojosa/react-dictionary-app">GitHub</a></small>
      </section>
      <Results results={results} />
    </div>
  );
}