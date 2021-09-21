import { useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useFetching = (callback) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
