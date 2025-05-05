import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, []);
  return (
    <>
      <Outlet />
    </>
  )
}

export default App;