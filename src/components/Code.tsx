import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Loader from "../components/Loader";

import "../styles/code.scss"

import { changeSuccess } from "../store/slices/stepSlice";

interface CodeValues {
    first: number | '',
    second: number | '',
    third: number | '',
    fourth: number | '',
}

const Code: React.FC = () => {
    const dispatch = useDispatch();

    const [isLoader, setIsLoader] = React.useState(false);

    const [inputs, setInputs] = useState<CodeValues>({
        first: '',
        second: '',
        third: '',
        fourth: '',
    })

    function handleChange(event: any) {
        let name = event.target.name;
        let value = event.target.value;

        if (event.target.value !== '') {
            event.target.classList.add('code__input-ready');
        } else {
            event.target.classList.remove('code__input-ready');
        }

        if(event.target.value.length === 1 && event.target.name !== 'fourth'){
            event.target.nextSibling.focus();
        }
        
        setInputs(prev => {
            if (value.length <= 1) return {
                    ...prev,
                    [name]: value
                }
            else return prev;
        })
    }

    function keys<T extends object>(obj: T) {
        return Object.keys(obj) as Array<keyof T>;
    }

    useEffect(() => {
        let count: number = 0;
        for (let key of keys(inputs)) {
            if (inputs[key] !== '') {
                count ++;
            }
        }
        if (count !== 4) return;
        setIsLoader(true);
        fetch(`http://localhost:8080/document/${localStorage.getItem('userId')}/sign/code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(7201)
        }) 
        .then(res => {
            setIsLoader(false);
            console.log(res.status);
            if (res.status === 200) {
                localStorage.setItem('success', 'ok');
                dispatch(changeSuccess(true));
            } else {
                setInputs( prev => {
                    for (let key of keys(prev)) {
                        prev [key] = '';
                    }
                    return prev;
                }) 
            }
        })
        .catch(err => {
            setIsLoader(false);
            console.log(err);
        });
    }, [inputs])

    return (
        <>   
            {!isLoader && <div className="code">
                <h2 className="code__title">Please enter confirmation code</h2>
                <div className="code__inputs">
                    <input className="code__input" name="first" autoFocus 
                       value={inputs.first} onChange={handleChange} type="number" />
                    <input className="code__input" name="second"  
                       value={inputs.second} onChange={handleChange} type="number" />
                    <input className="code__input" name="third"  
                       value={inputs.third} onChange={handleChange} type="number"  />
                    <input className="code__input" name="fourth" 
                       value={inputs.fourth} onChange={handleChange} type="number" />
                </div>
                <p className="code__error">Invalid confirmation code</p>
            </div>}
            {isLoader && <Loader />}
        </>
    )
}

export default Code;