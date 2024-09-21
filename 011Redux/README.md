# Redux Toolkit
Redux Toolkit is a set of tools that helps you work with Redux in a more efficient and scalable way
*   **Redux Toolkit** is a set of tools that helps you work with Redux in a more
efficient and scalable way. It includes a set of pre-built functions and
utilities that simplify the process of setting up and working with Redux.

A store which will have single store of truth
then store will have mini store like auth and all


reducer : if we want to make changes in the store, we use reducers (functions)

# useSelector
useSelector is a hook that allows you to access the state of the Redux store
*   **useSelector** is a hook that allows you to access the state of the Redux
store. It takes a selector function as an argument, which is used to determine
which part of the state to extract.

# useDispatch
useDispatch is a hook that allows you to dispatch actions to the Redux store
*   **useDispatch** is a hook that allows you to dispatch actions to the Redux
store. It returns the dispatch function, which can be used to dispatch actions.


------------------ CHATGPT -------------------------------

# Redux Toolkit Essentials

### `configureStore()`
- Simplifies store setup by auto-combining reducers, applying middleware, and enabling dev tools.
- Includes `redux-thunk` by default but allows adding additional middleware.

**Example**:
```js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```

### `createReducer()`
- Provides a more readable and maintainable way to handle actions with reducer logic, avoiding switch statements.
- Uses Immer under the hood to handle immutable updates with a mutative style.

**Example**:
```js
const todosReducer = createReducer([], {
  addTodo: (state, action) => {
    state.push(action.payload);
  },
  toggleTodo: (state, action) => {
    const todo = state.find(todo => todo.id === action.payload);
    todo.completed = !todo.completed;
  },
});
```

### `createAction()`
- Generates an action creator function for dispatching actions, which comes with a `.toString()` method for using the type easily in reducers.

**Example**:
```js
const addTodo = createAction('addTodo');
dispatch(addTodo({ id: 1, text: 'Learn Redux Toolkit' }));
```

### `createSlice()`
- Combines action creators and reducers into a single entity, reducing boilerplate.
- Creates a slice reducer based on the provided initial state and reducers.

**Example**:
```js
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => { state.push(action.payload); },
    toggleTodo: (state, action) => { 
      const todo = state.find(todo => todo.id === action.payload); 
      todo.completed = !todo.completed; 
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

### `createAsyncThunk()`
- Used for creating thunks that handle async logic like fetching data, automatically dispatching pending, fulfilled, or rejected actions based on a promise.

**Example**:
```js
const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId) => {
  const response = await userAPI.fetchById(userId);
  return response.data;
});
```

### `createEntityAdapter()`
- Helps manage normalized state (such as collections of items) by generating reducers and selectors.

**Example**:
```js
const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: todosAdapter.addOne,
    removeTodo: todosAdapter.removeOne,
  },
});

export const { selectAll: selectTodos } = todosAdapter.getSelectors((state) => state.todos);
```

### `createSelector()`
- Part of the `reselect` library, this helps in creating memoized selectors that can derive and compute data from the state.

**Example**:
```js
const selectActiveTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.filter(todo => !todo.completed)
);
```

-------------------------- CHATGPT ----------------------------------------
```javascript

```

## Step 1
create a folder where we can make store , like store.js

## Step 2
````javascript
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({});
````

Here we created the Store

## Step 3
!! in Redux toolkit, the Reducers are made little differently

#### We Use Slices

create new folder as features
then the feature folder
and then the file for example todoSlice.js

## Step 4
in todoSlide.js

```javascript
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text; // update the todo text if found
            }
        }
    }
    })

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
```
here we have done

1. In Reduxtool, we have inital stafe and we create one 
```javascript
const initialState = {
    todos: []
}
```

2. then we create todoSlice , where we have 3 things
    * name
    * initialState
    * reducers
name is what we give it to it,
initalizing stage of the slicer
and then the reducers, which are nothing but the functionalities

3. lets see how reducers works

```javascript
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text; // update the todo text if found
            }
        }
    }
    })
```
### state and action
reducers whichever we make will recive two things
the state and the action

the state is nothing just state of the object in which we have data, in this case todos
and the action is the value which will be recieved back to you, in which we have object payload
now payload can have anything like id, or text or anything etc


lets understand the updateTodo

updateTodo : (state,action) =>{
    const todo = state.todos.find((todo) => todo.id === action.payload.id);
    if (todo) {
    todo.text = action.payload.text 
    }
}

here we get the state and action, and we know in action we will get the id and the text which is new now
and then in todo we put the value from the todos

and then in todo.text = action.payload.text

meaning changing the text of that todo

!! imp message

alot of work is done in backside, thanks to the toolkit

When you modify the todo.text, you're actually mutating the state inside the Redux reducer. But Redux Toolkit (@reduxjs/toolkit) uses a library called Immer behind the scenes to make this work correctly, without you needing to manually clone the state.


## Step 5
now export all the individal values from the todoSlice

## step 6

```javascript 
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
```
This is where we store the reducer of todoReducer and configure it    

## step 7
USING OF useDispatch from react-redux
```javascript
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
}

```
Here we are using

- `useDispatch` hook from react-redux to get the dispatch function
- `addTodo` action from todoSlice to add a new todo to the store
- `useState` hook to store the input value in the component's state
- `addTodoHandler` function to handle the form submission and dispatch the action

here we get input in state and then when onSubmit we call function `addTodoHandler` and then we 
dispatch(addtodo(input)) // this is where we dispatch the text in addtodo
and then we clear the input field

!!!!! Remember
### useDispatch -> uses reducer -> to make changes in store

## Step 8

```javascript
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
```

here in todos, we got the access of the state, which we can display ONLY

## Step 9
Now to wrap it, we can do it like this

```javascript
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```
