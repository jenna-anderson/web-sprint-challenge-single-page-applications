import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Form from './Form'
import Order from './Order'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'
import styled from 'styled-components'
import './App.css'

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
}

const initialDisabled = true;
const initialOrder = []

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  // const [postedOrder, setPostedOrder] = useState(initialOrder);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      // setOrder([res.data, ...order])
      setOrder([res.data, ...order])
      console.log(res.data)
      return([res.data.size])
      // const orderReturn = [res.data.customerName, res.data.size, res.data.specialInstructions, res.data.toppings]
      // console.log(orderReturn)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
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
    <div>
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <StyledNav>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Pizza</Link>
      </StyledNav>
    </StyledHeader>

      <Route exact path='/' component={Home} />
      <Route exact path='/pizza'>
        <Form values={formValues} change={inputChange} submit={submit} errors={formErrors} disabled={disabled}/>
        {order.map(order => {
        return(
          <Order key={order.id} details={order}/>
        )
      })}
      </Route>

    </div>
  );
};
export default App;
