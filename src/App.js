import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { LadingPage } from "./styled";

function App() {
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <LadingPage blur={open}>
      <Header open={open} showDrawer={showDrawer} onClose={onClose} />
      <Main />
      <Footer />
      <ScrollToTop />
    </LadingPage>
  );
}

export default App;
