import './App.css';
import Dictionary from "./Dictionary"
import { Brb } from "react-brb"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>React Dictionary</h1>
      <Dictionary />
      <Brb />
      <small>Coded by <a href="https://www.instagram.com/sofiahinojosadl_/">Sofia Hinojosa</a> and is open-sourced in <a href="https://github.com/sofiahinojosa/react-dictionary-app">GitHub</a></small>
      </div>
    </div>
  );
}

