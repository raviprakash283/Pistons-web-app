
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/navd"
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Body from "./Components/Body/Body";
import LowerBody from "./Components/LowerBody/LowerBody";
import Bttn from "./Components/Bttn/Bttn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Navbar/>

        <Bttn/>

       <Body/>
       <LowerBody/>
      
       <About/>
       <Testimonials/>

       

       <Footer/>
       
      </header>
    </div>
  );
}

export default App;
