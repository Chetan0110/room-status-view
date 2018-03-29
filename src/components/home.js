import React, { Component } from "react";
import { connect } from 'react-redux';

import FloorSelector from './floor_selector';
import RoomOccupancy from './room_occupancy';
import RoomOccupancy1 from './room_occupancy1';
import OccupancyLegend from './occupancy_legend';

import { getAllFloorNames } from '../actions';

/**
 * Home component which displays dropdown to select floor
 * and on selection of the perticular floor, occupancy level of all the rooms
 * for that floor will be displayed using html canvas
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  //To get all the available floors to choose
  componentWillMount() {
    this.props.getAllFloorNames();
  }

  // Made two same components RoomOccupancy and RoomOccupancy1
  // because the rendering of html canvas dies and displays same
  // layout for every floor as you selected the first one
  render() {
    return (
      <div className="appDiv">
        <h1>Room Occupancy Status</h1>
        {
          this.props.all_floors ? <FloorSelector floorList={this.props.all_floors} /> : null
        }
        <br />
        {
          this.props.roomsForFloor && this.props.current_floor === 'groundFloor' ? <RoomOccupancy roomList={this.props.roomsForFloor} /> : null
        }
        {
          this.props.roomsForFloor && this.props.current_floor === 'firstFloor' ? <RoomOccupancy1 roomList={this.props.roomsForFloor} /> : null
        }
        {
          this.props.roomsForFloor && this.props.current_floor === 'secondFloor' ? <RoomOccupancy roomList={this.props.roomsForFloor} /> : null
        }
        {
          this.props.roomsForFloor && this.props.current_floor === 'thirdFloor' ? <RoomOccupancy1 roomList={this.props.roomsForFloor} /> : null
        }
        {
          this.props.roomsForFloor ? <OccupancyLegend /> : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    all_floors: state.floorData.all_floors,
    current_floor: state.floorData.current_floor,
    roomsForFloor: state.floorData.current_floor !== "" ? state.floorData.all_rooms : null
  };
}
export default connect(mapStateToProps, {
  getAllFloorNames
})(Home);