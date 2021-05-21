export default function Form() {
    return(
        <div>
            <section>
                <h2>Build Your Own Pizza</h2>
                <img
                    src='https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    alt='person adding toppings to pizza'
                    />
            </section>
            <form>
                <div>
                    <h2>Build Your Own Pizza</h2>
                    <select>Choice of Size
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <p>Choice of Sauce</p>
                    <label>Original Red
                        <input 
                            type='radio'
                            name='sauce'
                            value='originalRed'
                            // onChange={onChange}
                            // checked={values.sauce === 'originalRed'}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type='radio'
                            name='sauce'
                            value='garlicRanch'
                            // onChange={onChange}
                            // checked={values.sauce === 'garlicRanch'}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type='radio'
                            name='sauce'
                            value='bbq'
                            // onChange={onChange}
                            // checked={values.sauce === 'bbq'}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type='radio'
                            name='sauce'
                            value='spinachAlfredo'
                            // onChange={onChange}
                            // checked={values.sauce === 'spinachAlfredo'}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}