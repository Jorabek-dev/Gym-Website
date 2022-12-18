import React,{useEffect} from "react";
import Aos from 'aos'
import "./App.css";
import Header from "./componets/Header/Header";
import Exrises from "./componets/UI/Exrises";
import Footer from "./componets/UI/Footer";
import Hero from "./componets/UI/Hero";
import Pricing from "./componets/UI/Pricing";
import Start from "./componets/UI/Start";
import Testimonials from "./componets/UI/Testimonials";


function App() {
  return (
    <>
    <Header />
    <Hero />
    <Exrises />
    <Start />
    <Pricing />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App;
