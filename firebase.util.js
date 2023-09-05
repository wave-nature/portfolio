import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db as firestore } from "./firebase.config.js";

export const listAllElements = () => {
  return getDocs(collection(firestore, "elements"));
};

export const listFeaturesOfElement = (element) => {
  const collectionRef = collection(
    firestore,
    "elements",
    element.id,
    "features"
  );
  return getDocs(collectionRef);
};

export const getElementBySlug = async (slug) => {
  const q = query(collection(firestore, "elements"), where("slug", "==", slug));

  const querySnapshot = await getDocs(q);
  return querySnapshot[0].data();
};

export const getImageURL = (path) => {
  return getDownloadURL(ref(storage, path));
};
