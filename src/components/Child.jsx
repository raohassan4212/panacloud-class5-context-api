import { useContext } from "react";
import CounterContext from "../CounterContext";

const Child = () => {
    let counter = useContext(CounterContext);
    console.log(counter);
    return (
        <>
            <h1>This is child {counter[0]}</h1>
            <button onClick={() => counter[1](++counter[0])} >Increment</button>
        </>
    );
}

export default Child;