import React, {FC} from "react";
import {ISwitch} from "./interface";
import "./style.scss";
import {Input} from "../Input";
import {Select} from "../Select";

export const Switch: FC<ISwitch> = (props: ISwitch) => {
    const {step} = props;

    switch (step) {
        case 1:
            return <>
                <Input title={'Email'} type={'email'}/>
                <Input title={'Номер телефона'} type={'tel'}/>
                <Input title={'ФИО'}/>
            </>;
        case 2:
            return <>
                <Input title={'Дата рождения'} type={'date'}/>
                <Input title={'Адрес проживания'}/>
                <Input title={'Сумма дохода в рублях'} type={'number'}/>
            </>;
        case 3:
            return <>
                <Select title={'Семейное положение'}
                        option={['Женат/замужем', 'Не женат/не замужем', 'Разведен/разведена', 'Вдовец/вдова']}/>
                <Select title={'Тип занятости'}
                        option={['Полная занятость', 'Частичная занятость', 'Проектная работа', 'Волонтерство', 'Стажировка']}/>
            </>;
        default:
            return <></>
    }
}