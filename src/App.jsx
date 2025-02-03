import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Dashboard from "./views/Dashboard";
import DashboardDefault from "./views/DashboardDefault";
import { PageTitleProvider } from "./components/PageTitleContext";

const Transactions = lazy(() => import("./views/Transactions"));

function App() {
  return (
    <PageTitleProvider>
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
    </PageTitleProvider>
  );
}

export default App;
