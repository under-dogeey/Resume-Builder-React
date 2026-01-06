import { Routes, Route } from "react-router";
import { ResumePage } from "./pages/resumePage/ResumePage";
import { FrontPage } from "./pages/frontPage/FrontPage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Routes>
    </>
  );
}

export default App;
