import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { PAYMENTTABLE } from "../../components/assets/constants/Constant";
import { db } from "../../components/firebase_config/Firebase";
import { toast } from "react-toastify";
import { setPayment } from "./paymentSlice";

export const getAllPaymentAction = () => async (dispatch) => {
  const q = query(collection(db, PAYMENTTABLE));
  const paymentSnap = await getDocs(q);

  let paymentList = [];

  paymentSnap.forEach((doc) => {
    const paymentDt = {
      ...doc.data(),
      slug: doc.id,
    };

    paymentList.push(paymentDt);
  });
  dispatch(setPayment(paymentList));
};

export const addNewPaymentAction =
  ({ slug, ...rest }) =>
  async (dispatch) => {
    try {
      const promise = setDoc(doc(db, PAYMENTTABLE, slug), rest, {
        merge: true,
      });

      toast.promise(promise, {
        pending: "please wait",
        success: "New payment has been added",
      });
      dispatch(getAllPaymentAction());
    } catch (error) {
      toast.error(error.message);
    }
  };
