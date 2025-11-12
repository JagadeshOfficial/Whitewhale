
import { db } from './firebase';
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { promises as fs } from 'fs';
import path from 'path';
import { JobOpening } from './types';

const jobsFilePath = path.join(process.cwd(), 'src/lib/jobs.json');

async function migrateJobs() {
    const jobsCollection = collection(db, "jobs");

    const querySnapshot = await getDocs(jobsCollection);
    if (!querySnapshot.empty) {
        console.log("Jobs collection already contains data. Skipping migration.");
        return;
    }

    const fileContents = await fs.readFile(jobsFilePath, 'utf8');
    const jobs: JobOpening[] = JSON.parse(fileContents);

    const batch = writeBatch(db);
    jobs.forEach(job => {
        const docRef = doc(db, "jobs", job.id);
        batch.set(docRef, job);
    });

    await batch.commit();
    console.log("Successfully migrated jobs to Firestore.");
}

migrateJobs().catch(console.error);
