import RatingNumberButton from "../RatingNumberButton";

import { useGlobalStore } from "../../store/globalStore";

import "./style.scss";

export default function RatingNumberList() {
    const ratingArr = [1, 2, 3, 4, 5];

    const rating = useGlobalStore((state) => state.rating);

    return (
        <div className="rating-list">
            {ratingArr.map((rate) => (
                <RatingNumberButton label={rate} isActive={rating === rate} />
            ))}
        </div>
    );
}
