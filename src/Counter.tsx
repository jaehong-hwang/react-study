import * as React from "react";
import { CounterContext } from "./context";

function Counter() {
    const context = React.useContext(CounterContext);
    return (<div>CounterValue: {context.value}</div>);
}

export default Counter
