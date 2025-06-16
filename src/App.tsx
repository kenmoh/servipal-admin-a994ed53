
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Wallet from "./pages/Wallet";
import Disputes from "./pages/Disputes";
import Marketplace from "./pages/Marketplace";
import Reports from "./pages/Reports";
import Messages from "./pages/Messages";
import Audit from "./pages/Audit";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import ServiceAreas from "./pages/ServiceAreas";
import CommissionFees from "./pages/CommissionFees";
import ContentManagement from "./pages/ContentManagement";
import QualitySafety from "./pages/QualitySafety";
import Communications from "./pages/Communications";
import RoleManagement from "./pages/RoleManagement";
import VendorOnboarding from "./pages/VendorOnboarding";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/providers/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/disputes" element={<Disputes />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/commission-fees" element={<CommissionFees />} />
            <Route path="/content-management" element={<ContentManagement />} />
            <Route path="/quality-safety" element={<QualitySafety />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/role-management" element={<RoleManagement />} />
            <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
