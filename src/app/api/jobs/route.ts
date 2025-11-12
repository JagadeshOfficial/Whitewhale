
import { NextResponse } from 'next/server';
import { JobOpening } from '@/lib/types';
import { getJobs } from '@/lib/jobs';
import { revalidatePath } from 'next/cache';
import { collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from '@/lib/firebase';

// GET all jobs
export async function GET() {
  try {
    const jobs = await getJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ message: 'Error getting jobs', error }, { status: 500 });
  }
}

// POST a new job
export async function POST(request: Request) {
  try {
    const newJob: JobOpening = await request.json();
    await setDoc(doc(db, "jobs", newJob.id), newJob);
    revalidatePath('/careers');
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating job', error }, { status: 500 });
  }
}

// PUT (update) a job
export async function PUT(request: Request) {
  try {
    const updatedJob: JobOpening = await request.json();
    await setDoc(doc(db, "jobs", updatedJob.id), updatedJob);
    revalidatePath('/careers');
    return NextResponse.json(updatedJob);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating job', error }, { status: 500 });
  }
}

// DELETE a job
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await deleteDoc(doc(db, "jobs", id));
    revalidatePath('/careers');
    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting job', error }, { status: 500 });
  }
}
