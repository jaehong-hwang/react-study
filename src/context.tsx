import * as React from "react";

export interface ICounterContext {
    value: number;
    increase(): void;
    // same with increase: () => void
    decrease(): void;
}

const defaultValue: ICounterContext = {
    value: 0,
    increase() {
        defaultValue.value++;
    },
    decrease() {
        defaultValue.value--;
    }
};

const CounterContext = React.createContext<ICounterContext>(defaultValue);
const Consumer = CounterContext.Consumer

// High Order Context
// 만들었지만.. Typescript 적용때문에 App에 추가를 못했어요..
function HOC<P extends ICounterContext>(
    WrapperComponent: React.ComponentType<P>
) {
    return function HOCWrapper(props: P) {
        // <CounterContext.Consumer> 처럼도 가능
        return (
            <Consumer>
                {context => <WrapperComponent {...props} {...context} />}
            </Consumer>
        )
    }
}

export { defaultValue, CounterContext, HOC };
