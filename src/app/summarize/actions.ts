"use server";

import { summarizeInvestmentReport } from "@/ai/flows/summarize-investment-reports";

interface SummarizeResult {
  success: boolean;
  summary?: string;
  error?: string;
}

export async function summarizeAction(reportText: string): Promise<SummarizeResult> {
  if (!reportText || typeof reportText !== 'string' || reportText.trim().length === 0) {
    return { success: false, error: 'Input text cannot be empty.' };
  }

  try {
    const result = await summarizeInvestmentReport({ reportText });
    if (result && result.summary) {
      return { success: true, summary: result.summary };
    } else {
      return { success: false, error: 'Failed to generate summary. The AI model did not return a valid response.' };
    }
  } catch (e) {
    console.error("Error in summarizeAction:", e);
    
    // Check for a more specific error message if available
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred while communicating with the AI model.';
    
    return { success: false, error: errorMessage };
  }
}
