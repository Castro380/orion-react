import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container } from 'react-bootstrap';
import Cabecalho from "../componentes/Cabecalho";
import Pagina from '../componentes/Pagina';
import Rodape from "../componentes/Rodape";

export default function Home() {
  return (
      <>
      
      <Pagina/>

      <Container>
        <h1>Hello world!</h1>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
      </Container>
      </>
  )
}