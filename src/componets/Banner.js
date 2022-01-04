import axios from '../axios';
import React, { useEffect, useState } from 'react'
import request from '../request';
import './banner.css'
export default function Banner() {
    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res=await axios.get(request.fetchNetflixOriginals)
            console.log(res)
            setMovie(res.data.results[
                Math.floor(Math.random()*res.data.results.length)
            ])
            return res
        }
        fetchData();
    },[])


    const truncate=(str,n)=>{
        return str?.length>n?str.substring(0,n-1)+'...':str;
    }
    return (
        <header className='banner'
        style={{backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}  >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title ||movie?.name||movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
            </div>
<div className='banner--fadeBottom'></div>
        </header>
    )
}
