import React from "react";
import tabMenuArray from "../constants/tabMenu";

import "../styles/tabsMenu.scss";

interface Props {
    handleclick(index: number): void,
    activeTab: number,
}

const TabMenu: React.FC<Props> = (props) => {
    return (
        <div className="tabsMenu">
            {
                tabMenuArray.map((item, index) => {
                    return (
                        <div key={item} onClick={() => props.handleclick(index)}
                            className={`tabsMenu__item ${props.activeTab === index? 'tabsMenu__item-active' : ''}`} 
                        >
                            <p className="tabsMenu__text">{item}</p>
                        </div>
                    )
                })
            }
            <hr />
        </div>
    )
}

export default TabMenu;