import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Award, Code2, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Master C++ STL</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Learn C++ Standard
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Template Library
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive theory and interactive quizzes to master STL containers, algorithms, and iterators
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="p-8 hover:shadow-lg transition-shadow border-2">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Comprehensive Theory</h2>
              <p className="text-muted-foreground">
                Learn about vectors, maps, sets, algorithms, and more with clear explanations and code examples.
              </p>
              <Link to="/theory">
                <Button className="w-full">
                  Start Learning
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow border-2">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Interactive Quiz</h2>
              <p className="text-muted-foreground">
                Test your knowledge with 60 curated questions. Get 10 random questions each time you take the quiz.
              </p>
              <Link to="/quiz">
                <Button variant="outline" className="w-full">
                  Take Quiz
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Features List */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">60+</div>
              <div className="text-sm text-muted-foreground">Quiz Questions</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">STL Topics</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built for C++ developers to master the Standard Template Library</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
