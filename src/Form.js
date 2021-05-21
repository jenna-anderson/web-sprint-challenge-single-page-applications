import styled from 'styled-components'

const StyledPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledFormContainer = styled.div`
    width: 50%;
    border: 1px solid #61584b9e;
    padding: .5%;
    h2 {
        text-align: center;
    }
    h3{
        background-color: #c9b69a7d;
        padding: 2%;
    }
`;

const StyledFormHeader = styled.section`
    div{
        background-image: url('https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60');
        background-size: cover;
        height: 20vh;
        background-position: center center;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    #size-dropdown{
        width: 40%;
    }
    #special-text{
        width: 100%;
        line-height: 2;
    }
     button{
         margin: 5%;
         width: 50%;
         padding: 2%;
         border: none;
         font-size: 1.7rem;
         align-self: center;
         background-color: #61584b9e;
         transition: 0.5s
     }
     button:hover{
         transform: scale(1.1);
     }
     button:disabled{
         transform: scale(1);
         background-color: #eeeeee;
     }

`;

export default function Form( { values, change, submit, errors, disabled } ) {
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <StyledPageContainer>
            <StyledFormContainer>
                <StyledFormHeader>
                    <h2>Build Your Own Pizza</h2>
                    <div aria-label='[person putting toppings on a pizza]' role='img'></div>
                </StyledFormHeader>
                <StyledForm id='pizza-form' onSubmit={onSubmit}>
                        <h3>Your Name</h3>
                        <label>
                            <input 
                                type='text'
                                name='customerName'
                                placeholder='your name here'
                                value={values.customerName}
                                onChange={onChange}
                                id='name-input'
                                data-test='customerName'
                            />
                        </label>
                        <div>{errors.customerName}</div>

                        {/*/////// SIZE ///////*/}
                        {/*/////// SIZE ///////*/}
                        {/*/////// SIZE ///////*/}
                        <h3>Choice of Size</h3>
                        <label>
                            <select 
                                id='size-dropdown'
                                onChange={onChange}
                                value={values.size}
                                name='size'>
                                    <option value=''>-- Select Size --</option>
                                    <option value='small'>Small</option>
                                    <option value='medium'>Medium</option>
                                    <option value='large'>Large</option>
                            </select>
                        </label>
                        <div>{errors.size}</div>

                        {/*/////// SAUCES ///////*/}
                        {/*/////// SAUCES ///////*/}
                        {/*/////// SAUCES ///////*/}
                        <h3>Choice of Sauce</h3>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='originalRed'
                                onChange={onChange}
                                checked={values.sauce === 'originalRed'}
                            />
                            &nbsp;Original Red
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='garlicRanch'
                                onChange={onChange}
                                checked={values.sauce === 'garlicRanch'}
                            />
                            &nbsp;Garlic Ranch
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='bbq'
                                onChange={onChange}
                                checked={values.sauce === 'bbq'}
                            />
                            &nbsp;BBQ Sauce
                        </label>
                        <label>
                            <input 
                                type='radio'
                                name='sauce'
                                value='spinachAlfredo'
                                onChange={onChange}
                                checked={values.sauce === 'spinachAlfredo'}
                            />
                            &nbsp;Spinach Alfredo
                        </label>

                        {/*/////// TOPPINGS ///////*/}
                        {/* ///////TOPPINGS ///////*/}
                        {/*/////// TOPPINGS ///////*/}
                        <h3>Add Toppings</h3>
                        <p>Choose up to 5.</p>
                        <label>
                            <input 
                                type='checkbox'
                                name='pepperoni'
                                onChange={onChange}
                                checked={values.pepperoni}
                            />
                            &nbsp;Pepperoni
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='sausage'
                                onChange={onChange}
                                checked={values.sausage}
                            />
                            &nbsp;Sausage
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='onions'
                                onChange={onChange}
                                checked={values.onions}
                            />
                            &nbsp;Onions
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='greenPepper'
                                onChange={onChange}
                                checked={values.greenPepper}
                            />
                            &nbsp;Green Pepper
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='blackOlives'
                                onChange={onChange}
                                checked={values.blackOlives}
                            />
                            &nbsp;Black Olives
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='mushroom'
                                onChange={onChange}
                                checked={values.mushroom}
                            />
                            &nbsp;Mushroom
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='pineapple'
                                onChange={onChange}
                                checked={values.pineapple}
                            />
                            &nbsp;Pineapple
                        </label>
                        <label>
                            <input 
                                type='checkbox'
                                name='artichokeHearts'
                                onChange={onChange}
                                checked={values.artichokeHearts}
                            />
                            &nbsp;Artichoke Hearts
                        </label>

                        {/*////// SPECIAL INSTRUCTIONS //////*/}
                        {/*////// SPECIAL INSTRUCTIONS //////*/}
                        {/*////// SPECIAL INSTRUCTIONS //////*/}
                        <h3>Special Instructions</h3>
                        <label>
                            <input 
                                type='text'
                                placeholder="Anything else you'd like to add?"
                                name='specialInstructions'
                                id='special-text'
                                value={values.specialInstructions}
                                onChange={onChange}
                                data-test='specialInstructions'
                            />
                        </label>

                        {/*///// ADD TO ORDER BUTTON /////*/}
                        {/*///// ADD TO ORDER BUTTON /////*/}
                        {/*///// ADD TO ORDER BUTTON /////*/}
                        <button id='order-button' disabled={disabled}>Add to Order</button>
                </StyledForm>
            </StyledFormContainer>
        </StyledPageContainer>
    )
}