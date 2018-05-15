import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloClassState, {Hello, HelloClassProps} from "./hello";
import registerServiceWorker from './registerServiceWorker';
import "./index.css";

const BookItem = ({name, author, cover}) => (
    <div className="book">
        <div className="book__name">
            {name}
        </div>
        <div className="book__author">
            {author}
        </div>
        <img src={cover}
             alt="Book cover"
             className="book__image"/>
    </div>
)
class Books extends Component{
    // Автоматически вызывается super() === new Component();
    state = {
        javascriptBooks: [{
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
        }],
        pythonBooks: [{
            name: "Programming Python",
            author: "Mark Lutz",
            cover: "/4.jpg"
        }, {
            name: "Learning Python: Powerful Object-Oriented Programming",
            author: "Mark Lutz",
            cover: "/5.jpg"
        }],
        active: 'javascript'
    }

    // React Children can be:
    // Primitve(String, Number, Boolean), Components, Elements
    // and Array of (Primitive, Components, Elements)
    changeBook(active){
        this.setState({
            active
        })
    }

    render(){
        const books = this.state[this.state.active + "Books"];
        return (
            <div className="books__wrapper">
                <h2>My favorite books</h2>
                <button onClick={this.changeBook.bind(this, "python")}>
                    Python Books
                </button>
                <button onClick={this.changeBook.bind(this, "javascript")}>
                    Javascript Books
                </button>
                {books.map((book, index) => <BookItem {...book} /> )}
            </div>
        )
    }
}

ReactDOM.render(<Books/>, document.getElementById('root'));
registerServiceWorker();
