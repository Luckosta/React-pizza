import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={466}
		viewBox="0 0 280 466"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<circle cx="135" cy="125" r="125" />
		<rect x="291" y="93" rx="0" ry="0" width="0" height="22" />
		<rect x="-2" y="261" rx="15" ry="15" width="280" height="19" />
		<rect x="138" y="148" rx="0" ry="0" width="39" height="0" />
		<rect x="2" y="292" rx="15" ry="15" width="280" height="88" />
		<rect x="0" y="412" rx="15" ry="15" width="90" height="27" />
		<rect x="176" y="401" rx="26" ry="26" width="100" height="45" />
	</ContentLoader>
)

export default Skeleton;
