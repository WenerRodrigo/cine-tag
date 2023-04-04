import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import videos from "json/db.json";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      
      <Banner imagem="home" />
      <Titulo>
        <h1>Aqui você pode guardar seus vídeos séries e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      
    </>
  );
}

export default Inicio;
