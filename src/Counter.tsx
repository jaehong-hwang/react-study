import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionCreators } from './store';

function Counter() {
    const state = useSelector<number, number>(state => state);
    const dispatch = useDispatch();
    const handleIncrease = React.useCallback(() => {
        dispatch(ActionCreators.increaseCount());
    }, []);
    const handleDecrease = React.useCallback(() => {
        dispatch(ActionCreators.decreaseCount());
    }, []);
    const handleReset = React.useCallback(() => {
        dispatch(ActionCreators.resetCount());
    }, []);
    return (
        <div>
            CounterValue: {state}
            <button onClick={handleIncrease}>Up</button>
            <button onClick={handleDecrease}>Down</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter
