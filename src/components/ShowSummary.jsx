import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import '../style.css';

const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState([]);
  const [img, setImg] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setSummary(response.data);
        setImg(response.data.image.medium);
      } catch (error) {
        console.error('Error fetching show summary:', error);
      }
    };

    fetchSummary();
    
  }, [showId]);


  return (
    <div>
        <div className="row">
            <div className="col">
      <h1 style={{ margin: "20px 50px", color:"white" }} >Show Summary</h1>
            </div>
            <div className="col" style={{ justifyContent: "center" }}>
      <Link to="/"><button className='home-btn' >Home</button></Link>
            </div>
        </div>
      <div className="summary-box">
        <h2>{ summary.name }</h2>
        <div className="row">
            <div className="col">
                <img  src={img} alt={summary.name} />
                <button className='book-show' >Book a Movie Ticket</button>
            </div>
            <div className="col movie-summary">
              <div  className="gray" dangerouslySetInnerHTML={{__html: summary.summary}}></div>    
              <p><b>Language: </b><span className="gray">{summary.language}</span></p>
              <p><b>Genre: </b><span className="gray">{summary.genres}</span></p>
              <p><b>Runtime: </b><span className="gray">{summary.runtime}</span></p>
              <p><b>Official Site: </b><span className="gray"><a href={summary.officialSite}>{summary.officialSite}</a></span></p>
              <p><b>Status: </b><span className="gray">{summary.status}</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
