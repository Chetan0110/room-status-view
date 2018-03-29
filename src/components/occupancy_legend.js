import React, { Component } from 'react';

class OccupancyLegend extends Component {

    // build Legend item rects and render it in the canvas
    componentDidMount() {
        const legendItems = this.getLegendItemList();
        legendItems.forEach((item, index) => {
            var c = document.getElementById(item.id);
            var ctx = c.getContext("2d");
            ctx.fillStyle = item.color;
            ctx.fillText(item.label, 500, 155);
            ctx.fillRect(0, 0, 300, 150);
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
            marginTop: "20px",
        };
        const legnedItems = this.getLegendItemList();
        return (
            <div style={style}>
                {
                    legnedItems.map((item, index) => (
                        <div key={index} style={{ float: "left", display: "inline-block" }}>
                            <canvas style={{ marginLeft: index === 0 ? "0px" : "210px", width: "15px", height: "15px" }} id={item.id}> </canvas>
                            <p style={{ marginLeft: index === 0 ? "0px" : "210px" }}>{item.label}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default OccupancyLegend;