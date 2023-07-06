import "./style.scss";

type Props = {
    rating: number | null;
};

export default function SelectionInfoChip({ rating = 0 }: Props) {
    return <div className="chip">You selected {rating} out of 5</div>;
}
