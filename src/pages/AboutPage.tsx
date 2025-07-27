import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import TextDisplay from '@/components/TextDisplay';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About ClaudeTest3</h1>
          <p className="text-xl text-muted-foreground">
            Understanding the philosophy behind simplicity
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Purpose</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ClaudeTest3 is a demonstration of minimalist design principles applied to text display. 
                  The core concept is simple: present text content without unnecessary embellishments 
                  or distractions.
                </p>
                <p>
                  This application explores how the same textual content can be presented in various 
                  ways while maintaining clarity and readability. It serves as both a showcase of 
                  typography options and a testament to the power of focused design.
                </p>
                <p>
                  The project emphasizes that sometimes the most effective communication comes from 
                  the simplest presentation - just the text, nothing else.
                </p>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Design Philosophy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Minimalism</h3>
                  <p className="text-sm text-muted-foreground">
                    Remove everything that doesn't serve the primary purpose of displaying text clearly.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure text is readable across different devices, screen sizes, and accessibility needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Flexibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide multiple presentation options while maintaining the core simplicity.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Typography</Badge>
                  <span className="text-sm">Multiple font options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Responsive</Badge>
                  <span className="text-sm">Works on all devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Interactive</Badge>
                  <span className="text-sm">Customizable display</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Clean</Badge>
                  <span className="text-sm">No unnecessary elements</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Technical Stack</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Framework:</span>
                  <Badge variant="outline">React</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Styling:</span>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Components:</span>
                  <Badge variant="outline">shadcn/ui</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">The Core Message</h2>
          <TextDisplay 
            text="claudetest3 - just the text nothing else" 
            variant="card" 
            size="lg" 
          />
          <p className="text-center text-muted-foreground mt-6">
            This simple phrase embodies the entire philosophy of the application: 
            focus on what matters most.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;