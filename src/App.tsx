import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "@/components/NavigationProvider";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import PrivateCoaching from "./pages/courses/PrivateCoaching";
import CorporateTraining from "./pages/courses/CorporateTraining";
import ImmersionProgram from "./pages/courses/ImmersionProgram";
import TravellersPack from "./pages/courses/TravellersPack";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/private-coaching" element={<PrivateCoaching />} />
            <Route path="/courses/corporate-training" element={<CorporateTraining />} />
            <Route path="/courses/immersion-program" element={<ImmersionProgram />} />
            <Route path="/courses/travellers-pack" element={<TravellersPack />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/policy" element={<Policy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
