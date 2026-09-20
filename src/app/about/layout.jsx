export const metadata = {
  title: {
    default: "About | Sofian Hasan",
    template: "%s | About | Next.js Learning Journal",
  },

  description:
    "Explore the About section of the Next.js Learning Journal, including information about Sofian Hasan, his learning journey, and practical Next.js topics.",

  keywords: [
    "About",
    "Sofian Hasan",
    "Next.js Learning Journal",
    "Next.js",
    "React",
    "Web Development",
  ],

  openGraph: {
    title: "About | Next.js Learning Journal",
    description:
      "Explore Sofian Hasan's learning journey and practical Next.js topics in the Next.js Learning Journal.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "About | Next.js Learning Journal",
    description:
      "Explore Sofian Hasan's learning journey and practical Next.js topics.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const AboutLayout = ({ children }) => {
  return <div className="min-h-screen bg-slate-950 text-white">{children}</div>;
};

export default AboutLayout;
