import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-mono">C++</span>
            </div>
            <span className="hidden sm:inline">STL Master</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Link to="/theory">
              <Button
                variant={location.pathname === "/theory" ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Theory</span>
              </Button>
            </Link>
            <Link to="/quiz">
              <Button
                variant={location.pathname === "/quiz" ? "default" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Award className="h-4 w-4" />
                <span className="hidden sm:inline">Quiz</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
