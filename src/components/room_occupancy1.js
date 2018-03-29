import React, { Component } from 'react';


class RoomOccupancy1 extends Component {

    constructor() {
        super();

        this.getShape = this.getShape.bind(this);
        this.getRectangleShape = this.getRectangleShape.bind(this);
    }

    // After canvas is in dom, create shapes and put it in the canvas
    componentDidMount() {
        this.props.roomList.forEach((room, index) => {
            var c = document.getElementById('floorCanvas');
            var ctx = c.getContext("2d");
            ctx.fillStyle = room.color;
            var noOfAngles = this.getNumberOfAngles(room.type);
            room.type === "rect" ? this.getRectangleShape(ctx, room) : this.getShape(ctx, room, noOfAngles)

        });
    }

    // Get no of angles based on roomType
    getNumberOfAngles(roomType) {
        switch (roomType) {
            case 'triAngles':
                return 3;
            case 'fiveAngles':
                return 5;
            case 'sixAngles':
                return 5;
            case 'sevenAngles':
                return 5;
            case 'eightAngles':
                return 8;
            default:
                return 4;
        }
    }


    // To draw objects other than rectangle shape
    getShape(ctx, room, noOfAngles) {
        ctx.beginPath();
        for (var ctr = 1; ctr <= noOfAngles; ctr++) {
            if (ctr === 1) {
                ctx.moveTo(room[`x${ctr}`], room[`y${ctr}`]);
            }
            else {
                ctx.lineTo(room[`x${ctr}`], room[`y${ctr}`]);
            }
        }
        ctx.closePath();
        ctx.fill();

    }

    // To draw rectangle shape object
    getRectangleShape(ctx, room) {
        ctx.fillRect(room.startX, room.startY, room.width, room.height);
    }

    //Render the canvas in the dom
    render() {
        const style = {
            marginTop: "75px",
            marginLeft: "25%",
            width: "50%",
            height: "400px",
            border: "1px solid grey"
        };
        return (
            <div style={style}>
                <canvas id="floorCanvas" width="680px" height="400px"> </canvas>
            </div>
        );
    }
}

export default RoomOccupancy1;