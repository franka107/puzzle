import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  Jumbotron,
} from 'reactstrap'

export default function HomePage() {
  return (
    <div style={{ height: 'calc(100% - 82px)' }}>
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-6">
            <p className="fs-2 text-center text-wrap bg-success">Bienvenido!</p>
            <p className="fs-4 text-center text-wrap bg-success">
              Antes de empezar, infórmanos un poco sobre tí y a divertirse
            </p>
            <Card className="">
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Nombre o apodo</Label>
                    <Input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Petito123 o John Smith"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="race">Carrera</Label>
                    <Input type="select" name="race" id="race">
                      <option>Medicina</option>
                      <option>Ingeniería Metalurgica</option>
                      <option>Otros</option>
                    </Input>
                  </FormGroup>
                  <Button className="mt-2" color="success">
                    Empezar
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-6"></div>
    </div>
  )
}
