import React, { Fragment } from 'react';
import { get } from 'lodash';
import { formatPrice } from '../../utils';
import { ProductCategories, ProductCategoryFriendlyNames } from '../../ProductCategories';
import {
	StyledCategoryPromo,
	Grid,
	Item,
	ItemLink,
	ItemHeading,
	ItemImage
} from './styles';

const CategoryPromo = ({ items, categoryName }) => {

	if (!items || !categoryName) {
		return <Fragment></Fragment>
	}
	
	return (
		<StyledCategoryPromo>
			<h3>You may like these properties in the category "{ProductCategoryFriendlyNames[categoryName]}":</h3>
			<Grid>
				{
					items.map(( item, index ) => (
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
		</StyledCategoryPromo>
	);
}

export default CategoryPromo;
