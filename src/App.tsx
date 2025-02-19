import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { APP_ROUTES } from "@/routes";
import { NotFound } from "@/containers/not-found/Loadable";
import { Header } from "./containers/global/header";
import { Main } from "./containers/global/styles";
import { theme } from "./styles/theme-config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Main>
          <Routes>
            {APP_ROUTES.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
