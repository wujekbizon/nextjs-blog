---
title: 'Getting Started with NextJS'
date: '2022-06-1'
image: getting-started-nextjs.png
excerpt: NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.
isFeatured: false
---

# 1. NextJS is a _framework for ReactJS_.

Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?

Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.

Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra layer on top of JS.

# Why would we then need NextJS?

Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way more than just take care of that).

In this article, we'll dive into the core concepts and features NextJS has to offer:

1. File-based Routing
2. Built-in Page Pre-rendering
3. Rich Data Fetching Capabilities
4. Image Optimization
5. Much More

# File-based Routing

![Create routes via your file + folder structure](nextjs-file-based-routing.png)

# 2. Disable CSS Modules in Next.js project.

Next.js turns on CSS Modules by default, and no switch is provided.
If you don’t want it, you can modify the webpack configuration in **next.config.js:**

```js
// next.config.js

const path = require('path');

module.exports = {
  webpack(config) {
    // if not work, try `config.module.rules[2]...`
    config.module.rules[3].oneOf?.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
};
```

This is really helpful for those who prefers to use scss or css in normal way.

## More Content Coming Soon
