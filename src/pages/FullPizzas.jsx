import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


function FullPizzas() {
	const [pizza, setPizza] = useState({});
	const { id } = useParams();
	const { imageUrl, title, price } = pizza;



	const fetchPizza = async () => {
		try {
			const respPizza = await axios.get('https://638c6f4dd2fc4a058a57acbe.mockapi.io/items/' + id);
			setPizza(respPizza.data);
		} catch (error) {
			throw new Error(error)
		}
	}

	useEffect(() => {
		fetchPizza()
	}, []);


	return (
		<div className='container'>
			<img src={imageUrl} alt="" />
			<h2>{title}</h2>
			<h4>{price} ₽</h4>
		</div>
	)
}

export default FullPizzas