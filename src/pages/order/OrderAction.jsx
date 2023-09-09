import { collection, getDocs, query } from "firebase/firestore";
import { ORDER } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";
import { setOrder } from "./OrderSlice";
import { toast } from "react-toastify";

// **********************order***********************
export const getAllOrderAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, ORDER));

    // run query
    let orders = [];

    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      orders.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setOrder(orders));
  } catch (error) {
    toast.error("Couldn't load order now, please try again");
  }
};
