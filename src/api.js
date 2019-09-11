const contentful = require('contentful');

let client;
try {
	client = contentful.createClient({
		space: '', // contentful space ID
		accessToken: '', // contentful space access token
	});
} catch (err) {
	console.error(err);
}

export const getHouses = () => client.getEntry('539xFrUdQSywO0MHy9D4zA'); // contentful entry id for houses container

export const getHouseWithSlug = slug => client.getEntries({
	content_type: 'home',
	'fields.slug[match]': slug,
});

export const getPersonalisedBanners = () => client.getEntries({
	content_type: 'personalisedStripBanner',
});
export const getAllEntries = () => client.getEntries();
