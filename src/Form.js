export default function Form( { values, update, submit, errors, disabled } ) {
    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <div>
            <section>
                <h2>Build Your Own Pizza</h2>
                <img
                    src='https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    alt='person adding toppings to pizza'
                    />
            </section>
            <form id='pizza-form' onSubmit={onSubmit}>
                <div>
                    <h2>Build Your Own Pizza</h2>

                    <h3>Your Name</h3>
                    <label>
                        <input 
                            type='text'
                            name='customerName'
                            placeholder='your name here'
                            value={values.customerName}
                            onChange={onChange}
                        />
                    </label>
                    <div>{errors.customerName}</div>

                    {/*/////// SIZE ///////*/}
                    {/*/////// SIZE ///////*/}
                    {/*/////// SIZE ///////*/}
                    <h3>Choice of Size</h3>
                    <select 
                        id='size-dropdown'
                        onChange={onChange}
                        name='size'>
                            <option value=''>-- Select Size --</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                    </select>
                    <div>{errors.size}</div>

                    {/*/////// SAUCES ///////*/}
                    {/*/////// SAUCES ///////*/}
                    {/*/////// SAUCES ///////*/}
                    <h3>Choice of Sauce</h3>
                    <label>Original Red
                        <input 
                            type='radio'
                            name='sauce'
                            value='originalRed'
                            onChange={onChange}
                            checked={values.sauce === 'originalRed'}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type='radio'
                            name='sauce'
                            value='garlicRanch'
                            onChange={onChange}
                            checked={values.sauce === 'garlicRanch'}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type='radio'
                            name='sauce'
                            value='bbq'
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type='radio'
                            name='sauce'
                            value='spinachAlfredo'
                            onChange={onChange}
                            checked={values.sauce === 'spinachAlfredo'}
                        />
                    </label>
                    <div>{errors.sauce}</div>

                    {/*/////// TOPPINGS ///////*/}
                    {/* ///////TOPPINGS ///////*/}
                    {/*/////// TOPPINGS ///////*/}
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10.</p>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            // value='pepperoni'
                            // // onChange={onChange}
                            // // checked={values.pepperoni}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            value='sausage'
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>
                    <label>Onions
                        <input 
                            type='checkbox'
                            name='onions'
                            value='onions'
                            onChange={onChange}
                            checked={values.onions}
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                            type='checkbox'
                            name='greenPepper'
                            value='greenPepper'
                            onChange={onChange}
                            checked={values.greenPepper}
                        />
                    </label>
                    <label>Black Olives
                        <input 
                            type='checkbox'
                            name='blackOlives'
                            value='blackOlives'
                            onChange={onChange}
                            checked={values.blackOlives}
                        />
                    </label>
                    <label>Mushroom
                        <input 
                            type='checkbox'
                            name='mushroom'
                            value='mushroom'
                            onChange={onChange}
                            checked={values.mushroom}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            value='pineapple'
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                            type='checkbox'
                            name='artichokeHearts'
                            value='artichokeHearts'
                            onChange={onChange}
                            checked={values.artichokeHearts}
                        />
                    </label>

                    {/*////// SPECIAL INSTRUCTIONS //////*/}
                    {/*////// SPECIAL INSTRUCTIONS //////*/}
                    {/*////// SPECIAL INSTRUCTIONS //////*/}
                    <label>Special Instructions
                        <input 
                            type='text'
                            placeholder="Anything else you'd like to add?"
                            name='specialInstructions'
                            id='special-text'
                            value={values.specialInstructions}
                            onChange={onChange}
                        />
                    </label>

                    {/*///// ADD TO ORDER BUTTON /////*/}
                    {/*///// ADD TO ORDER BUTTON /////*/}
                    {/*///// ADD TO ORDER BUTTON /////*/}
                    <button id='order-button' disabled={disabled}>Add to Order</button>
                </div>
            </form>
        </div>
    )
}