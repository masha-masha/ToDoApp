import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import './i18n'; 

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <Provider store={store}>
   <MantineProvider>
    <App />
   </MantineProvider>
  </Provider>
 </StrictMode>,
);
