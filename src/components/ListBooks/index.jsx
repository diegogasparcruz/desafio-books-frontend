import { Card } from '../Card';
import { Loading } from '../Loading';

import { Container } from './styles';

export function ListBooks({ books, loading, onClick }) {
  return (
    <Container isLoading={loading}>
      {books.map(book => (
        <Card key={book.id} book={book} onClick={() => onClick(book)} />
      ))}
      {loading && <Loading size={2.5} alignCenter />}
    </Container>
  );
}
