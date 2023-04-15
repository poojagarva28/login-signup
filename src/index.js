import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import Routes from "./Route/Routes";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={Routes}>
      <App />
    </RouterProvider>
    <Toaster className="shadow-md">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              <span> {icon}</span>
              {message}
              {t.type !== "loading" && (
                <span onClick={() => toast.dismiss(t.id)}>❌</span>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
