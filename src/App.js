import Navbar from "./components/user/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import NotFound from "./components/user/NotFound";
import Home from "./components/Home";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import { useAuth } from "./hooks";


import { Route,Routes } from "react-router-dom";
import AdminNavigator from "./navigator/AdminNavigator";

function App() {

  const {authInfo} = useAuth();
  const isAdmin = authInfo.profile?.role === 'admin'

  if(isAdmin) return <AdminNavigator />

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/auth/reset-password" element={<ConfirmPassword />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  );
}

export default App;
