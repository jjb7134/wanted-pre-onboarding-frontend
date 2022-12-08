import { Route, Routes } from "react-router-dom";

import Sign from "./components/root/sign";
import Welcome from "./components/root/welcome";
import Form from "./components/root/form";
import Join from "./components/root/join";
import Todolist from "./components/todo/Todolist";

function App() {
  return (
    <div>
      {/* 여러 페이지 라우트 처리 */}
      <Routes>
        {/* /경로 */}
        <Route
          path="/"
          exact
          element={
            <div>
              <Welcome /> <Form /> <Sign />
            </div>
          }
        />
        <Route
          path="/join"
          element={
            <div>
              <Welcome /> <Join /> <Sign />
            </div>
          }
        />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </div>
  );
}

export default App;
