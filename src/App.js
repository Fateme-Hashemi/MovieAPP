import React from 'react';
import "./App.scss";
import { useState } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//components
import Header from './components/header/Header';
import MovieDetails from "./components/movieDtails/MovieDetails"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/footer/Footer"
import Home from './components/Home/Home';
import {getAllmovies} from "./features/movies/movieSlice"


const App = () => {


    return (
      <div>
        <BrowserRouter>
            <Header />
            <div className='container'>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:imdbID" component={MovieDetails} />
              <Route component={PageNotFound} />
          </Switch>
            </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
};

export default App;