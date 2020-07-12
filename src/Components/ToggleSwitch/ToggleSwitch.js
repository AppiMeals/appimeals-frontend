import React from 'react';

import './ToggleSwitch.css';


const ToggleSwitch = (props) => {


    const handleClick = (event) => {
        props.selectDiet(event.target.value);
    }

    return (
        <>
            <fieldset>
                <legend>Filter By Diet</legend>
                <div class="toggle" onChange={handleClick}>
                    <input type="radio" name="diet" eventKey="balanced" value="balanced" id="balanced" />
                    <label for="balanced">Balanced</label>

                    <input type="radio" name="diet" eventKey="high-protein" value="high-protein" id="highProtein" />
                    <label for="highProtein">High-Protein</label>

                    <input type="radio" name="diet" eventKey="high-fiber" value="high-fiber" id="highFiber" />
                    <label for="highFiber">High-Fiber</label>

                    <input type="radio" name="diet" eventKey="low-fat" value="low-fat" id="lowFat" />
                    <label for="lowFat">Low-Fat</label>

                    <input type="radio" name="diet" eventKey="low-carb" value="low-carb" id="lowCarb" />
                    <label for="lowCarb">Low-Carb</label>

                    <input type="radio" name="diet" eventKey="low-sodium" value="low-sodium" id="lowSodium" />
                    <label for="lowSodium">Low-Sodium</label>
                </div>
            </fieldset>
        </>
    )
};

export default ToggleSwitch;
