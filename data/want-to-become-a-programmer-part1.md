---
title: 'Want to become a Programmer part 1'
date: '2022-10-15'
image: avatar.png
excerpt: Everything you want to know about Reactive State Management System - built into React. React 18's New State Hook - useSyncExternalStore.
isFeatured: true
---

# 1. Interaction with the User.

![Basic](basic2.png)

During the whole process of my learning, from taking first steps in BASIC almost 3 decades ago , till now , when I'm trying to tame my favorite programming language which is a Javascript. I found out myself, that the most I like in programming is interaction with the user.

So when I decided to start with my learning, I chose Front-end as the right direction to get the most possible interaction with the user. I discovered many useful tools , and one of them was React.js . As many of You might know, it's a JS framework , that is use to create a front-end applications. As soon as I made my first steps into this framework , I've fallen in love with it simplicity, and a way, how it's manage this interaction with the users.

With creating reusable components, passing props across the component tree, managing state... wait a minute state what's that ?

# 2. So what is the state ?

The definition of state says, that the state is a built-in React object that is used to contain data or information about the component. A component's state can change over time, whenever it changes, the component re-renders.

This is a normal behavior of React to listen for any changes to our application and when the changes appear do that re-render of the whole application.

# 3. Reactive State Management System - built into React.

React has two hooks for creating state : useState and useReducer and got three hooks for monitoring state : useEffect , useMemo and useCallback. I don't want to deep dive into how really helpful they are and when used properly can significantly improve the whole overall work of application. I want to write about every one of them in separate article, so for now let's continue.

# 4. What is global state in React ?

In React, originally, the state is held and modified within the same React component . In most applications, different components may need to access and update the same state. This is achieved by introducing the global states in your app.

In other words, if we want only one component to know what state is then we can use useState hook , but if we got many components, our application getting bigger and we want many components to be able to communicate with our state, we should think about switching to a global state management tool.

There are many tools out there , but at least for me, one of the best and the most popular is - Redux.

# 5. React 18's New State Hook - useSyncExternalStore .

Like I said earlier there are two types of state in a react application. There is the internal state of the app which is managed by useState or useReducer and then there is the external store state of the application which should be managed by Redux or other state management tools. The connection between that external store state and the internal state of the app is critical to getting a high performance react app going .

Now with React 18 we have a new hook called useSyncExternalStore that makes it much easier and more standardized to create this synchronization between an external store and the internal state of the react app.

# 6. Let's build a client-side rendering application.

So let's create our app , this time I will use vite , I'm going to call it csr and use a react template because I want to do react. I open up the console and run

```js
npm create vite csr --template react

```

Ok , app is created and running , so the first thing I want to do is build our store so let's create a file called store.js

Lets create a new function which is gonna have our store creator, I'll call it createStore. Now any store is gonna have to have an initial state, so lets' define that, that's the thing that's coming in or is it our initial state and it's going to keep track of the state. So I'm going to have a current state which would be the new state of the system , at the beginning will just be the initial state. Is going to return an object and you're going to have three things in a store. Ability to get the current state of the store which would be getState . setState which is going to set state of the store, it's going to take a new state and it's just going to equate the current state with the new state. The third thing, is going to be how we connect the store to the actual app , but we'll get there.

So the next thing I want to do is actually create that store using that createStore and let's just do two incrementers so I'll have value one start at zero and value two also start at zero. Don't forget to export default store.

```js
 // store.js

function createStore(initialState) {
  let currentState = initialState;
  return {
    getState: () => currentState,
    setState: (newState) =>  (currentState = newState);
  };
 }


 const store = createStore({
    value1: 0,
    value2: 0,
 });

 export default store;

```

So now we have our store , let's go connect that to our app. In my App component I'll do some inline style , I'm going to lay out our App as a grid it's going to have buttons for the incrementer and then the value of the incrementer , pretty simple.

Let's create our IncrementValue component it's going to take an item as a prop and return a button which will say Increment and then the item name. Let's create onClick event handler that will increment that item. So first I will take a current state from the store by doing getState and then I need to increment that particular value I'm going to do store.setState and I'm going to use all the current state and then override the key that we have that item to be the current value of that plus one.

Of course we need to have something to display that value, so let's go and create another component called DisplayValue that will take an item and it's gonna return a div and in that div the current value for that particular item, so I'm gonna getState and then dereference that to that item.

```jsx
// App.jsx
import store from './store';

const DisplayValue = ({ item }) => (
  <div>
    {item}: {store.getState()[item]}
  </div>
);

const IncrementValue = ({ item }) => {
  return (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({
          ...state,
          [item]: state[item] + 1,
        });
      }}
    >
      Increment {item}
    </button>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 600,
        gap: '1rem',
      }}
    >
      <IncrementValue item="value1" />
      <DisplayValue item="value1" />
      <IncrementValue item="value2" />
      <DisplayValue item="value2" />
    </div>
  );
};

export default App;
```

Unfortunately this code will not work , technically it will but we will not see any changes because we haven't actually synchronized the react state with the state of the store. The store has changed but our react app doesn't know about it. So we need to do is create a connection between the react app and the store and create a way for us to subscribe and listen for any changes to that store.

In order to do that, I will create a subscribe function that'll take a listener which is a function that gets called back whenever the store changes. Now to track that, I need a list of all our subscribers, so I'll create a constant called listeners and I'll use a Set for that. For those who don't remember Set is just like an array except that you can't have the same item in the array twice and I'm using that, because I only want a particular subscribing function to be in the list of listeners once. Now I add the listener to that list of listeners and I also return an unsubscribe function.

The only thing left to do is actually send out the notification when things change and the only time something changes is when we set the state, so that's the only place that we need to call these listeners. Let's iterate through all those listeners and then with each listener I will call that listening function with the current state.

```js
// store.js
function createStore(initialState) {
  let currentState = initialState;
  const listeners = new Set();
  return {
    getState: () => currentState,
    setState: (newState) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
```

Let's go back to App.jsx and create custom hook that will do two things , it's going to subscribe to the store and then it's going to update the state when things actually change. Now let's use it wherever we display the value of the store . Let's see how we go ... all right we have a cool functioning store and it works.

```jsx
//App.jsx
import { useState, useEffect } from 'react';
import store from './store'; // App.js

const useStore = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => store.subscribe(setState), []);

  return state;
};

const DisplayValue = ({ item }) => (
  <div>
    {item}: {useStore()[item]}
  </div>
);

const IncrementValue = ({ item }) => {
  return (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({
          ...state,
          [item]: state[item] + 1,
        });
      }}
    >
      Increment {item}
    </button>
  );
};

// const App = () => {...)
```

But there is one extra little gotcha , when going to chrome inspector and then going to the react dev tools you need to make sure that highlight updates when component render is checked on

![React Dev Tool](reactdev.png)

and then click on our Increment value1 button and see that sure this updates which is great, value1 changes but value2 also updates , doesn't change its value but updates which it shouldn't because I'm not actually changing value2. So what we need to do is figure out why that's happening.

The problem is in our useEffect , so we do a subscribe we're getting all of the state for the application which is an object that contains both value 1 and value 2 and then we are setting the state to that new object and that is forcing a re-render.

```jsx
useEffect(() => store.subscribe(setState), []);
```

What we really want to do is we want to be more surgical about and use a selector . We want these components for example value 1 display component to say all I'm looking at is value 1 and the way that we do that is by implementing a selector.

Inside DisplayValue component in the useStore we should be able to say that given the state all we really want out of that is the state for my item value 1 or value 2. In our useStore I'm going to add on a selector as an argument and the set the standard implementation to take the state and then just return the whole thing. In order to use this I have to wrap any store.getState with our selector and then selector is going to pare down whatever we want from that store into that result that we're looking for. Now the only thing that updates when I increment value 1 is the display for value 1 and the same thing with value 2.

```jsx
// {...}                                                      //App.jsx

const useStore = (selector = (state) => state) => {
  const [state, setState] = useState(selector(store.getState()));

  useEffect(() => store.subscribe((state) => setState(selector(state))), []);

  return state;
};

const DisplayValue = ({ item }) => (
  <div>
    {item}: {useStore((state) => state[item])}
  </div>
);
// {...}
```

Now the cool thing that's coming in with React 18 is this new hook useSyncExternalStore and it basically does what our custom useStore hook is doing for us. It takes three things. It takes a subscribe function which we know so that's the subscribe function of the store. It takes a getSnapshot which is getting the current state of the store at any given time and the there's a third argument for getServerSnapshot and that's important for ssr(server-side-rendering).

Let's just take a look at these first two, so let's go and replace this useStore with useSyncExternalStore , we're still going to take a selector but we're going to replace all of the implementation with useSyncExternalStore. Now the first argument is the subscribe argument and so we'll give it store.subscribe and the function to get the state would be a function where we want to apply the selector to the store.getState.

```jsx
// App.jsx
import { useSyncExternalStore } from 'react';

const useStore = (selector = (state) => state) =>
  useSyncExternalStore(store.subscribe, () => selector(store.getState()));

const DisplayValue = ({ item }) => {
  return (
    <div>
      {item}: {useStore((state) => state[item])}
    </div>
  );
};

const IncrementValue = ({ item }) => {
  return (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({
          ...state,
          [item]: state[item] + 1,
        });
      }}
    >
      Increment {item}
    </button>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 600,
        gap: '1rem',
      }}
    >
      <IncrementValue item="value1" />
      <DisplayValue item="value1" />
      <IncrementValue item="value2" />
      <DisplayValue item="value2" />
    </div>
  );
};
export default App;
```

Now everything it's working perfect , so this actually doing all of the work for us that , that useState and useEffect was doing before , but doing it in a much more standardized way. So this is showing you exactly how your external store is synchronized with your react app.

For those who want to see fully working implementation, get my [wolfpad](https://www.npmjs.com/package/wolfpad) from npm and then download and copy this file into project where you can install it.

![Place where you should place this file.](root.png)

Get a file here: [useSyncExternalStore.js](https://drive.google.com/file/d/124fEdZrNmxMonWoUMZhI_c5xGO9ZS5f2/view). Then run at terminal you can add or remove content and even share with your friends and coworkers. The idea behind wolfpad is to write code and share with others.

```node
npx wolfpad serve useSyncExternalStore.js
Navigate to http://localhost:4005 to edit the file.
```

And that's all for today , I hope you guys enjoyed and you learned something new on the way, see you next time. On Part 2 I will be exploring Typescript so stay tuned.

![Avatar](avatar2.png)

### Grzegorz Wolfinger

_React Developer | Software Engineer | Javascript Engineer_
