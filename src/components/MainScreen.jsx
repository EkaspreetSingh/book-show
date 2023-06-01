import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const MainScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "20px 50px", color:"white" }} >Show List</h1>
      <div className="grid-container">
        {shows.map((show) => (
            console.log(show),
            <Link to={`/summary/${show.show.id}`}>
                <div key={show.show.id} className='grid-item'>
                    <span id='rating'>⭐{ show.show.rating.average }</span>
                    <img src={show.show.image.medium} alt={show.show.name} />
                    <h2>{show.show.name}</h2>
                    <p>{show.show.premiered}</p>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
