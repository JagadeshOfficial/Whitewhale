'use server';

/**
 * @fileOverview An AI agent for summarizing investment reports.
 *
 * - summarizeInvestmentReport - A function that takes an investment report as input and returns a summary.
 * - SummarizeInvestmentReportInput - The input type for the summarizeInvestmentReport function.
 * - SummarizeInvestmentReportOutput - The return type for the summarizeInvestmentReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeInvestmentReportInputSchema = z.object({
  reportText: z.string().describe('The full text of the investment report to summarize.'),
});
export type SummarizeInvestmentReportInput = z.infer<typeof SummarizeInvestmentReportInputSchema>;

const SummarizeInvestmentReportOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the investment report.'),
});
export type SummarizeInvestmentReportOutput = z.infer<typeof SummarizeInvestmentReportOutputSchema>;

export async function summarizeInvestmentReport(input: SummarizeInvestmentReportInput): Promise<SummarizeInvestmentReportOutput> {
  return summarizeInvestmentReportFlow(input);
}

const summarizeInvestmentReportPrompt = ai.definePrompt({
  name: 'summarizeInvestmentReportPrompt',
  input: {schema: SummarizeInvestmentReportInputSchema},
  output: {schema: SummarizeInvestmentReportOutputSchema},
  prompt: `You are an expert investment analyst. Please provide a concise summary of the following investment report:\n\n{{{reportText}}}`,
});

const summarizeInvestmentReportFlow = ai.defineFlow(
  {
    name: 'summarizeInvestmentReportFlow',
    inputSchema: SummarizeInvestmentReportInputSchema,
    outputSchema: SummarizeInvestmentReportOutputSchema,
  },
  async input => {
    const {output} = await summarizeInvestmentReportPrompt(input);
    return output!;
  }
);
