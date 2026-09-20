import Post from "../components/Post";

// ToDo: fetch data from an API instead of using static data.
const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and how to build modern React applications with routing, server rendering, and more.",
    author: "Sofian Hasan",
    category: "Next.js",
    date: "2026-09-10",
    image: "/blog/next.png",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "Explore how React components work and how to create reusable, maintainable UI components for your applications.",
    author: "Sofian Hasan",
    category: "React",
    date: "2026-09-08",
    image: "/blog/react.png",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    description:
      "A beginner-friendly guide to creating RESTful APIs using Node.js, Express, and modern backend development practices.",
    author: "Sofian Hasan",
    category: "Node.js",
    date: "2026-09-05",
    image: "/blog/node.png",
  },
  {
    id: 4,
    title: "Database Design for Web Applications",
    description:
      "Understand the basic principles of database design, relationships, indexing, and efficient data management.",
    author: "Sofian Hasan",
    category: "Database",
    date: "2026-09-02",
    image: "/blog/database.png",
  },
  {
    id: 5,
    title: "Writing Clean and Maintainable Code",
    description:
      "Learn practical techniques for writing clean, readable, reusable, and maintainable code in modern web applications.",
    author: "Sofian Hasan",
    category: "Programming",
    date: "2026-08-28",
    image: "/blog/cleanCode.jpg",
  },
];

const BlogsPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-amber-500 my-5">
        Our Blogs
      </h2>

      <div className="flex flex-row-reverse items-center justify-start flex-wrap">
        {blogsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
