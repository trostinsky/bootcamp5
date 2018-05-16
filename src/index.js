import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloClassState, {Hello, HelloClassProps} from "./hello"
import registerServiceWorker from './registerServiceWorker';
import "./index.css";
import Button from "./ui/button.js";
import Input from "./ui/input.js";

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
        books: [{
            name: "JavaScript: The Definitive Guide: The Definitive Guide",
            author: "D. Flanagan",
            type: "javascript",
            cover: "/1.jpg"
        }, {
            name: "JavaScript: The Good Parts: The Good Parts",
            author: "Douglas Crockford",
            type: "javascript",
            cover: "/2.jpg"
        }, {
            name: "Modular Programming with JavaScript",
            author: "Sasan Seydnejad",
            type: "javascript",
            cover: "/3.jpg"
        }, {
            name: "Programming Python",
            author: "Mark Lutz",
            type: "python",
            cover: "/4.jpg"
        }, {
            name: "Learning Python: Powerful Object-Oriented Programming",
            author: "Mark Lutz",
            type: "python",
            cover: "/5.jpg"
        }],
        active: 'javascript',
        name: "",
        author: "",
        cover: "/missing.jpg",
        value: 0
    }


    // React Children can be:
    // Primitve(String, Number, Boolean), Components, Elements
    // and Array of (Primitive, Components, Elements)
    changeBook(active){
        this.setState({
            active
        })
    }

    changeInput(field, event) {
        const value = event.target.value;
        this.setState({
            [field]: value
        });
    }


    // Perfomance improve solution
    changeName(event) {
        this.changeInput.call(this, "name", event);
    }



    addBook = () => {
        // Если важно предыдущее состояние, то используете функцию в первом аргументе
        // Пример:
        // this.setState((prevState) => {
        //     return {
        //         // состояние основанное на предыдущем
        //     }
        // })

        // Если неважно, используете объект с новым состоянием в setState();
        // Пример:
        // this.setState({
        //     // новое состояние
        // })

        this.setState((prevState) => ({
            books: [...prevState.books, {
                name: prevState.name,
                cover: prevState.cover,
                author: prevState.author,
                type: prevState.active
            }]
        }))
    }



    render(){
        const books = [...this.state.books].filter((book) => book.type === this.state.active);
        return (
            <div className="books__wrapper">
                <h2>My favorite books</h2>
                <button onClick={this.changeBook.bind(this, "python")}>
                    Python Books
                </button>
                <button onClick={this.changeBook.bind(this, "javascript")}>
                    Javascript Books
                </button>
                <div className="book__add">
                    <div>
                        Name:
                        <Input type="text" className="book__name"
                               value={this.state.name}
                               onChange={this.changeInput.bind(this, "name")}
                        />
                    </div>
                    <div>
                        Author:
                        <Input type="text"
                               className="book__author"
                               value={this.state.author}
                               onChange={this.changeInput.bind(this, "author")}
                        />
                    </div>
                    <div>
                        Cover:
                        <Input type="text"
                               className="book__cover"
                               value={this.state.cover}
                               onChange={this.changeInput.bind(this, "cover")}
                        />
                    </div>
                    <Button onClick={this.addBook}>
                        Add Book!
                    </Button>
                </div>
                {books.map((book, index) => <BookItem key={index} {...book} /> )}
            </div>
        )
    }
}

ReactDOM.render(<Books/>, document.getElementById('root'));
registerServiceWorker();
