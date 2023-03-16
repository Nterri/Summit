import {FC} from "react";
import {IInput} from "./interface";
import "./style.scss";

export const Input: FC<IInput> = (props: IInput) => {
    const {title, type = 'text'} = props;

    return (
        <div className="input-block">
            <h5 className="input-block__title">{title}</h5>
            <input className="input-block__place" placeholder={title} type={type}/>
            <div className="input-block__error">Ошибка в поле</div>
        </div>
    )
}