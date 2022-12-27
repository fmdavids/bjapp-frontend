import { Routes, Route } from "react-router-dom";
import FieldServiceReport from './components/FieldServiceReport';
import Home from "./components/Home";
import PubRecord from './components/PubRecord';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<FieldServiceReport />} />
        <Route path="/FieldServiceReport" element={<FieldServiceReport />} />
        <Route path="/PubRecord" element={<PubRecord />} />
      </Routes>
      {/* <FieldServiceReport /> */}
      {/* <PubRecord /> */}
    </div>
  );
}

export default App;
