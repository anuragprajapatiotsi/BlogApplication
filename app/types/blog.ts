// types/blog.ts
export type Blog = {
  _id: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishDate: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogsResponse = {
  blogs: Blog[];
  page: number;
  totalPages: number;
  totalBlogs: number;
  limit: number;
};
