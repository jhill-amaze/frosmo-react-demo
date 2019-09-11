import React from 'react';
import {
	StyledPersonalisedStripBanner,
	ItemHeading,
	ItemCopy
} from './styles';

function PersonalisedStripBanner ({ title, copy, segmentId }) {
	return (
		<StyledPersonalisedStripBanner data-segment-id={segmentId}>
			{
				title 
					? <ItemHeading>{title}</ItemHeading>
					: null
			}
			{
				copy 
					? <ItemCopy>{copy}</ItemCopy>
					: null
			}
		</StyledPersonalisedStripBanner>
	);
};

export default PersonalisedStripBanner;