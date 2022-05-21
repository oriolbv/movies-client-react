import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Item(props) {
	const { id, poster_path, title } = props.data;
	
	return (
		<Link className="grid-item-link" to={`/${id}`}>
			<div className="grid-item" >
				<img className="preview-image" src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
				<div className="preview-title">{title}</div>
			</div>
		</Link>
	);
}

Item.propTypes = {
	data: PropTypes.object.isRequired
};

export default Item;