import "./style.scss";

type Props = {
    label: string;
};

export default function Button({ label }: Props) {
    return <button className="button">{label}</button>;
}
