import React from "react";

import "./style.scss";

type Props = {
    children: React.ReactNode;
};

export default function Card({ children }: Props) {
    return <div className="card-wrapper">{children}</div>;
}
