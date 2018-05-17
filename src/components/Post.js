import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    static propTypes = {
        onLike: PropTypes.func,
        likes: PropTypes.number,
        title: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired
    }

    static defaultProps = {
        onLike: () => {},
        likes: 0
    }
    state = {
        liked: false
    }

    toggleLike() {
        this.setState((prevState)=> {
            const liked = !prevState.liked;
            this.props.onLike(liked); 
            return {
                liked: liked
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