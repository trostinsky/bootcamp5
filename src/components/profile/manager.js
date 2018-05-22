import React, {Component, Fragment} from 'react';
import Profile from './profile';
import Small from "./profile.small";
import Nano from "./profile.nano";

class Manager extends Component {

    render() {
        return (
            <Fragment>
                <Profile image={this.props.image}
                         onChangeImage={this.props.onChangeImage}
                         onDefaultImage={this.props.onDefaultImage}
                         onDelete={this.props.onDelete}/>
                <Small image={this.props.image}/>
                <Nano image={this.props.image} />
            </Fragment>
        )
    }
}

export default Manager;