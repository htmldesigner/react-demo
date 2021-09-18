import { useMemo } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useSortedPost = (posts, sort) => {
  return useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
};

export const usePost = (posts, sort, query) => {
  const sortedPosts = useSortedPost(posts, sort);

  return useMemo(
    () =>
      sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, sortedPosts]
  );
};
