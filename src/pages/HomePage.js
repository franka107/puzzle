import { Row, Col, Button } from 'reactstrap'

export default function HomePage() {
  return (
    <div>
      <div className="fondo">
        <h1>Hola Mundo</h1>
      </div>
      <div className="sol"></div>
      <div className="nubes"></div>
      <div className="ciudad"></div>
      <div className="bici">
        <div className="llanta llan1"></div>
        <div className="marco"></div>
        <div className="llanta llan2"></div>
      </div>
    </div>
  )
}
