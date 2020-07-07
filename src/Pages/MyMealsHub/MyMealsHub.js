import React from 'react';
import '../MyMealsHub/MyMealsHub.css';
import UpcomingMealsCard from '../../Components/UpComingMealsCard/UpcomingMealsCard';
import BrowseCatagoryCard from '../../Components/BrowseCatagoryCard/BrowseCatagoryCard';
import Logo from '../../Images/logo5-200x200.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const MyMealsHub = () => {
    return (
        <>
            <div className="main__section__MyMealsHub container">
                <h1>My Meals Hub</h1>
            </div>

            <div>
                <h3> My Upcoming Meals</h3>
                <div class="row">
                    <div class="box1 col-12">
                        <UpcomingMealsCard />
                    </div>
                </div>


                <div>
                    <h3>Browse Meals by Catagory</h3>
                    <div class="row">
                        <div class="box1 col-12">
                            <BrowseCatagoryCard/>
                        </div>


                    </div>

                </div>
            </div>
        </>

    )
};

export default MyMealsHub;