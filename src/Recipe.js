import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div  className="recipe">
            <h2>{title}</h2>
            <img className="img" src={image} alt=""></img>
            <ul>
            <h3>Ingredients: </h3>
                {ingredients.map(ingredient => {
                    return (
                       
                    <li key={ingredient.id}>{ingredient.text}</li>
                   
                )})}
            </ul>
            <p><strong>Calories: </strong> {calories.toFixed(2)}  kcal</p>

        </div>
    )
}

export default Recipe;