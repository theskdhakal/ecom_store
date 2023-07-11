import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { CATEGORYTABLE } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";
import { toast } from "react-toastify";
import { setCat } from "./catSlice";

export const getCategoriesAction = () => async (dispatch) => {
  const q = query(collection(db, CATEGORYTABLE));
  const catSnap = await getDocs(q);

  let catList = [];

  catSnap.forEach((doc) => {
    const catDt = {
      ...doc.data(),
      slug: doc.id,
    };

    catList.push(catDt);
  });
  dispatch(setCat(catList));
};

export const addCategoryAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const promise = setDoc(doc(db, CATEGORYTABLE, slug), rest, {
        merge: true,
      });

      toast.promise(promise, {
        pending: "please wait",
        success: "category has been added",
      });
      dispatch(getCategoriesAction());
    } catch (error) {
      toast.error(error.message);
    }
  };
