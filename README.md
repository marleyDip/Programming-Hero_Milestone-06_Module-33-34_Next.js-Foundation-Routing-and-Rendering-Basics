# Basic

## ⚡Next.js Architecture: App Router vs. Pages Router

The primary difference between the `App Router` and the `Pages Router` in Next.js lies in their architectural foundations and how they handle ***routing***, ***rendering***, and ***data fetching***. The App Router (introduced in Next.js 13/14) is built to natively support **React Server Components (RSC)** and utilizes a **`folder-based` routing structure***, whereas the Pages Router is the legacy, **`file-based` routing system** where pages are client-side rendered by default.

While both routers can coexist in the same application, the App Router takes configuration precedence and is the recommended standard for new projects.

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

* **Pages Router:** You create a file like `pages/contact.js`, and it automatically maps to `/contact`.
* **App Router:** Routing relies on folders rather than files. To create a `/contact` route, you make an `app/contact/` directory and place a reserved `page.js` file inside it. The App Router also introduces other reserved file conventions for seamless UX:
  * `layout.js` – Defines shared UI for a route branch.
  * `loading.js` – Automates loading states using React Suspense.
  * `error.js` – Isolates and handles runtime errors for specific UI segments.

### 2. Server vs. Client Components

* **Pages Router:** Everything gets sent to the client browser to turn into an interactive page (hydration).
* **App Router:** Components are executed on the server by default. Zero client-side JavaScript is sent for these components, making pages load significantly faster. When you need interactivity (like `useState` or browser events), you must explicitly opt-in by writing `"use client"` at the very top of the file.

### 3. Modernized Data Fetching

* **Pages Router:** Relies on page-level functions like `getServerSideProps` for SSR or `getStaticProps` for SSG. This forces you to pass data down through multi-level props.
* **App Router:** Eliminates those functions entirely. Because components run on the server, you can turn your component into an `async` function and `fetch()` data directly inside it:

```tsx
// App Router Example
export default async function Page() {
  const res = await fetch('[https://example.com](https://example.com)');
  const data = await res.json();
  return <div>{data.title}</div>;
}

