import "../App.css";

export default function CardAnimal(props) {
    return (
        <div className="cardAnimal">
            <img src={props.imagemAnimal} alt="animal" />
        </div>
    )
}