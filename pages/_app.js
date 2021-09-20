import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "../components/store/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
