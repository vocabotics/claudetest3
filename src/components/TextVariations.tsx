import React from 'react';
import TextDisplay from '@/components/TextDisplay';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TextVariations: React.FC = () => {
  const text = "claudetest3 - just the text nothing else";

  return (
    <div className="space-y-12 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Text Display Variations</h1>
        <p className="text-muted-foreground">Different ways to display the same text</p>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Minimal</h2>
          <TextDisplay text={text} variant="minimal" size="md" />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Card Style</h2>
          <TextDisplay text={text} variant="card" size="lg" />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Typewriter Effect</h2>
          <TextDisplay text={text} variant="typewriter" size="md" />
        </Card>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Small Size</h3>
            <TextDisplay text={text} variant="minimal" size="sm" />
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Extra Large</h3>
            <TextDisplay text={text} variant="minimal" size="xl" className="text-primary" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TextVariations;