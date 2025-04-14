import { Suspense } from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import NavBar from "./components/NavBar2/NavBar";
import PricingOption from "./components/pricingOption/PricingOption";
import RechartsIcon from "./components/RechartsIcon/RechartsIcon";
import Footer from "./components/Footer/Footer";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const rechartsPromise = fetch("recharts.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <Navbar></Navbar> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <RechartsIcon rechartsPromise={rechartsPromise}></RechartsIcon>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
