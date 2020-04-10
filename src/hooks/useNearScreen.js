import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  useEffect(() => {
    // IntersectionObserver recibira una function que tendra todas las entradas que estan
    // en el viewport y que esta observando
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        // si es true desconectamos el observer para que deje de observar
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);
  return [show, element];
}
