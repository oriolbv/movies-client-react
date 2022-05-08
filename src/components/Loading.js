import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import Typed from 'typed.js';

class Loading extends PureComponent {
    
    componentDidMount() {
        const speed = this.props.speed || 90;
        this.typed = new Typed(this.$loading, {
          strings: [this.props.message],
          typeSpeed: parseInt(speed)
        });
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (<div className="loader" ref={element => this.$loading = element} ></div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired,
    speed: PropTypes.number
};

export default Loading;

/*
import React, { Component } from "react";
import PropTypes from 'prop-types';

class Loading extends Component {
    
    render() {
        return (<div className="loader" ref={el => this.$loading = el} >{this.props.message}</div>);
    }
}

Loading.propTypes = {
    message: PropTypes.string.isRequired
};

export default Loading;
*/