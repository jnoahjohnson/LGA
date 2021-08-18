import styled from "styled-components";

const Hero = styled.div`
  height: 100vh;
  background: url("https://res.cloudinary.com/dbolbbqw7/image/upload/f_auto/HeroBackground_yw4tot.png"),
    rgba(1, 1, 1, 0.25);

  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-blend-mode: multiply;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 105px 4.5rem 0 4.5rem;
  color: white;

  h2 {
    font-weight: 700;
    font-size: 3rem;
  }

  button {
    font-size: 1.5rem;
  }
`;

export default Hero;
