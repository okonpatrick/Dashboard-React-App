import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import WelcomeCard from "./components/WelcomeCard";
import UserRTDate from "./components/UserRTDate";
// import DbCard from "./components/DbCard";
import DbCard2 from "./components/DbCard2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <Navbar />
      <Navbar2 />
      <WelcomeCard />
      <UserRTDate />
      {/* <DbCard /> */}
      <DbCard2 />
    </div>
  );
}

export default App;
