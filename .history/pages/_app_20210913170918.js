import "../styles/globals.css";
import styled from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store/store";

const MainLayout = styled.div`
  background-color: rgb(32, 40, 50);
  height: 100%;
  z-index: -3;
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
        <BgImage />
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
export default MyApp;
