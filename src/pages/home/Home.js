import { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import './home.css';
import moment from 'moment'
import axios from "axios";
function Home() {


    useEffect(() => {
      getMovies()
    }, [])

    const getMovies= async () =>{
        let data ={
            "category": "movies",
       "language": "hindi", "genre": "all",
       "sort": "voting"
       }

      const mov =   await axios.post('/movieList' , data)
    setMovies(mov.data.result)

    }

const [movies, setMovies] = useState([{
    "_id": "5ce3cf4075484f14104d7b76",
    "director": [
        ""
    ],
    "writers": [
        ""
    ],
    "stars": [
        ""
    ],
    "releasedDate": 1639078199,
    "productionCompany": [
        ""
    ],
    "title": "",
    "language": "",
    "runTime": null,
    "genre": "",
    "voted": [
        {
            "upVoted": [],
            "downVoted": [],
            "_id": "",
            "updatedAt": 1562825564,
            "genre": ""
        }
    ],
    "pageViews": 618,
    "description": "",
    "poster": "",
    "totalVoted": 0,
    "voting": 0
},])

    return (
        
            <div className="movies-container">
                {movies.map(movie=>{
                    return(
                        <>
                        <hr/>
                        <div className="outer" key={movie._id}>
                        <div className="movie" >
                            <div className="col-1">
                                <h3 className="votes">{movie.voting}</h3>
                                <small>Votes</small>
                            </div>
                            <div className="col-2">
                                <img width="120px" alt="" className="poster" src={movie.poster}></img>
                            </div>
                            <div className="col-3">
                                <h3>{movie.title}</h3>
                                <p>Genre: {movie.genre}</p>
                                <div>Director: {movie.director.map((direct,i)=>{
                                    return(
                                        <span key={i}>{direct}</span>
                                    )
                                })}</div>
                                <p>Starring: {movie.stars.map((star,i)=>{
                                    return(
                                        <span key={i}>{star},</span>
                                    )
                                })}</p>
                                <div className="blackText">
                                    <span className="runtime">{movie.runtime}Mins | </span>
                                    <span className="language">{movie.language} | </span>
                                    <span className="released">{moment(new Date(movie.releasedDate)).format('MMMM Do YYYY, h:mm:ss a')}</span>
                                </div>
                                <div className="blueText">
                                    <span>{movie.pageViews} views | </span>
                                    <span>Voted by {movie.voting} People</span>
                                </div>
                                
                            </div>
                        </div>
                        <button>Watch Trailer</button>
                        </div></>
                    )
                })}
            </div>
       
    )
}

export default Home
