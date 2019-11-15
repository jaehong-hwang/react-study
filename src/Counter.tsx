import * as React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ActionCreators } from './store';

function Counter() {
    const store = useStore<number>();
    const handleIncrease = React.useCallback(() => {
        store.dispatch(ActionCreators.increaseCount());
    }, []);
    const handleDecrease = React.useCallback(() => {
        store.dispatch(ActionCreators.decreaseCount());
    }, []);
    const handleReset = React.useCallback(() => {
        store.dispatch(ActionCreators.resetCount());
    }, []);
    return (
        <div>
            CounterValue: {store.getState()}
            <button onClick={handleIncrease}>Up</button>
            <button onClick={handleDecrease}>Down</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter
