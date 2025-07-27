import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TextStyleProps {
  title: string;
  description: string;
  children: React.ReactNode;
  badge?: string;
}

const TextStyleCard: React.FC<TextStyleProps> = ({ title, description, children, badge }) => {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge && <Badge variant="secondary">{badge}</Badge>}
      </div>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      <div className="flex-1 flex items-center justify-center min-h-[100px] bg-muted/30 rounded-lg">
        {children}
      </div>
    </Card>
  );
};

const TextStyles: React.FC = () => {
  const text = "claudetest3 - just the text nothing else";

  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Typography Showcase</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Exploring different typographic treatments of the same text content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TextStyleCard 
          title="Monospace" 
          description="Fixed-width font for technical feel"
          badge="Default"
        >
          <p className="font-mono text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Sans Serif" 
          description="Clean and modern appearance"
        >
          <p className="font-sans text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Serif" 
          description="Traditional and elegant styling"
        >
          <p className="font-serif text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Bold Weight" 
          description="Strong emphasis and presence"
        >
          <p className="font-bold text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Light Weight" 
          description="Subtle and refined appearance"
        >
          <p className="font-light text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Italic Style" 
          description="Emphasized and stylistic text"
        >
          <p className="italic text-lg text-center px-4">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Uppercase" 
          description="All caps for strong impact"
        >
          <p className="uppercase text-lg text-center px-4 tracking-wider">{text}</p>
        </TextStyleCard>

        <TextStyleCard 
          title="Gradient Text" 
          description="Colorful gradient effect"
        >
          <p className={cn(
            "text-lg text-center px-4 bg-gradient-to-r from-blue-600 to-purple-600",
            "bg-clip-text text-transparent font-semibold"
          )}>
            {text}
          </p>
        </TextStyleCard>

        <TextStyleCard 
          title="Shadow Effect" 
          description="Text with subtle shadow"
        >
          <p className="text-lg text-center px-4 text-gray-800 drop-shadow-lg">
            {text}
          </p>
        </TextStyleCard>
      </div>
    </div>
  );
};

export default TextStyles;