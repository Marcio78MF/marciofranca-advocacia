import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Areas from "./pages/Areas";
import AreaPage from "./pages/AreaPage";
import Agro from "./pages/Agro";
import Diagnostico from "./pages/Diagnostico";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { AREAS } from "./lib/site";

const AREA_SLUGS = AREAS.map((a) => a.slug);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/areas" component={Areas} />
      <Route path="/agro" component={Agro} />
      <Route path="/diagnostico" component={Diagnostico} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug">{(params) => <BlogPost slug={params.slug} />}</Route>
      {/* Landing pages das áreas de atuação */}
      <Route path="/:slug">
        {(params) =>
          AREA_SLUGS.includes(params.slug) ? <AreaPage slug={params.slug} /> : <NotFound />
        }
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
