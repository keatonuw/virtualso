import React, { Component } from 'react';

class Featured extends Component<{}, {}> {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carouselslide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://i.ibb.co/0MCJ9xh/Screen-Shot-2021-10-24-at-1-09-23-AM.png"  className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/RTvkYp1/Screen-Shot-2021-10-23-at-4-09-51-PM.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="https://i.ibb.co/RTvkYp1/Screen-Shot-2021-10-23-at-4-09-51-PM.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        )
    }
}

export default Featured;