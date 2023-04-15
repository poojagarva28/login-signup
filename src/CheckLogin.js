import { useSelector } from "react-redux";

const CheckLogin = () => {
  const isLogin = useSelector((state) => state.authslice.login);
  console.log(isLogin, "isloggedin");
  return isLogin ? true : false;
};

export default CheckLogin;
