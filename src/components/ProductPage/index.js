import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { formatPrice } from '../../utils';
import {
	ProductImage,
	Column,
	Price,
	Features,
	Address,
} from './styles';
import Text from '../Text';
import { ProductCategories, ProductCategoryFriendlyNames } from '../../ProductCategories';

function trackProduct (data) {

	console.log('trackProduct() : data:');
	console.log(data);

	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
	    frosmoProductId: data.id,
	    frosmoProductCategory: data.category,
	    frosmoProductName: data.name,
	    frosmoProductPrice: data.price
	});
}

function ProductPage ({ loaded, data }) {

	useEffect(() => {

		if (!data.fields) {
			return;
		}

		trackProduct({
			id: get(data, 'fields.slug'),
			category: ProductCategories[get(data, 'fields.productCategory')],
			name: get(data, 'fields.title'),
			price: get(data, 'fields.price')
		});

	}, [data.fields]);

	return (
		loaded ?
			<Fragment>
				<Column>
					<ProductImage data-product-image={''} src={get(data, 'fields.promoImage.fields.file.url')} />
					<Address content={get(data, 'fields.address.content', [])} noSpace />
				</Column>
				<Column>
					<div>
						<h2>{get(data, 'fields.title')}</h2>
						<Price>{formatPrice(get(data, 'fields.price'))}</Price>
						<Text content={get(data, 'fields.description.content')} />
					</div>
					<div>
						<h3>Features</h3>
						<Features>
							{
								get(data, 'fields.features', []).map((feature, index) => <li key={index}>{feature}</li>)
							}
						</Features>
					</div>
				</Column>
			</Fragment>
			:
			<p>Loading...</p>
	);
};

ProductPage.propTypes = {
	loaded: PropTypes.bool,
	data: PropTypes.object,
};

ProductPage.defaultProps = {
	loaded: false,
	data: undefined,
};

export default ProductPage;
