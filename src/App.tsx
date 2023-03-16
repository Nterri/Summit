import React from 'react';
import './App.scss';
import {Switch} from "./Components/Switch";
import {Button} from "./Components/Button";
import axios from 'axios';

function App() {
    const [step, setStep] = React.useState(1);
    const [error, setError] = React.useState(false);
    const [well, setWell] = React.useState(false);
    const lastStep = 3;
    const setTimeMessage = 3;

    const sendDataFile = (input: any, data: any): any => {
        axios({
            method: 'POST',
            url: 'http://localhost/saveFile/', // Поставить папку saveFile на сервер и настроить url
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                step: step,
                data: data,
            }
        }).then(response => {
            if (response.status >= 200 && response.status <= 299) {
                setStep(step + 1);
            }
            [...input].forEach(item => item.value = '');
        }).catch(() => {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, setTimeMessage * 1000)
        })
    }

    const checkValue = (element: any) => {
        let testPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        element.parentElement.classList.remove('error');
        if (element.value == '' || (element.type == 'tel' ? !testPhone.test(element.value) : false)) {
            element.parentElement.classList.add('error');
            return true;
        }
        return false;
    }

    const sumbit = (e: any) => {
        e.preventDefault();
        let input = [...e.target.getElementsByTagName('input')].concat([...e.target.getElementsByTagName('select')]);
        let inputValues = [];
        let errorValues = 0;
        for (let i = 0; i < [...input].length; i++) {
            errorValues = checkValue([...input][i]) ? (errorValues + 1) : errorValues;
            inputValues.push([...input][i].value);
        }
        if (!errorValues) sendDataFile(input, inputValues);
    }

    React.useEffect(() => {
        if (step === (lastStep + 1)) {
            setStep(1);
            setWell(true);
            setTimeout(() => {
                setWell(false);
            }, setTimeMessage * 1000)
        }
    }, [step])

    return (
        <div className="App">
            <div className="container">
                <h1 className="title">Оформление заявки</h1>
                <form onSubmit={(e) => sumbit(e)}>
                    <Switch step={step}/>
                    {step == lastStep
                        ?
                        <Button title={'Отправить'} className={['blue']}/>
                        :
                        <Button title={'Далее'} className={['red']}/>
                    }
                </form>
                <div className={well ? 'message-result show' : 'message-result'}>Заявка оформлена!</div>
                <div className={error ? 'message-result show' : 'message-result'}>Ошибка отправки данных, попробуйте ещё
                    раз!
                </div>
            </div>
        </div>
    );
}

export default App;
