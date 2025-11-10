import { isDev} from 'genkit/dev';

if (isDev()) {
  // In development, load all flows, so they can be iterated on.
  // In production, we just want to load the flows that are actually used.
  require('./dev');
} else {
  // In production, we just want to load the flows that are actually used.
  // Add any flows that are used in production here.
  require('./flows/summarize-investment-reports');
}
