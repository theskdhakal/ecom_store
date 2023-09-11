import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { PRODUCTTABLE } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";
import { setProduct, setSelectedProduct } from "./productSlice";

export const getAllProductAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, PRODUCTTABLE));

    const productSnap = await getDocs(q);

    const productList = [];

    productSnap.forEach((doc) => {
      const productDt = {
        ...doc.data(),
        slug: doc.id,
      };
      productList.push(productDt);
    });
    dispatch(setProduct(productList));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addNewProductAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const bookObj = {
        ...rest,
        addedDate: Date.now(),
      };
      const promise = setDoc(doc(db, PRODUCTTABLE, slug), bookObj, {
        merge: true,
      });

      toast.promise(promise, {
        pending: "Please wait",
        success: "product has been added",
      });
      await promise;
      dispatch(getAllProductAction());
    } catch (error) {
      toast.error(error.message);
    }
  };

export const getSelectedProductsAction = (slug) => async (dispatch) => {
  try {
    if (!slug) {
      return alert("Slug not available");
    }
    const q = doc(db, PRODUCTTABLE, slug);

    const prodRef = await getDoc(q);

    if (prodRef.exists()) {
      const prod = prodRef.data();
      // return { ...prod, id: slug };
      dispatch(setSelectedProduct({ ...prod, id: slug }));
    }

    //   dispatch data to redux
  } catch (error) {
    console.log(error.message);
  }
};
