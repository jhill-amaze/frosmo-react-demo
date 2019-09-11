import React, { Fragment, useEffect } from 'react';
import ProductGrid from '../ProductGrid';
import FeaturedHome from '../FeaturedHome';
import {FrosmoPlacement} from 'frosmo-react';
import PersonalisationSegments from '../../PersonalisationSegments';
import PersonalisedStripBanner from '../PersonalisedStripBanner';
import CategoryPromo from '../CategoryPromo';
import { ProductCategories, ProductCategoryFriendlyNames } from '../../ProductCategories';

function ProductPageDefaultContent () {
	return <Fragment></Fragment>
};

function ReturningVisitorDefaultContent () {
	return <Fragment></Fragment>
};

function SpecificProductInterestDefaultContent () {
	return <Fragment></Fragment>
};

function CategoryInterestDefaultContent () {
	return <Fragment></Fragment>
};

function Home ({ products, featured, personalisedBanners }) {
	return (
		<div>

			{/* Site visit segments */}

			<FrosmoPlacement id="fcp-placement-returning-visitor" defaultComponent={ReturningVisitorDefaultContent}>
				{
					personalisedBanners.filter(x => x.fields).map((banner, idx) => {
						if (banner.fields.segmentId === PersonalisationSegments['returningVisitor']) {
							return (
								<PersonalisedStripBanner
									key={idx}
									title={banner.fields.title}
									copy={banner.fields.copy}
									segmentId={banner.fields.segmentId}
								/>
							)	
						}
						else{
							return <Fragment></Fragment>
						}
					})
				}
			</FrosmoPlacement>

			{/* Product interest segments */}

			<FrosmoPlacement id="fcp-placement-id" defaultComponent={ProductPageDefaultContent}>
				<div>
					{
						personalisedBanners.filter(x => x.fields).map((banner, idx) => {
							if (banner.fields.segmentId === PersonalisationSegments['visitedProductPage']) {
								return (
									<PersonalisedStripBanner
										key={idx}
										title={banner.fields.title}
										copy={banner.fields.copy}
										segmentId={banner.fields.segmentId}
									/>
								)
							}
							else{
								return <Fragment></Fragment>
							}
						})
					}
				</div>
			</FrosmoPlacement>

			<FrosmoPlacement id="fcp-placement-specific-product-interest" defaultComponent={SpecificProductInterestDefaultContent}>
				{
					personalisedBanners.filter(x => x.fields).map((banner, idx) => {
						if (banner.fields.segmentId === PersonalisationSegments['specificProductInterest']) {
							return (
								<PersonalisedStripBanner
									key={idx}
									title={banner.fields.title}
									copy={banner.fields.copy}
									segmentId={banner.fields.segmentId}
								/>
							)	
						}
						else{
							return <Fragment></Fragment>
						}
					})
				}
			</FrosmoPlacement>

			{/* Page content */}

			{
				products[0] ?
					<FeaturedHome data={products[0]} />
					:
					null
			}

			{/* Product category interest segments */}

			<FrosmoPlacement id="fcp-placement-cat-interest-terrace" defaultComponent={CategoryInterestDefaultContent}>
				<CategoryPromo 
					items={products.filter(x => x.fields).filter(product => product.fields.productCategory === ProductCategories['terrace'] )}
					categoryName={ProductCategories['terrace']}
				/>
			</FrosmoPlacement>

			<FrosmoPlacement id="fcp-placement-cat-interest-semi" defaultComponent={CategoryInterestDefaultContent}>
				<CategoryPromo 
					items={products.filter(x => x.fields).filter(product => product.fields.productCategory === ProductCategories['semi'] )}
					categoryName={ProductCategories['semi']}
				/>
			</FrosmoPlacement>

			<FrosmoPlacement id="fcp-placement-cat-interest-detached" defaultComponent={CategoryInterestDefaultContent}>
				<CategoryPromo 
					items={products.filter(x => x.fields).filter(product => product.fields.productCategory === ProductCategories['detached'] )}
					categoryName={ProductCategories['detached']}
				/>
			</FrosmoPlacement>

			<FrosmoPlacement id="fcp-placement-cat-interest-apartment" defaultComponent={CategoryInterestDefaultContent}>
				<CategoryPromo 
					items={products.filter(x => x.fields).filter(product => product.fields.productCategory === ProductCategories['apartment'] )}
					categoryName={ProductCategories['apartment']}
				/>
			</FrosmoPlacement>

			<FrosmoPlacement id="fcp-placement-cat-interest-bungalow" defaultComponent={CategoryInterestDefaultContent}>
				<CategoryPromo 
					items={products.filter(x => x.fields).filter(product => product.fields.productCategory === ProductCategories['bungalow'] )}
					categoryName={ProductCategories['bungalow']}
				/>
			</FrosmoPlacement>

			{/* Product listing */}

			<ProductGrid items={products} />
			
		</div>
	);
};

export default Home;