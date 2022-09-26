import React from "react";
import { Link } from 'react-router-dom'
import './LandingPage.css';


export default function LandingPage() {
return (

<div className="landing">

<h1>Bienvenido a la app de Recetas</h1>

<Link to='/home'>
<button className="button">ENTER</button>
</Link>

</div>

)
}