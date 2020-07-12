import React, { useEffect, useState } from 'react';
import axios from 'axios';


import '../MyMealShop/MyMealShop.css';
import ShoppingBasket from '../../Components/ShoppingBasket/ShoppingBasket';
import SuperMarketTotals from '../../Components/SuperMarketTotals/SuperMarketTotals';
//import Logo from '../../Images/logo5-200x200.png';
//import Image from 'react-bootstrap/Image';
import {
    CardDeck,
    Button,
    Card,
    Form,
    Accordion
} from 'react-bootstrap';



//import { Link } from 'react-router-dom';
const MyMealShop = (props) => {
    
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
    });

    const sorted = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const sortFunction = (a,b) => {
        let day1 = sorted.indexOf(a.recipe_day);
        let day2 = sorted.indexOf(b.recipe_day);
        return day1 < day2 ? -1 : 1;
    }

    


    return (
        <> 
         <div className="main__section__MyMealShop">
                <h1>My Meal Shop</h1>

                <Card className="meals-monday">
                <SuperMarketTotals/>
                    {recipes.map(recipe => 
                        <ShoppingBasket
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

export default MyMealShop;