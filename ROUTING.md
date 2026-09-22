# Basics - Routing

## What is Next.js?

Next.js is a **React framework** for building modern, fast, scalable, and SEO-friendly web applications. It provides React with additional features and conventions such as routing, layouts, server-side rendering, Server Components, data fetching, and backend capabilities.

In simple terms:

> **React helps us build the UI, while Next.js provides a complete framework for building the application around that UI.**

The Core Idea:

> **React & Powerful Backend Capabilities.**

---

## Why Choose Next.js Over React.js?

React is a UI library, so developers often need to choose additional tools for routing, data fetching, rendering strategies, and project structure.

Next.js provides many of these capabilities as part of the framework.

### Key reasons to use Next.js

- **Built-in routing** — Create routes using the `app` directory.
- **Layouts** — Share common UI such as Navbar, Sidebar, and Footer across pages.
- **Server Components** — Render components on the server by default in the App Router.
- **Multiple rendering strategies** — Support server-rendered, statically generated, and client-rendered UI.
- **Data fetching** — Provides patterns for fetching data on the server and client.
- **SEO support** — Provides tools for metadata and server-rendered content.
- **Backend capabilities** — Route Handlers and Server Actions allow server-side functionality within a Next.js application.
- **Project structure** — Provides conventions that make larger applications easier to organize.

---

## Framework vs Library

### Library

A library provides tools or functions for solving a specific or particular problem, while the developer generally decides how and when to use those tools.

**Example:**

```text
React → UI Library
```

React mainly focuses on building user interfaces.

### Framework

A framework provides a broader structure and conventions for building an application.

**Example:**

```text
Next.js → React Framework
```

Next.js uses React for the UI and adds application-level features around it.

### Core Difference

> **Frameworks ← Code → Libraries**

- A framework is an architectural structure that organizes a collection of libraries.
- A library is a reusable collection of pre-written code used to perform specific, isolated tasks.
- Generate code using one, two, or multiple libraries.
- Generate code for a framework that bundles many libraries together.

### Simple comparison

```text
React
  ↓
UI Library
  ↓
Build components and user interfaces

Next.js
  ↓
React Framework
  ↓
UI + Routing + Layouts + Server Features
  + Rendering + Data Fetching + Application Structure
```

---

## React vs Next.js

| React.js | Next.js |
| --- | --- |
| UI library | React framework |
| Focuses mainly on UI | Provides a complete application structure |
| Routing usually requires an additional solution | Built-in routing |
| More freedom to choose tools | Provides conventions and built-in features |
| Client-side development is common | Supports server and client rendering |
| Good for learning React fundamentals | Good for building full-stack React applications |

---

## What I Learned

My understanding is that **Next.js does not replace React**. Instead, Next.js is built on top of React and extends it with features needed to build modern web applications.

The learning path can be understood as:

```text
JavaScript
    ↓
React
    ↓
TypeScript
    ↓
Next.js
    ↓
Full-Stack Web Development
```

Learning React first helps me understand the foundation of Next.js, while learning Next.js teaches me how those React concepts can be used within a complete application framework.

---

## What is a Layout?

A **layout** is the overall arrangement or structure of different elements within a space.

In web development, layout describes **where different parts of a website appear on the screen and how they are positioned relative to one another**.

For example:

```text id="q9k2xa"
        Header
           ↓
┌─────────────────────────┐
│                         │
│      Main Content       │
│                         │
└─────────────────────────┘
           ↓
         Footer
```

The layout does not describe the actual content itself. Instead, it defines the **structure in which the content is presented**.

---

## What is a Website Layout?

A **website layout** is the overall structure and arrangement of a website's visual elements, such as: `Header` or `Navbar`, `Sidebar`, `Main Content`, `Footer`, `Sections` and `Cards` etc.

Think of a website layout as the blueprint of a website. A typical website may contain:

```text id="b7x2kq"
┌──────────────────────────────┐
│          Navbar              │
├──────────────────────────────┤
│                              │
│        Main Content          │
│                              │
├──────────────────────────────┤
│           Footer             │
└──────────────────────────────┘
```

A more complex application might have:

```text id="w3m8pz"
┌─────────────────────────────────────┐
│              Navbar                 │
├────────────┬────────────────────────┤
│            │                        │
│  Sidebar   │      Main Content      │
│            │                        │
│            │                        │
├────────────┴────────────────────────┤
│               Footer                │
└─────────────────────────────────────┘
```

Common website layout elements include:

- Navbar / Header
- Sidebar
- Main content
- Sections
- Cards
- Forms
- Footer

The layout is important because it creates a **consistent structure and user experience** throughout the website.

---

## What is a Next.js Layout?

In Next.js, a `layout.tsx` file is a special file that defines a **shared UI structure for a route and its child routes**.

For example, suppose a website has:

```text id="u8n3se"
Navbar
Main Content
Footer
```

Instead of writing the Navbar and Footer inside every page, we can put them inside a shared layout.

```text id="j4k7vz"
             Root Layout
                 │
        ┌────────┴────────┐
        ↓                 ↓
     Navbar             Footer
                 │
                 ↓
            Page Content
```

The page content is represented by the `children` prop.

---

## Example Next.js Structure

Using the App Router:

```text id="n6s4tr"
app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Here:

- `layout.tsx` → shared structure
- `page.tsx` → Home page
- `about/page.tsx` → About page
- `contact/page.tsx` → Contact page

---

## Example `layout.tsx`

```tsx id="x2c8pm"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>My Website</nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Copyright 2026</p>
        </footer>
      </body>
    </html>
  );
}
```

The important part is:

```tsx id="j3r8kw"
{children}
```

The `children` prop represents the page content that Next.js places inside the layout.

For example:

```text id="v5x1qr"
RootLayout
│
├── Navbar
│
├── {children}
│      │
│      ├── Home Page
│      ├── About Page
│      └── Contact Page
│
└── Footer
```

---

## Small Page Rendering Example

Let's understand what actually happens when we visit a page.

Suppose we have this structure:

```text
app/
├── layout.tsx
├── page.tsx
└── about/
    └── page.tsx
```

### `layout.tsx`

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Navbar</header>

        <main>{children}</main>

        <footer>Footer</footer>
      </body>
    </html>
  );
}
```

### Home page

```tsx
// app/page.tsx

export default function HomePage() {
  return <h1>Home Page</h1>;
}
```

### About page

```tsx
// app/about/page.tsx

export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

### When we visit `/`

Next.js effectively renders:

```text
RootLayout
│
├── Navbar
│
├── HomePage
│     └── "Home Page"
│
└── Footer
```

The resulting UI is conceptually:

```text
┌─────────────────────────┐
│         Navbar          │
├─────────────────────────┤
│                         │
│       Home Page         │
│                         │
├─────────────────────────┤
│         Footer          │
└─────────────────────────┘
```

### When we visit `/about`

Next.js uses the same layout but changes the page content:

```text
RootLayout
│
├── Navbar
│
├── AboutPage
│     └── "About Page"
│
└── Footer
```

The resulting UI becomes:

```text
┌─────────────────────────┐
│         Navbar          │
├─────────────────────────┤
│                         │
│       About Page        │
│                         │
├─────────────────────────┤
│         Footer          │
└─────────────────────────┘
```

### The important idea

The **layout stays the same**, while the **page content changes**.

```text
                    Root Layout
                         │
             ┌───────────┴───────────┐
             │                       │
          Navbar                  Footer
             │
             ↓
          {children}
             │
       ┌─────┴─────┐
       ↓           ↓
    Home Page   About Page
       /            /about
```

So we can think of Next.js rendering like this:

```text
URL
 ↓
Find matching page
 ↓
Put page inside its layout
 ↓
Render the resulting UI
```

For `/about`:

```text
/about
  ↓
app/about/page.tsx
  ↓
app/layout.tsx
  ↓
Layout + About Page
  ↓
Rendered UI
```

This is the fundamental idea behind **layouts and nested layouts in the Next.js App Router**.

---

## Nested Layouts

Next.js also allows layouts to exist inside other layouts.

For example:

```text id="h7p4mx"
app/
├── layout.tsx
│
├── page.tsx
│
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    └── settings/
        └── page.tsx
```

The rendering relationship can be understood as:

```text id="k6w2ns"
Root Layout
│
├── Navbar
│
├── Home
│
└── Dashboard Layout
     │
     ├── Dashboard Sidebar
     │
     ├── Dashboard Page
     │
     └── Settings Page
│
└── Footer
```

For `/dashboard`:

```text
Root Layout
   ↓
Dashboard Layout
   ↓
Dashboard Page
```

For `/dashboard/settings`:

```text
Root Layout
   ↓
Dashboard Layout
   ↓
Settings Page
```

This is useful because different sections of an application can have different shared structures.

For example:

- The entire website can share a Navbar and Footer.
- The dashboard can additionally share a Sidebar.
- The settings page can live inside the Dashboard layout.

---

## Why are Layouts Important?

Layouts help us avoid repeating the same UI code across multiple pages.

Without a shared layout:

```text id="m3v7qa"
Home
 ├── Navbar
 ├── Content
 └── Footer

About
 ├── Navbar
 ├── Content
 └── Footer

Contact
 ├── Navbar
 ├── Content
 └── Footer
```

The same Navbar and Footer are repeated.

With a layout:

```text id="r8c4ty"
             Layout
          /    |     \
      Navbar  Content  Footer
                 ↑
              Changes
              by page
```

The common structure is defined once, while the page-specific content changes.

---

## Layout vs Website Layout vs Next.js Layout

| Concept | Meaning |
| --- | --- |
| **Layout** | General arrangement and structure of elements |
| **Website Layout** | Structure and visual arrangement of a website |
| **Next.js Layout** | A `layout.tsx` component used to share UI across pages and nested routes |

---

## My Learning Summary

The important distinction I learned is that **layout is a general concept**, while **Next.js Layout is a specific implementation of that concept**.

```text id="d2k6ws"
Layout
  ↓
General idea of structure

Website Layout
  ↓
Structure of a website

Next.js Layout
  ↓
Reusable React component
  ↓
layout.tsx
  ↓
Shared UI across routes
```

So, when I hear **"layout"** in web development, I should first think about **structure and arrangement**.

When I hear **"Next.js layout"**, I should think about **a reusable `layout.tsx` component that wraps pages and provides shared UI and structure**.

The most important rendering concept to remember is:

```text
URL
 ↓
Route
 ↓
Page
 ↓
Layout wraps Page
 ↓
Rendered UI
```

---

## ⚡Next.js Architecture: App Router vs. Pages Router

The primary difference between the `App Router` and the `Pages Router` in Next.js lies in their architectural foundations and how they handle ***routing***, ***rendering***, and ***data fetching***. The App Router (introduced in Next.js 13/14) is built to natively support **React Server Components (RSC)** and utilizes a **`folder-based` routing structure**, whereas the Pages Router is the legacy, **`file-based` routing system** where pages are client-side rendered by default.

App Router is the newer routing system. Pages Router is the older, still-supported system.

---

## Core Comparison Overview

| Feature | App Router (Modern Standard) | Pages Router (Legacy/Stable) |
| :--- | :--- | :--- |
| **Directory** | `app/` | `pages/` |
| **Routing System** | **Folder-based:** Folders define paths; specific `page.js` files define the UI. | **File-based:** Individual file names directly map to URLs (e.g., `about.js` becomes `/about`). |
| **Component Type** | Server Components by default (improves performance, smaller client bundles). | Client Components by default (traditional React hydration). |
| **Layouts** | Native Nested Layouts (preserves state on navigation, cuts down re-renders). | Manual layout handling per page (often requires a wrapper component). |
| **Data Fetching** | Standard `async/await` syntax inside components using native `fetch()`. | Special Next.js functions (`getServerSideProps`, `getStaticProps`). |
| **API Routes** | Uses `route.js` files with exported HTTP verbs (`GET`, `POST`, etc.). | Uses standard Request/Response handlers inside `pages/api/`. |

---

## Key Architectural Differences

### 1. Routing Structure & Special Files

<!-- * **Pages Router:** You create a file like `pages/contact.js`, and it automatically maps to `/contact`.
* **App Router:** Routing relies on folders rather than files. To create a `/contact` route, you make an `app/contact/` directory and place a reserved `page.js` file inside it. The App Router also introduces other reserved file conventions for seamless UX:
  * `layout.js` – Defines shared UI for a route branch.
  * `loading.js` – Automates loading states using React Suspense.
  * `error.js` – Isolates and handles runtime errors for specific UI segments. -->

- **Pages Router:** Traditional file-based routing where every file directly maps to a URL endpoint.

```text
my-app/
├── pages/
│   ├── index.tsx         # Root route (/)
│   ├── about.tsx         # /about route
|   ├── contact.tsx       # /contact route
│   └──products/
|      ├── index.tsx      # /products route
|      └── [id].tsx       # Dynamic route (/products/123)
└── public/
```

- **App Router:** The App Router is the modern Next.js routing system. App Router introduces a more structured application model around React Server Components, layouts, loading UI, error handling, and nested routes.

```text
my-app/
├── app/
|   ├── page.tsx          # Root route (/)
|   ├── layout.tsx        # Shared root layout
|   ├── about/
|   │   ├── page.tsx      # /about route
|   |   └── contact/
|   |       └── page.tsx  # /about/contact route 
|   ├── products/
|   │   ├── page.tsx      # /products route
|   │   └── [id]/
|   │       └── page.tsx  # Dynamic route (/products/123)
|   ├── loading.tsx       # Automatic Suspense loading UI
|   ├── error.tsx         # Segment-level error boundary
|   └── not-found.tsx     # Custom 404 page
└── public/
```

### 2. Server vs. Client Components

- **Pages Router:** Everything gets sent to the client browser to turn into an interactive page (hydration).

- **App Router:** Components are executed on the server by default. **`Server Component`** & **`Client Component`** model is a major part of the App Router architecture.

```tsx
// Sent with zero client-side JavaScript for significantly faster page loads.
export default function Home() {
  return <h1>Hello</h1>;
}

// Requires browser-side interactivity (state/handlers)? Make it a Client Component.
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

### 3. Modernized Data Fetching

- **Pages Router:** Requires specific wrapper functions to pass props down to the page component.

```tsx
export default function ProductsPage({ products }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return { props: { products } };
}
```

- **App Router:** Fetch data directly inside server components with clean `async/await` syntax.

```tsx
// App Router Example
export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  return (
    <ul>
      {products.map((p: { id: string; name: string }) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

---

## Routing, Navigation, Nested Routing and Dynamic Routing in Next.js

## 1. What is Routing?

**Routing** means deciding **which page should be displayed for a particular URL**.

For example:

```text
/           → Home Page
/about      → About Page
/contact    → Contact Page
/products   → Products Page
```

In Next.js App Router, routing is mainly based on the **folder structure** inside the `app` directory.

Example:

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── products/
    └── page.tsx
```

This creates:

```text
/           → app/page.tsx
/about      → app/about/page.tsx
/contact    → app/contact/page.tsx
/products   → app/products/page.tsx
```

### Simple Mental Model

```text
Folder Structure
       ↓
      Route
       ↓
      URL
       ↓
      Page
```

So, in Next.js:

> **Folders help define the URL structure, and `page.tsx` defines the UI for that route.**

---

## 2. What is Navigation?

**Navigation** means moving from one route/page to another.

For example:

```text
Home
  ↓
About
  ↓
Products
  ↓
Contact
```

In a website, navigation usually happens when the user clicks:

- Navbar links
- Buttons
- Menu items
- Cards
- Other links

---

### Navigation with `Link`

Next.js provides the `Link` component for navigation.

```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
}
```

When the user clicks:

```text
Products
    ↓
/products
    ↓
app/products/page.tsx
```

### Why use `Link`?

Instead of manually using:

```html
<a href="/products">Products</a>
```

Next.js applications commonly use:

```tsx
<Link href="/products">Products</Link>
```

because Next.js can handle navigation within the application more efficiently.

### Routing vs Navigation

These two concepts are related but different.

**Routing**:

> Defines which page belongs to which URL.

**Navigation**:

> Moves the user from one URL/route to another.

Think:

```text
Routing
"Where should this URL go?"

Navigation
"How do I move there?"
```

---

## 3. What is Nested Routing?

**Nested routing** means creating routes inside another route.

For example, imagine an admin dashboard:

```text
/dashboard
/dashboard/profile
/dashboard/settings
/dashboard/users
```

The routes are nested under `/dashboard`.

Folder structure:

```text
app/
└── dashboard/
    ├── page.tsx
    ├── profile/
    │   └── page.tsx
    ├── settings/
    │   └── page.tsx
    └── users/
        └── page.tsx
```

This creates:

```text
/dashboard           → Dashboard
/dashboard/profile   → Profile
/dashboard/settings  → Settings
/dashboard/users     → Users
```

### Mental Model

```text
/dashboard
     │
     ├── /profile
     │
     ├── /settings
     │
     └── /users
```

The child routes are **nested inside** the parent route.

---

## 4. Nested Routing with Layout

Nested routing becomes especially useful when combined with **nested layouts**.

For example:

```text
app/
├── layout.tsx
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── profile/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

We can have:

```text
Root Layout
     ↓
Dashboard Layout
     ↓
Dashboard Page
```

or:

```text
Root Layout
     ↓
Dashboard Layout
     ↓
Profile Page
```

So the dashboard sidebar can remain visible while the dashboard page changes.

```text
┌─────────────────────────────┐
│         Navbar              │
├──────────┬──────────────────┤
│ Sidebar  │                  │
│          │   Page Content   │
│ Profile  │                  │
│ Settings │                  │
│ Users    │                  │
└──────────┴──────────────────┘
```

This is one of the reasons nested routing and layouts are powerful in Next.js.

---

## 5. What is Dynamic Routing?

Sometimes we don't know the exact URL value beforehand.

For example, a product website might have:

```text
/products/101
/products/102
/products/103
```

Creating separate folders for every product would not make sense.

Instead, we create a **dynamic route**.

```text
app/
└── products/
    └── [id]/
        └── page.tsx
```

The `[id]` means:

> This part of the URL is dynamic.

Now the same page can handle:

```text
/products/101
/products/102
/products/103
```

---

## 6. Getting the Dynamic Parameter

Suppose the user visits:

```text
/products/101
```

Next.js gives us:

```text
params.id = "101"
```

Example:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
}
```

For:

```text
/products/101
```

the result is:

```text
Product ID: 101
```

For:

```text
/products/500
```

the same page receives:

```text
Product ID: 500
```

### Dynamic Route Flow

```text
/products/101
       ↓
   [id] route
       ↓
params.id
       ↓
    "101"
       ↓
Product Page
```

---

## 7. Dynamic Routing + Data Fetching

Dynamic routing becomes very useful when working with APIs.

Suppose:

```text
/products/101
```

Here:

```text
id = 101
```

We can use the ID to fetch that specific product.

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://api.example.com/products/${id}`
  );

  const product = await response.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
}
```

The complete flow:

```text
/products/101
      ↓
Dynamic Route [id]
      ↓
params.id = "101"
      ↓
Fetch product 101
      ↓
Product data
      ↓
Render Product Page
```

---

## 8. Dynamic Nested Routing

We can also combine nested and dynamic routing.

Imagine a blog:

```text
/blog
/blog/react
/blog/nextjs
/blog/typescript
```

Folder structure:

```text
app/
└── blog/
    └── [slug]/
        └── page.tsx
```

Here:

```text
/blog/react
      ↓
slug = "react"

/blog/nextjs
      ↓
slug = "nextjs"
```

We can go even deeper:

```text
/blog/[slug]/comments
```

Folder structure:

```text
app/
└── blog/
    └── [slug]/
        ├── page.tsx
        └── comments/
            └── page.tsx
```

Routes:

```text
/blog/react
/blog/react/comments

/blog/nextjs
/blog/nextjs/comments
```

This is **dynamic + nested routing**.

---

## 9. Complete Routing Picture

Now we can connect everything:

```text
                         Routing
                            │
             ┌──────────────┼──────────────┐
             ↓              ↓              ↓
          Static          Nested         Dynamic
             │              │              │
             ↓              ↓              ↓
          /about        /dashboard      /products/[id]
                            │              │
                            ↓              ↓
                       /dashboard/      /products/101
                         profile
```

---

## 10. Routing vs Navigation vs Nested vs Dynamic

| Concept | Meaning | Example |
| --- | --- | --- |
| **Routing** | Maps URL to a page | `/about` |
| **Navigation** | Moves between routes | Home → About |
| **Nested Routing** | Routes inside another route | `/dashboard/profile` |
| **Dynamic Routing** | Route contains a dynamic value | `/products/101` |
| **Dynamic + Nested** | Dynamic route with child routes | `/blog/react/comments` |

---

## 11. Final Mental Model

Think about building an e-commerce website.

### Routing

```text
/products
```

→ Products page.

### Navigation

```text
Home → Products
```

→ User moves to the Products page.

### Nested Routing

```text
/dashboard
/dashboard/orders
/dashboard/settings
```

→ Routes are organized under Dashboard.

### Dynamic Routing

```text
/products/101
/products/102
/products/103
```

→ One dynamic page handles different product IDs.

### Everything Together

```text
User
 │
 │ clicks Product
 ↓
Navigation
 │
 ↓
/products/101
 │
 ↓
Routing
 │
 ↓
products/[id]
 │
 ↓
params.id = "101"
 │
 ↓
Data Fetching
 │
 ↓
Product 101
 │
 ↓
Render UI
```

## Key Takeaways

> **Routing** = deciding which UI belongs to a URL.
---
> **Navigation** = moving from one route to another.
---
> **Nested Routing** = creating routes inside another route.
---
> **Dynamic Routing** = using dynamic values in the URL with `[param]`.

The most important pattern to remember is:

```text
Folder Structure
      ↓
     Route
      ↓
      URL
      ↓
Navigation
      ↓
Dynamic/Nested Parameters
      ↓
Data Fetching
      ↓
      UI
```

---

## Data Fetching, Params and searchParams, SSR & CSR in Next.js

### 1. What is Data Fetching?

**Data fetching** means getting data from a source so that we can use it in our application.

The data can come from:

- REST API
- Database
- GraphQL API
- External service
- Local file
- Backend server

For example:

```text
Next.js Application
       ↓
    Request
       ↓
     API
       ↓
     Data
       ↓
    Render UI
```

Example API:

```text
https://api.example.com/products
```

We can fetch the products and display them on our page.

---

### 2. Data Fetching in Next.js

Next.js supports different ways of fetching and rendering data.

The important question is:

> **Where does the data fetching happen?**

It can happen on the **server** or in the **browser/client**.

```text
                 Data Fetching
                      │
             ┌────────┴────────┐
             ↓                 ↓
          Server             Client
             ↓                 ↓
            SSR              CSR
```

---

### 3. SSR — Server-Side Rendering

**SSR (Server-Side Rendering)** means the server prepares the page with its data before sending the result to the browser.

A simplified flow is:

```text
Browser
   │
   │ Request /products
   ↓
Next.js Server
   │
   │ Fetch data
   ↓
API / Database
   │
   │ Data
   ↓
Next.js Server
   │
   │ Render page
   ↓
Browser
   │
   ↓
Rendered UI
```

For example:

```tsx
// app/products/page.tsx

export default async function ProductsPage() {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product: any) => (
        <h2 key={product.id}>
          {product.name}
        </h2>
      ))}
    </div>
  );
}
```

The important point is that this component can fetch data on the **server** because App Router components are Server Components by default.

---

### 4. CSR — Client-Side Rendering

**CSR (Client-Side Rendering)** means the browser loads the JavaScript application and then fetches data from the client.

The flow looks like:

```text
Browser
   │
   │ Request page
   ↓
Next.js Server
   │
   │ Send application
   ↓
Browser
   │
   │ JavaScript runs
   ↓
API
   │
   │ Data
   ↓
Browser
   │
   ↓
Update UI
```

For example:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.map((product: any) => (
        <h2 key={product.id}>
          {product.name}
        </h2>
      ))}
    </div>
  );
}
```

Here:

```text
useEffect()
    ↓
Browser fetches API
    ↓
Data arrives
    ↓
setProducts()
    ↓
Component re-renders
```

---

### 5. SSR vs CSR

| SSR | CSR |
| --- | --- |
| Data is fetched on the server | Data is fetched in the browser |
| Server prepares the UI | Browser prepares/updates the UI |
| Can keep server-only data access on the server | API requests happen from the client |
| Useful for server-rendered content | Useful for highly interactive client-side UI |
| Does not require `useEffect` for server fetching | Often uses `useEffect` or a client data-fetching library |

The choice depends on the application's requirements. Next.js allows both approaches.

---

### 6. What are `params`?

`params` are **dynamic values extracted from a URL path**.

Suppose we have:

```text
/products/101
```

Here:

```text
101
```

can represent a product ID.

We can create a dynamic route:

```text
app/
└── products/
    └── [id]/
        └── page.tsx
```

The `[id]` means:

> "This part of the URL is dynamic."

So these URLs can use the same page:

```text
/products/101
/products/102
/products/103
```

---

### 7. How `params` Work

Suppose the user visits:

```text
/products/101
```

Next.js matches:

```text
app/products/[id]/page.tsx
```

and provides the dynamic value through `params`.

Conceptually:

```text
URL
 ↓
/products/101
 ↓
[id] = 101
 ↓
params.id = "101"
```

Example:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1>Product ID: {id}</h1>;
}
```

The important idea is:

```text
/products/101
      ↓
params
      ↓
{ id: "101" }
```

---

### 8. `params` + Data Fetching

This is where `params` becomes especially useful.

Suppose we want to display a specific product.

URL:

```text
/products/101
```

Route:

```text
app/products/[id]/page.tsx
```

We can use the ID to request the correct product:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://api.example.com/products/${id}`
  );

  const product = await response.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
}
```

The complete flow is:

```text
User visits
/products/101
       ↓
Next.js matches
[ id ]
       ↓
params.id
       ↓
"101"
       ↓
Fetch
/api/products/101
       ↓
Product data
       ↓
Render Product Page
```

This is a very important pattern in Next.js.

---

### 9. `params` in CSR

`params` and CSR are separate concepts.

`params` come from the **route**, while CSR describes **where rendering/data fetching happens**.

For example, a dynamic route can still contain a Client Component:

```text
app/
└── products/
    └── [id]/
        └── page.tsx
```

The page can receive the route parameter and pass it to a Client Component.

```tsx
// page.tsx

import ProductDetails from "./ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetails id={id} />;
}
```

Then:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function ProductDetails({
  id,
}: {
  id: string;
}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return <div>{product?.name}</div>;
}
```

Now the route parameter comes from Next.js, but the actual data fetching happens in the browser.

---

## 10. SSR and CSR — Simple Mental Model

### SSR with params

Think:

```text
Request
   ↓
Server
   ↓
Fetch Data
   ↓
Render
   ↓
Browser
```

### CSR with params

Think:

```text
Request
   ↓
Browser
   ↓
JavaScript
   ↓
Fetch Data
   ↓
Update UI
```

---

### 11. What is `searchParams`?

`searchParams` are values that come from the **query string** of a URL.

Example:

```text
/products?category=phone
```

Here:

```text
category = phone
```

is a query parameter.

Another example:

```text
/products?category=phone&sort=price
```

We have two query parameters:

```text
category = phone
sort = price
```

The basic structure is:

```text
/products?category=phone&sort=price
         └──────────────────────┘
              searchParams
```

---

### 12. Getting `searchParams` in Next.js

In the App Router, a page can receive `searchParams`.

```tsx
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { category } = await searchParams;

  return <h1>Category: {category}</h1>;
}
```

If the URL is:

```text
/products?category=phone
```

Then:

```text
searchParams.category
        ↓
     "phone"
```

---

### 13. `searchParams` + Data Fetching

This is where `searchParams` becomes useful.

Suppose we have:

```text
/products?category=phone
```

We can use the category to fetch the correct products.

```tsx
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { category } = await searchParams;

  const response = await fetch(
    `https://api.example.com/products?category=${category}`
  );

  const products = await response.json();

  return (
    <div>
      <h1>{category} Products</h1>

      {products.map((product: any) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
}
```

The complete flow:

```text
/products?category=phone
          ↓
   searchParams
          ↓
category = "phone"
          ↓
      fetch()
          ↓
API
          ↓
Phone products
          ↓
      Render UI
```

---

### 14. `searchParams` + SSR

When the data is fetched on the **server**, the server can use `searchParams` to fetch the required data before rendering the page.

Example:

```text
Browser
   │
   │ /products?category=phone
   ↓
Next.js Server
   │
   │ searchParams.category
   ↓
"phone"
   │
   │ fetch()
   ↓
API
   │
   │ Phone products
   ↓
Next.js Server
   │
   │ Render
   ↓
Browser
   │
   ↓
Product UI
```

Example:

```tsx
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { category } = await searchParams;

  const response = await fetch(
    `https://api.example.com/products?category=${category}`
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

The important idea:

> `searchParams` tells the server **what data is needed**, and the server can fetch that data before rendering the page.

---

### 15. `searchParams` + CSR

We can also use query parameters with **Client-Side Rendering**.

For example:

```text
/products?category=phone
```

The browser can read the query parameter and fetch data from the client.

A Client Component can use browser APIs such as `URLSearchParams`.

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const category = params.get("category");

    fetch(`/api/products?category=${category}`)
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

The flow is:

```text
Browser
   │
   │ /products?category=phone
   ↓
Browser reads URL
   │
   ↓
category = "phone"
   │
   │ fetch()
   ↓
API
   │
   ↓
Products
   │
   ↓
setProducts()
   │
   ↓
UI updates
```

---

### 16. SSR vs CSR with `searchParams`

The same URL can be used with different rendering approaches.

```text
/products?category=phone
```

### SSR with searchParams

```text
URL
 ↓
Next.js Server
 ↓
searchParams
 ↓
Fetch data
 ↓
Render
 ↓
Browser
```

### CSR with searchParams

```text
URL
 ↓
Browser
 ↓
Read searchParams
 ↓
Fetch data
 ↓
Update state
 ↓
Render UI
```

---

### 17. Real Example: Search

Suppose we create a product search page.

URL:

```text
/products?search=laptop
```

Here:

```text
searchParams.search
        ↓
    "laptop"
```

We can use it for data fetching:

```tsx
const response = await fetch(
  `https://api.example.com/products?search=${search}`
);
```

Flow:

```text
/products?search=laptop
          ↓
searchParams.search
          ↓
       "laptop"
          ↓
      fetch API
          ↓
   Search results
          ↓
       Render UI
```

---

### 18. Multiple `searchParams`

URL:

```text
/products?category=phone&sort=price&page=2
```

We can have:

```text
category → phone
sort     → price
page     → 2
```

Example:

```tsx
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
    sort?: string;
    page?: string;
  }>;
}) {
  const { category, sort, page } = await searchParams;

  // Use these values for data fetching
}
```

Conceptually:

```text
URL
 │
 ├── category = phone
 ├── sort = price
 └── page = 2
          ↓
    searchParams
          ↓
     Data Fetching
          ↓
      Product Data
          ↓
       Render UI
```

---

### 19. Important Difference

Do not confuse these concepts:

### `searchParams`

Answers:

> **What values did the user put in the URL?**

Example:

```text
?category=phone
```

### Data Fetching

Answers:

> **Where do I get the actual data from?**

Example:

```text
API → products
```

### SSR

Answers:

> **Does the server render the page with the data?**

### CSR

Answers:

> **Does the browser fetch/update the data and UI?**

---

## 20. Complete Mental Model

The relationship can be remembered like this:

```text
                 URL
                  │
                  ↓
        /products?category=phone
                  │
                  ↓
            searchParams
                  │
                  ↓
         category = "phone"
                  │
          ┌───────┴────────┐
          ↓                ↓
       Server            Browser
          ↓                ↓
    Data Fetching      Data Fetching
          ↓                ↓
         SSR              CSR
          ↓                ↓
       Render            Update UI
          └───────┬────────┘
                  ↓
               UI
```

### Simple Example

Think about an online store.

User visits:

```text
/products?category=phone
```

The URL tells the application:

> "The user wants products from the phone category."

Then:

```text
searchParams
      ↓
category = phone
      ↓
Data Fetching
      ↓
Get phone products
      ↓
SSR or CSR
      ↓
Display products
```

### Data Fetching and Rendering Key Takeaways

> **`searchParams`** → reads values from the URL query string.
---
> **Data Fetching** → gets data from an API, database, or another source.
---
> **SSR** → server fetches/uses data and renders the page on the server.
---
> **CSR** → browser fetches/uses data and updates the UI on the client.

The most useful mental model is:

```text
URL
 ↓
searchParams
 ↓
Data Fetching
 ↓
SSR or CSR
 ↓
UI
```

---

## 21. `params` vs `searchParams`

These are easy to confuse.

### `params`

Values come from the **URL path**.

>**`Route parameters`** are dynamic placeholder segments of a URL path used to identify or capture a specific resource or values.

```text
/products/101
         ↑
      route value
```

Used to identify a specific resource.

```text
params.id
↓
101
```

Route:

```text
app/products/[id]/page.tsx
```

### Query String Parameters (`searchParams`)

Values come from the **query string**.

> **`URL Parameters`** / **`Query Parameters`** are extra pieces of data added to the end of a web address to pass information to a website or server.

Structure

- Question mark (?): Marks the start of the query string.
- Key-value pairs: Written as key=value.
- Ampersand (&): Separates multiple parameters from each other.

```text
/products?category=phone&sort=price
         ↑
    query parameter
```

Here:

- ? = query string begins
- category = parameter name or key
- phone = parameter value
- & = separator

Usually used for things such as:

- Filtering
- Searching
- Sorting
- Pagination
- Optional settings

```text
/products?category=phone&sort=price
         └───────────────┘
            query string
```

The query parameters are:

```text
category = phone
sort = price
```

They come after the `?`.

Multiple query parameters are separated by `&`.

Conceptually:

```text
searchParams
    ↓
category = "phone"
sort = "price"
```

So:

```text
/products/101
      ↑
    params
```

while:

```text
/products?category=phone
         ↑
   searchParams
```

```text
URL
 │
 ├── Path
 │     ↓
 │   Route Parameter
 │     ↓
 │   params
 │
 └── Query String
       ↓
     Query Parameter
       ↓
     searchParams
```

A simple way to remember:

> **`params` = dynamic path values**
---
> **`searchParams` = query-string values**
---
> **`Route parameter` = identify something.**
---
> **`Query parameter` = filter, search, sort, or modify something.**

```text
Route Parameter
      ↓
Part of the URL path
      ↓
[dynamic]
      ↓
params


Query Parameter
      ↓
Part of the query string
      ↓
?key=value
      ↓
searchParams
```

Simple Comparison

| Route Parameter | Query Parameter |
| --- | --- |
| Part of the URL path | Comes after `?` |
| Uses dynamic route `[id]` | Uses `searchParams` |
| `/products/101` | `/products?category=phone` |
| Often identifies a resource | Often filters or modifies results |
| `params.id` | `searchParams.category` |

---

### 22. Using Route and URL Parameters Together

We can use both in the same URL.

Example:

```text
/products/101?review=latest
```

Here:

```text
101
```

is the **route parameter**.

And:

```text
review=latest
```

is the **query parameter**.

Conceptually:

```text
/products/101?review=latest
         │          │
         │          └── Query parameter
         │
         └── Route parameter
```

The page could receive both:

```tsx
export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ review?: string }>;
}) {
  const { id } = await params;
  const { review } = await searchParams;

  return (
    <div>
      <h1>Product: {id}</h1>
      <p>Review: {review}</p>
    </div>
  );
}
```

For:

```text
/products/101?review=latest
```

we get:

```text
params.id = "101"

searchParams.review = "latest"
```

---

### 23. Complete Mental Model

The overall relationship can be understood like this:

```text
                         Next.js
                            │
              ┌─────────────┴─────────────┐
              ↓                           ↓
           Routing                    Rendering
              │                           │
              ↓                     ┌─────┴─────┐
           params                    ↓           ↓
              │                     SSR         CSR
              ↓
       Dynamic URL value
              │
              ↓
        Data Fetching
              │
       ┌──────┴──────┐
       ↓             ↓
    Server         Client
```

For a product page:

```text
/products/101
      ↓
Dynamic Route
      ↓
params.id = "101"
      ↓
Fetch product 101
      ↓
Render Product UI
```

---

## My Learning Understanding

The key concepts I learned are:

### Data Fetching Summary

> Getting data from an API, database, or another source so that the application can display or use it.

### SSR Summary

> The server fetches data and renders the page before sending the result to the browser.

### CSR Summary

> The browser runs JavaScript and fetches/updates data on the client side.

### `params` Summary

> Dynamic values extracted from the URL path.

### `searchParams` Summary

> Values extracted from the URL query string.

The most useful mental model is:

```text
URL
 ↓
Routing
 ↓
params
 ↓
Identify the resource
 ↓
Data Fetching
 ↓
SSR or CSR
 ↓
Render UI
```

For example:

```text
/products/101
      ↓
params.id = "101"
      ↓
Fetch product 101
      ↓
      ┌─────────┐
      ↓         ↓
    Server    Browser
      ↓         ↓
     SSR       CSR
      ↓         ↓
       Product UI
```

Understanding this flow is more important than memorizing individual Next.js APIs. Once this becomes clear, concepts such as **dynamic routes, Server Components, Client Components, `useEffect`, API routes, caching, and loading states** become much easier to understand.
