import React, {useState, useEffect} from 'react';
import '../MyMealsHub/MyMealsHub.css';
import UpcomingMealsCard from '../../Components/UpComingMealsCard/UpcomingMealsCard';
import BrowseCatagoryCard from '../../Components/BrowseCatagoryCard/BrowseCatagoryCard';
import Logo from '../../Images/logo5-200x200.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import axios from 'axios';


const MyMealsHub = (props) => {
   const [recipes, setRecipes] = useState([]);
    // const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    //Use Effect should update the with the 

    useEffect(() => {
        //GET RECIPES
        axios
        .get(`https://api.edamam.com/search?q=chicken&app_id=7accd594&app_key=2195a4b3a84812fdec32734983392e27&from=0&to=12&calories=591-1000`)
        .then(

            response => {
                setRecipes(response.data.hits)
            }
        )
        .catch(
            (error) => {
                console.log('Error fetching data', error)
            }
        )
}, [query]);

  

    
    // //Update the string in the search bar onChange
    // const updateSearch = e => {
    //     setSearch(e.target.value);
    // }

    // //Get the value of the search bar and pass it to the query
    // const getSearch = e => {
    //     e.preventDefault();
    //     setQuery(search);
    //     setSearch('');
    // }

    //Add Recipe to Fav's
    const addRecipe = (id) => {
        //Create recipe object
        const newRecipe = {
            "recipe_id": id,
            "user_dbid": 2,
            "favourite": 1,
            "day": "Null"
        }

        console.log("I am here");

    //     axios
    //         .post('https://xzg3a8az08.execute-api.eu-west-2.amazonaws.com/dev/browse-recipes', newRecipe)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log("Error adding a task", error);
    //         });
    
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
                                {recipes.map(recipe => (
                                    <UpcomingMealsCard
                                    key={recipe.recipe.uri}
                                    id={recipe.recipe.uri}
                                    title={recipe.recipe.label}
        
                                    image = {recipe.recipe.image} />
                                    ))}
                                
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