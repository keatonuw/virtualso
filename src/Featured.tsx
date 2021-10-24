import React, { Component } from 'react';

class Featured extends Component<{}, {}> {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://i.ibb.co/5cFjFfh/Screen-Shot-2021-10-24-at-2-15-08-AM.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                <h5 className="h5">Seattle Broadway</h5>
                <p>Mean Girls November 16th - 21st </p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://i.ibb.co/RTvkYp1/Screen-Shot-2021-10-23-at-4-09-51-PM.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                <h5>Live Concert:</h5>
                <p>BAZZOOKAFEST: BIPOC-Powered Interdisciplinary Music, Film & Arts Festival 2021 </p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://i.ibb.co/SwmQ41f/Screen-Shot-2021-10-24-at-2-18-07-AM.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                <h5>Seattle Opera</h5>
                <p>THE MARRIAGE OF FIGARO MAY 7, 8, 11, 14, 15, 18, 20, & 21, 2022* </p>
                </div>
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