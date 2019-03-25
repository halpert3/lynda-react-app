import React, { Component } from 'react';
import PropTypes from 'prop-types';                         //a separate package to import. 
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

let divStyle = ({
    fontFamily: 'Menlo',
    marginLeft: 50,
    marginTop: 10
})

export class Library extends React.Component {

    static defaultProps = {
        books: [
            { "title": "A Profile in Awesomeness", "author": "Henry Alpert", "pages": 1000 }
        ]
    }

    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }                             //*this line replaces a long constructor function that had been there earlier
    //todo - Look up what a constructor function is

    toggleOpenClosed = () => {                                  //todo - the arrow function does binding of "this" for you. look up "bind"
        this.setState(prevState => ({                                            //todo - look up setState
            open: !prevState.open
        }))
    }
    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({ data, loading: false }))
    }
    render() {
        console.log(this.props)
        const { books } = this.props
        return (
            <div style={divStyle}>
                <h6>
                    {this.state.hiring ? <Hiring /> : <NotHiring />}
                    {this.state.loading
                        ? "loading"
                        : <div>
                            {this.state.data.map(product => {
                                return (
                                    <div key={product.id}>
                                        <br />
                                        <h7>Library product of the week</h7>
                                        <h6>{product.name}/ id: {product.id}</h6>
                                        <div><img alt={product.name} src={product.image} height={100} /></div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </h6>
                <h4>The library is {this.state.open ? 'open' : 'closed'}.</h4>
                <button onClick={this.toggleOpenClosed}>Change Open State</button>
                {books.map(
                    (x, i) =>                               //* i is the key. Just to help keep track.
                        <Book
                            key={i}                         //* key is not displayed. React says it's necessary
                            title={x.title}
                            author={x.author}
                            pages={x.pages}
                            freeBookmark={this.state.freeBookmark}
                        />
                )}

            </div>
        )
    }
}
Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}

export default Library
