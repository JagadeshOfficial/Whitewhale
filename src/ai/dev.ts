import { config } from 'dotenv';
config();

// Import all flows here so that they are available in the Genkit developer UI
import '@/ai/flows/summarize-investment-reports.ts';
