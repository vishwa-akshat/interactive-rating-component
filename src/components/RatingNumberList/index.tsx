import RatingNumberButton from "../RatingNumberButton";
import "./style.scss";

export default function RatingNumberList() {
    const ratingArr = [1, 2, 3, 4, 5];

    return (
        <div className="rating-list">
            {ratingArr.map((rating) => (
                <RatingNumberButton label={rating} />
            ))}
        </div>
    );
}
