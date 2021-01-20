import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  
  const [ recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);


 

  const getRecipes = async () => {
  //const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=
  ${APP_KEY}`);
  const data =await response.json();
  console.log(data);
  
  // set recipes to data.hits, then all the recipes are in the state
  setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    
    <div className="app">
      <div>
      <h1>Food Recipes Blog!</h1>
      
      <form onSubmit={getSearch} className='search-form'>
        <div>
        <label>Search By Ingredient!</label>
        </div>
        <input 
          className='search-bar' 
          type='text' 
          value={search}
          onChange={updateSearch}></input>
          <div>
            <button className='btn btn-outline-secondary  m-3' type='submit'>submit</button>
          </div>
      </form>

      </div>
        {recipes.map((recipe , index)=> (
          <div key={recipe.recipe.label}>
            <Recipe 
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}/>
          </div>
          ))}

    </div>
  );
}

export default App;
