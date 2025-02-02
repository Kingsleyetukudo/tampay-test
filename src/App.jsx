import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Transactions from "./views/Transactions";
import DashboardDefault from "./views/DashboardDefault";
import { PageTitleProvider } from "./components/PageTitleContext";

function App() {
  return (
    <PageTitleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<DashboardDefault />} />
            <Route path="transaction" element={<Transactions />} />
          </Route>
        </Routes>
      </Router>
    </PageTitleProvider>
  );
}

export default App;
