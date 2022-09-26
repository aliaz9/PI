import React from "react";
import './Nav.css';
import SearchBar from '../SearchBar/Search'

export default function Nav() {
return (

<div className="navbar">

<img className="logo" src="https://cdn.mos.cms.futurecdn.net/m6txc3A6HUa22VqX5QGALc.jpg" alt="logo" />
<SearchBar />
<button className="button">CREATE NEW</button>

</div>

)
}