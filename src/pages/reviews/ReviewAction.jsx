import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { REVIEW } from "../../components/assets/constants/Constant";
import { setReview } from "../order/OrderSlice";
import { db } from "../../components/firebase_config/Firebase";
import { toast } from "react-toastify";

export const getAllReviewAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, REVIEW));

    // run query
    let reviews = [];

    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      reviews.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setReview(reviews));
  } catch (error) {
    toast.error("Couldn't load review now, please try again");
  }
};

export const deleteReviewAction = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, REVIEW, id));

    toast.success("Review has been deleted successfully");
    dispatch(getAllReviewAction());
  } catch (error) {
    toast.error("something went wrong while deleting review");
  }
};
