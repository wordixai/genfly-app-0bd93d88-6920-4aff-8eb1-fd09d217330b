import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResponseLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const ResponseLayout: React.FC<ResponseLayoutProps> = ({ 
  title = "Resposta", 
  children 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="border-2 border-primary/20">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle className="text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponseLayout;