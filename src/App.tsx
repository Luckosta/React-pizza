import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import React, { Suspense } from 'react';

const Cart = React.lazy(() => import('./pages/Cart'));
const FullPizzas = React.lazy(() => import('./pages/FullPizzas'));




function App(): JSX.Element {
	return (
		<Routes >
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='pizza/:id' element={
					<Suspense fallback={<div className='container'>Идет загрузка... </div>}>
						<FullPizzas />
					</Suspense>}
				/>
				<Route path='cart' element={
					<Suspense fallback={<div className='container'>Идет загрузка... </div>}>
						<Cart />
					</Suspense>
				}
				/>
				<Route path='*' element={<NotFound />}/>
			</Route>
		</Routes>
	);
}

export default App;
