import {FC} from "react";
import {ISelect} from "./interface";
import "./style.scss";

export const Select: FC<ISelect> = (props: ISelect) => {
    const {title, option} = props;

    return (
        <div className="select-block">
            <h5 className="select-block__title">{title}</h5>
            <select className="select-block__place">
                {[...option].map((item, index) =>
                    <option key={index} value={item}>{item}</option>)}
            </select>
        </div>
    )
}