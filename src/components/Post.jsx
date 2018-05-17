import React, {Component} from 'react';

class Post extends Component {
    state = {
        liked: false
    }


    toggleLike() {
        this.setState((prevState)=> {
            return {
                liked:!prevState.liked
            }
        });
    }


    render() {
        let opacity = this.state.liked ? 1 : 0.5;
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
                {this.props.likes}
                <img src="/like.jpg" width='20' style={{opacity}} alt="#"
                onClick={this.toggleLike.bind(this)}

                />

            </div>
        )
    }
}

export default Post;