import React, { Component } from "react";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";
import HeaderSub from "components/HeaderSub";
import YearDropdown from "components/YearDropdown";

class NotReadBooks extends Component {
    constructor(props) {
        super(props);
        this.callAPI = this.callAPI.bind(this);
        this.state = { notReadBooks: [], year: '2017' };
    }

    callAPI() {
        const year = this.state.year;

        console.log(year);

        const url = "/notreadbooks/"+year;

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({ notReadBooks: data }))
            .catch(err => err);
    }

    onChangeYear(event) {
        this.setState({ year: event.target.value });
    }

    render() {
        let results;

        const notReadBooks = this.state.notReadBooks.map( (notReadBooks, index) => {
            return <Row key={index}>
                <Col md="6">
                    <p>{notReadBooks.TITLE}</p>
                </Col>

                <Col md="2">
                    <p>{notReadBooks.AUTHOR}</p>
                </Col>

                <Col md="2">
                    <p>{notReadBooks.GENRE === 'Not_Assigned'? 'Miscellaneous': notReadBooks.GENRE}</p>
                </Col>

                <Col md="2">
                    <p>{notReadBooks.ISBN}</p>
                </Col>
            </Row>
        });

        if(this.state.notReadBooks.length !== 0) {
            results =
                <Row id="results">
                    <Col md="12">
                        <Row id="result-header">
                            <Col md="6">
                                <h5>Title</h5>
                            </Col>

                            <Col md="2">
                                <h5>Author</h5>
                            </Col>

                            <Col md="2">
                                <h5>Genre</h5>
                            </Col>

                            <Col md="2">
                                <h5>ISBN</h5>
                            </Col>
                        </Row>
                        {notReadBooks}
                    </Col>
                </Row>;
        }
        else {
            results = '';
        }

        return (
            <div>
                <Container>
                    <HeaderSub />
                    <h3 className="title">What People Are Not Reading</h3>
                    <div>Shelves overflowing and needing to weed out? You pick the year of interest and BookSmart will</div>
                    <div>provide a random selection of titles that have not been borrowed a single time during that year.</div>
                    <div> This tool is a must-have to get ready for your library’s next used book sale! ISBN and genre </div>
                    <div>information is provided for convenience.</div>
                    <div className="space-50"></div>

                    <Row id="notReadBooks">
                        <Col md="12">
                            <Row id="input">
                                <Col md="6">
                                    <h4>Year</h4>
                                    <Row>
                                        <Col md="6">
                                            <div className="year-dropdown">
                                                <YearDropdown handleClick={this.onChangeYear.bind(this)} year={this.state.year} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="6">
                                    <Row>
                                        <Col md="6">
                                            <div className="submit">
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    href="#"
                                                    onClick={this.callAPI}
                                                >Search</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="space-50"></div>
                    {results}
                </Container>
            </div>
        );
    }
}

export default NotReadBooks;
