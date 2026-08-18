import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PrivateLabel from "./pages/PrivateLabel";
import Contact from "./pages/Contact";
import PreRolledCones from "./pages/PreRolledCones";
import ConeDetail from "./pages/ConeDetail";
import BulkCones from "./pages/BulkCones";
import Filters from "./pages/Filters";
import RetailPackaging from "./pages/RetailPackaging";
import Consultation from "./pages/Consultation";
import RollingPapers from "./pages/RollingPapers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/private-label" element={<PrivateLabel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pre-rolled-cones" element={<PreRolledCones />} />
            <Route path="/pre-rolled-cones/:sizeId" element={<ConeDetail />} />
            <Route path="/bulk-cones" element={<BulkCones />} />
            <Route path="/rolling-papers" element={<RollingPapers />} />
            <Route path="/filters" element={<Filters />} />
            <Route path="/retail-packaging" element={<RetailPackaging />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
