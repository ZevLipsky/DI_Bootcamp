// In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.


import React from 'react';

function UserFavoriteColors (props) {

        const listOfAnimals = props.fav_animals.map((animal) => <li key={animal}>{animal}</li>);
        return (
        <div>
            <h2>User favorite animals are:</h2>
            <ul>{listOfAnimals}</ul>
        </div>);

}


export default UserFavoriteColors;