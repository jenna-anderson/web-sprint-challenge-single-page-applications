import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Router } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import axios from 'axios'

const initialOrder = []

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  onions: false,
  greenPepper: false,
  blackOlives: false,
  mushroom: false,
  pineapple: false,
  artichokeHearts: false,
  specialInstructions: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [postError, setPostError] = useState('');

  const update = (name, value) => {
    setFormValues({...formValues, [name]: value})
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrder([res.data, ...order])
    })
    .catch(err => {
      console.log(err)
      setPostError(err)
    })
    .finally(setFormValues(initialFormValues))
  }

  const submit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'onions', 'greenPepper', 'blackOlives', 'mushroom', 'pineapple', 'artichokeHearts'].filter(topping => formValues[topping]),
      specialInstructions: formValues.specialInstructions,
    }
    postNewOrder(newOrder)
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>

      <Route exact path='/' component={Home} />
      <Route exact path='/pizza'>
        <Form values={formValues} update={update} submit={submit}/>
      </Route>

      
    </>
  );
};
export default App;
