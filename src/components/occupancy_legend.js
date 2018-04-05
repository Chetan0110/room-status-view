import React, { Component } from 'react';

class OccupancyLegend extends Component {

    // build Legend item rects and render it in the canvas
    componentDidMount() {
        var c = document.getElementById("legendCanvas");
        var ctx = c.getContext("2d");
        const legendItems = this.getLegendItemList();
        legendItems.forEach((item, index) => {
            ctx.fillStyle = item.color;
            ctx.fillRect(index * 120, 0, 10, 120);
            // ctx.fillStyle = "black";
            // ctx.fontSize = "50px Arial";
            // ctx.fillText(item.label, index * 120, 80);
        });
    }

    getLegendItemList() {
        return [
            { id: "high", color: "skyblue", label: "High,>60%" },
            { id: "medium", color: "sandybrown", label: "Medium,>30-60%" },
            { id: "low", color: "palegreen", label: "Low,<30%" }
        ]
    }

    // Legend rendering in the dom
    render() {
        const style = {
            marginLeft: "25%",
            width: "50%",
            border: "1px solid grey",
            height: "50px",
            marginTop: "20px"
        };
        const legnedItems = this.getLegendItemList();
        return (
            <div style={style}>
                <canvas style={{ width: "680px", height: "25px" }} id="legendCanvas"> </canvas>
                {
                    legnedItems.map((item, index) => (
                        <span style={{ marginLeft: index === 0 ? "0px" : "180px" }}>{item.label}</span>
                    ))
                }
            </div>
        );
    }
}

export default OccupancyLegend;