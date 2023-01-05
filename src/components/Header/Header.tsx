import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logoIcon from '../../assets/img/pizza-logo.svg';
import { selectCart } from '../../redux/slices/cartSlice';
import Search from '../Search/Search';
import CartIcon from './cart.svg'

function Header(): JSX.Element {
	const location = useLocation();
	const { items, totalPrice } = useSelector(selectCart);
	const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);
	const isMounted = useRef(false);


	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('cart', json)
		}
		isMounted.current = true

	}, [items]);


	return (<div className="header">
		<div className="container">
			<Link to='/'>
				<div className="header__logo">
					<img width="38" src={logoIcon} alt="Pizza logo" />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
			</Link>
			{location.pathname !== '/cart' && <Search />}
			{location.pathname !== '/cart' && (<div className="header__cart">
				<Link to="/cart" className="button button--cart">
					<span>{totalPrice} ₽</span>
					<button className="button__delimiter"></button>
					<img src={CartIcon} alt="" />
					<span>{totalCount}</span>
				</Link>
			</div>)}
		</div>
	</div>);
}

export default Header;
