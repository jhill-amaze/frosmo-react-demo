import React from 'react';
import { get } from 'lodash';
import { formatPrice } from '../../utils';
import {
	ProductImage,
	ProductTitle,
	ProductPrice,
	ProductLink,
	ProductFeatures,
} from './styles';

const Item = ({ data }) => (
	<ProductLink to={`/product/${get(data, 'fields.slug')}`}>
		<ProductImage src={get(data, 'fields.promoImage.fields.file.url')} />
		<ProductTitle>{get(data, 'fields.title')}</ProductTitle>
		<ProductPrice>{formatPrice(get(data, 'fields.price'))}</ProductPrice>
		<ProductFeatures>
			{
				get(data, 'fields.features').map((feature, index) => <li key={index}>{feature}</li>)
			}
		</ProductFeatures>
	</ProductLink>
);

export default Item;
