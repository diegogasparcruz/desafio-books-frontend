import { Container } from './styles';

export function Loading({ size, alignCenter, color }) {
  return (
    <Container size={size} alignCenter={alignCenter} color={color}>
      <div />
      <div />
      <div />
      <div />
    </Container>
  );
}
