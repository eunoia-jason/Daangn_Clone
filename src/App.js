import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/About";
import HomePage from "./Page/Home";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* 기본 화면 설정 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
