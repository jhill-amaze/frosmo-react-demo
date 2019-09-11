import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import ProductPage from './index';
import { getHouseWithSlug } from '../../api';
import { loadVisits } from '../../data';

const ProductPageContainer = ({ match }) => {
	const propertyID = get(match, 'params.id');
	const [data, setData] = useState({});
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getHouseWithSlug(propertyID)
			.then(result => {
				setData(get(result, 'items[0]'));
				setLoaded(true);
			});
	}, []);

	useEffect(() => {
		const propertyVisits = loadVisits();
		const visitCount = propertyVisits[propertyID] || 0;

		propertyVisits[propertyID] = visitCount + 1;
		localStorage.setItem('propertyVisits', JSON.stringify(propertyVisits));
	}, [propertyID]);

	return (
		<ProductPage
			loaded={loaded}
			data={data} />
	);
};

export default ProductPageContainer;
