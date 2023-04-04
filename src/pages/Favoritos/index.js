import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Card from 'components/Card';
import Titulo from 'components/Titulo';

function Favoritos() {
    return (
        <>
            <Banner img='favoritos.png' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifacio' />
            </section>
        </>
    )
}

export default Favoritos;