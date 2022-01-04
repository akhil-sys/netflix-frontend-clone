import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const BASEURL="https://image.tmdb.org/t/p/original/";
export default function Row({title,fetchUrl,isLarge}) {
    const[movies,setMovies]=useState([])
    const[trailerUrl,setTrailerUrl]=useState("")
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
            
        }
        fetchData()
    },[fetchUrl])

    const handleClick=async(movie)=>{
        console.log(movie.name||movie.title)
        await movieTrailer(movie.name||movie.title||"").then(
            (url)=>{const urlParams=new URLSearchParams(new URL(url).search)
                if(urlParams.get('v')===trailerUrl){
                    setTrailerUrl('')
                }else{
                    setTrailerUrl(urlParams.get('v'))
                }}
        ).catch(err=>console.log(err))
    }
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                
            {movies.map((movie)=>(
                
                <img 
                key={movie.id}
                className={`row_poster ${isLarge &&'row_poster_large'}`}
                onClick={()=>handleClick(movie)}
                src={`${BASEURL}${isLarge?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>

            ))}
           
            </div>
            {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
