import React from "react";

import "../styles/acordeon.scss";

interface Props {
    title: string,
    array: {summary: string, text: string}[],
}

const Acordeon: React.FC<Props> = ({title, array}) => {  
    const [open, setOpen] = React.useState(-1); 

    function toggleDetails(event: React.SyntheticEvent<Element, Event>, index:number):void {
        if (event.target) {
            setOpen(index)
        }
    };

    const generateKey = (str:string) => {
        return `${str}_${ new Date().getTime() }`;
    }

    return (
        <div className="acordeon">
            <h2 className="acordeon__title">{title}</h2>
            {
                array.map((item, index) => {
                    return (
                        <details key={generateKey(item.summary)} className="acordeon__details" open={open === index}
                        onToggle={(event: React.SyntheticEvent) => toggleDetails(event, index)} 
                        >
                            <summary className="acordeon__summary">{item.summary}</summary>
                            <p className="acordeon__text">{item.text}</p>
                        </details>
                    )
                })
            }
        </div>
    )
}

export default Acordeon;