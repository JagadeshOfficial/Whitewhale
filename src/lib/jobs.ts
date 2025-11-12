
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { JobOpening } from './types';

export async function getJobs(): Promise<JobOpening[]> {
  const jobsCollection = collection(db, "jobs");
  const jobsSnapshot = await getDocs(jobsCollection);
  const jobs: JobOpening[] = [];
  jobsSnapshot.forEach(doc => {
    jobs.push({ id: doc.id, ...doc.data() } as JobOpening);
  });
  return jobs;
}
