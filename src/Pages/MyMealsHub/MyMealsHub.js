import React, {useState, useEffect} from 'react';
import axios from 'axios';

import UpcomingMealsCard from '../../Components/UpComingMealsCard/UpcomingMealsCard';
import BrowseCatagoryCard from '../../Components/BrowseCatagoryCard/BrowseCatagoryCard';

import {CardGroup} from 'react-bootstrap';
import '../MyMealsHub/MyMealsHub.css';

const MyMealsHub = (props) => {

   const [recipes, setRecipes] = useState([]);

     useEffect(() => {
         //GET RECIPES
         axios
             .get(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealsHub`)
             .then(response => {
                 console.log(response.data.recipesData)
                 setRecipes(response.data.recipesData.sort(sortFunction))
             })
             .catch(
                 (error) => {
                     console.log('Error fetching data', error)
                 })
     }, [recipes]);
 
     const deleteRecipe = (id) => {
         axios
             .delete(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealsHub/${id}`)
             .then(response => {
                 console.log(response)
                 const updatedRecipeList = recipes.filter(recipe => recipe.myMeals_dbid !== id);
                 setRecipes(updatedRecipeList);
             })
             .catch((error) => {
                 console.log(error.response)
             })
     }
 
     const sorted = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
 
     const sortFunction = (a,b) => {
         let day1 = sorted.indexOf(a.recipe_day);
         let day2 = sorted.indexOf(b.recipe_day);
         return day1 < day2 ? -1 : 1;
     }


    return (
        <>
            <div className="MainSectionMyMealsHubContainer">
                <h1>My Meals Hub</h1>

                <div>
                    <div>
                        <h3> My Upcoming Meals</h3>
                        <div className="row">
                            <div className="box1 col-12">
                                <CardGroup className="card-group">
                                {recipes.map(recipe => (
                                    <UpcomingMealsCard
                                    key={recipe.myMeals_dbid}
                                    id={recipe.myMeals_dbid}
                                    title={recipe.recipe_title}
                                    image = {recipe.recipe_image}
                                    day={recipe.recipe_day}
                                    url={recipe.recipe_url}
                                    deleteRecipe={deleteRecipe} />
                                    ))}
                                </CardGroup>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div>
                            <h3>Browse Meals by Catagory</h3>
                            <div className="row">
                                <div className="box1 col-12">
                                    <BrowseCatagoryCard />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
};

export default MyMealsHub;