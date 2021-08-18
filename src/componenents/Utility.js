import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem;
  background: var(--accent, blue);
  border: none;
  color: white;
  font-size: 1.15rem;
  box-shadow: var(--defaultShadow);
  transition: box-shadow 0.25s;

  &:hover {
    box-shadow: var(--heavyShadow);
  }
`;

export const Spacer = styled.div`
  width: ${(props) => (props.width ? `${props.width}px` : 0)};
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
`;
