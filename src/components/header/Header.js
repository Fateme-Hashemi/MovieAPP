import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from "../../img/user.png"
import "./Header.scss"
import { useDispatch } from 'react-redux';
import { fetchAsyncShows, fetchAsyncMovies } from '../../features/movies/movieSlice';

const Header = () => {

    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [selectedAscending, setSelectedAscending] = useState(null);
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
 
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    }



    return (
        <div>
           <div className='header'>
                <Link to="/">
                <div className='logo'>Movie APP  </div>
                </Link>
                
                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input type='text' value={term} placeholder='search movies or shows' onChange={(e) => setTerm(e.target.value)} />
                        <button type='submit'><i className='fa fa-search'></i></button>
                    </form>
                </div>


                    <div className='user-img'>
                        <img src={user}  alt='user'/>
                        
                    </div>
              
           </div>
        </div>
    );
};

export default Header;