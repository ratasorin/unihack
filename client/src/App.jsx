import Navbar from './components/navbar';
import NavbarLink from './components/navbar/navlink';

function App() {
  return (
    <>
      <Navbar>
        <NavbarLink name="Navlink 1" />
        <NavbarLink name="Navlink 2" />
        <NavbarLink name="Navlink 3" />
      </Navbar>
    </>
  );
}

export default App
