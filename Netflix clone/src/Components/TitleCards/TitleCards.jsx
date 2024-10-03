import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title , category}) => {

  const  [apiDta,setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODFlNzUzYTU2YWQ1ZGY3NjdmOTRjZWRmMTRmNGUzYiIsIm5iZiI6MTcyNzgyMTMzMC45OTkzMjgsInN1YiI6IjY2ZmM3NGM2ZDgwNjQxNjViZGYxYjNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ac0-K3os1nELvglyvIYvD7Ohrss3waa1hpb3srv-kAI'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])
  
  

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list">
          {
            apiDta.map((card,index)=>{
                return (
                  <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={` https://image.tmdb.org/t/p/w500/`+ card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                  </Link>
                )
            })
          }
        </div>
    </div>
  )
}

export default TitleCards
