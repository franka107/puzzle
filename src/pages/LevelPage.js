import { useEffect, useState, useRef } from 'react'
import Puzzle from '../components/Puzzle'
import level1 from '../assets/images/nivel1.jpg'
import level2 from '../assets/images/nivel2.jpg'
import level3 from '../assets/images/nivel3.jpg'
import level4 from '../assets/images/nivel4.jpg'
import yoda from '../assets/images/yoda.gif'
import Timer from '../components/Timer'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from 'reactstrap'

export default function LevelPage() {
  const questionAnswers = [
    [
      {
        title: 'RESPUESTA DE LANDAU',
        process:
          'Suspenda al niño en una posición prona proporcionando apoyo en el abdomen alto con la palma de su mano. Ponga su otra mano en la parte baja de la espalda del niño. Note la posición de la cabeza del niño, tronco y piernas.',
        criterion:
          'Una respuesta completa se ve a los 4.5 meses con la extensión de la cabeza, espalda y piernas. Una respuesta incompleta se ve con la extensión solamente de la cabeza o de la espalda. De los 6 a 7 meses, el niño puede inhibir la contestación voluntaria.',
      },
      {
        title: 'CABEZA VERTICAL',
        process:
          'Ponga sus manos a nivel del tronco medio, debajo de la axila para prevenir la elevación del hombro. Alce al niño a una posición vertical con las piernas suspendidas en el aire. Note la posición y el control de la cabeza del niño.',
        criterion:
          'El control de cabeza en posición vertical es considerado presente si la cabeza se mantiene en una posición neutra sin moverse durante 6 a 10 segundos. La respuesta es considera incompleta si mantuvo la posición durante 3 a 6 segundos y ausente si la mantuvo menos de 3 segundos.',
      },
    ],
    [
      {
        title: 'PARACAÍDAS DESCENDENTE DE MIEMBROS INFERIORES',
        process:
          'Suspenda al niño en una posición prona proporcionando apoyo en el abdomen alto con la palma de su mano. Ponga su otra mano en la parte baja de la espalda del niño. Note la posición de la cabeza del niño, tronco y piernas.',
        criterion:
          'Una respuesta completa se ve a los 4.5 meses con la extensión de la cabeza, espalda y piernas. Una respuesta incompleta se ve con la extensión solamente de la cabeza o de la espalda. De los 6 a 7 meses, el niño puede inhibir la contestación voluntaria.',
      },
      {
        title: 'ENDEREZAMIENTO DE CABEZA',
        process:
          'Sostenga al niño en suspensión vertical, incline el cuerpo despacio hacia un lado y luego el otro a un ángulo de 45 grados aproximadamente. Despacio incline al niño hacia adelante y luego hacia atrás. Para un niño con un pobre control de cabeza o un recién nacido prematuro, tenga cuidado para prevenir hiperextensión del cuello cuando lo incline hacia atrás.',
        criterion:
          'Una vez inclinado, el niño debe intentar ajustar su cabeza para que permanezca derecho sin tener en cuenta la posición del cuerpo, con los ojos y boca orientados horizontalmente. La respuesta es considerada presente si se ve en las cuatro direcciones de inclinación. Si no observo en cualquier dirección, está ausente. La respuesta es usualmente notada primero cuando se incline al niño hacia adelante, seguido a los costados y finalmente hacia atrás.',
      },
    ],
    [
      {
        title: 'EQUILIBRIO EN POSICIÓN PRONA',
        process:
          'Eche al niño boca abajo sobre el cojín y despacio incline al niño hacia un lado y luego al otro.',
        criterion:
          'Una respuesta completa debe verse a los 5 meses y debe demostrarse una curvatura de la columna con concavidad hacia el lado levantado, abducción de los brazos, piernas, rotación de cabeza y tronco hacia el lao ascendente. Es considerada incompleta si solo encorvamiento del tronco se ve. Es ausente si ninguna de las respuestas se observa.',
      },
      {
        title: 'PROGRESIÓN A 4 PUNTOS',
        process:
          'Ponga sus manos a nivel del tronco medio, debajo de la axila para prevenir la elevación del hombro. Alce al niño a una posición vertical con las piernas suspendidas en el aire. Note la posición y el control de la cabeza del niño.',
        criterion:
          'Normalmente, el niño de 3 meses de edad se sostendrá en los antebrazos mientras está en posición prona. A los 6 meses, el niño empujara hacia arriba con los brazos extendidos. Una posición de manos y de rodillas es asumida a los 8.5 meses y se arrodillara una superficie a favor a los 9.5 meses de edad. Plantígrado (soporte del peso con las manos y pies) está presente a los 12 meses de edad. El niño puede lograr una posición de pie sin apoyo a los 14 meses.',
      },
    ],
    [
      {
        title: 'DES ROTATIVA DE CUERPO EN SUPINO',
        process:
          'Ponga al niño en la posición supina y flexione una cadera y rodilla a través del cuerpo para girar el tronco del niño y así rodar de posición supino a prono.',
        criterion:
          'Una respuesta completa se demuestra cuando el cuerpo del niño rota la parte superior mientras roda a una posición prona con apoyo de los codos. Una respuesta incompleta se ve con un movimiento de torsión del tronco por el examinador, pero ninguna rotación por el niño. Es ausente cuando la rotación del tronco del niño (leño rodando) no está presente.',
      },
      {
        title: 'ENDEREZAMIENTO DEL CUERPO EN POSCION PRONA',
        process: 'Eche el niño boca abajo y observa la posición de cabeza.',
        criterion:
          'Una reacción completa es vista a los 4 meses de edad con el niño que se sostiene en sus antebrazos o manos y la cabeza se alza a un Angulo de 90 grados de la superficie a favor. Una respuesta incompleta se ve cuando levanta la cabeza solo 45 a 60 grados. Es ausente si se nota un enderezamiento de cabeza momentáneo en la extensión fuera de la superficie a favor.',
      },
    ],
  ]
  const [level, setLevel] = useState(2)
  const [cont, setCont] = useState(0)
  const [contInformation, setContInformation] = useState(0)
  const [showModalInformation, setShowModalInformation] = useState(false)
  const [showModalQuestions, setShowModalQuestions] = useState(false)
  const [next, setNext] = useState(true)
  const [qa] = useState(questionAnswers)
  const timer = useRef(null)
  const withWindow = window.innerWidth
  const [size, setSize] = useState(500)

  useEffect(() => {
    if (withWindow > 390 && withWindow < 650) {
      setSize(300)
    }
    if (withWindow > 650 && withWindow < 1200) {
      setSize(400)
    }
  })

  const verify = () => {
    setLevel(level + 1)
    setShowModalInformation(true)
    setNext(false)
    timer.current.pauseTimer()
  }

  const nextLevel = () => {
    setCont(cont + 1)
    setContInformation(0)
    setShowModalQuestions(false)
    setNext(true)
    timer.current.initTimer()
  }

  const nextContInformation = () => {
    setContInformation(contInformation + 1)
    setShowModalQuestions(false)
  }

  const questions = () => {
    setShowModalInformation(false)
    setShowModalQuestions(true)
  }

  return (
    <div className="content-game">
      <div className="d-flex justify-content-center game">
        <div>
          <div>
            <Timer ref={timer} />
          </div>
          <div className="d-flex">
            {level === 2 && next ? (
              <Puzzle
                image={level1}
                onDone={verify}
                level={level}
                size={size}
              />
            ) : (
              <div
                style={{
                  height: `${size}px`,
                }}
              ></div>
            )}
            {level === 3 && next ? (
              <Puzzle
                image={level2}
                onDone={verify}
                level={level}
                size={size}
              />
            ) : (
              ''
            )}
            {level === 4 && next ? (
              <Puzzle
                image={level3}
                onDone={verify}
                level={level}
                size={size}
              />
            ) : (
              ''
            )}
            {level === 5 && next ? (
              <Puzzle
                image={level4}
                onDone={verify}
                level={level}
                size={size}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Modal
        centered
        toggle={() => setShowModalInformation(!showModalInformation)}
        isOpen={showModalInformation}
        backdrop="static"
        size="xl"
      >
        {/* <ModalHeader>
          <div
            style={{
              color: '#000',
            }}
          >
            Informacion
          </div>
        </ModalHeader>
        <ModalBody>
          <br />
          <strong>{qa[cont][contInformation].title}</strong>
          <br />
          <br />
          <div  
            style={{
              textAlign: 'justify',
            }}
          >
            <strong>Procedimiento</strong>
            <div>{qa[cont][contInformation].process}</div>
            <br />
            <strong>Criterios</strong>
            <div>{qa[cont][contInformation].criterion}</div>
          </div>
          <br />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            type="button"
            onClick={contInformation === 0 ? nextContInformation : questions}
          >
            {contInformation === 0 ? 'Siguiente' : 'Preguntas'}
          </Button>
        </ModalFooter> */}
        <div
          style={{
            backgroundColor: '#111',
            color: '#fff',
            paddingRight: '20px',
          }}
        >
          <Row>
            <Col xs="12" sm="12" md="6">
              <CardImg top width="100%" src={yoda} alt="Card image cap" />
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              style={{
                paddingRight: 0,
                paddingLeft: 0,
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  <div>INFORMACIÓN</div>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {qa[cont][contInformation].title}
                </CardSubtitle>
                <div
                  style={{
                    textAlign: 'justify',
                    paddingRight: '10px',
                  }}
                >
                  <strong>Procedimiento</strong>
                  <div>{qa[cont][contInformation].process}</div>
                  <br />
                  <strong>Criterios</strong>
                  <div>{qa[cont][contInformation].criterion}</div>
                </div>
              </CardBody>
              <Button
                color="primary"
                type="button"
                className="button-pixel"
                onClick={
                  contInformation === 0 ? nextContInformation : questions
                }
              >
                {contInformation === 0 ? 'Siguiente' : 'Preguntas'}
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        centered
        toggle={() => setShowModalQuestions(!showModalQuestions)}
        isOpen={showModalQuestions}
        backdrop="static"
      >
        <ModalHeader>
          <div
            style={{
              color: '#000',
            }}
          >
            Informacion
          </div>
        </ModalHeader>
        <ModalBody>
          <strong>{qa[cont][0].title}</strong>
          <Form>
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={nextLevel}>
            Siguiente
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
