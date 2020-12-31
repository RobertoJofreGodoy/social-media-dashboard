import React from 'react';
import '../assets/styles/Card.css';


const Card = ({username, icon, followers, todayFollowers}) => {

    return(
    <article className="card facebook">
        <p className="card-title">
            <img src={icon} alt=""/>
            {username}
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            {{todayFollowers} >= 0
                ? <img src="images/icon-up.svg" alt=""/>
                : <img src="images/icon-down.svg" alt=""/>
            }
            {todayFollowers} Today
        </p>
    </article>
);
}
export default Card;