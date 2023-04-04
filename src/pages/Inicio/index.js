import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Card from "../../components/Card";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
          <h1>Aqui você pode guardar seus vídeos séries e filmes!</h1>
      </Titulo>
      <Card id="1" titulo="Gato" capa="https://thecatapi.com/api/images/get?format=src&type=png"/>
      <Rodape />
    </>
  );
}

export default Inicio;
