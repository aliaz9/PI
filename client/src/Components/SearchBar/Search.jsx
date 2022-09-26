import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
//import { Link } from 'react-router-dom';
import './Search.css';
import { getRecipesName } from "../../Actions";
import { useState } from "react";


export default function SearchBar() {
const dispatch = useDispatch();
const [name, setName] = useState("");


  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
//    console.log(name) 
  }

  //const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getRecipesName(name));
    console.log(e)
  }

  return (
    <div>
      <input
      type='text'
      placeholder="Buscar..."
      onChange={(e) => handleChange(e)}
      />
      <button type='submit' onClick={(e) => handleSubmit(e)} >Buscar</button>
    
    </div>
  )


  }










// import React from "react";

// export default function Search() {
//     return (
//         <form>
//         <input type="text" placeholder="Search recipe" />
//         <button>Search</button>
//         </form>
//     )
// }


// https://w1.pngwing.com/pngs/872/821/png-transparent-magnifying-glass-icon-magnifier-icon-design-data-black-and-white-circle-symbol.png