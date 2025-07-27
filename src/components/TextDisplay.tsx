import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TextDisplayProps {
  text: string;
  className?: string;
  variant?: 'minimal' | 'card' | 'centered' | 'typewriter';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const TextDisplay: React.FC<TextDisplayProps> = ({ 
  text, 
  className, 
  variant = 'minimal',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const baseClasses = cn(
    'font-mono',
    sizeClasses[size],
    className
  );

  if (variant === 'card') {
    return (
      <Card className="p-8 max-w-2xl mx-auto">
        <p className={cn(baseClasses, 'text-center')}>
          {text}
        </p>
      </Card>
    );
  }

  if (variant === 'centered') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className={cn(baseClasses, 'text-center text-primary')}>
          {text}
        </p>
      </div>
    );
  }

  if (variant === 'typewriter') {
    return (
      <p className={cn(
        baseClasses, 
        'text-center animate-pulse border-r-2 border-primary pr-2'
      )}>
        {text}
      </p>
    );
  }

  return (
    <p className={cn(baseClasses, 'text-center')}>
      {text}
    </p>
  );
};

export default TextDisplay;