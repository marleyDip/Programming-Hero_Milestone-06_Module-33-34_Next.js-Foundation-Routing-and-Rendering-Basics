# Basic

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

* **Pages Router:** Traditional file-based routing where every file directly maps to a URL endpoint.

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

* **App Router:** The App Router is the modern Next.js routing system. App Router introduces a more structured application model around React Server Components, layouts, loading UI, error handling, and nested routes.

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

* **Pages Router:** Everything gets sent to the client browser to turn into an interactive page (hydration).

* **App Router:** Components are executed on the server by default. **`Server Component`** & **`Client Component`** model is a major part of the App Router architecture.

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

* **Pages Router:** Requires specific wrapper functions to pass props down to the page component.

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

* **App Router:** Fetch data directly inside server components with clean `async/await` syntax.

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
