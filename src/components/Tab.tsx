import React from "react";
import { useState } from "react";
import TabMenu from "./TabMenu";
import TabAbout from "./TabAbout";
import TabRates from "./TabRates";
import TabCashback from "./TabCashback";
import TabFaq from "./TabFaq";
import Wraper from "./Wraper";

import "../styles/tabs.scss";

const Tab: React.FC = () => {
    enum ContentTabs {TabAbout, TabRates, TabCashback, TabFaq};

    const [activeTab, setActiveTab] = useState(ContentTabs.TabAbout);

    function toggleTab(index: number): void {
        setActiveTab(index);
    };

    const tabs : Record<ContentTabs, JSX.Element> = { 
        [ContentTabs.TabAbout]: <TabAbout /> ,
        [ContentTabs.TabRates]: <TabRates />,
        [ContentTabs.TabCashback]: <TabCashback />,
        [ContentTabs.TabFaq]: <TabFaq />
    };

    return (
        <Wraper classes="tab">
            <TabMenu handleclick={toggleTab} activeTab={activeTab} />

            <div className="tabsContent">
                { tabs[activeTab] }
            </div> 
        </Wraper>
    )
}

export default Tab;