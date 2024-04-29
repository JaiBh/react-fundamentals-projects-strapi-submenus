import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Sidebar></Sidebar>
      <Submenu></Submenu>
    </main>
  );
};
export default App;
