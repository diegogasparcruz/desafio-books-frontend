import { Container } from './styles';

export function Loading({ size, alignCenter }) {
  return (
    <Container size={size} alignCenter={alignCenter}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
}
