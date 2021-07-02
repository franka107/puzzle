import { useEffect, useState, useRef } from 'react'
import Puzzle from '../components/Puzzle'
import level1 from '../assets/images/nivel1.jpg'
import level2 from '../assets/images/nivel2.jpg'
import level3 from '../assets/images/nivel3.jpg'
import level4 from '../assets/images/nivel4.jpg'
import Timer from '../components/Timer'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

export default function LevelPage() {
  const [count, setCount] = useState(2)
  const [showModal, setShowModal] = useState(false)
  const [next, setNext] = useState(true)
  const timer = useRef(null)

  function verify() {
    setCount(count + 1)
    setShowModal(true)
    setNext(false)
    timer.current.pauseTimer()
  }

  function nextLevel() {
    setShowModal(false)
    setNext(true)
    timer.current.initTimer()
  }

  return (
    <div className="content-game">
      <div className="d-flex justify-content-center game">
        <div>
          <div>
            <Timer ref={timer} />
          </div>
          <div className="d-flex">
            {count === 2 && next ? (
              <Puzzle image={level1} onDone={verify} level={count} />
            ) : (
              <div
                style={{
                  height: '300px',
                }}
              ></div>
            )}
            {count === 3 && next ? (
              <Puzzle image={level1} onDone={verify} level={count} />
            ) : (
              ''
            )}
            {count === 4 && next ? (
              <Puzzle image={level1} onDone={verify} level={count} />
            ) : (
              ''
            )}
            {count === 5 && next ? (
              <Puzzle image={level1} onDone={verify} level={count} />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Modal
        centered
        toggle={() => setShowModal(!showModal)}
        isOpen={showModal}
      >
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setShowModal(!showModal)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={nextLevel}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
