import "../styles/globals.css";
import styled from "styled-components";

const MainLayout = styled.div`
  background-color: rgb(32, 40, 50);
  height: 100vh;
  z-index: -3;
`;

const BgImage = styled.img`
  position: absolute;
`;

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <BgImage src="/kaisen.jpg" />
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
