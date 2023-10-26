import { useEffect, useState } from "react";
import Characters from "./Characters";

function List() {
  // Renommez isLoading en setLoading pour plus de clarté.
  const [loading, setLoading] = useState(true);
  const [waifu, setWaifu] = useState([]);

  useEffect(() => {
    // Définition de la fonction asynchrone getData.
    async function getData() {
      try {
        const url = 'https://waifu.it/api/angry';
        const apiToken = import.meta.env.VITE_REACT_API_KEY;
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: apiToken,
          },
        });

        // Vérifiez si la réponse est ok avant de continuer.
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }

        const data = await res.json();
        setWaifu(data);
        setLoading(false);  // Mettez à jour l'état de loading ici.
      } catch (e) {
        console.error(e.message);  // Log l'erreur au lieu de la lancer.
        setLoading(false);  // Mettez également à jour l'état de loading en cas d'erreur.
      }
    }

    // Appel de la fonction getData.
    getData();
  }, []);  // Dépendances vides signifient que cela s'exécutera une fois au montage du composant.

  useEffect(() => {
    console.log(waifu);
  }, [waifu]);

  return (
    <div>
      <p>List</p>
      <Characters src={waifu.url} />
    </div>
  );
}

export default List;
