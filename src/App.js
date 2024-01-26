import {
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./pages/signin-page/SignIn";
import Upload from "./pages/upload-page/Upload"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
export default App;