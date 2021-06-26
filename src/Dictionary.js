import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] =useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

   function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = "563492ad6f917000010000016931941ce46e41a2974474b90c94bc76";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios.get(pexelsApiUrl, {
      headers: { Authorization: `Bearer ${pexelsApiKey}` },
    }).then(handlePexelsResponse)
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
      <Photos photos={photos} />
    </div>
  );
}