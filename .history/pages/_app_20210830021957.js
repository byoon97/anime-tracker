import "../styles/globals.css";
import styled from "styled-components";

const MainLayout = styled.div`
  background-color: rgb(32, 40, 50);
  height: 100vh;
  z-index: -3;
`;

const BgImage = styled.figure`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("/kaisen.jpg");
  object-fit: fill;
  margin-top: -1rem;
  margin-left: -1rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <BgImage />
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
