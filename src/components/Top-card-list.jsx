import React from 'react';
import Card from './Card';


const cardListaDAata =[
    {
        id: 1,
        username: '@LeonidasEsteban',
        followers: '1596',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
    },
    {
        id: 2,
        username: '@LeonidasEsteban',
        followers: '28k',
        todayFollowers: 15,
        icon: 'images/icon-twitter.svg',
    },
    {
        id: 3,
        username: '@LeonidasEsteban',
        followers: '6k',
        todayFollowers: 35,
        icon: 'images/icon-instagram.svg',
    },
    {
        id: 4,
        username: '@LeonidasEsteban',
        followers: '12k',
        todayFollowers: -78,
        icon: 'images/icon-youtube.svg',
    },

];

const TopCardList = () => (
    <section className="top-cards">
    <div className="wrapper">
      <div className="grid">

        {
            cardListaDAata.map((cardData)=> <Card key={cardData.id} {...cardData}/>)
        }

{/*         <article className="card twitter">
          <p className="card-title">
            <img src="images/icon-twitter.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">28k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article className="card instagram">
          <p className="card-title">
            <img src="images/icon-instagram.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">6k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article className="card youtube">
          <p className="card-title">
            <img src="images/icon-youtube.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">12k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article> */}
      </div>
    </div>
    </section>
);

export default TopCardList;