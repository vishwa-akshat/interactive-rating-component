import "./style.scss";

type Props = {
    label: number;
};

export default function RatingNumberButton({ label }: Props) {
    return <button className="rating-button">{label}</button>;
}
