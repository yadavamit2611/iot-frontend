import "./App.css";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
import DigitalMeter from "./components/DigitalMeter";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <DigitalMeter></DigitalMeter>
      <DataTable></DataTable>
      <Footer></Footer>
    </>
  );
}

export default App;
