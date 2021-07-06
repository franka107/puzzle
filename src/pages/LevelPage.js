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
  FormGroup,
  Label,
  Input,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Alert,
} from 'reactstrap'
import { information, questionsAnswers } from '../constants'

export default function LevelPage() {
  const [level, setLevel] = useState(2)
  const [cont, setCont] = useState(0)
  const [contInformation, setContInformation] = useState(0)
  const [showModalInformation, setShowModalInformation] = useState(false)
  const [showModalQuestions, setShowModalQuestions] = useState(false)
  const [next, setNext] = useState(true)
  const [qa] = useState(information)
  const timer = useRef(null)
  const withWindow = window.innerWidth
  const [size, setSize] = useState(500)
  const [questionA, setQuestionA] = useState(questionsAnswers)
  const [contQuestion, setContQuestion] = useState(0)
  const [selectOption, setSelectOption] = useState('')
  const [answerVer, setAnswerVer] = useState('false')
  const [showAlert, setShowAlert] = useState(false)

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

  const antInformation = () => {
    setContInformation(contInformation - 1)
  }

  const nextLevel = () => {
    if (questionA[cont][contQuestion].answer === selectOption) {
      alert('contestaste bien')
    } else {
      alert('contestaste mal')
    }
    setShowModalQuestions(false)
    setCont(cont + 1)
    setNext(true)
    setContQuestion(0)
    setContInformation(0)
  }

  const nextContInformation = () => {
    setContInformation(contInformation + 1)
    setShowModalQuestions(false)
  }

  const questions = () => {
    timer.current.initTimer()
    setShowModalInformation(false)
    setShowModalQuestions(true)
  }

  const nextQuestion = () => {
    if (questionA[cont][contQuestion].answer !== selectOption) {
      timer.current.state.actualTime = timer.current.state.actualTime + 40
      setShowAlert(true)
      setAnswerVer(
        'Tu respuesta fue incorrecta, se te penalizara con <strong>30 segundos</strong> en tu marcador'
      )
    } else {
      setShowAlert(true)
      setAnswerVer('Tu respuesta fue correcta.')
    }
    setTimeout(function () {
      setShowAlert(false)
    }, 5000)
    setContQuestion(contQuestion + 1)
  }

  const onChangeOption = (e) => {
    setSelectOption(e.target.value)
  }

  return (
    <div className="content-game">
      <div className="d-flex justify-content-center game">
        <div>
          <div className="my-auto">
            <Timer ref={timer} />
          </div>
          <br />
          <div className="d-flex">
            {level === 2 && next ? (
              <Row className="mx-3">
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={8}
                  className="d-flex justify-content-center"
                >
                  <Puzzle
                    image={level1}
                    onDone={verify}
                    level={level}
                    size={size}
                  />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="d-flex">
                  <img
                    src={level1}
                    alt="Hola"
                    className="img-fluid my-auto pl-0 pr-5 mr-5"
                  />
                </Col>
              </Row>
            ) : (
              <div
                style={{
                  height: `${size}px`,
                }}
              ></div>
            )}
            {level === 3 && next ? (
              <Row className="mx-3">
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={8}
                  className="d-flex justify-content-center"
                >
                  <Puzzle
                    image={level2}
                    onDone={verify}
                    level={level}
                    size={size}
                  />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="d-flex">
                  <img
                    src={level2}
                    alt="Hola"
                    className="img-fluid my-auto pl-0 pr-5 mr-5"
                  />
                </Col>
              </Row>
            ) : (
              ''
            )}
            {level === 4 && next ? (
              <Row className="mx-3">
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={8}
                  className="d-flex justify-content-center"
                >
                  <Puzzle
                    image={level3}
                    onDone={verify}
                    level={level}
                    size={size}
                  />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="d-flex">
                  <img
                    src={level3}
                    alt="Hola"
                    className="img-fluid my-auto pl-0 pr-5 mr-5"
                  />
                </Col>
              </Row>
            ) : (
              ''
            )}
            {level === 5 && next ? (
              <Row className="mx-3">
                <Col
                  xs={12}
                  sm={12}
                  md={8}
                  lg={8}
                  className="d-flex justify-content-center"
                >
                  <Puzzle
                    image={level4}
                    onDone={verify}
                    level={level}
                    size={size}
                  />
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} className="d-flex">
                  <img
                    src={level4}
                    alt="Hola"
                    className="img-fluid my-auto pl-0 pr-5 mr-5"
                  />
                </Col>
              </Row>
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
        <div
          style={{
            backgroundColor: '#111',
            color: '#fff',
          }}
        >
          <Row>
            <Col
              xs="12"
              sm="12"
              md="6"
              style={{
                backgroundColor: '#284548',
                display: 'flex',
                alignContent: 'center',
                padding: 0,
              }}
            >
              <CardImg top width="100%" src={yoda} alt="Card image cap" />
            </Col>
            {cont < 4 && (
              <Col
                xs="12"
                sm="12"
                md="6"
                style={{
                  backgroundColor: '#111',
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
                      margin: '12% 0',
                    }}
                  >
                    <strong>Procedimiento</strong>
                    <div>{qa[cont][contInformation].process}</div>
                    <br />
                    <strong>Criterios</strong>
                    <div>{qa[cont][contInformation].criterion}</div>
                  </div>
                </CardBody>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  {contInformation !== 0 && (
                    <Button
                      color="primary"
                      type="button"
                      className="button-pixel"
                      onClick={antInformation}
                    >
                      Retroceder
                    </Button>
                  )}
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
                </div>
              </Col>
            )}
          </Row>
        </div>
      </Modal>
      <Modal
        centered
        toggle={() => setShowModalQuestions(!showModalQuestions)}
        isOpen={showModalQuestions}
        backdrop="static"
        size="xl"
      >
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
            {cont < 4 && (
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
                    <div>PREGUNTAS</div>
                    {/* <Timer ref={timer} /> */}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {questionA[cont][contQuestion].question}
                  </CardSubtitle>
                  <div
                    style={{
                      textAlign: 'justify',
                      paddingRight: '10px',
                    }}
                  >
                    <FormGroup tag="fieldset">
                      {questionA[cont][contQuestion].options.map(
                        (question, index) => (
                          <FormGroup check key={index}>
                            <Label check>
                              <Input
                                type="radio"
                                value={question.id}
                                checked={selectOption === question.id}
                                onChange={onChangeOption}
                              />{' '}
                              {question.name}
                            </Label>
                          </FormGroup>
                        )
                      )}
                    </FormGroup>
                  </div>
                </CardBody>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                >
                  <Button
                    color="primary"
                    type="button"
                    className="button-pixel"
                    onClick={contQuestion === 2 ? nextLevel : nextQuestion}
                  >
                    {contQuestion === 2
                      ? 'Siguiente Nivel'
                      : 'Siguente Pregunta'}
                  </Button>
                </div>
                <Alert color="light" isOpen={showAlert}>
                  {answerVer}
                </Alert>
              </Col>
            )}
          </Row>
        </div>
      </Modal>
    </div>
  )
}
