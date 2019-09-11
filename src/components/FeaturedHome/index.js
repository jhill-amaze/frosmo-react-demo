import React from 'react';
import { get } from 'lodash';
import { formatPrice } from '../../utils';
import {
	StyledFeaturedHome,
	StyledHeading,
	ImageWrapper,
	Image,
	Content,
	Heading,
	Price,
	CTA,
} from './styles';

const FeaturedHome = ({ data }) => (
	<StyledFeaturedHome>
		<StyledHeading>Featured property</StyledHeading>
		<section>
			<ImageWrapper>
				<Image src={get(data, 'fields.promoImage.fields.file.url')} />
			</ImageWrapper>
			<Content>
				<Heading>{get(data, 'fields.title')}</Heading>
				<Price>{formatPrice(get(data, 'fields.price'))}</Price>
				<ul>
					{
						get(data, 'fields.features')
							.map((feature, index) =>
								<li key={index}>{feature}</li>
							)
					}
				</ul>
				<CTA href={`/product/${get(data, 'fields.slug')}`}>More info</CTA>
			</Content>
		</section>
	</StyledFeaturedHome>
);

export default FeaturedHome;
