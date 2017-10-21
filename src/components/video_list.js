import React , {Component} from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
    render() {
        const videoItems = this.props.videos.map((video) => {
            return (
            <VideoListItem 
            onVideoSelect = {this.props.onVideoSelect}
            key = {video.etag} 
            video={video}/>
            );
        });
        return (
            <ul className = "col-md-4 list-group">
                {videoItems}
            </ul>

        );
    }
}

 