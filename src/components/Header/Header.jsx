
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/img/pizza-logo.svg';
import Search from '../Search/Search';
import CartIcon from './cart.svg'

function Header() {

	const { items, totalPrice } = useSelector(state => state.cart)

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
			<Search />
			<div className="header__cart">
				<Link to="/cart" className="button button--cart">
					<span>{totalPrice} ₽</span>
					<div className="button__delimiter"></div>
					<img src={CartIcon} alt="" />
					<span>{items.length}</span>
				</Link>
			</div>
		</div>
	</div>);
}

export default Header;
