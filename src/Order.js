export default function Order ({ details }) {
    if(!details) {
        return <h4>Loading...</h4>
    }

    return  (
        <div>
            <h4>Order</h4>
            <p>Name: {details.customerName}</p>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}