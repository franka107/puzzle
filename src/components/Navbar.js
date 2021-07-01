import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

export default function Navbar() {
  return (
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
  )
}
