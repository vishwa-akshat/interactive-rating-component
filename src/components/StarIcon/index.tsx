import star from "../../assets/icon-star.svg";
import "./style.scss";

export default function StarIcon() {
    return (
        <div className="icon-wrapper">
            <img src={star} alt="star icon" />
        </div>
    );
}
