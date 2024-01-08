import "./App.css";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import Footer from "./components/Footer";
import Gauge from "./components/Gauge";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Gauge></Gauge>

      <DataTable></DataTable>
      <Footer></Footer>
    </>
  );
}

export default App;
