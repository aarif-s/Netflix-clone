import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiDta] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODFlNzUzYTU2YWQ1ZGY3NjdmOTRjZWRmMTRmNGUzYiIsIm5iZiI6MTcyNzgyMTMzMC45OTkzMjgsInN1YiI6IjY2ZmM3NGM2ZDgwNjQxNjViZGYxYjNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ac0-K3os1nELvglyvIYvD7Ohrss3waa1hpb3srv-kAI'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiDta(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
   
  return (
    <div className='player'>
         <img  src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />   
        <iframe width='90%' height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailor'
        frameBorder='0'
        allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
