import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AppWrapper from './App'
// import 'bootstrap/dist/css/bootstrap.min.css' 

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [index, setIndex] = useState(1);
  const toRotate = [ "SocialFi", "DeFi", "GameFi" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <AppWrapper>
      <div className="default">
    <section className="banner" id="home">
      <Container className="Banner-container">
        <Row className="align-items-center items">
          <Col xs={10} md={6} xl={6}>
            <TrackVisibility>
  
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                <span className="tagline">Welcome to YGBSC</span>
                <h1> 
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "NFT", "DEFI", "SOCIAL-FI" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} className="web3entry"/></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
              
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"  className="headerImg"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
    </AppWrapper>
  )
}