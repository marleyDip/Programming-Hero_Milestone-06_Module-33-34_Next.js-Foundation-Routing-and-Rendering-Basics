# Basic

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

This can create a structure like:

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

## My Learning Understanding

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
