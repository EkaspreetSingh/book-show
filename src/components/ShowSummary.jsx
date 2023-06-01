import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching show summary:', error);
      }
    };

    fetchSummary();
  }, [showId]);

  console.log(summary);

  return (
    <div>
        <div className="row">
            <div className="col">
      <h1 style={{ margin: "20px 50px", color:"white" }} >Show Summary</h1>
            </div>
            <div className="col" style={{ justifyContent: "center" }}>
      <Link to="/"><button>Home</button></Link>
            </div>
        </div>
      <div className="summary-box">
        <h2>{ summary.name }</h2>
        {/* <img  src={summary.image.medium} alt={summary.name} />
        <p id="summary" ></p>
        <div style={{display:"none"}}>
            {document.getElementById("summary").innerHTML = summary.summary}
        </div> */}
        {/* <div className="row">
            <div className="col"> */}
                {/* <span id='rating'>⭐{ summary.rating.average }</span>
                <img src={summary.image.medium} alt={summary.name} /> */}
            {/* </div> */}
            {/* <div className="col"> */}
                 {/* <p className="summary" ></p>
                <div style={{display:"none"}}>
                    {document.getElementsByClassName("summary")[0].innerHTML = summary.summary}
                </div> */}
            {/* </div> */}
        {/* </div> */}
            <p>{summary.summary}</p>
            <p><b>Language: </b>{summary.language}</p>
            <p><b>Genre: </b>{summary.genres}</p>
            <p><b>Runtime: </b>{summary.runtime}</p>
            <p><b>Official Site: </b><a href={summary.officialSite}>{summary.officialSite}</a></p>
            <p><b>Status: </b>{summary.status}</p>

        <button>Book a Movie Ticket</button>
      </div>
    </div>
  );
};

export default ShowSummary;
