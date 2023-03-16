import React, {FC} from "react";
import {IButton} from "./interface";
import "./style.scss";

export const Button: FC<IButton> = (props: IButton) => {
    const {title, type = "submit", className} = props;

    return (
        <button className={className ? ['button', [...className].join(' ')].join(' ') : 'button'} type={type}>{title}</button>
    )
}