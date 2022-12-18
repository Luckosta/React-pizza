import Header from './components/Header/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { createContext, useState } from 'react';
import { increment, decrement } from './redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const SearchContext = createContext();


function App() {

	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState('');



	return (
		<div className="wrapper">
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
			{/*<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header/>
				<div className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</SearchContext.Provider>*/}
		</div>
	);
}

export default App;
