import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 0.75rem;
  background: var(--accent, blue);
  border: none;
  color: white;
  font-size: 1.15rem;
  box-shadow: var(--defaultShadow);
  transition: box-shadow 0.25s;
  font-weight: 600;

  &:hover {
    box-shadow: var(--heavyShadow);
  }
`;

export const HeroButton = styled.button`
  padding: 0.75rem 1.75rem;
  background: var(--primary, blue);
  border: none;
  color: white;
  font-size: 1.25rem;
  transition: box-shadow 0.25s;
  font-weight: 600;

  &:hover {
    box-shadow: var(--heavyShadow);
  }
`;

export const Spacer = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : 0)};
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
`;
