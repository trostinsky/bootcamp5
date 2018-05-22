import React, {Component, Fragment} from 'react';

const withImage = (EchancedComponent) => {
    class Comp extends Component{
        state = {
            image: "/panda1.jpg",
            name: "Vlad"
        }

        onChangeImage = () => {
            this.setState({
                image: "/cat1.jpeg"
            })
        }

        render(){
            return <EchancedComponent image={this.state.image}
                                      name={this.state.name}
                                      onChangeImage={this.onChangeImage}/>
        }
    }
    return Comp;
}
export default withImage;