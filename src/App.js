import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/container';
import ProductPage from './components/ProductPage/container';
import GlobalStyle from './styles';
import { getHouses } from './api';

function App () {

	return (
		<Fragment>
			<GlobalStyle />
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={Home} />
					<Route path="/product/:id" component={ProductPage} />
				</Layout>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
