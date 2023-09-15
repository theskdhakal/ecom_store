import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { MESSAGE, REVIEW } from "../../components/assets/constants/Constant";
import { setReview } from "../order/OrderSlice";
import { db } from "../../components/firebase_config/Firebase";
import { toast } from "react-toastify";
import { setMessage } from "../../components/user/UserSlice";

export const getAllMessageAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, MESSAGE));

    // run query
    let messages = [];

    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setMessage(messages));
  } catch (error) {
    toast.error("Couldn't load message now, please try again");
  }
};

export const deleteMessageAction = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, MESSAGE, id));

    toast.success("message has been deleted successfully");
    dispatch(getAllMessageAction());
  } catch (error) {
    toast.error("something went wrong while deleting message");
  }
};
