import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory()
    const routeToForm = () => {
        history.push('/pizza')
    }

    return (
        <div>
            <img    className='home-image'
            src='https://images.unsplash.com/photo-1581873372796-635b67ca2008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
            alt='pizza' 
            />
            <button onClick={routeToForm} id='order-pizza'>Pizza?</button>
        </div>
    )
}