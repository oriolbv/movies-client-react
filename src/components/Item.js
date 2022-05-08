import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Item extends PureComponent{
	render(){
		const { id, poster_path, title } = this.props.data;
		return (<Link className="grid-item-link" to={`/${id}`}>
			<div className="grid-item" >
				<img className="preview-image" src={`https://image.tmdb.org/t/p/original${poster_path}`}/>
				<div className="preview-title">{title}</div>
			</div>
		</Link>);
	}
}

Item.propTypes = {
	data: PropTypes.object.isRequired
};

export default Item;