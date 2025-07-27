import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const InteractiveText: React.FC = () => {
  const [fontSize, setFontSize] = useState([24]);
  const [textColor, setTextColor] = useState('default');
  const [fontFamily, setFontFamily] = useState('mono');
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);
  
  const text = "claudetest3 - just the text nothing else";
  
  useEffect(() => {
    if (!isAnimated) return;
    
    const interval = setInterval(() => {
      setCurrentChar(prev => {
        if (prev >= text.length) {
          setIsAnimated(false);
          return text.length;
        }
        return prev + 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [isAnimated, text.length]);
  
  const colorClasses = {
    default: 'text-foreground',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
  };
  
  const fontClasses = {
    mono: 'font-mono',
    sans: 'font-sans',
    serif: 'font-serif'
  };
  
  const resetAnimation = () => {
    setCurrentChar(0);
    setIsAnimated(true);
  };
  
  const displayText = isAnimated ? text.slice(0, currentChar) : text;
  
  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Interactive Text Controls</h1>
        <p className="text-muted-foreground">Customize the appearance and behavior of the text</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <Card className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">Controls</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Font Size: <Badge variant="outline">{fontSize[0]}px</Badge>
              </label>
              <Slider
                value={fontSize}
                onValueChange={setFontSize}
                max={48}
                min={12}
                step={2}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Font Family</label>
              <Select value={fontFamily} onValueChange={setFontFamily}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mono">Monospace</SelectItem>
                  <SelectItem value="sans">Sans Serif</SelectItem>
                  <SelectItem value="serif">Serif</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Text Color</label>
              <Select value={textColor} onValueChange={setTextColor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="gradient">Gradient</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={resetAnimation} 
                className="w-full"
                disabled={isAnimated}
              >
                {isAnimated ? 'Animating...' : 'Start Typewriter Animation'}
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Display */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Live Preview</h2>
          
          <div className="flex items-center justify-center min-h-[300px] bg-muted/30 rounded-lg p-6">
            <p 
              className={cn(
                fontClasses[fontFamily as keyof typeof fontClasses],
                colorClasses[textColor as keyof typeof colorClasses],
                'text-center leading-relaxed break-words',
                isAnimated && 'border-r-2 border-current animate-pulse'
              )}
              style={{ fontSize: `${fontSize[0]}px` }}
            >
              {displayText}
            </p>
          </div>
          
          <div className="mt-4 text-center">
            <Badge variant="secondary">
              {displayText.length} / {text.length} characters
            </Badge>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveText;