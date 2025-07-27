import React from 'react';
import TextDisplay from '@/components/TextDisplay';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const HomePage: React.FC = () => {
  const text = "claudetest3 - just the text nothing else";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Simple • Clean • Focused</Badge>
          <h1 className="text-5xl font-bold mb-6">ClaudeTest3</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A minimalist application dedicated to displaying text in its purest form
          </p>
        </div>
        
        {/* Main Text Display */}
        <div className="mb-16">
          <TextDisplay 
            text={text} 
            variant="centered" 
            size="lg" 
            className="mb-8"
          />
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Focused</h3>
            <p className="text-muted-foreground text-sm">
              No distractions, just the essential text content you need to see
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl mb-3">✨</div>
            <h3 className="text-lg font-semibold mb-2">Clean</h3>
            <p className="text-muted-foreground text-sm">
              Minimalist design that puts your text front and center
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-2xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground text-sm">
              Multiple display options to suit your preferences
            </p>
          </Card>
        </div>
        
        <Separator className="mb-12" />
        
        {/* Additional Display Examples */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Different Presentations</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Card Format</h3>
              <TextDisplay text={text} variant="card" size="md" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Typewriter Style</h3>
              <Card className="p-8">
                <TextDisplay text={text} variant="typewriter" size="md" />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;