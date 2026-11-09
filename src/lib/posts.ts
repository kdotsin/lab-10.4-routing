export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}
 
export const posts: Post[] = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that gives you file-based routing, server-side rendering, and static generation out of the box. In this post we walk through creating a new project and your first page.",
  },
  {
    id: 2,
    slug: "understanding-server-components",
    title: "Understanding Server Components",
    content:
      "Server Components render on the server and send HTML to the client, reducing the JavaScript shipped to the browser. Use Client Components only when you need interactivity or browser APIs.",
  },
  {
    id: 3,
    slug: "typescript-tips-for-react-developers",
    title: "TypeScript Tips for React Developers",
    content:
      "Typing props with interfaces, using generics for reusable components, and leaning on type inference can make your React code safer and easier to maintain.",
  },
];
