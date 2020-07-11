import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../MyMealChoices/MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';
import TotalPrice from '../../Components/TotalPrice/TotalPrice';
import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';


import {
    CardDeck,
    Button,
    Card,
    Form,
    Accordion
} from 'react-bootstrap';



const MyMealChoices = (props) => {
    const [recipes, setRecipes] = useState([]);



    useEffect(() => {
        //GET RECIPES
        axios
            .get(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealChoices`)
            .then(response => {
                console.log(response.data.recipesData)
                setRecipes(response.data.recipesData)
            })
            .catch(
                (error) => {
                    console.log('Error fetching data', error)
                })
    }, []);

    // const sort = {
    //     "monday": 1,
    //     "tuesday": 2,
    //     "wednesday": 3,
    //     "thursday": 4,
    //     "friday": 5,
    //     "saturday": 6,
    //     "sunday": 7
    //   }

    //   let daySorted = () => {props.day.sort(function sortByDay(a,b){
    //       let day1=a.day.toLowerCase();
    //       let day2 = b.day.toLowerCase();
    //       return sort[day1] - sort[day2];
    //   })
    // }
    const deleteRecipe = (id) => {
        axios
            .delete(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealChoices/${id}`)
            .then(response => {
                console.log(id)
                const updatedRecipeList = recipes.filter(recipe => recipe.recipe_uri !== id);
                setRecipes(updatedRecipeList);
            })
            .catch((error) => {
                console.log('Error adding a task', error)
            })
    }





    return (
        <>
            <div className="main__section__MyMealChoices ">
                <h1>My Meal Choices</h1>

                <Card className="meals-monday">
                    {recipes.map(recipe => recipe.recipe_day === "Monday" ?
                        <MealChoices
                            key={recipe.recipe_uri}
                            id={recipe.recipe_uri}
                            day={recipe.recipe_day}
                            title={recipe.recipe_title}
                            image={recipe.recipe_image}
                            calories={recipe.recipe_calories}
                            servings={recipe.recipe_yield}
                            cookingTime={recipe.recipe_totalTime}
                            diet={recipe.recipe_dietLabels}
                            url={recipe.recipe_url}
                            ingredients={JSON.parse(recipe.recipe_ingredients)}
                            nutrients={JSON.parse(recipe.recipe_nutrients)}
                            deleteRecipe={deleteRecipe}
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Tuesday">
                    {recipes.map(recipe => recipe.recipe_day === "Tuesday" ?
                        <MealChoices
                            key={recipe.recipe_uri}
                            id={recipe.recipe_uri}
                            day={recipe.recipe_day}
                            title={recipe.recipe_title}
                            image={recipe.recipe_image}
                            calories={recipe.recipe_calories}
                            servings={recipe.recipe_yield}
                            cookingTime={recipe.recipe_totalTime}
                            diet={recipe.recipe_dietLabels}
                            url={recipe.recipe_url}
                            ingredients={JSON.parse(recipe.recipe_ingredients)}
                            nutrients={JSON.parse(recipe.recipe_nutrients)}
                            deleteRecipe={deleteRecipe}
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Wednesday">
                    {recipes.map(recipe => recipe.recipe_day === "Wednesday" ?
                        <MealChoices
                            key={recipe.recipe_uri}
                            id={recipe.recipe_uri}
                            day={recipe.recipe_day}
                            title={recipe.recipe_title}
                            image={recipe.recipe_image}
                            calories={recipe.recipe_calories}
                            servings={recipe.recipe_yield}
                            cookingTime={recipe.recipe_totalTime}
                            diet={recipe.recipe_dietLabels}
                            url={recipe.recipe_url}
                            ingredients={JSON.parse(recipe.recipe_ingredients)}
                            nutrients={JSON.parse(recipe.recipe_nutrients)}
                            deleteRecipe={deleteRecipe}
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Thursday">
                        {recipes.map(recipe => recipe.recipe_day === "Thursday" ?
                            <MealChoices
                                key={recipe.recipe_uri}
                                id={recipe.recipe_uri}
                                day={recipe.recipe_day}
                                title={recipe.recipe_title}
                                image={recipe.recipe_image}
                                calories={recipe.recipe_calories}
                                servings={recipe.recipe_yield}
                                cookingTime={recipe.recipe_totalTime}
                                diet={recipe.recipe_dietLabels}
                                url={recipe.recipe_url}
                                ingredients={JSON.parse(recipe.recipe_ingredients)}
                                nutrients={JSON.parse(recipe.recipe_nutrients)}
                                deleteRecipe={deleteRecipe}
                            /> : ""
                        )}
                </Card>

                <Card className="meals-Friday">
                        {recipes.map(recipe => recipe.recipe_day === "Friday" ?
                            <MealChoices
                                key={recipe.recipe_uri}
                                id={recipe.recipe_uri}
                                day={recipe.recipe_day}
                                title={recipe.recipe_title}
                                image={recipe.recipe_image}
                                calories={recipe.recipe_calories}
                                servings={recipe.recipe_yield}
                                cookingTime={recipe.recipe_totalTime}
                                diet={recipe.recipe_dietLabels}
                                url={recipe.recipe_url}
                                ingredients={JSON.parse(recipe.recipe_ingredients)}
                                nutrients={JSON.parse(recipe.recipe_nutrients)}
                                deleteRecipe={deleteRecipe}
                            /> : ""
                        )}
                </Card>
                
                <Card className="meals-Saturday">
                        {recipes.map(recipe => recipe.recipe_day === "Saturday" ?
                            <MealChoices
                                key={recipe.recipe_uri}
                                id={recipe.recipe_uri}
                                day={recipe.recipe_day}
                                title={recipe.recipe_title}
                                image={recipe.recipe_image}
                                calories={recipe.recipe_calories}
                                servings={recipe.recipe_yield}
                                cookingTime={recipe.recipe_totalTime}
                                diet={recipe.recipe_dietLabels}
                                url={recipe.recipe_url}
                                ingredients={JSON.parse(recipe.recipe_ingredients)}
                                nutrients={JSON.parse(recipe.recipe_nutrients)}
                                deleteRecipe={deleteRecipe}
                            /> : ""
                        )}
                </Card>

                <Card className="meals-Sunday">
                        {recipes.map(recipe => recipe.recipe_day === "Sunday" ?
                            <MealChoices
                                key={recipe.recipe_uri}
                                id={recipe.recipe_uri}
                                day={recipe.recipe_day}
                                title={recipe.recipe_title}
                                image={recipe.recipe_image}
                                calories={recipe.recipe_calories}
                                servings={recipe.recipe_yield}
                                cookingTime={recipe.recipe_totalTime}
                                diet={recipe.recipe_dietLabels}
                                url={recipe.recipe_url}
                                ingredients={JSON.parse(recipe.recipe_ingredients)}
                                nutrients={JSON.parse(recipe.recipe_nutrients)}
                                deleteRecipe={deleteRecipe}
                            /> : ""
                        )}
                </Card>
            </div>
        </>
    )
};

export default MyMealChoices;