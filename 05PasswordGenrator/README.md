### UseEffect,UseRef,UseCallback and Usestate

## UseEffect
it lets you chache a () defination between re-renders
useCallback(fn,dependency)
This hook is used to memoize the passwordGenerator function. It will return a memoized version of the callback that only changes if one of the dependencies (length, numberAllowed, characterAllowed, setPassword) has changed. This prevents unnecessary re-creations of the function, which can be useful for performance optimization, especially when passing the function down as a prop to child components or using it in effect hooks.

## UseEffect hook
useEffect(() => {
    // code to be executed on component mount
    }, [dependency]);
 dependency is an array of values that the effect is dependent on
 if the dependency changes, the effect will be re-run

 if the dependency is an empty array, the effect will only be run once, on mount
 if the dependency is not an array, the effect will be run on every render
 if the dependency is a function, the effect will be run on every render, and the
 function will be called with the current props and state as arguments
 if the dependency is a function that returns an array, the effect will be run on every
 render, and the function will be called with the current props and state as arguments,
 and the returned array will be used as the dependency
 if the dependency is a function that returns a promise, the effect will be run on every
 render, and the function will be called with the current props and state as arguments,
 and the promise will be resolved and the effect will be run with the resolved value
 if the dependency is a function that returns a value, the effect will be run on every
 render, and the function will be called with the current props and state as arguments


## UseRef
if we want someone else reference , we make it a variable