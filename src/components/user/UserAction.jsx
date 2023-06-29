import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase_config/Firebase";
import { doc, setDoc } from "firebase/firestore";

export const registerUserAction = async ({
  email,
  confirmPassword,
  password,
  ...rest
}) => {
  console.log(email);
  try {
    const pendingUser = createUserWithEmailAndPassword(auth, email, password);
    console.log(email);

    toast.promise(pendingUser, {
      pending: "please wait....",
    });

    const { user } = await pendingUser;

    if (user?.uid) {
      await setDoc(doc(db, "users", user.uid), rest);
      return toast.success("user has been registered successfully");
    }
    toast.error("something went wrong,please try again");
  } catch (error) {
    toast.error(error.message);
  }
};
