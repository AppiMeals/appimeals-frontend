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
                setRecipes(response.data.recipesData.sort(sortFunction))
            })
            .catch(
                (error) => {
                    console.log('Error fetching data', error)
                })
    }, []);

    const deleteRecipe = (id) => {
        axios
            .delete(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealChoices/${id}`)
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
            <div className="main__section__MyMealChoices ">
                <h1>My Meal Choices</h1>

                <Card className="meals-monday">
                    {recipes.map(recipe => 
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        />
                    )}
                </Card>

                {/* <Card className="meals-Tuesday">
                    {recipes.map(recipe => recipe.recipe_day === "Tuesday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Wednesday">
                    {recipes.map(recipe => recipe.recipe_day === "Wednesday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Thursday">
                    {recipes.map(recipe => recipe.recipe_day === "Thursday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Friday">
                    {recipes.map(recipe => recipe.recipe_day === "Friday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Saturday">
                    {recipes.map(recipe => recipe.recipe_day === "Saturday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
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
                        /> : ""
                    )}
                </Card>

                <Card className="meals-Sunday">
                    {recipes.map(recipe => recipe.recipe_day === "Sunday" ?
                        <MealChoices
                            deleteRecipe={deleteRecipe}
                            key={recipe.myMeals_dbid}
                            id={recipe.myMeals_dbid}
                            title={recipe.recipe_title}
                            image={recipe.recipe_image}
                            calories={recipe.recipe_calories}
                            servings={recipe.recipe_yield}
                            cookingTime={recipe.recipe_totalTime}
                            diet={recipe.recipe_dietLabels}
                            url={recipe.recipe_url}
                            ingredients={JSON.parse(recipe.recipe_ingredients)}
                            nutrients={JSON.parse(recipe.recipe_nutrients)}
                        /> : ""
                    )}
                </Card> */}

            </div>
        </>
    )
};

export default MyMealChoices;