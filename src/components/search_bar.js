import React , { Component } from 'react';

export default class Searchbar extends Component {

    constructor(props){
        super(props);
        this.state = {term : ' '};
    }
    render() {
        return (
            <div className = "search-bar">
               <input 
               value = {this.state.term}
               onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
        onInputChange(term) {
            this.setState({term});
            this.props.onSearchTermChange(term);
        }
}
