import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Success from "./pages/Success";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Instagram from "./pages/Instagram";
import YouTube from "./pages/YouTube";
import TikTok from "./pages/TikTok";
import Spotify from "./pages/Spotify";
import LinkedIn from "./pages/LinkedIn";
import Threads from "./pages/Threads";
import GoogleAdsSetup from "./components/GoogleAdsSetup";

const queryClient = new QueryClient();

// Track page views on route changes
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/instagram" element={<Instagram />} />
      <Route path="/youtube" element={<YouTube />} />
      <Route path="/tiktok" element={<TikTok />} />
      <Route path="/spotify" element={<Spotify />} />
      <Route path="/linkedin" element={<LinkedIn />} />
      <Route path="/threads" element={<Threads />} />
      <Route path="/success" element={<Success />} />
      <Route path="/google-ads-setup" element={<GoogleAdsSetup />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
