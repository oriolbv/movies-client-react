import React, {Component} from 'react';
import { withRouter } from 'react-router'

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  
    return (<React.Fragment> HOLA {this.props.match.params.id}</React.Fragment>);
  }
}

export default  withRouter(Detail);