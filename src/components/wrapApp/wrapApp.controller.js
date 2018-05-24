import React, {Component} from "react";
import {Button, AddForm, List} from "./wrapApp.view";
import "./wrapApp.css";

class Wrap extends Component {
    state = {
        items: [{
            title: 'Computer',
            checked: false
        }, {
            title: 'Gun (if you going to Donetsk)',
            checked: true
        }, {
            title: 'Honey',
            checked: false
        }, {
            title: "Socks",
            checked: true
        }]
    }

    addItem = (title) => {
        this.setState((prevState) => {
            const items = [...prevState.items];
            items.push({
                title: title,
                checked: false
            })
            return {
                items: items
            }
        })
    }

    render() {
        return (
            <div>
                <AddForm onAdd={this.addItem}/>
                <List title="Wrapup Needed"
                      items={this.state.items.filter((item) => {
                          return !item.checked;
                      })}
                />
                <List title="Wrapped"
                      items={this.state.items.filter((item) => {
                          return item.checked;
                      })}/>
                <Button>Unpacked All</Button>
            </div>
        )
    }
}

export default Wrap;