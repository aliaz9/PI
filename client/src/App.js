import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import RecipeCreator from './Components/RecipeCreator/RecipeCreator';
import LandingPage from './Components/LandingPage/LandingPage'
import RecipeDetail from './Components/Details/Details';
//import RecipeDetail from './Components/Details/Details';
//import LandingPage from '../src/Components/LandingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/create' component={RecipeCreator} />
        <Route path='/details/:id' component={RecipeDetail} />
    </BrowserRouter>
  )
}

export default App;

