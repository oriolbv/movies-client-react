import React, {Component} from 'react';
import { getVideoDetail } from '../../api';
import Loading from '../Loading';
import Video from '../Video';
import { useParams } from 'react-router-dom';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    
    this.setState({ isLoading: true });
    getVideoDetail({ idVideo: id })
    .then(data => this.setState({ video: data, isLoading: false }))
    .catch(err => this.setState({ error:err, isLoading: false }));
  }
  render() {
    const { isLoading, error, video } = this.state;
    const { id } = this.props.params;
   
    if (error) return <p className="error">{error.message}</p>;
    if (isLoading || !video) return <Loading message={`Cargando video (#${id}) .... `} speed={15}/>;

    return (<React.Fragment>
        <div className="detail-container">
            <Video title={video.title} embed={video.embed}/>
            <div className="detail-summary">
              <h2 className="detail-title">{video.title}</h2>
              <p>{video.description}</p>
            </div>
        </div>
     </React.Fragment>);
  }
}

export default (props) => (
  <Detail
      {...props}
      params={useParams()}
  />
);