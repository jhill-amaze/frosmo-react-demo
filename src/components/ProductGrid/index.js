import React from 'react';
import { get } from 'lodash';
import { formatPrice } from '../../utils';
import {
	StyledProductGrid,
	StyledHeading,
	Grid,
	Item,
	ItemHeading,
	ItemImage,
	ItemLink,
} from './styles';

const ProductGrid = ({ items }) => (
	<StyledProductGrid>
		<StyledHeading>Properties for sale</StyledHeading>
		<Grid>
			{
				items.map((item, index) => (
					<Item key={index}>
						<ItemLink to={`/product/${get(item, 'fields.slug')}`}>
							<ItemImage src={get(item, 'fields.promoImage.fields.file.url')} />
							<ItemHeading>{get(item, 'fields.title')}</ItemHeading>
							<p>{formatPrice(get(item, 'fields.price'))}</p>
						</ItemLink>
					</Item>
				))
			}
		</Grid>
	</StyledProductGrid>
);

export default ProductGrid;
