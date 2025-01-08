import Navbar from "./components/ui/layout/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
