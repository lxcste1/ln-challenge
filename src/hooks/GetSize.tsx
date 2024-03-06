/**
 * Hook - Detector de tamaño de dispositivos.
 * @author Lucas Tello
 * @created 06/03/2024
 */

import { useEffect, useState } from "react";

export default function GetSize() {

    const [windowSize, setWindowSize] = useState({
        width: 0
      });
    
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth
          });
        }
        
        window.addEventListener("resize", handleResize);
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []); 
      return windowSize;

}