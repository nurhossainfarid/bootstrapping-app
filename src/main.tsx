import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import routes from "./routes/route.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </ThemeProvider>
);
