import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Router } from 'react-router-dom'
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>

      <Route exact path='/' component={Home} />
      <Route exact path='/pizza'>
        <Form />
      </Route>

      
    </>
  );
};
export default App;
