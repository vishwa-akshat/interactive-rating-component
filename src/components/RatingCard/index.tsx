import Button from "../Button";
import Card from "../Card";
import RatingNumberList from "../RatingNumberList";
import StarIcon from "../StarIcon";

import { useGlobalStore } from "../../store/globalStore";

import "./style.scss";

export default function RatingCard() {
    const setIsRatingSubmitted = useGlobalStore(
        (state) => state.setIsRatingSubmitted
    );

    const handleBtnClick = () => setIsRatingSubmitted(true);

    return (
        <div className="rating-card-wrapper">
            <Card>
                <StarIcon />
                <h1 className="title">How did we do?</h1>
                <p className="description">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to hrlp us improve our offering.
                </p>
                <RatingNumberList />
                <Button label="submit" onClick={handleBtnClick} />
            </Card>
        </div>
    );
}
