import Activities from "./components/activities";
import Automotive from "./components/automotive";
import Beauty from "./components/beauty";
import Collection from "./components/collections";
import Escapes from "./components/escapes";
import Featured from "./components/featured";
import Fintness from "./components/fitness";
import House from "./components/house";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import Sidebar from "./components/layout/sidebar";
import Restaurants from "./components/restaurants";
import Sales from "./components/salse";
import Store from "./components/store";


function App() {
  return (
    <div>
      <Navbar />
      <Sales />
      <Sidebar/>
      <Featured/>
      <Collection />
      <Escapes />
      <Activities />
      <Store/>
      <Restaurants />
      <Beauty />
      <House />
      <Fintness />
      <Automotive />
      <Footer />
    </div>
  );
}

export default App;
