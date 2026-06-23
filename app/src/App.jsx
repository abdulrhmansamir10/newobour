import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import LedgerSearch from './pages/LedgerSearch';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Guide from './pages/Guide';
import AddListing from './pages/AddListing';
import PriceIndex from './pages/PriceIndex';
import PropertyDetail from './pages/PropertyDetail';
import BrokerProfile from './pages/BrokerProfile';
import BrokerRegister from './pages/BrokerRegister';
import AdminModeration from './pages/AdminModeration';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<PropertyDetail />} />
        <Route path="/ledger-search" element={<LedgerSearch />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/price-index" element={<PriceIndex />} />
        <Route path="/broker/register" element={<BrokerRegister />} />
        <Route path="/broker/:id" element={<BrokerProfile />} />
        <Route path="/admin/moderation" element={<AdminModeration />} />
      </Route>
    </Routes>
  );
}
