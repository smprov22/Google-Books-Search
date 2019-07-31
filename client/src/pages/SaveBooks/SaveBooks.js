import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Container } from "../../components/Grid";
import SavedResults from "../../components/SavedResults";
import "./style.css";

class SaveBooks extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount = () => {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container" >
                <Jumbotron>
                    <h1 style={{fontFamily: "Roboto"}}>Google Books Search</h1>
                    <h4 style={{fontFamily: "Roboto"}}>Search for and Save books of interest</h4>
                </Jumbotron>
                <Container>
                    <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}

export default SaveBooks