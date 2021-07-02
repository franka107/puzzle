import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

//import '../assets/css/plugin.css'
import '../assets/css/responsive.css'
import '../assets/css/style.css'

export default function Navbar() {
  return (
    <header className="header">
      {/*<!-- Top Header Area Start -->*/}

      {/* <!-- Top Header Area End --> */}
      {/* <!--Main-Menu Area Start--> */}
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo.png" alt="" />
                  <h1>INALLIM</h1>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main_menu"
                  aria-controls="main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse fixed-height"
                  id="main_menu"
                >
                  <ul className="navbar-nav ml-auto">
                    {/*
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                        <div className="mr-hover-effect"></div>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="index.html">
                            {' '}
                            <i className="fa fa-angle-double-right"></i>Home 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index2.html">
                            {' '}
                            <i className="fa fa-angle-double-right"></i> Home 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    */}
                    <li className="nav-item">
                      <a className="nav-link" href="play.html">
                        RANKING
                        <div className="mr-hover-effect"></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="lottery.html">
                        SOBRE NOSOTROS
                        <div className="mr-hover-effect"></div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="tournaments.html">
                        JUGAR
                        <div className="mr-hover-effect"></div>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        CONTACTO
                        <div className="mr-hover-effect"></div>
                      </a>
                    </li>
                  </ul>
                  <a
                    href="/"
                    className="mybtn1"
                    data-toggle="modal"
                    data-target="#signin"
                  >
                    EMPEZAR
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Main-Menu Area Start--> */}
      {/* V
    <nav className="container mt-3">
      <Row>
        <Col md="3" sm="6" className="d-flex align-items-center">
          <h1>INALLIM</h1>
        </Col>
        <Col md="4" sm="6" className="d-flex align-items-center">
          <h6>Si tu quieres saber con mi Millani tú tienes que aprender</h6>
        </Col>
        <Col md="3" className="ml-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
            alt="Girl in a jacket"
            width="75"
            height="75"
            className=" img-fluid mx-auto"
          />
        </Col>
      </Row>
    </nav>
      */}
    </header>
  )
}
