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
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "Explore how React components work and how to create reusable, maintainable UI components for your applications.",
    author: "Sofian Hasan",
    category: "React",
    date: "2026-09-08",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    description:
      "A beginner-friendly guide to creating RESTful APIs using Node.js, Express, and modern backend development practices.",
    author: "Sofian Hasan",
    category: "Node.js",
    date: "2026-09-05",
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Database Design for Web Applications",
    description:
      "Understand the basic principles of database design, relationships, indexing, and efficient data management.",
    author: "Sofian Hasan",
    category: "Database",
    date: "2026-09-02",
    image: "/images/blog-4.jpg",
  },
  {
    id: 5,
    title: "Writing Clean and Maintainable Code",
    description:
      "Learn practical techniques for writing clean, readable, reusable, and maintainable code in modern web applications.",
    author: "Sofian Hasan",
    category: "Programming",
    date: "2026-08-28",
    image: "/images/blog-5.jpg",
  },
];

const PostDetailPage = async ({ params }) => {
  const { postId } = await params;
  // By default, Route Parameters is always received as string.
  console.log(typeof postId); // string

  // ToDo: load data from database
  // Convert string into number
  // Here, store all in a variable instead of destructuring
  const post = blogsData.find((post) => post.id === parseInt(postId));

  console.log(post);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-lime-500 my-5">
        Post Detail Page: {postId}
      </h2>

      {post && (
        <div className="m-10 text-white border-2 border-dashed p-5 border-green-300 ring-2 ring-offset-2">
          <h3>Blog Name: {post.title}</h3>
          <p>By - {post.author}</p>
          <p>{post.description}</p>
          <h4>{post.category}</h4>
          <h6>{post.date}</h6>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
