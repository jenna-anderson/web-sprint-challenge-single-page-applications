import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80');
    height: 75vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button{
        margin-right: 15%;
        border: none;
        padding: 2%;
        background-color: #ebbc8a;
        font-size: 1.8rem;
        letter-spacing: .25rem;
        font-weight: bold;
        cursor: pointer;
        transition: .5s
    }
    button:hover{
        transform: scale(1.1);
    }
`;

export default function Home() {
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <HomePage aria-label='[pizza]' role='img'>
                <button onClick={routeToForm} id='order-pizza'>Pizza?</button>
            </HomePage>
        </div>
    )
}