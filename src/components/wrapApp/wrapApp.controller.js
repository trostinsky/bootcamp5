import React, {Component} from "react";
import {Button, AddForm, List} from "./wrapApp.view";
import "./wrapApp.css";

class Wrap extends Component {
    state = {
        items: [{
            title: 'Computer',
            checked: false,
            id: 1
        }, {
            title: 'Gun (if you going to Donetsk)',
            checked: true,
            id: 2
        }, {
            title: 'Honey',
            checked: false,
            id: 3
        }, {
            title: "Socks",
            checked: true,
            id: 4
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

    toggleChecked = (id, checked) => {
        this.setState((prevState) => {
            const items = [...prevState.items];
            const index = items.findIndex((item) => item.id === id);
            items[index].checked = checked;
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
                      toggleChecked={this.toggleChecked}
                />
                <List title="Wrapped"
                      items={this.state.items.filter((item) => {
                          return item.checked;
                      })}
                      toggleChecked={this.toggleChecked}
                />
                <Button>Unpacked All</Button>
            </div>
        )
    }
}

export default Wrap;