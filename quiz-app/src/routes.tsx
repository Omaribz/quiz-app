import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import QuizDetails from "./pages/QuizDetails";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/quiz/:quizId", element: <QuizDetails /> },
]);

export default router;
