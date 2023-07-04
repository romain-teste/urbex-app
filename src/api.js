// Fonction pour récupérer tous les lieux
export const getAllPlaces = async () => {
  try {
    const response = await fetch("http://localhost:8080/demo/alllieu");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des lieux:", error);
  }
};

// Fonction pour récupérer les détails d'un lieu spécifique.
export const getPlaceById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/demo/lieu/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du lieu:", error);
  }
};

// Fonction pour rechercher des lieux en fonction du nom
export const searchPlaces = async (searchTerm) => {
  try {
    const response = await fetch(
      `http://localhost:8080/demo/lieuByName?nameLieu=${searchTerm}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la recherche des lieux:", error);
  }
};

// Fonction pour filtrer les lieux en fonction des critères
export const filterPlaces = async (filters) => {
  try {
    const { country, region, type } = filters;
    const response = await fetch(
      `http://localhost:8080/demo/lieuByFilter?lieuPays=${country}&lieuRegion=${region}&lieuType=${type}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du filtrage des lieux:", error);
  }
};

// Fonction pour touver les commantairs lié à un lieu en fontion de sont id.
export const comPlace = async (idlieu) => {
  try {
    console.log("lieuID=" + idlieu);
    const response = await fetch(
      `http://localhost:8080/demo/comm/lieu?idlieu=${idlieu}`
    );
    console.log("reponce com=" + response);
    const data = await response.json();
    console.log("data com=" + data);
    return data;
  } catch (error) {
    console.error("Erreur lors du filtrage des lieux:", error);
  }
};

export const photoPlace = async (idlieu) => {
  try {
    const response = await fetch(
      `http://localhost:8080/demo/photo/photolieux?idlieux=${idlieu}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors du filtrage des lieux:", error);
  }
};

export const addCom = async (idLieu, textCom) => {
  try {
    const responce = await fetch(
      `http://localhost:8080/demo/addcomm?idlieu=${idLieu}&text=${textCom}`,
      {
        method: "POST",
      }
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log("Erreur lors de l'ajout d'un com:", error);
  }
};
