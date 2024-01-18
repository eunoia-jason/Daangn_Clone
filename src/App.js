import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/About";
import HomePage from "./Page/Home";
import ScrollToTop from "./ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./Style/theme";
import TopNavBar from "./Common/TopNavBar";
import PageNotFound from "./Page/404Error";
import Footer from "./Common/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <TopNavBar />
        <Main>
          <Routes>
            {/* 기본 화면 설정 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.main`
  margin-top: 64px;
`;
