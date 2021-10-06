import "../styles/globals.css";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const MainLayout = styled.div`
  background-color: rgb(32, 40, 50);
  height: 100%;
  z-index: -1;
`;

const Container = styled.div`
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  text-align: left;
  position: relative;
  width: 1100px;
  height: 100%;
  background-color: rgb(32, 40, 50);
`;

const BgImage = styled.figure`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("/kaisen.jpg");
  object-fit: fill;
  margin-top: -1rem;
  margin-left: 0.06rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <BgImage />
        <Container>
          <Header />
          <NavBar />
          <Component {...pageProps} />
        </Container>
      </MainLayout>
    </Provider>
  );
}
export default MyApp;
