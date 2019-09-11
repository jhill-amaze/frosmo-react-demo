import React from 'react';
import Item from './Item';
import { ProductList } from './styles';

const FeaturedProducts = ({ items }) => (
	<ProductList>{items.map(item => <Item key={item.sys.id} data={item} />)}</ProductList>
);

export default FeaturedProducts;
