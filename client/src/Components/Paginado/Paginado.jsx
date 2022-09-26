import React from "react";

export default function Paginado ({recipesPerPage, recipes, paginado}) { // traigo props de otro componente.
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(recipes/recipesPerPage); i++) {
        pageNumbers.push(i+1);
    }

    return(
        <nav>
            <ul className="paginado">
                {pageNumbers && // ve si pageN tiene algo.
                pageNumbers.map(number => (
                    <li className="number" key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}