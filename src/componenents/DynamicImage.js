import styled from "styled-components";

const DynamicImage = styled.div`
  width: 100%;
  height: 150px;

  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export default DynamicImage;
