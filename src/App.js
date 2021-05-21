import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Router } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Order from './Order'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'
import styled from 'styled-components'
import './App.css'

const StyledContainer = styled.div`

`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1{
    margin: 2%;
  }
  
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 25%;

  a{
    text-decoration: none;
    color: black;
  }
`;

const initialOrder = []

const initialFormValues = {
  customerName: '',
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
  specialInstructions: '',
}

const initialFormErrors = {
  customerName: '',
  size: '',
  sauce: '',
}

const initialDisabled = true;

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [postError, setPostError] = useState('')
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const update = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      console.log(res.data)
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
      customerName: formValues.customerName.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'onions', 'greenPepper', 'blackOlives', 'mushroom', 'pineapple', 'artichokeHearts'].filter(topping => formValues[topping]),
      specialInstructions: formValues.specialInstructions,
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <StyledContainer>
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <StyledNav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </StyledNav>
    </StyledHeader>

      <Route exact path='/' component={Home} />
      <Route exact path='/pizza'>
        <Form values={formValues} update={update} submit={submit} errors={formErrors} disabled={disabled}/>
      </Route>

    
      <Order key={order.id} details={order}/>
    

      
    </StyledContainer>
  );
};
export default App;
