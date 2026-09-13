import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { RouteTransition } from "./components/RouteTransition";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AREAS } from "./lib/site";

const Home = lazy(() => import("./pages/Home"));
const Areas = lazy(() => import("./pages/Areas"));
const AreaPage = lazy(() => import("./pages/AreaPage"));
const Agro = lazy(() => import("./pages/Agro"));
const Diagnostico = lazy(() => import("./pages/Diagnostico"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AREA_SLUGS = AREAS.map(a => a.slug);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/areas" component={Areas} />
      <Route path="/agro" component={Agro} />
      <Route path="/diagnostico" component={Diagnostico} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug">
        {params => <BlogPost slug={params.slug} />}
      </Route>
      {/* Landing pages das áreas de atuação */}
      <Route path="/:slug">
        {params =>
          AREA_SLUGS.includes(params.slug) ? (
            <AreaPage slug={params.slug} />
          ) : (
            <NotFound />
          )
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
          <RouteTransition />
          <Suspense
            fallback={
              <div className="min-h-screen bg-background" aria-live="polite" />
            }
          >
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
