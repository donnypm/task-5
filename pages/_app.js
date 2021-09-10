import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../components/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
