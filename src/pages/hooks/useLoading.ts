import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const setLoadingState = (state: boolean) => {
    setLoading(state);
  };

  return { loading, setLoadingState };
};

export default useLoading;
