import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useEffect, useState, useRef } from 'react'

export default function Modal() {
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
  const [qa, setQA] = useState(questionAnswers)

  return (
    <div>
      <Modal
        centered
        toggle={() => setShowModal(!showModal)}
        isOpen={showModal}
        backdrop="static"
      >
        <ModalHeader>
          <div
            style={{
              color: '#000',
            }}
          >
            Modal title
          </div>
        </ModalHeader>
        <ModalBody>
          <strong>RESPUESTA DE LANDAU</strong>
          <div>
            Procedimiento: suspenda al niño en una posición prona proporcionando
            apoyo en el abdomen alto con la palma de su mano. Ponga su otra mano
            en la parte baja de la espalda del niño. Note la posición de la
            cabeza del niño, tronco y piernas. Criterio: una respuesta completa
            se ve a los 4.5 meses con la extensión de la cabeza, espalda y
            piernas. Una respuesta incompleta se ve con la extensión solamente
            de la cabeza o de la espalda. De los 6 a 7 meses, el niño puede
            inhibir la contestación voluntaria.
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={nextLevel}>
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
