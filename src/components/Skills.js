import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
// import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>These are some of the skills which I have acquired till now.</p>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Skillmeter" />
                                    <h2>
                                        Web Development
                                    </h2>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Skillmeter" />
                                    <h2>
                                        C++
                                    </h2>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Skillmeter" />
                                    <h2>
                                        Problem Solving
                                    </h2>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Skillmeter" />
                                    <h2>
                                        Data Analytics
                                    </h2>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
    )
}