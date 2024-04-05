import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    return (
        <div>
            <ChildComponent name="Younho" age={30} />
        </div>
    );
}

export default ParentComponent;