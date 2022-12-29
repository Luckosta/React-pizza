import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import FullPizzas from './pages/FullPizzas';
import MainLayout from './components/layouts/MainLayout';




function App() {



	return (
		<Routes >
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='pizza/:id' element={<FullPizzas />} />
				<Route path='cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
