import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { verifyPage } from '../utils/verifyPage';

export const BookContext = createContext({});

export function BookProvider({ children }) {
  const router = useRouter();

  const [page, setPage] = useState(verifyPage(router.query.page));
  const [loading, setLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const pageUrl = router.pathname;

    if (pageUrl !== '/') {
      return;
    }

    setLoading(true);

    router
      .push(`${pageUrl}?page=${page}`, undefined, {
        shallow: false,
      })
      .then(() => setLoading(false));
  }, [page]);

  function nextPage() {
    setPage(Number(page + 1));
  }

  function previousPage() {
    setPage(Number(page - 1));
  }

  function openModal(bookSelected) {
    setBook(bookSelected);
    setIsShowModal(true);
  }

  function closeModal() {
    setIsShowModal(false);
  }

  return (
    <BookContext.Provider
      value={{
        page,
        nextPage,
        previousPage,
        loading,
        isShowModal,
        openModal,
        book,
        closeModal,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
