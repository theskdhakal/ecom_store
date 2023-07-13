import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { PRODUCTTABLE } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";
import { setProduct } from "./productSlice";

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
      const promise = setDoc(doc(db, PRODUCTTABLE, slug), rest, {
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
