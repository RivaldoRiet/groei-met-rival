import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Copy, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GoogleAdsSetup = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const setupSteps = [
    {
      title: "1. Google Analytics instellen",
      description: "Vervang 'G-XXXXXXXXXX' in src/main.tsx met je echte Measurement ID",
      code: "const GA_MEASUREMENT_ID = 'G-JOUW-MEASUREMENT-ID';",
      link: "https://analytics.google.com/",
      linkText: "Google Analytics Dashboard"
    },
    {
      title: "2. Google Ads Conversion tracking",
      description: "Vervang 'AW-XXXXXXXXX' in src/lib/analytics.ts met je Conversion ID",
      code: "trackConversion('AW-JOUW-CONVERSION-ID', 'JOUW-CONVERSION-LABEL', orderData.value);",
      link: "https://ads.google.com/",
      linkText: "Google Ads Dashboard"
    },
    {
      title: "3. Test je tracking",
      description: "Gebruik Google Analytics Real-time rapport om te controleren of events binnenkomen",
      link: "https://analytics.google.com/analytics/web/#/realtime",
      linkText: "Real-time Analytics"
    }
  ];

  const trackedEvents = [
    { event: "page_view", description: "Elke pagina bezoek" },
    { event: "view_item", description: "Service pagina bekeken" },
    { event: "add_to_cart", description: "Bestellen knop geklikt" },
    { event: "begin_checkout", description: "Bestelformulier geopend" },
    { event: "purchase", description: "Succesvolle bestelling" },
    { event: "generate_lead", description: "Account aangemaakt" },
  ];

  return (
    <div className="space-y-6 p-6 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Google Ads Setup Guide</h1>
        <p className="text-muted-foreground">
          Je website is nu Google Ads ready! Volg deze stappen om tracking in te stellen.
        </p>
      </div>

      {/* Setup Steps */}
      <div className="grid gap-4">
        {setupSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {step.title}
                <Badge variant="outline">Vereist</Badge>
              </CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {step.code && (
                <div className="bg-muted p-3 rounded-lg font-mono text-sm relative">
                  <code>{step.code}</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-2"
                    onClick={() => copyToClipboard(step.code, index)}
                  >
                    {copiedStep === index ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              )}
              <Button asChild variant="outline" size="sm">
                <a href={step.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {step.linkText}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tracked Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Geïmplementeerde Tracking Events
          </CardTitle>
          <CardDescription>
            Deze events worden automatisch naar Google Analytics en Google Ads gestuurd
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {trackedEvents.map((event, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <code className="font-mono text-sm font-medium">{event.event}</code>
                <span className="text-sm text-muted-foreground">{event.description}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
            <AlertCircle className="w-5 h-5" />
            Privacy & GDPR
          </CardTitle>
        </CardHeader>
        <CardContent className="text-yellow-700 dark:text-yellow-300">
          <p className="text-sm">
            Deze implementatie is privacy-vriendelijk en GDPR compliant. 
            Overweeg om een cookie banner toe te voegen voor optimale compliance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleAdsSetup;