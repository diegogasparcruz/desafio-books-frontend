import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePagination = page => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const pageUrl = router.pathname;

    setLoading(true);
    router
      .push(`${pageUrl}?page=${page}`, undefined, {
        shallow: false,
      })
      .then(() => {
        setLoading(false);
      });
  }, [page]);
  return { isFallback: router.isFallback, loading };
};
