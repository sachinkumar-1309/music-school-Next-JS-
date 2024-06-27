// "use client";

// import React from "react";
// import { Provider } from "react-redux";
// import store from "@/store/store";

// const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
// 	children,
// }) => {
// 	return <Provider store={store}>{children}</Provider>;
// };

// export default ClientProvider;
"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientProvider;
