import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'


function FullPizzas(): JSX.Element {
	const [pizza, setPizza] = useState<{
		imageUrl: string,
		title: string,
		price: number
	}>();
	const { id } = useParams();
	
	const navigate = useNavigate();


	const fetchPizza = async () => {
		try {
			const respPizza = await axios.get('https://638c6f4dd2fc4a058a57acbe.mockapi.io/items/' + id);
			setPizza(respPizza.data);
		} catch (error) {
			navigate('/');
			throw new Error(error);
		}
	}

	useEffect(() => {
		fetchPizza()
	}, []);

	if (!pizza) {
		return <p>Идет загрузка пицц...</p>
	}



	return (
		<div className='container'>
			<img src={pizza.imageUrl} alt="" />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
		</div>
	)
}

export default FullPizzas