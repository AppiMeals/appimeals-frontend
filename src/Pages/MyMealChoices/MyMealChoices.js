import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../MyMealChoices/MyMealChoices.css';
import MealChoices from '../../Components/MealChoices/MealChoices';
//import TotalPrice from '../../Components/TotalPrice/TotalPrice';
//import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';
import { Card ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MyMealChoices = (props) => {
    
    const [recipes, setRecipes] = useState([]);
    let sortedRecipes = [];

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

    const deleteRecipe = (id) => {
        axios
            .delete(`https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/MyMealChoices/${id}`)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error.response)
            })

            const updatedRecipeList = recipes.filter(recipe => recipe.myMeals_dbid !== id);
            setRecipes(updatedRecipeList);
    }

    const sorted = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const sortFunction = (a,b) => {
        let day1 = sorted.indexOf(a.recipe_day);
        let day2 = sorted.indexOf(b.recipe_day);
        return day1 < day2 ? -1 : 1;
    }
    
    // Sorting the recipes and saving them in new variable 
    sortedRecipes = recipes.sort(sortFunction);

    return (
        <>
            <div className="main__section__MyMealChoices">
                <h1>My Meal Choices</h1>
               
              

                <Card className="meals-Card">
                <Link to={"/MyMealShop"}> <Button className = "MyMealShopButton"> My Meal Shop</Button></Link>
                    {sortedRecipes.map(recipe => 
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
            </div>
        </>
    )
};

export default MyMealChoices;
