import { ReactNode } from "react";

interface CenterThProps {
    title: ReactNode;
    width?: number;
}

export const CenterTh = ({ title }: CenterThProps) => {
    return (
        <th style={{ textAlign: "center", whiteSpace: "nowrap" }}>{title}</th>
    );
};

export const CenterTd = ({ width, title }: CenterThProps) => {
    return (
        <td width={width} style={{ textAlign: "center" }}>
            {title}
        </td>
    );
};
