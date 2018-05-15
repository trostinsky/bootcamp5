import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloClassState, {Hello, HelloClassProps} from "./hello";
import registerServiceWorker from './registerServiceWorker';
import "./index.css";


class Books extends Component{
    // Автоматически вызывается super() === new Component();
    state = {
        books: [{
            name: "JavaScript: The Definitive Guide: The Definitive Guide",
            author: "D. Flanagan",
            cover: "/1.jpg"
        }, {
            name: "JavaScript: The Good Parts: The Good Parts",
            author: "Douglas Crockford",
            cover: "/2.jpg"
        }, {
            name: "Modular Programming with JavaScript",
            author: "Sasan Seydnejad",
            cover: "/3.jpg"
        }]
    }

    // React Children can be:
    // Primitve(String, Number, Boolean), Components, Elements
    // and Array of (Primitive, Components, Elements)

    render(){
        const {books} = this.state;
        return (
            <div className="books__wrapper">
                {books.map((book, index) => {
                    return (
                        <div className="book" key={index}>
                            <div className="book__name">
                                {book.name}
                            </div>
                            <div className="book__author">
                                {book.author}
                            </div>
                            <img src={book.cover}
                                 alt="Book cover"
                                 className="book__image"/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<Books/>, document.getElementById('root'));
registerServiceWorker();
