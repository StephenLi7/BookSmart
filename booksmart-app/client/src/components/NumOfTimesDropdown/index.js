import React, { Component } from "react";

// reactstrap components
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from "reactstrap";

class NumOfTimesDropdown extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {children, ...attributes} = this.props;

        return (
            <>
                <UncontrolledDropdown>
                    <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="primary"
                        data-toggle="dropdown"
                        id="dropdownMenuButton"
                        type="button"
                    >
                        {this.props.numTimes}
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuButton">
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="10">
                            10
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="9">
                            9
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="8">
                            8
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="7">
                            7
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="6">
                            6
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="5">
                            5
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="4">
                            4
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="3">
                            3
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="2">
                            2
                        </DropdownItem>
                        <DropdownItem onClick={this.props.handleClick.bind(this)} value="1">
                            1
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </>
        );
    }
}

export default NumOfTimesDropdown;