import "../styles/globals.css";
import styled from "styled-components";

const MainLayout = styled.div``;

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
