import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { questions, Question } from "@/data/questions";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<{ [key: number]: number }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    setQuizQuestions(selected);
    setCurrentAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    if (!submitted) {
      setCurrentAnswers({
        ...currentAnswers,
        [questionId]: answerIndex,
      });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(currentAnswers).length < quizQuestions.length) {
      toast.error("Please answer all questions before submitting!");
      return;
    }

    let correctCount = 0;
    quizQuestions.forEach((q) => {
      if (currentAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setSubmitted(true);
    toast.success(`Quiz submitted! You scored ${correctCount}/10`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-3">C++ STL Quiz</h1>
            <p className="text-muted-foreground text-lg">
              Test your knowledge with 10 random questions
            </p>
          </div>
          
          {submitted && (
            <Button onClick={startNewQuiz} variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              New Quiz
            </Button>
          )}
        </div>

        {submitted && (
          <Card className="p-6 mb-8 border-2">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Quiz Complete!</h2>
              <div className="text-5xl font-bold my-4">
                <span className={score >= 7 ? "text-success" : score >= 5 ? "text-warning" : "text-destructive"}>
                  {score}/10
                </span>
              </div>
              <p className="text-muted-foreground">
                {score >= 9 ? "Excellent! You're an STL master!" :
                 score >= 7 ? "Great job! You have solid STL knowledge." :
                 score >= 5 ? "Good effort! Keep learning and practicing." :
                 "Keep studying! Review the theory section."}
              </p>
            </div>
          </Card>
        )}

        <div className="space-y-6">
          {quizQuestions.map((question, index) => {
            const isAnswered = currentAnswers[question.id] !== undefined;
            const isCorrect = currentAnswers[question.id] === question.correctAnswer;

            return (
              <Card key={question.id} className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
                      
                      <RadioGroup
                        value={currentAnswers[question.id]?.toString()}
                        onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                      >
                        {question.options.map((option, optionIndex) => {
                          const isThisCorrect = optionIndex === question.correctAnswer;
                          const isSelected = currentAnswers[question.id] === optionIndex;

                          return (
                            <div
                              key={optionIndex}
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                                submitted
                                  ? isThisCorrect
                                    ? "bg-success/10 border border-success/20"
                                    : isSelected
                                    ? "bg-destructive/10 border border-destructive/20"
                                    : "bg-muted/30"
                                  : "hover:bg-muted/50"
                              }`}
                            >
                              <RadioGroupItem
                                value={optionIndex.toString()}
                                id={`q${question.id}-opt${optionIndex}`}
                                disabled={submitted}
                              />
                              <Label
                                htmlFor={`q${question.id}-opt${optionIndex}`}
                                className="flex-1 cursor-pointer"
                              >
                                {option}
                              </Label>
                              {submitted && (
                                <>
                                  {isThisCorrect && (
                                    <CheckCircle2 className="h-5 w-5 text-success" />
                                  )}
                                  {isSelected && !isThisCorrect && (
                                    <XCircle className="h-5 w-5 text-destructive" />
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </RadioGroup>

                      {submitted && (
                        <div className={`mt-4 p-4 rounded-lg ${
                          isCorrect ? "bg-success/10" : "bg-destructive/10"
                        }`}>
                          <p className="text-sm font-medium mb-1">
                            {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                          </p>
                          <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {!submitted && quizQuestions.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="min-w-[200px]"
            >
              Submit Quiz
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Quiz;
