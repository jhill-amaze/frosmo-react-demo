import React, { useState, useEffect } from 'react';
import Home from './index';
import { get } from 'lodash';
import { getHouses, getPersonalisedBanners, getAllEntries } from '../../api';
import { loadVisits } from '../../data';

const HomeContainer = () => {

	const [products, setProducts] = useState([]);
	const [personalisedBanners, setPersonalisedBanners] = useState([]);

	fetch('https://inpref.com/recoApi/v2?origin=frosmo_demo_local&method=multifetch&recos=[]')
		.then(response => response.text());

	const loadHouses = () => {
		getHouses()
			.then(result => {
				setProducts(get(result, 'fields.linkedHome'));
			});
	};

	const loadPersonalisedBanners = () => {
		getPersonalisedBanners()
			.then(result => {
				setPersonalisedBanners(get(result, 'items'));
			});
	};

	useEffect(() => {
		loadHouses();
		loadPersonalisedBanners();
	}, []);

	return (
		<Home
			products={products}
			featured={products.slice(0, 3)}
			personalisedBanners={personalisedBanners}
		/>
	);
};

export default HomeContainer;
