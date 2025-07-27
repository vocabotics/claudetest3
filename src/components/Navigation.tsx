import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', description: 'Simple text display' },
    { path: '/variations', label: 'Variations', description: 'Different display styles' },
    { path: '/typography', label: 'Typography', description: 'Font and style showcase' },
    { path: '/interactive', label: 'Interactive', description: 'Dynamic text features' },
    { path: '/about', label: 'About', description: 'Project information' }
  ];

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            ClaudeTest3
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? "default" : "ghost"}
                asChild
              >
                <Link to={item.path}>
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Card key={item.path} className={cn(
                "p-3 transition-colors",
                location.pathname === item.path 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              )}>
                <Link to={item.path} className="block">
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className={cn(
                    "text-xs",
                    location.pathname === item.path 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground"
                  )}>
                    {item.description}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;