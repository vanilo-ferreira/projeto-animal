import "../App.css";
import ImagemCachorro from '../assets/cachorro.jpg';
import ImagemGato from '../assets/gato.jpg';

export default function CardAnimal(props) {
    return (
        <div id="CardAnimal">
            <img src={props.tipoAnimal === "cachorro" ? ImagemCachorro : ImagemGato} alt="animal" />
        </div>
    )
}