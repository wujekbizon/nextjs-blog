---
title: 'Welcome in 2023 year of AI'
excerpt: 'This Is Jarvis Chat Bot. Its using advanced communication with GPT 3 Model Api. You can ask him for help regarding Javascript, React or any other programming language. It will translate any giving code to another programming language and much more..'
image: 'wolfai.png'
isFeatured: true
date: '2023-1-1'
---

# HAPPY NEW YEAR 2023!!!

_May the New Year bring you happiness, peace, and prosperity. Wishing you a joyous 2023! Remember all the good memories you have made and know that your life will be so full of wonders in the coming year. Happy New Year 2023!_

**Best New Year Wishes To All Of You.**

_Grzegorz Wolfinger | JARVIS_

# 1. Trends in Software Development in 2023.

Hello guys in this new year edition blog article about AI. In today post I will show you how I coded my first AI Chat Bot that's using advanced GPT 3 Model API. But First let's check what technologies we might expect in 2023.

1. Artificial Intelligence (AI) and Machine Learning.
2. Blockchain
3. Augmented Reality/VR
4. Web 3.0
5. and more...

We will see many of this technologies being adopted in 2023 , but today I want to focus on only one - Artificial Intelligence (AI).

# 2. What's GPT 3 ?

So I decided to ask Jarvis this question? And yes, I'm calling him Jarvis, but you can call him whatever you want.

![What's GPT3 ? ](whatsGPT3.png)

As you can see we do have full, definition answer and we also know what GPT 3 is all about.

# 3. Jarvis Chat Bot - The Creation.

To creating this chat bot I'll use my favorite Tech Stack: Next.js/React and Typescript. This time I'll not guide you step by step , but instead I'll give you the content of each and every file and do the explanation as we progress. Ok, so let's begin.

Like I mentioned before, I'll create Nexj.js app with Typescript.

```node
npx create-next-app@latest --typescript
```

This is a file structure of finished project. We got a components folder that inlcudes a few React Components we'll use in our application. There is also a helpers folder , where I created a few helpers function, in 3 seperate files, but we'll get to that later, and also pages folder with our routes.

![Files structure](files.png)

Let's start from HomePage, so inside my pages folder I'll create a index.tsx.

```tsx
// pages/index.tsx
import Home from '../components/Home';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Title of this page</title>
        <meta name="description" content="You can put here any content..." />
      </Head>
      <Home />
    </>
  );
};
export default HomePage;
```

As always I'll use a Head Component where I'll pass my metadata, like page title and description. So, the only component we got here is Home Component. Let's create it now.

```tsx
// components/Home.tsx
import styles from './Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.wrapper}>
        <h1 className={styles.gradient__text}>the new Era of AI</h1>
        <Image src="/ai.png" alt="ai" width={700} height={700} priority />
        <button>
          <Link href="/chat">OpenAI Jarvis</Link>
        </button>
      </section>
    </main>
  );
};
export default Home;
```

Like you can see, there is nothing unordinary here. We returning a simple Jsx, where we have Nextjs Image Component, our title and a button which is a Link to our chat page.

I'll not include here a css files, but if you want them, and also if you want a svgs and images from my public folder, you can get them on my github [here](https://github.com/wujekbizon/nextjs-openai-bot/tree/main/public).

Next, let's take care of ChatPage.

```tsx
// pages/chat.tsx
import Chat from '../components/Chat';
import Head from 'next/head';

const ChatPage = () => {
  return (
    <>
      <Head>
        <title>Jarvis GPT 3 Chat Bot</title>
        <meta name="description" content="Real Time GPT 3 Chat Bot" />
      </Head>
      <Chat />
    </>
  );
};
export default ChatPage;
```

So, we got a Head Component to take care of metadata, and also a Chat Component, which will contain our chat. This Chat Component will keep all the logic for our chat application, that way my Chat Page is easier to read.

```tsx
// components/Chat.tsx
import styles from './Chat.module.css';
import InputForm from './InputForm';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { generateUniqueId, chatStripe, loader } from '../helpers/helpers';
import fetchOpenAiApi from '../helpers/apiCalls';

let loadInterval: NodeJS.Timer;

const Chat = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const chatContainerRef = useRef<HTMLElement | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const handleSubmitCallback: React.FormEventHandler<HTMLFormElement> =
    useCallback(async (e) => {
      e.preventDefault();

      if (!formRef.current || !chatContainerRef.current) {
        return;
      }

      const data = new FormData(formRef.current);

      // user's chatstripe
      chatContainerRef.current.innerHTML += chatStripe(
        false,
        data.get('prompt'),
        ''
      );

      // to clear the textarea input
      formRef.current.reset();

      // bot's chatstripe
      const uniqueId = generateUniqueId();
      chatContainerRef.current.innerHTML += chatStripe(true, ' ', uniqueId);

      // to focus scroll to the bottom
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;

      // specific message div
      const messageDiv = document.getElementById(uniqueId);

      if (!messageDiv) {
        return <p>Loading...</p>;
      }

      const interval = loader(messageDiv, loadInterval);
      //  fetch api
      const response = await fetchOpenAiApi(data, interval, messageDiv);

      if (response.ok) {
        setIsInitializing(true);
      }
    }, []);

  const memoizeKeyPressHandler = useMemo(() => {
    return (e: any) => {
      if (e.keyCode === 13) {
        handleSubmitCallback(e);
      }
    };
  }, [handleSubmitCallback]);

  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    form.addEventListener('keydown', memoizeKeyPressHandler);

    return () => {
      form.removeEventListener('keydown', memoizeKeyPressHandler);
    };
  }, [memoizeKeyPressHandler]);

  return (
    <>
      <header className={styles.header}>
        <div
          className={!isInitializing ? `${styles.line}` : `${styles.online}`}
        />
        {!isInitializing ? (
          <h4>Bot initializing ...</h4>
        ) : (
          <h4>Jarvis GPT 3 Chat Bot </h4>
        )}
      </header>

      <section
        className={styles.chat_container}
        ref={chatContainerRef}
      ></section>
      <InputForm formRef={formRef} onHandleSubmit={handleSubmitCallback} />
    </>
  );
};
export default Chat;
```

This file is, where all the logic it's been cumulative and where we are making a fetch request to the OpenAI API.

I know that's a lot of stuff happening here, so let's start one by one. First let's focus on what we are returning in JSX.

We returning a header element, where we'll be render content, depending on, if our bot is online, or is initializing.
Then section element, where we'll render actual chat, and InputForm Component that will hold our form element with input field.

```tsx
// components/InputForm.tsx
import styles from './InputForm.module.css';
import Image from 'next/image';
import Link from 'next/link';

type InputFormProps = {
  onHandleSubmit: React.FormEventHandler<HTMLFormElement>;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
};

const InputForm = ({ onHandleSubmit, formRef }: InputFormProps) => {
  return (
    <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
      <button>
        <Link href="/">
          <Image src="/backarrow.svg" alt="back" width={25} height={25} />
        </Link>
      </button>
      <textarea
        name="prompt"
        cols={1}
        rows={1}
        placeholder="Ask Jarvis..."
      ></textarea>
      <button type="submit" className={styles.send}>
        <Image src="/send.svg" alt="send" width={30} height={30} />
      </button>
    </form>
  );
};
export default InputForm;
```

In this Component we accepting two props, onHandleSubmit, which is a form submit handler function and formRef which is a reference to this form. We also have button with a Link, that can take user back to home page, and a submit button. There is one more thing which is very important, textarea element has name attribute set to 'prompt', this will be relevant later, when we'll try to send a fetch request to our /api endpoint.

Before we come back to Chat component, where we have our logic, let me check handler folder and I'll go over all the functions we have there.

```ts
// helpers/helpers.ts

export const loader = (element: HTMLElement, loadInterval: NodeJS.Timer) => {
  element.textContent = '';

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator
    element.textContent += '.';

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === '....') {
      element.textContent = '';
    }
  }, 300);
  return loadInterval;
};

export const generateUniqueId = () => {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
};

export const typeText = (element: HTMLElement, text: string) => {
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

export const chatStripe = (
  isAi: boolean,
  value: FormDataEntryValue | null,
  uniqueId: string
) => {
  return `
    <div class="wrapper ${isAi && 'ai'}">
      <div class="chat">
          <div class="profile">
              <img  
                src=${isAi ? '/bot.svg' : '/user.svg'} 
                alt="${isAi ? 'bot' : 'user'}" 
              />
          </div>
          <div class="message" id=${uniqueId}>${value}</div>
      </div>
    </div>
    `;
};
```

First we have a **loader** function, which is responsible for rendering _dots_, when we are fetching an answer(bot thinking). It's expecting two arguments that will be pass to it. An element inside which, our dots we'll be render, and variable where we can capture this created interval, so we can clear it later.

**generateUniqueId** it's a function to generate a unique Id.

**typeText** is a function, that will make sure that when we get back the answer from API, instead of immediately seeing this message, each letter will be typed one by one, so it'll look, like a bot has been typing, in a real time. This function expects two arguments, an html element, where it'll render text, and data, that it'll get back from API.

And the last function inside this file is a **chatStripe** fn , it's responsible for generating html snippet. It's accepting 3 arguments . First argument is boolean that will tell us, which css class has to be apply for given element, and generate an image of user or bot. It'll also receive uniqueId and a value.

```ts
// helpers/apiCalls.ts
import { typeText } from './helpers';

const fetchOpenAiApi = async (
  data: FormData,
  interval: NodeJS.Timer,
  element: HTMLElement
) => {
  const response = await fetch('/api', {
    // later we'll change this url
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: data.get('prompt'),
    }),
  });

  clearInterval(interval);
  element.innerHTML = ' ';

  if (response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'

    typeText(element, parsedData);
  } else {
    const err = await response.text();

    element.innerHTML = 'Something went wrong';
    console.log(err);
  }
  return response;
};

export default fetchOpenAiApi;
```

**fetchOpenAIAPI** it's a _async_ function, it's expecting 3 arguments, _data_ which is our form, _interval_ which is our loader interval and html _element_ where message will be render. Inside this function we can make a fetch request to **/api** soon we'll create that endpoint, and because we using nextJs it's very simple. I'll host my application over Vercel, thanks to that, later I'll change this url into **vercel_domain/api**.

So the method will be POST, in that body object we'll access that textarea element by that name attribute, and we'll send whatever value was there, when the form was submitted. Next, I'll clean that loader interval function, because we no longer need those dots inside this element and we are ready to render a message. As soon as response has status ok, we'll await our json , trim our data, then we'll pass parsedData to typeText function. In case of any error we'll show user, that something went wrong. Finally I want to return that response from this function.

Let's go back to Chat component, where I'll import and use these helpers functions.
First, I'll declare loadInterval variable on top of my file.
Now, lets create two reference, one for our form element, and second for container, which will hold our questions or answers. I'll also add some piece of state to store my isInitializing boolean.

```tsx
// components/Chat.tsx
import styles from './Chat.module.css';
import InputForm from './InputForm';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import { generateUniqueId, chatStripe, loader } from '../helpers/helpers';
import fetchOpenAiApi from '../helpers/apiCalls';

let loadInterval: NodeJS.Timer;

const Chat = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const chatContainerRef = useRef<HTMLElement | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const handleSubmitCallback: React.FormEventHandler<HTMLFormElement> =
    useCallback(async (e) => {
      e.preventDefault();

      if (!formRef.current || !chatContainerRef.current) {
        return;
      }

      const data = new FormData(formRef.current);

      // user's chatstripe
      chatContainerRef.current.innerHTML += chatStripe(
        false,
        data.get('prompt'),
        ''
      );

      // to clear the textarea input
      formRef.current.reset();

      // bot's chatstripe
      const uniqueId = generateUniqueId();
      chatContainerRef.current.innerHTML += chatStripe(true, ' ', uniqueId);

      // to focus scroll to the bottom
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;

      // specific message div
      const messageDiv = document.getElementById(uniqueId);

      if (!messageDiv) {
        return <p>Loading...</p>;
      }

      const interval = loader(messageDiv, loadInterval);

      //  fetch api
      const response = await fetchOpenAiApi(data, interval, messageDiv);

      if (response.ok) {
        setIsInitializing(true);
      }
    }, []);

// {...}
```

Finally, let's create this handleSubmit function, to be precise let's create callback version of this function and as a argument to useCallback hook I'll provide an actuall handler function which will be async. This handler function will accept argument, which will be that event object , and then I'll prevent that default behavior of the form. Inside should be straight forward, first we need to check if we got html elements, if not, then we don't want to continue with further execution of our code.
Then we'll create our formData, and call chatStripe to generate user chatstripe by passing false to first argument, second argument is, whatever user's entered in textarea, and third,an empty string, as we don't need to pass uniqueId here. Then we'll clear textarea input field. To generate bot chatstripe, let's generate a uniqueId and pass it as a third argument to chatStripe function, but this time as a first argument we need to pass true, and as a second argument just a string with the space inside.
Now let's target a specific message div, where we want to show loader with dots and then later, a bot answer. Finally, let's call our fetchOpenAiApi function which will return our response. If response will have status ok, that will change our state, which will trigger re-render, and that will cause to change our ai.

```tsx
// components/Chat.tsx
const memoizeKeyPressHandler = useMemo(() => {
  return (e: any) => {
    if (e.keyCode === 13) {
      handleSubmitCallback(e);
    }
  };
}, [handleSubmitCallback]);

useEffect(() => {
  const form = formRef.current;
  if (!form) {
    return;
  }
  form.addEventListener('keydown', memoizeKeyPressHandler);

  return () => {
    form.removeEventListener('keydown', memoizeKeyPressHandler);
  };
}, [memoizeKeyPressHandler]);
```

In Chart component we also have an useEffect, which will listen to our form for any keydown events, and it will call memoizeKeyPressHandler on every key press. That function will be trigger only when user press enter to submit a form. I'm using here useMemo for optimization purpose.

Everything looks fine, but will not working unless we create /api endpoint. Let's do it now.

```tsx
// pages/api/index.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import Cors from 'cors';
import runMiddleware from '../../helpers/middleware';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ message: 'OK' });
  }

  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is Jarvis AI' });
  }

  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    try {
      const { prompt } = req.body;

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });

      res.status(200).json({
        bot: response.data.choices[0].text,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        console.log(error);
      }
    }
  }
};
export default handler;
```

Inside we need to imports types for req and res, also import cors and runMiddleware from our helpers folder, and I think we didn't create that function yet , so let's do it now.

```ts
// helpers/middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default runMiddleware;
```

Let's also import this Configuration and OpenAIApi classes from openai.

Let's create this special function I called it handler, but you can call it whatever you want, it's important, that we export default it, because Nextjs will look for this export.

Then inside, we can have a few checks, and base on different method we'll send different message to the user. The most important will be POST method where we'll need to write logic for creating a connection with our OpenAI Api.

In order to do that, first we need to get api secret key. I will provide you with a documentation on that [here](https://beta.openai.com/docs/introduction). In short, you need to register for a free account, and generate a new secret key. We don't want ever to show ours secret keys, that's why we should always use _.env _.

Let's create configuration, where we pass an object with this secret key, and then create a new instance of this OpenAIApi, and pass this configuration params. In try catch block, we can destructuring prompt out of req.body and create completion, where we need to pass an configuration object. You can read more about this configuration object by visiting a link, I provided above. Finally let's respond with status 200, and let's send our response. In case of any errors let's respond with status 500 and that error message.

I think we finished, I know that there is a room for optimization, so feel free to do it.
We successfully created chatbot application, so let's deploy this project now. I'll use Vercel for that, but you can use different provider.

# 4. Project Summary - by Jarvis.

![summary](summary.png)

Thank you Jarvis, now you are fired!

_Grzegorz Wolfinger_

_Nextjs/React Developer | Software Engineer | Javascript Engineer_
