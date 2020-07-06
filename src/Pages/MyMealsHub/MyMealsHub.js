import React from 'react';
import '../MyMealsHub/MyMealsHub.css';
import UpcomingMealsCard from '../../Components/UpcomingMealsCard/UpcomingMealsCard';
import Logo from '../../Images/logo5-200x200.png';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const MyMealsHub = () => {
    return (
        <>
            <div className="main__section__MyMealsHub container">
                <h1>My Meals Hub</h1>
                <div class="row">
                    <div class="box1 col-6">
                        <UpcomingMealsCard />
                    </div>
                </div>
            </div>
        </>
    )
};

export default MyMealsHub;