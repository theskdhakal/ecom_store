import { collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { PRODUCTTABLE } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";

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

      alert("done");
    } catch (error) {
      toast.error(error.message);
    }
  };
