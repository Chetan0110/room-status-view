import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { onFloorSelectionChanged } from '../actions';

class FloorSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastSelected: 0
        };
    }

    // On change of the floor selection under dropdown
    // this func gets invoked
    handleChange(e, selectedValue) {
        let selectedFloor = this.props.floorList.find(
            floor => floor.id === selectedValue
        );
        this.setState({ lastSelected: selectedFloor });

        //Call the action to make backend request for the chosen floor
        // to get the co-ordinates for the rooms
        this.props.onFloorSelectionChanged(selectedFloor);
    }

    render() {
        let customStyles = {
            width: "50%",
            marginLeft: "25%"
        };

        // Floor selector drop-down (combo-box)
        return (
            <div>
                <Form className={'col-md-12'} id="dropdownForm" horizontal style={customStyles}>
                    <h4 style={{ marginLeft: "0px" }}>Select Floor</h4>
                    <Field
                        component={'select'}
                        className={'form-control'}
                        name={'floorselector'}
                        onChange={this.handleChange.bind(this)}
                    >
                        <option value="-1">---Please Select---</option>
                        {this.props.floorList.map(floor => (
                            <option key={floor.id} value={floor.id}>
                                {floor.label}
                            </option>
                        ))}
                    </Field>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const formed = reduxForm({
    form: 'floor_selector'
})(FloorSelector);

const connected = connect(mapStateToProps, {
    onFloorSelectionChanged
})(formed);

export default connected;