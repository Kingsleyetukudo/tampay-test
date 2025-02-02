import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Dashboard from "./views/Dashboard";
import DashboardDefault from "./views/DashboardDefault";

const Transactions = lazy(() => import("./views/Transactions"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardDefault />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
