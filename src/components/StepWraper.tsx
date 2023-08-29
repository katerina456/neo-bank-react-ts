import React from "react";

import "../styles/stepWraper.scss";

interface Props {
    children: React.ReactNode,
}

const StepWraper: React.FC<Props> = ({children}) => {
    return (
        <div className="stepWraper">
            {children}
        </div>        
    )
}

export default StepWraper;