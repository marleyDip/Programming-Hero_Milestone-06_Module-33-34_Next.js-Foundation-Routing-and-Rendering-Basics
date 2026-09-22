# Basics - Rendering

## Rendering, Hydration, SSR, CSR, Server Components and Client Components

The easiest way to remember the whole concept:

> **`Rendering` → Creating the UI**
> **`Hydration` → Connecting React's client-side behavior to existing UI and make it interactive**
> **`Re-render` → Updating the UI after state/props change**

## 1. What is Rendering?

**Rendering** is the process your browser uses to turn website code (HTML, CSS, JavaScript) into the visual page you see and interact with.

For example:

```tsx
function Home() {
  return <h1>Hello World</h1>;
}
```

Rendering eventually produces UI like:

```html
<h1>Hello World</h1>
```

So we can think:

```text
React / Next.js Code
        ↓
     Rendering
        ↓
       UI
        ↓
    Browser Screen
```

### Simple Definition

> **`Rendering` = converting application code into UI that can be displayed to the user.**

---

## 2. What is SSR?

> **SSR = Server-Side Rendering**

SSR means the server renders the page before sending the HTML to the browser.

A simplified flow:

```text
Browser
   ↓
Request Page
   ↓
Next.js Server
   ↓
Render Page
   ↓
HTML
   ↓
Browser
   ↓
Display UI
```

For example:

```text
/products
```

The server can prepare the product page and send the resulting HTML to the browser.

### Mental Model of SSR

> **SSR = The server prepares the HTML.**

---

## 3. What is CSR?

> **CSR = Client-Side Rendering**

CSR means rendering happens in the browser using JavaScript.

A simplified flow:

```text
Browser
   ↓
Request Page
   ↓
Server sends application/HTML
   ↓
JavaScript loads
   ↓
Browser renders/updates UI
   ↓
User sees UI
```

For example, a Client Component can fetch data in the browser:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product: any) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
}
```

Here the browser runs the component and fetches the data.

### Mental Model of CSR

> **CSR = The browser does the client-side work.**

---

## 4. SSR vs CSR

| SSR | CSR |
| --- | --- |
| Rendering happens on the server | Rendering/updates happen in the browser |
| Server prepares HTML | Browser uses JavaScript to render/update UI |
| Useful for server-rendered content | Useful for highly interactive UI |
| Can fetch server-side data | Can fetch data from the browser |
| Does not require `useEffect` for server fetching | Often uses `useEffect` or a client data library |

### Simple Difference

```text
SSR

Server
  ↓
Render
  ↓
HTML
  ↓
Browser
```

```text
CSR

Server
  ↓
Browser
  ↓
JavaScript
  ↓
Render / Update
```

> **SSR asks: "Where is the page rendered?"**
> **CSR asks: "Where does the client-side rendering/update happen?"**

---

## 5. What is a Server Component?

A **Server Component** is a React component that runs on the server.

In the Next.js App Router, components are **Server Components by default**.

Example:

```tsx
export default async function Products() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product: any) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
}
```

There is no:

```tsx
"use client";
```

So this is a Server Component.

A Server Component can:

- Fetch data on the server
- Access server-side resources
- Keep server-only logic on the server
- Reduce the amount of JavaScript sent to the browser

### Mental Model of Server Component

```text
Server Component
       ↓
 Runs on Server
       ↓
Can fetch server-side data
       ↓
Produces UI
```

---

## 6. What is a Client Component?

A **Client Component** is a component that can use client-side React features such as:

- `useState`
- `useEffect`
- Event handlers
- Browser APIs
- Interactive UI

We tell Next.js that a component is a Client Component using:

```tsx
"use client";
```

Example:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

This component needs browser-side JavaScript because the user can click the button and change the state.

### Mental Model of Client Component

```text
Client Component
       ↓
Runs/works on Client
       ↓
JavaScript
       ↓
Interaction
       ↓
UI updates
```

---

## 7. Server Component vs Client Component

| Server Component | Client Component |
| --- | --- |
| Default in App Router | Requires `"use client"` |
| Runs on the server | Can run on the client |
| Can fetch data on server | Can use browser APIs |
| Can access server-side resources | Can use `useState` |
| Cannot use `useState` | Can use `useState` |
| Cannot use `useEffect` | Can use `useEffect` |
| Cannot use browser event handlers directly | Can use event handlers |
| Good for server-side data work | Good for interactive UI |

### Easy Rule

If you need:

```text
useState
useEffect
onClick
window
localStorage
```

you will generally need a **Client Component**.

If you mainly need:

```text
Fetch server-side data
Read server resources
Render content
```

a **Server Component** may be appropriate.

---

## 8. Server Component ≠ SSR

This is one of the most important things to understand.

**Server Component** and **SSR** are related, but they mean different things.

### Server Component

Answers:

> **Where does this component execute?**

Answer:

```text
Server
```

### SSR

Answers:

> **Where is the page rendered for a request?**

Answer:

```text
Server
```

So:

```text
Server Component
      ↓
Component execution model
```

while:

```text
SSR
      ↓
Rendering strategy
```

A Server Component does **not automatically mean SSR**.

Next.js can render routes statically or dynamically depending on the route and its configuration.

---

## 9. What is Hydration?

**Hydration** is the process where client-side JavaScript turns a static, server-rendered HTML web page into a fully interactive application by attaching event listeners and state (React's JavaScript behavior) to the existing DOM elements.

- Server will sent **only HTML** and some critical CSS. But no JavaScript.
- JavaScript will be downloaded later (if needed) and then applied to the DOM elements.
- The process of attaching JavaScript to server-rendered is known as **`hydration`**.

In one sentence:

> Hydration is the browser-side process where React connects Client Component logic to the already-rendered UI so that state, event handlers, and other client-side behavior can work.

```text
Hydration
Attaching JavaScript to the certain DOM element.

Server (HTML, CSS & JavaScript)
  │
  │  Render
  ▼
HTML + CSS
  │
  │  Sent to Browser
  ▼
Browser
  │
  │  Initial UI appears (HTML + CSS)
  ▼
Visible Page (Display)
  │
  │  JavaScript loads (Fetching JS from Server)
  ▼
Hydration
  │
  │  React attaches client-side behavior
  ▼
Interactive UI Page (JavaScript now attached)


                         REQUEST
                           │
                           │  GET /
                           ▼
┌──────────────────────────────────────────┐
│                 SERVER                   │
│                                          │
│  React / Next.js                         │
│       │                                  │
│       ├── Render UI                      │
│       │                                  │
│       └── Generate HTML                  │
│                                          │
└────────────────────┬─────────────────────┘
                     │
                     │  HTML + CSS
                     ▼
┌──────────────────────────────────────────┐
│                BROWSER                   │
│                                          │
│  Initial Render                          │
│  ┌────────────────────────────────────┐  │
│  │        HTML + CSS                   │  │
│  │                                    │  │
│  │        👀 User sees UI             │  │
│  └────────────────────────────────────┘  │
│                                          │
└────────────────────┬─────────────────────┘
                     │
                     │  JavaScript
                     │  downloaded
                     ▼
┌──────────────────────────────────────────┐
│                BROWSER                   │
│                                          │
│              ⚡ Hydration                │
│                                          │
│     React connects JavaScript            │
│     behavior to the existing UI          │
│                                          │
│              ↓                           │
│                                          │
│        🖱️ Interactive Page              │
│                                          │
│   • Click events work                    │
│   • State works                          │
│   • useState works                       │
│   • Client-side interactions work        │
│                                          │
└──────────────────────────────────────────┘

A simplified timeline:

1. User requests page
          ↓
2. Next.js server processes page
          ↓
3. Server-rendered HTML is sent
          ↓
4. Browser displays HTML
          ↓
5. JavaScript loads
          ↓
6. React hydrates Client Components
          ↓
7. Components become interactive

So hydration does not happen before the browser receives the HTML.
```

Simple Example:

- Yor ordered food. Cooked at restaurant(Server).
- Food is already cooked(rendered). You don't need to cook(render) at home(browser).
- But missed the spoon to eat(JS). Requesting again for the spoon and finally eating the food(Hydration).

How Hydration Works:

- Server Rendering: The server builds the HTML markup and sends a static visual page to the browser for a fast initial display.

- Loading Code: The browser downloads the JavaScript bundle alongside the static HTML.

- Attaching Behavior: The framework matches the static markup and attaches event handlers (like click listeners) to make buttons and components work.

Think about a button:

```html
<button>Like</button>
```

The browser can display this HTML.

But simply having HTML does not give the button React behavior such as:

```tsx
onClick={() => setLiked(true)}
```

Hydration connects the React behavior to the existing HTML.

### Simple Mental Model for Hydration

```text
Server-rendered HTML
        ↓
Browser receives HTML
        ↓
JavaScript loads
        ↓
React hydrates
        ↓
HTML becomes interactive
```

So:

> **Hydration = React attaches its client-side behavior to existing HTML.**

### Hydration in a Real Next.js Page

Don't think:

> "Client Component means it only exists in the browser."

That's too simplistic for Next.js.

- A Client Component can have its **initial UI rendered as HTML as part of the server-rendered result**, but it is then **hydrated in the browser** to make its client-side behavior work.

So:

> Client Component does not mean "never rendered on the server."

- It means the component belongs to the **client component boundary** and its client-side behavior requires **JavaScript in the browser**.

```tsx
// app/page.tsx

import Counter from "./Counter";

export default function Home() {
  return (
    <main>
      <h1>Sofian's Website</h1>

      <p>This is server content.</p>

      <Counter />
    </main>
  );
}

// Counter.tsx

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

```text
The simplified process is:

                 NEXT.JS SERVER
                       │
                       ↓
                    Page
                       │
            ┌──────────┴──────────┐
            ↓                     ↓
      Server content         Counter
                                  │
                           Client Component
                                  │
                                  ↓
                              UI result
                                  │
                                  ↓
                         HTML / RSC response
                                  │
                                  ↓
                              BROWSER
                                  │
                                  ↓
                         React JavaScript
                                  │
                                  ↓
                             Hydration
                                  │
                                  ↓
                        Counter interactive


Conceptually, React does something like this:

Existing HTML
     ↓
React loads
     ↓
React identifies Client Components
     ↓
React connects component logic
     ↓
React connects event handlers/state
     ↓
Interactive UI


Before hydration:

┌───────────────────┐
│ Count: 0          │
│ [ Button ]        │
└───────────────────┘

Looks like a button

After hydration:

┌───────────────────┐
│ Count: 0          │
│ [ Button ] ← click│
└───────────────────┘
       ↓
     count++
       ↓
┌───────────────────┐
│ Count: 1          │
│ [ Button ]        │
└───────────────────┘

Hydration Does NOT Mean "Render Everything Again"

A beginner might think:

Server rendered HTML
        ↓
Hydration
        ↓
React throws it away
        ↓
Render everything from zero


Instead, think:

Server-rendered HTML
        ↓
Browser already has UI
        ↓
React uses that existing UI
        ↓
Connects React behavior
        ↓
Interactive

React checks the existing rendered structure and hydrates it.

If the server-rendered output and the client's expected output don't match, you can get a hydration mismatch/error.
```

---

## 10. Rendering vs Hydration

These are different steps.

### Rendering

Creates the UI:

```text
React Code
   ↓
UI / HTML
```

### Hydration

Makes the client-side React UI interactive:

```text
Existing HTML
     ↓
React JavaScript
     ↓
Interactive React UI
```

Think:

```text
Rendering
   ↓
"Show the UI"

Hydration
   ↓
"Make the UI interactive"
```

---

## 11. How Server and Client Components Work Together

This is where Next.js becomes interesting.

A page can contain both:

```text
Server Component
       │
       ├── Server Component
       │
       └── Client Component
```

For example:

```tsx
// app/page.tsx

import Counter from "./Counter";

export default async function Home() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {products.map((product: any) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}

      <Counter />
    </main>
  );
}
```

And:

```tsx
// Counter.tsx

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Here:

```text
Home
│
├── Server Component
│     │
│     └── Fetch products
│
└── Client Component
      │
      └── Counter
```

---

## 12. How is a Client Component Rendered Inside a Server Component?

This is an important concept.

A Server Component can **import and render** a Client Component.

Example:

```tsx
// Server Component

import Counter from "./Counter";

export default function Page() {
  return (
    <div>
      <h1>Hello</h1>

      <Counter />
    </div>
  );
}
```

The Client Component:

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

The important idea is:

> A Server Component can render a Client Component, but the Client Component's interactive behavior needs to run in the browser.

---

## 13. What Actually Happens?

Imagine:

```text
Page
│
├── Product List
│
└── Counter
```

The product list is a Server Component.

The counter is a Client Component.

The simplified process is:

```text
                Next.js Server
                     │
                     ↓
              Server Component
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
   Product Data            Client Component
          ↓                     ↓
      Server UI          Client Component
                              │
                              ↓
                       Browser JavaScript
                              │
                              ↓
                         Interactivity
```

The browser does **not** need the entire Server Component code.

Instead, the Client Component needs the JavaScript necessary for its client-side behavior.

---

## 14. Can a Client Component Render a Server Component?

There is an important rule here.

A Client Component should **not directly import a Server Component**.

For example, avoid this pattern:

```tsx
"use client";

import ServerComponent from "./ServerComponent";
```

Instead, the Server Component can pass a Server Component as `children` or another prop.

For example:

```tsx
// Server Component

import ClientComponent from "./ClientComponent";
import ServerContent from "./ServerContent";

export default function Page() {
  return (
    <ClientComponent>
      <ServerContent />
    </ClientComponent>
  );
}
```

Conceptually:

```text
Server Component
      │
      ├── Client Component
      │       │
      │       └── children
      │
      └── Server Component
```

This allows the server-rendered content to remain on the server while the Client Component provides interactivity around it.

---

## 15. Server Component + Client Component Example

### Server Component Example

```tsx
// app/page.tsx

import Counter from "./Counter";

export default async function Page() {
  const user = {
    name: "Sufian",
  };

  return (
    <main>
      <h1>Hello {user.name}</h1>

      <Counter />
    </main>
  );
}
```

### Client Component Example

```tsx
// Counter.tsx

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

The responsibility is separated:

```text
Server Component
      ↓
Server work
      ↓
Data / content


Client Component
      ↓
Browser work
      ↓
State / events / interaction
```

---

## 16. Why Does Next.js Use Both?

Not every part of a website needs JavaScript in the browser.

Imagine an e-commerce page:

```text
Product Page
│
├── Product information      → Server
├── Product description      → Server
├── Product image            → Server
│
├── Quantity selector        → Client
├── Add to cart button       → Client
└── Wishlist button          → Client
```

The server can handle the content-heavy parts.

The browser handles interactive parts.

This gives us a useful separation:

```text
Server
   ↓
Data + Content + Server Work

Client
   ↓
Interaction + State + Browser Work
```

---

## 17. Complete Mental Model

Now connect everything together:

```text
                         Next.js
                            │
                            ↓
                        Rendering
                            │
                 ┌──────────┴──────────┐
                 ↓                     ↓
                SSR                    CSR
                 │                     │
                 ↓                     ↓
              Server                Browser
              rendering             rendering
                 │                     │
                 └──────────┬──────────┘
                            ↓
                           UI
                            │
                            ↓
                       Hydration
                            │
                            ↓
                   Client Interactivity
```

And for Components:

```text
                    Components
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
         Server Component      Client Component
              │                     │
              ↓                     ↓
           Server                 Client
              │                     │
              ↓                     ↓
       Data / Server Work      State / Events
              │                     │
              └──────────┬──────────┘
                         ↓
                         UI
```

---

## 18. The Complete Next.js Flow

A simplified real-world flow can look like:

```text
User visits URL
      ↓
Next.js Routing
      ↓
Server Component
      ↓
Fetch server-side data
      ↓
Render page
      ↓
HTML / RSC result
      ↓
Browser receives UI
      ↓
Client JavaScript loads
      ↓
Hydration
      ↓
Client Components become interactive
      ↓
User clicks / types / interacts
      ↓
Client Component updates
```

---

## 19. The Most Important Differences

### Rendering Summary

> Converts application code into UI.

### SSR Summary

> A rendering strategy where the server renders a page for a request.

### CSR Summary

> Rendering or updating UI on the client/browser using JavaScript.

### Server Component Summary

> A component that runs on the server and is the default component type in Next.js App Router.

### Client Component Summary

> A component marked with `"use client"` that can use state, effects, event handlers, and browser APIs.

### Hydration Summary

> React's process of connecting client-side behavior to existing HTML.

---

## 20. Easy Memory Trick

Remember these four questions:

```text
Rendering
↓
"How do we turn code into UI?"


SSR
↓
"Is the page rendered on the server?"


CSR
↓
"Does the browser handle rendering/updating?"


Hydration
↓
"How does React make existing HTML interactive?"
```

And for components:

```text
Server Component
↓
"Server work"


Client Component
↓
"Interactive browser work"
```

---

## 21. Final Learning Picture

```text
                         Next.js App
                              │
                              ↓
                         Components
                              │
                  ┌───────────┴───────────┐
                  ↓                       ↓
          Server Component         Client Component
                  │                       │
                  ↓                       ↓
              Server work            Browser work
                  │                       │
                  ↓                       ↓
          Data / Content             State / Events
                  │                       │
                  └───────────┬───────────┘
                              ↓
                          Rendering
                              │
                       ┌──────┴──────┐
                       ↓             ↓
                      SSR           CSR
                       │             │
                       └──────┬──────┘
                              ↓
                           Browser
                              ↓
                          Hydration
                              ↓
                       Interactive UI
```

## Key Takeaways

1. **Rendering** = turning code into UI.
2. **SSR** = server-side rendering strategy.
3. **CSR** = client/browser-side rendering and updates.
4. **Hydration** = connecting React behavior to existing HTML.
5. **Server Component** = component that runs on the server.
6. **Client Component** = component that supports client-side interactivity.
7. A **Server Component can render a Client Component**.
8. A Client Component should not directly import a Server Component; use composition such as `children` when needed.
9. **Server Component ≠ SSR**. They describe different concepts.
10. A real Next.js application can use **Server Components and Client Components together**.

### The simplest mental model

```text
Server Component
      ↓
Server work

Client Component
      ↓
Browser interaction

SSR
      ↓
Server rendering

CSR
      ↓
Browser rendering/updating

Hydration
      ↓
Make existing UI interactive
```

> **The goal is not to memorize these terms. Understand where the code runs, where the rendering happens, and when the browser needs JavaScript.**

---
