import Card from "../Card";

import SelectionInfoChip from "../SelectionInfoChip";

import { useGlobalStore } from "../../store/globalStore";

import thankYouImg from "../../assets/illustration-thank-you.svg";

import "./style.scss";

export default function ThankYouCard() {
    const rating = useGlobalStore((state) => state.rating);

    return (
        <div className="rating-card-wrapper">
            <Card>
                <img
                    className="thank-you-img"
                    src={thankYouImg}
                    alt="thank you"
                />
                <SelectionInfoChip rating={rating} />
                <h1 className="title">Thank you!</h1>
                <p className="description">
                    We appreciate you taking the timr to give a rating. If you
                    ever need more support, don't hesitate to get in touch!
                </p>
            </Card>
        </div>
    );
}
