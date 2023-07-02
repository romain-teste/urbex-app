import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaceById, comPlace, photoPlace, addCom } from "../api";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [com, setCom] = useState(null);
  const [photos, setPhoto] = useState([]);
  const [textCom, setComText] = useState("");

  useEffect(() => {
    const fetchPlace = async () => {
      const data = await getPlaceById(id);
      setPlace(data);
    };
    const fetchCom = async () => {
      const dataCom = await comPlace(id);
      console.log("dataCom=" + dataCom);
      setCom(dataCom);
    };
    const fetchPhoto = async () => {
      const dataPhoto = await photoPlace(id);
      setPhoto(dataPhoto);
      console.log(dataPhoto);
    };

    fetchPhoto();
    fetchCom();
    fetchPlace();
  }, [id]);

  const handleCom = async (id, textCom) => {
    console.log(id, textCom);
    const responce = await addCom(id, textCom);
    console.log(responce);
  };

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{place.nom}</h2>
      <p>Type: {place.lieuType}</p>
      <p>Pays: {place.lieuPays}</p>
      <p>Région: {place.lieuRegion}</p>
      <p>Localisation:{place.loc}</p>
      <p>Description: {place.desc}</p>
      {photos.map((photo) => (
        <div key={photo.idPhoto}>
          <img
            src={`${process.env.PUBLIC_URL}/img/${photo.path}`}
            alt={photo.path}
          />
        </div>
      ))}
      <form onSubmit={(event) => handleCom(id, textCom)}>
        <label>
          Ton commentaire sur le lieu:
          <input
            type="text"
            value={textCom}
            onChange={(event) => setComText(event.target.value)}
          />
        </label>
        <button type="submit">envoyer</button>
      </form>
      {com.map((comment) => (
        <div key={comment.idCom}>
          <p>commentaire n°{comment.idCom}</p>
          <p>{comment.texteCom}</p>
        </div>
      ))}
      {/* Ajoutez le carrousel des photos et la zone de commentaires ici */}
    </div>
  );
};

export default PlaceDetail;
