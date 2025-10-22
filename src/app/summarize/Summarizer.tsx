"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeAction } from './actions';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

export function Summarizer() {
  const [reportText, setReportText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!reportText.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please paste some text to summarize.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    setError('');
    setSummary('');

    const result = await summarizeAction(reportText);

    if (result.success && result.summary) {
      setSummary(result.summary);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Document Text</CardTitle>
            <CardDescription>
              Paste the full text of the article or document you want to summarize.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Start pasting your document here..."
              className="min-h-[250px] text-base"
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              disabled={isLoading}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading || !reportText} size="lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Summarizing...
              </>
            ) : (
                <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Summary
                </>
            )}
          </Button>
        </div>
      </form>

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-accent" />
                AI-Generated Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-foreground">
            <p>{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
