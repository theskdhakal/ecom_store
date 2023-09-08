import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase_config/Firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { setClient, setUser } from "./UserSlice";
import { CLIENT } from "../assets/constants/Constant";

export const registerUserAction = async ({
  confirmPassword,
  password,
  ...rest
}) => {
  try {
    const pendingUser = createUserWithEmailAndPassword(
      auth,
      rest.email,
      password
    );

    toast.promise(pendingUser, {
      pending: "please wait....",
    });

    const { user } = await pendingUser;

    if (user?.uid) {
      await setDoc(doc(db, "users", user.uid), { ...rest, role: "admin" });
      return toast.success("user has been registered successfully");
    }
    toast.error("something went wrong,please try again");
  } catch (error) {
    toast.error(error.message);
  }
};

export const getUserAction = (uid) => async (dispatch) => {
  try {
    const docSnapShot = await getDoc(doc(db, "users", uid));

    if (docSnapShot.exists()) {
      const user = { ...docSnapShot.data(), uid };
      dispatch(setUser(user));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const loginUser = (form) => async (dispatch) => {
  try {
    const pendingUser = signInWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );

    toast.promise(pendingUser, {
      pending: "please wait.....",
    });

    const { user } = await pendingUser;
    console.log(user);

    if (user?.uid) {
      toast.success("user logged in successfully");
      dispatch(getUserAction(user.uid));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const getAllClientsAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, CLIENT));

    // run query
    let clients = [];

    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      clients.push({ ...doc.data(), id: doc.id });
    });
    dispatch(setClient(clients));
  } catch (error) {
    toast.error("Couldn't load client now, please try again");
  }
};

export const deleteClientAction = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, CLIENT, id));

    toast.success("client has been deleted successfully");
    dispatch(getAllClientsAction());
  } catch (error) {
    toast.error("something went wrong while deleting client");
  }
};
