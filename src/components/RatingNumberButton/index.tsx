import { useGlobalStore } from "../../store/globalStore";

import "./style.scss";

type Props = {
    label: number;
    isActive: boolean;
};

export default function RatingNumberButton({ label, isActive }: Props) {
    const setRating = useGlobalStore((state) => state.setRating);

    return (
        <button
            className={
                isActive ? "rating-button active-button" : "rating-button"
            }
            onClick={() => setRating(label)}
        >
            {label}
        </button>
    );
}
