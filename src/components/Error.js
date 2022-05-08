import React, { Component } from "react";

/**
 * Error class to debug code
 */
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    componentDidCatch(error, info) {
        console.log("ERROR");
        this.setState({ error: info.componentStack });
    }
    render() {
        if (this.state.error) return <div>{this.state.error}</div>;
        return this.props.children;     // render the children contained by this component
    }
}