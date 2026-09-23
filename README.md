
<div align="center">

# ⚡ Next.js Foundation, Routing & Rendering

## 🚀 Building One Concept at a Time

A hands-on Next.js learning project focused on **App Router, routing, rendering, data loading, Server & Client Components, image optimization, metadata, and modern Next.js fundamentals.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![App Router](https://img.shields.io/badge/App_Router-Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs/app)

<br />

<p align="center">

[![GitHub Stars](https://img.shields.io/github/stars/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics?style=flat-square&logo=github&color=yellow)](https://github.com/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics)
&nbsp;
[![GitHub Forks](https://img.shields.io/github/forks/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics?style=flat-square&logo=github&color=blue)](https://github.com/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics)

</p>

<!-- <br /><br />

<a href="https://github.com/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics">
  <strong>⭐ Explore Repository</strong>
</a> -->

</div>

---

## 🧠 About The Project

This repository documents my journey through the **Next.js Foundation, Routing, and Rendering Basics** modules.

Instead of learning concepts only through theory, I implemented them through small features, reusable components, dynamic routes, data-driven pages, and practical UI experiences.

The project focuses on understanding **how Next.js works behind the scenes** while building with the modern **App Router architecture**.

> 💡 **Learning Philosophy:**  
> Learn the concept → Build it → Break it → Understand it → Improve it.

---

## 📖 Learning Notes

This repository contains both practical implementations and learning notes from my Next.js journey.

| Resource Notes | Description | Live Link |
| --- | --- | --- |
| 🧭 [Routing](./ROUTING.md) | Pages, layouts, navigation, dynamic routes, and route handling | [View](https://sofian-nextjs-routing-rendering.vercel.app/) |
| 📘 [Rendering](./RENDERING.md) | CSR, SSR, hydration, Server Components, Client Components, and data loading | [View](https://sofian-nextjs-routing-rendering.vercel.app/foods) |

> 🧠 **Learn the concept → Build it → Experiment → Understand it**

---

## ✨ What I'm Learning

<table>
<tr>
<td width="50%">

### 🧭 Routing & Navigation

- App Router
- Static routes
- Dynamic routes
- Nested routes
- Nested layouts
- Navigation with `Link`
- Active navigation states
- Route-level Not Found pages

</td>

<td width="50%">

### ⚡ Rendering & Components

- Server Components
- Client Components
- CSR
- SSR
- Hydration
- Data loading
- `use()`
- Interactive Client Components

</td>
</tr>

<tr>
<td width="50%">

### 🖼️ Optimization

- Next.js Image
- Local images
- Remote images
- `fill`
- `sizes`
- `priority`
- Image optimization
- Placeholder handling

</td>

<td width="50%">

### 🔎 SEO & Metadata

- Static metadata
- Dynamic metadata
- `generateMetadata()`
- Page titles
- Descriptions
- Open Graph
- Twitter metadata
- Custom `not-found.tsx`

</td>
</tr>
</table>

---

## 📚 20 Topics Covered

| # | Topic | Focus |
| --- | --- | --- |
| 01 | ⚡ Next.js Fundamentals | What Next.js is and why it is used |
| 02 | 🏗️ Next.js Project Structure | Understanding the App Router structure |
| 03 | 🧭 Pages & Routing | Creating routes with folders |
| 04 | 🔗 Navigation | Using `Link` for client-side navigation |
| 05 | 🧩 Layouts | Shared UI with `layout.tsx` |
| 06 | 🪆 Nested Layouts | Creating layouts for specific route segments |
| 07 | 🧬 Dynamic Routing | Building routes with `[id]` parameters |
| 08 | 📝 Dynamic Blog Pages | Rendering pages from data |
| 09 | 🚫 Not Found Pages | Handling missing routes and resources |
| 10 | 🖼️ Image Optimization | Working with the Next.js `Image` component |
| 11 | 🌐 Remote Images | Configuring external image sources |
| 12 | 🔍 Metadata | Adding SEO-friendly page metadata |
| 13 | ⚙️ Dynamic Metadata | Using `generateMetadata()` |
| 14 | 🖥️ Server Components | Understanding server-side components |
| 15 | 💻 Client Components | Using `"use client"` for interactivity |
| 16 | 🔄 CSR vs SSR | Understanding rendering strategies |
| 17 | 💧 Hydration | Understanding server/client synchronization |
| 18 | 📡 Data Fetching | Loading API data in Next.js |
| 19 | 🍔 Data-Driven Food Pages | Building listing and dynamic detail pages |
| 20 | 🧪 `use()` API | Exploring modern React data loading |

---

## 🗺️ Learning Roadmap

```text
                         NEXT.JS
                            │
             ┌──────────────┴──────────────┐
             │                             │
          ROUTING                      RENDERING
             │                             │
      ┌──────┼──────┐               ┌──────┼──────┐
      │      │      │               │      │      │
    Static Dynamic Layouts         CSR    SSR  Hydration
      │      │      │               │      │      │
      └──────┴──────┘               └──────┴──────┘
             │                             │
             └──────────────┬──────────────┘
                            │
                     DATA FETCHING
                            │
                     ┌──────┴──────┐
                     │             │
                  Server        Client
                 Fetching       Loading
                     │             │
                     └──────┬──────┘
                            │
                         UI + SEO
                            │
                  ┌─────────┴─────────┐
                  │                   │
              Metadata            Images
                  │                   │
                  └─────────┬─────────┘
                            │
                     🚀 NEXT.JS APP
```

---

## 🧪 Practical Features

### 📝 Learning Journal

A dedicated blog section demonstrates:

- Static blog data
- Dynamic blog routes
- Blog detail pages
- Dynamic metadata
- Custom Not Found handling
- Reusable post components

---

### 👥 Users & Dynamic Routes

The users section demonstrates dynamic routing and external API data.

```text
/users
   │
   ├── User 1
   ├── User 2
   ├── User 3
   │
   └── /users/[userId]
             │
             └── User Details
```

---

### 🍽️ Food Explorer

The food section demonstrates a more complete data-driven experience.

```text
Food API
   │
   ▼
lib/foods.ts
   │
   ├───────────────┐
   ▼               ▼
Foods Page     Food Details
   │               │
FoodCard       [foodId]
                   │
                   ▼
              notFound()
                   │
                   ▼
          Food Not Found UI
```

The food feature demonstrates:

- API data fetching
- Shared data functions
- Dynamic routes
- Dynamic metadata
- Food cards
- Food details
- `notFound()`
- Remote images
- Responsive UI

---

## 🖼️ Next.js Image Optimization

This project explores the Next.js `Image` component and its important properties.

```tsx
<Image
  src={food.image_link}
  alt={food.dish_name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Concepts explored:

```text
Image
 ├── src
 ├── alt
 ├── width / height
 ├── fill
 ├── sizes
 ├── priority
 ├── loading
 ├── quality
 ├── placeholder
 └── blurDataURL
```

---

## 🔎 SEO & Metadata

The project also explores Next.js metadata APIs.

### Static Metadata

```tsx
export const metadata = {
  title: "About",
  description: "About my Next.js learning journey",
};
```

### Dynamic Metadata

```tsx
export async function generateMetadata({
  params,
}) {
  const food = await getFoodById(params.foodId);

  return {
    title: food?.dish_name ?? "Food Not Found",
  };
}
```

---

## 🖥️ Server vs Client Components

One of the key concepts explored in this project is the relationship between Server and Client Components.

```text
                Dashboard
                    │
          ┌─────────┴─────────┐
          │                   │
     Server Component    Client Component
          │                   │
       Server UI          useState()
       Data Fetching      onClick()
       Metadata           Interactivity
```

### Server Component

```tsx
const DashboardPage = async () => {
  const data = await fetchData();

  return <Dashboard data={data} />;
};
```

### Client Component

```tsx
"use client";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};
```

---

## 🧭 Project Structure

```text
app/
├── about/
│   ├── image/
│   │   └── component/
│   └── page.tsx
│
├── blogs/
│   ├── [postId]/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── foods/
│   ├── [foodId]/
│   │   └── page.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── users/
│   ├── [userId]/
│   │   └── page.tsx
│   └── page.tsx
│
├── dashboard/
│   └── page.tsx
│
├── not-found.tsx
├── layout.tsx
└── page.tsx

components/
├── FoodCard.tsx
├── NavLink.tsx
└── ...

lib/
└── foods.ts

types/
└── food.ts
```

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
| --- | --- |
| ⚡ **Next.js** | React framework & App Router |
| ⚛️ **React** | UI development |
| 🔷 **TypeScript** | Type-safe development |
| 🎨 **Tailwind CSS** | Responsive styling |
| 🌐 **Fetch API** | Data fetching |
| 🖼️ **Next/Image** | Image optimization |
| 🔍 **Metadata API** | SEO & page metadata |
| 🧭 **App Router** | Routing & layouts |
| 📡 **REST APIs** | External data |
| 🎯 **Daisy UI** | Interface visuals |

</div>

---

## 🎨 UI & Design

The project uses a modern dark interface with:

- 🌑 Dark slate surfaces
- 💗 Pink accents
- 💜 Violet gradients
- 🟠 Orange highlights
- 🧊 Glassmorphism
- ✨ Subtle hover effects
- 📱 Mobile-first layouts
- 🧩 Reusable components
- 🎯 Consistent spacing
- 🖼️ Responsive image layouts

### Visual Direction

```text
Slate Background
       ↓
Glass Surface
       ↓
Pink / Violet Accent
       ↓
Soft Glow
       ↓
Micro Interaction
       ↓
Premium UI
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics.git
```

### 2. Navigate to the project

```bash
cd Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## 📖 Learning Progress

```text
Module 33
│
├── ✅ Next.js Fundamentals
├── ✅ App Structure
├── ✅ Routing
├── ✅ Navigation
├── ✅ Layouts
├── ✅ Dynamic Routes
├── ✅ Image Optimization
├── ✅ Not Found
├── ✅ Metadata
└── ✅ Google Fonts
       
Module 34
│
├── ✅ Rendering
├── ✅ CSR / SSR
├── ✅ Hydration
├── ✅ Server Components
├── ✅ Client Components
├── ✅ Data Loading
├── ✅ Dynamic Data
└── ✅ React use() API
```

---

## 🎯 Main Goal

The goal of this project is not simply to build another website.

It is to understand the **fundamentals of modern Next.js development** by implementing each concept in a practical way.

```text
Learn
  ↓
Understand
  ↓
Implement
  ↓
Experiment
  ↓
Debug
  ↓
Refactor
  ↓
Build Better
```

---

## 👨‍💻 Author

<div align="center">

  <h2>✨ Md. Sofian Hasan ✨</h2>

  <p>
    <strong>Software Engineer | Full-Stack (MERN / PERN) Developer</strong>
  </p>

  <p align="center">

[![🌐 Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit_Website-0A0A0A?style=for-the-badge)](https://marleydip.netlify.app/)
&nbsp;
[![💻 GitHub](https://img.shields.io/badge/💻_GitHub-View_Profile-181717?style=for-the-badge&logo=github)](https://github.com/marleyDip)

</p>

</div>

<p align="center">
  Passionate about building <strong>modern, scalable, and user-focused web applications</strong>
  while continuously improving <b><i>JavaScript</i></b>, <b><i>TypeScript</i></b>, <b><i>React</i></b>, <b><i>problem-solving</i></b>, and <b>full-stack development skills</b>.
</p>

### 🚀 Tech Focus

<div align="center">

  ![Tech Stack](https://skillicons.dev/icons?i=js,ts,react,nextjs,tailwind,nodejs,express,nestjs,mongodb,postgres)

  <br /><br />

  ![MERN Stack](https://img.shields.io/badge/MERN-Stack-61DAFB?style=for-the-badge)
  ![PERN Stack](https://img.shields.io/badge/PERN-Stack-336791?style=for-the-badge)

</div>

---

## **⭐ Repository**

If you find this learning journey useful, feel free to explore the repository and follow along.

<div align="center">

### **🚀 Learn. Build. Break. Understand. Repeat.**

<br />

[![Explore Repository](https://img.shields.io/badge/Explore%20Repository-18181B?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marleyDip/Programming-Hero_Milestone-06_Module-33-34_Next.js-Foundation-Routing-and-Rendering-Basics)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-DB2777?style=for-the-badge&logo=vercel&logoColor=white)](https://sofian-nextjs-routing-rendering.vercel.app/)

</div>
