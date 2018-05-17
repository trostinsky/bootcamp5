import React, {Component} from 'react';

class Post extends Component {
    state = {
        likes: 3,
    };

    incrLike = () => {
        this.setState(prevState =>{
            return {likes:prevState.likes+1}
        })
    }

    decrLikes = () => {
        this.setState(prevState => {
            return {likes:prevState.likes-1}
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
                {this.state.likes}
                <button onClick={this.incrLike}>likes</button>
                <button onClick={this.decrLikes}>dislikes</button>
            </div>
        )
    }
}

export default Post;