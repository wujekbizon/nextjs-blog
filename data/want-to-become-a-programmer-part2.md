---
title: 'Want to become a Programmer part 2'
excerpt: 'Introductions to Programming to stand out from the crowd. My Tech Stack: React, NextJS and Typescript.'
image: 'hero.jpeg'
isFeatured: true
date: '2022-10-31'
---

# 1.Introductions to Programming to stand out from the crowd.

Hello and welcome to part 2 of Want to become a programmer article. I hope you guys enjoyed part 1 , for those who missed it , you can find it [here](/posts/want-to-become-a-programmer-part1). Before I will jump into the main content of my article. I want to say few words about how to stand out from the crowd, how to become a programmer **from my point of view**.

I think that the most important thing that anyone who wants to become a programmer must have, is that 'thing' this something that will make you curious and will push you inside that never ending world of possibilities. Where each one of us can create, shape and share our creations with others. In order to that we need to learn a new tools to accomplish this. So we start to learn a new programming language, and to become better at programming, we learn another one and then another.

So I love this part of being a developer and continuously learning something new , that way I know for sure that my skills are growing. There is one thing that I hate the most, when I'm learning something new and then I find out that this thing is not used anymore - well that's a bummer. To avoid this before we start a learning process we should do the research and see what is the most used current tech stack.

# 2.Tech Stack.

First we need to choose a programming language, I'll go with Javascript because it's my favorite programming language and it's very popular. Then we should choose a framework for creating this interaction with the user. Here we got few options, very good but not beginners friendly Angular , React which is my choice , and Vue which is becoming more popular lately.
The reasons I went with React framework are two. Firstly, it's easy to learn especially for beginners and for most, It's becoming a first choice soon right after learning Javascript. Secondary and for me the most important thing is because, my next skill that I chose for completing my tech stack is build on top of React . I'm talking here about Next.js . Let's stop my thoughts for a minute , come back where we finished last time to our useSyncExternalStore and let's **write some code**.

# 3.Server Side Rendering.

Now there is one complicating factor which is server-side rendering, so in order to test that what I need is exactly the Next.js because that's one of the frameworks that supports server-side rendering or ssr. Let's go back up a directory and create next app and call it ssr and then run it.

```js
npx create next-app ssr
npm run dev
```

We have our standard out-of-the-box Next app so let's go and pare it down a little and then let's use same styles we used over in the csr app.

![store](store.png)

So now I want to bring our store , let's create src folder and copy store.js from our csr project and paste that in there.

![index file](index.png)

Over in our index.js we kind of want to bring in exactly what we had before so let's in app.jsx, copy all that and paste that into out index.js
import store from '../src/store

```js
import store from '../src/store';
```

import it's from the wrong location so let's go and change that. Let's actually run it and see if it's work.

![NextJs error](error.png)

Hmm...it kind of works but it's actually throwing a rod on this useSyncExternalStore and the reason it's doing that is because what the Next.js folks have done is they've actually what's called monkey patched useSyncExternalStore to change the API a little bit. Now in Next.js that third argument that get server snapshot is now required.

So in order to do that the easiest thing in this case because we're not actually using getServerSideProps or getStaticProps yet , is just to replicate the existing getSnapshot, that first one.

```js
// index.js

import store from '../src/store';
import { useSyncExternalStore } from 'react';

const useStore = (selector = (state) => state) =>
  useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getState())
  );
```

Let's take a look if it works and yes, it does works. It does exactly the same thing as our csr app. Now this isn't quite right because this getServerSnapshot should always return the exact same value and that actually does work in this case because we're actually selecting down to primitive values but if you're selecting to an object this is not quite the right thing to do. What we really want to do, is we want to try to see, how to route the state that we have coming out of the initial fetch of the application to getServerSideProps and propagate that to our store.

So the first thing I need to do is create and export a new function. It's going to be getServerSideProps function and in a Next.js app you just return a set of props. We're going to set that to the initialState where we'll say value 1, I'll just give it some random values so 12 and value 2 is 14. Let's route initialState to our app. Now we need to route our initialState from App component all the way up to this useStore and the easiest way to do that would be to use context. This useStore is a custom hook , it exists within the context of our application therefore it has access to react context so we can share it through a react context.

I'll import createContext and also useContext because I'll use it too. Let's create that context , I'll call this serverContext and we really don't need a value because we're going to define that value right away down in our App. So I'll wrap my App with ServerContext.Provider and give it that initialState as a value. Now we've got our initialState shared through this context. Let's have it accessible over in our useStore and to do that I'll use the useContext hook and then down here in our store.getState instead for the server side rendering I'll just do useContext and then give it the ServerContext.

```jsx
// index.js

import store from '../src/store';
import { useSyncExternalStore, createContext, useContext  } from 'react';

export function getServerSideProps() {

  return {
    props: {
      initialState: {
        value1: 12,
        value2: 14,
      },
    },
  };
}

const ServerContext = createContext();

const useStore = (selector = (state) => state) =>
  useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(useContext(ServerContext))
 );

{...}

function App({initialState}) {
  return (
    <ServerContext.Provider value={initialState}>
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
    </ServerContext.Provider>
  );
}


export default App;
```

Let's go and run this. Hmmm .. All right we can see that value 1 and value 2 is still 0 which is the initial state of the store, so why is that well . If we go take a look at view page source , we can see that this is the response coming back from the server (the initial server side render) and what we can see is actually value 1 when we are doing server render is 12 and value 2 is 14 at that time, because at that time it's actually being fed off of this useContext. The problem is that then the client side runs and the client side state is initialized to value 1 at 0 and value 2 at 0. So what we really need to do is initialize the store on the client side as well. To do that we should go and create a new method on our store and call it serverInitialize and it will take a state and then set currentState to that state.

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
    serverInitialize: (initialState) => {
      currentState = initialState;
    },
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
```

![state](state.png)

I'll go back over to index.js , initialize that state and see how it go. All right looks good.

```jsx
// index.js

function App({ initialState }) {
  store.serverInitialize(initialState);
  // {...}
}

export default App;
```

Now there is a little hidden gotcha here and that's because this app if it were to re-render would re-initialize that store with that initialState. So we really only ever want to call this the once and we can actually trap that on the store side by putting in a little flag to say are we initialized. I'll start that at false and then I'll only set the state if we are not initialized. Then I'll set isInitialized to true and that makes sure that we don't ever get called twice.

```js
// store.js;

function createStore(initialState) {
  let currentState = initialState;
  const listeners = new Set();
  let isInitialized = false;

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
    serverInitialize: (initialState) => {
      if (!isInitialized) {
        currentState = initialState;
        isInitialized = true;
      }
    },
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
```

Well let's try to do something more complicated , what we going to do now is we're going to do it in Typescript.

# 4.Typescript.

Before we actually start writing some code let's come back to our Tech Stack. Typescript is in high demand. With the latest developments TypeScript has become one of the most used programming languages! When I started learning Typescript I still didn't fully understand Javascript, so by adding new layer of difficulty which is a whole Typescript setup I thought that this completely lack of sense and I will not use it. I was so wrong, actually now when I'm creating a new project in React or Next.js I'm always adding Typescript. Like one of my mentors said once , Typescript is like a invisible friend who stay by your side and from time to time pointing you in a right direction. So yes, Typescript is a must and I highly recommend to use it in your projects.

# 5.useSyncExternalStore with Typescript and generics.

Before we start converting our ssr project into Typescript I just want to keep in mind what the goal is here, why I'm actually want to use Typescript. So the goal I think for me is:

1. To make sure that the entire app is type safe , so I have types for everything.

2. And that our createStore is reusable.

We will work on ssr project wrote in Next.js, so let's quickly convert it to Typescript. First I'll create new folder and call it a ssr-ts then copy my whole ssr project into it. Then let's change store.js into store.ts and index.js into index.tsx. Now re-run the server to acknowledge that there are changes in the file names. Next.js will throw an error that said it looks like we're using Typescript so we need to add some dependencies.

```node
npm install --dev typescript @types/react @types/node
```

That will add Typescript to our project and also create tsconfig.json file where quickly let's change only one thing - "strict" :true. We can see bunch of red squiggles, coming up already in store.ts and in index.tsx. Let's get rid of them, I think the best is to start from store.ts.

We need to define what initialState is, so let's define and export(we'll need that in another file) a type and call it a ValuesStore. Now we have a reusable type which I can then use in our store.ts as well as in other files. Also we need to type this listener, which is a function that doesn't return anything and takes in this case the currentState. I'll pass and argument of state and that would be a type of ValuesStore. The last thing to type is a Set, to do that we need to use the generic syntax to define that type.

```ts
// store.ts

export type ValuesStore = { value1: number; value2: number };

function createStore(initialState: ValuesStore) {
  let currentState = initialState;
  const listeners = new Set<(state: ValuesStore) => void>();
  let isInitialized = false;

  return {
    getState: () => currentState,
    setState: (newState: ValuesStore) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe: (listener: (state: ValuesStore) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    serverInitialize: (initialState: ValuesStore) => {
      if (!isInitialized) {
        currentState = initialState;
        isInitialized = true;
      }
    },
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
```

Everything actually looks pretty good so let's head on over then to our index.tsx.

Let's import type ValuesStore and now I can specify down in our App component that our initialState is a type od ValuesStore. So let's take a look over at DisplayValue and IncementValue our two little components. They both take item as a props and an item in this case is the keyof a ValuesStore. Our ValuesStore has two keys in it value 1 and value 2 and our item has to be one of those two things. I'll go to IncrementValue and say that the item is a keyof ValuesStore, meaning it has to be one of the keys in ValuesStore. Same thing I'll do for DisplayValue component.

Ok so let's go over to our useStore and type this selector. So a selector is going to be a function, it's going to in this case return a number and it's going to take as input the state. That leaves us with the context stuff.

```tsx
// index.tsx

import store, { type ValuesStore } from '../src/store';
import { useSyncExternalStore, createContext, useContext } from 'react';

export function getServerSideProps() {
  return {
    props: {
      initialState: {
        value1: 12,
        value2: 14,
      },
    },
  };
}

const ServerContext = createContext();

const useStore = (selector: (state: ValuesStore) => number) =>
  useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(useContext(ServerContext))
  );

const DisplayValue = ({ item }: { item: keyof ValuesStore }) => {
  return (
    <div>
      {item}: {useStore((state) => state[item])}
    </div>
  );
};

const IncrementValue = ({ item }: { item: keyof ValuesStore }) => {
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

function App({ initialState }: { initialState: ValuesStore }) {
  store.serverInitialize(initialState);
  return (
    <ServerContext.Provider value={initialState}>
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
    </ServerContext.Provider>
  );
}

export default App;
```

Let's actually get rid of all of this context stuff, because really down in our serverInitialize we get the state. Instead of using a provider to pass it around we could just hold a copy of that in the store. So in our _store.ts_ let's change few things

```ts
//  store.ts

export type ValuesStore = { value1: number; value2: number };

function createStore(initialState: ValuesStore) {
  let currentState = initialState;
  const listeners = new Set<(state: ValuesStore) => void>();
  let serverState: ValuesStore | null = null;

  return {
    getState: () => currentState,
    setState: (newState: ValuesStore) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe: (listener: (state: ValuesStore) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    serverInitialize: (initialServerState: ValuesStore) => {
      if (!serverState) {
        currentState = initialServerState;
        serverState = initialServerState;
      }
    },
    getServerState: () => serverState ?? initialState,
  };
}

const store = createStore({
  value1: 0,
  value2: 0,
});

export default store;
```

and now we can go back to our index.tsx and get rid of the context stuff.

```tsx
 // index.tsx

import store,{ type ValuesStore } from '../src/store';
import { useSyncExternalStore } from 'react';

export function getServerSideProps() {
  return {
    props: {
      initialState: {
        value1: 12,
        value2: 14,
      },
    },
  };
}

const useStore = (selector: (state: ValuesStore ) => number) =>
  useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => selector(store.getServerState())
  );

{...}

function App({ initialState }: { initialState: ValuesStore }) {
 store.serverInitialize(initialState);
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
}
export default App;
```

Let's see if it works and yes it actually does. So we now have a completely type safe application from tip to tail. The next thing we want to do is, we want to make this createStore a reusable, meaning, that we can have multiple different stores with different shapes simultaneously. I think we should move useStore into the store so that when you create a store you get a new hook and that hook is specifically type safe to that store.

```ts
// store.ts

import { useSyncExternalStore } from 'react';

export type ValuesStore = { value1: number; value2: number};

function createStore(initialState: ValuesStore) {
  let currentState = initialState;
  const listeners = new Set<(state: ValuesStore) => void>();
  let serverState: ValuesStore | null = null;
  const subscribe = (listener: (state: Shape) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return {
    getState: () => currentState,
    setState: (newState: ValuesStore) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe,
    serverInitialize: (initialServerState: ValuesStore) => {
      if (!serverState) {
        currentState = initialServerState;
        serverState = initialServerState;
      }
    },
    getServerState: () => serverState ?? initialState,
    useStore: (selector: (state: ValuesStore ) => number) =>
        useSyncExternalStore(
          subscribe,
          () => selector(currentState),
          () => selector(serverState ?? initialState)
        );
      };
    }


 const store = createStore({
       value1: 0,
       value2: 0,
     });


 export default store;
```

Now in index.tsx we don't have useStore anymore and don't need an import for useSyncExternalStore. Also we need to make changes in DisplayValue component, so It'll have an access to useStore from our store.

```tsx
import store, { type ValuesStore } from '../src/store';

type Props = {
  initialState: ValuesStore;
};

export function getServerSideProps() {
  return {
    props: {
      initialState: {
        value1: 12,
        value2: 14,
      },
    },
  };
}

const DisplayValue = ({ item }: { item: keyof ValuesStore }) => {
  return (
    <div>
      {item}: {store.useStore((state) => state[item])}
    </div>
  );
};

const IncrementValue = ({ item }: { item: keyof ValuesStore }) => {
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

function App({ initialState }: Props) {
  store.serverInitialize(initialState);
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
}

export default App;
```

Let's refresh and it's works, awesome. So now we have a type safe useStore that's coming out of our createStore. Let's make, createStore now to be fully reusable. First let's make useStore generic.

```ts
// {...}

useStore: <SelectorOutput>(
  selector: (state: ValuesStore) => SelectorOutput
): SelectorOutput =>
  useSyncExternalStore(
    subscribe,
    () => selector(currentState),
    () => selector(serverState ?? initialState)
  );

// {...}
```

Now our useStore is more generic and more reusable but how about the whole store, so let's try that out let's go and build a completely generic createStore. I'll go and create a new file called createStore.ts .

```ts
// createStore.ts

import { useSyncExternalStore } from 'react';

export default function createStore<Shape>(initialState: Shape) {
  let currentState = initialState;
  const listeners = new Set<(state: Shape) => void>();
  let serverState: Shape | null = null;
  const subscribe = (listener: (state: Shape) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return {
    getState: () => currentState,
    setState: (newState: Shape) => {
      currentState = newState;
      listeners.forEach((listener) => listener(currentState));
    },
    subscribe,
    serverInitialize: (initialServerState: Shape) => {
      if (!serverState) {
        currentState = initialServerState;
        serverState = initialServerState;
      }
    },
    getServerState: () => serverState ?? initialState,

    useStore: <SelectorOutput>(
      selector: (state: Shape) => SelectorOutput
    ): SelectorOutput =>
      useSyncExternalStore(
        subscribe,
        () => selector(currentState),
        () => selector(serverState ?? initialState)
      ),
  };
}
```

Let's go back to store.ts and import our createStore and get rid of this old implementation. Let's see if it still works and it does, that's awesome.

```ts
// store.ts

import createStore from './createStore;

export type ValuesStore = {
  value1: number;
  value2: number;
};


const store = createStore({
  value1: 0,
  value2: 0,
});


export default store;
```

There is one more thing , we have kind of a duplication here because if you look at store.getState the output of store.getState is that shape. So instead of defining it we can just use a utility type to grab that type and we do that using ReturnType.

```ts
// store.ts

import createStore from './createStore';

const store = createStore({
  value1: 0,
  value2: 0,
});

export type ValuesStore = ReturnType<typeof store.getState>;

export default store;
```

Finally we got this complete, we have createStore that's fully reusable that can be use with any shape.

# 6.Summary.

Don't know how about you guys, but for me that was a great experience , during which I learn a lot about not only a Typescript but also about programming . Of course this is not the last time that We will discover the world of Typescript, but because this topic is more advanced stuff, in next part I will be focusing on more beginners friendly materials.

If you interested in my projects portfolio website here is a [Grzegorz Wolfinger Portfolio Website](https://g-w.vercel.app/)

### Grzegorz Wolfinger

_React Developer | Software Engineer | Javascript Engineer_
