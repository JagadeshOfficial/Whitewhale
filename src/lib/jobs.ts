
import { promises as fs } from 'fs';
import path from 'path';
import { JobOpening } from '@/lib/types';

const jobsFilePath = path.join(process.cwd(), 'src/lib/jobs.json');

export async function getJobs(): Promise<JobOpening[]> {
  try {
    const fileContents = await fs.readFile(jobsFilePath, 'utf8');
    const jobs: JobOpening[] = JSON.parse(fileContents);
    return jobs;
  } catch (error) {
    console.error('Error reading jobs file:', error);
    return [];
  }
}
