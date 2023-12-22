import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAos = (duration = 500) => {
  useEffect(() => {
    Aos.init({ duration });
    return () => {
      Aos.refresh(); // Refresh AOS when the component unmounts
    };
  }, [duration]);
};

export default useAos;
