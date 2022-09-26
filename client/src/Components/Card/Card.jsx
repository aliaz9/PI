import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';


export class RecipeCard extends Component {

    render() {

        return (
            <div>
                <Link to={"/details/"+this.props.id}>
                <h1>{this.props.title}</h1>
                </Link>
                <img src={this.props.image} alt={this.props.title}/>
                <p>Diets: {this.props.diets}</p>
                <p>Health Score: {this.props.healthScore}</p>
                
            </div>
        );
    };
};



export default connect(null, null)(RecipeCard);