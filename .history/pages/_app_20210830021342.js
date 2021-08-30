import "../styles/globals.css";
import styled from "styled-components";

const MainLayout = styled.div`
  background-color: rgb(32, 40, 50);
  height: 100vh;
  z-index: -3;
`;

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
