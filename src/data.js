export const loadVisits = () => {
	const jsonString = localStorage.getItem('propertyVisits');

	let visits = {};
	if (jsonString) {
		visits = JSON.parse(jsonString);
	}

	return visits;
};
