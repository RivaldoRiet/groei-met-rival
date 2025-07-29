import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Zap, Users, Target, X } from "lucide-react";

interface WelcomeExplainerProps {
  onStartOrder: () => void;
}

const WelcomeExplainer = ({ onStartOrder }: WelcomeExplainerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if user has seen the explainer before
    const hasSeenExplainer = localStorage.getItem("hasSeenWelcomeExplainer");
    if (!hasSeenExplainer) {
      setIsOpen(true);
    }
  }, []);

  const steps = [
    {
      title: "Welkom bij Rival! 🚀",
      content: "Wij helpen je om je social media accounts te laten groeien met echte engagement en volgers.",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "Meer dan 100+ Services 📱",
      content: "Van Instagram likes tot YouTube subscribers - wij hebben alles wat je nodig hebt voor groei.",
      icon: <Users className="w-8 h-8 text-primary" />
    },
    {
      title: "Snel & Veilig 🎯",
      content: "Onze services zijn 100% veilig, snel geleverd en komen van echte accounts.",
      icon: <Target className="w-8 h-8 text-primary" />
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
      onStartOrder();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenWelcomeExplainer", "true");
  };

  const handleSkip = () => {
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-md">
          <div className="flex justify-end">
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X size={16} />
            </Button>
          </div>
          
          <Card className="border-0 shadow-none">
            <CardContent className="text-center space-y-6 p-6">
              <div className="flex justify-center">
                {steps[currentStep].icon}
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {steps[currentStep].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {steps[currentStep].content}
                </p>
              </div>

              <div className="flex justify-center space-x-2 my-4">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={handleSkip} className="flex-1">
                  Overslaan
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  {currentStep === steps.length - 1 ? "Start Bestellen!" : "Volgende"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Arrow Indicator - shows after explainer closes */}
      {!isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none animate-bounce">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Begin hier! 👆</span>
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeExplainer;