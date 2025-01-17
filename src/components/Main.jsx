import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {

    const [movies, setMovies] = useState([])

    // to pick a random movie each time we reload
    const movie = movies[Math.floor(Math.random() * movies.length)] 

    useEffect(() => {
        axios.get(requests.requestPopular).then((response)=> {
            setMovies(response.data.results)
        })
    },[])
    // console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0,num) + '...';
        } else {
            return str;
        }
    }
 
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
        {/* for the black gradient effect */}
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            {/* ? for reaching nested objects */}
            <img 
                className='w-full h-full object-cover' 
                // ${} is a template literal syntax. It allows you to embed expressions into strings. 
                // When you enclose an expression within ${} inside a string, 
                // the expression gets evaluated, and its result is inserted into the string
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.title}     
            />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div>
                    <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                        Play
                    </button>
                    <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                        Watch Later
                    </button>
                </div>
                <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg-max-w-[50%] xl:max-w[35%] text-gray-200'>
                {truncateString(movie?.overview, 150)}
                </p>
            </div>

        </div>
      
    </div>
  )
}

export default Main
