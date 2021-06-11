import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const usePagination = page => {
  const router = useRouter();

  useEffect(() => {
    const pageUrl = router.pathname;

    router.push(`${pageUrl}?page=${page}`, undefined, {
      shallow: false,
    });
  }, [page]);
};
