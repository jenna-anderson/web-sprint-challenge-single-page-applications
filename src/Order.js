import styled from 'styled-components'

const StyledOrderContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledOrder = styled.div`
    width: 50%;
    border: 1px solid #61584b9e;
    padding: .5%;
    margin: 1%;
`;

export default function Order ({ details }) {
    if(!details) {
        return <h4>Loading...</h4>
    }

    return  (
        <StyledOrderContainer>
            <StyledOrder>
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
                {
                    !!details.specialInstructions && !!details.specialInstructions.length &&
                    <div>
                        Special Instructions:
                        {details.specialInstructions}
                    </div>
                }
            </StyledOrder>
        </StyledOrderContainer>
    )
}