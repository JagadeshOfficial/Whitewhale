
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { JobOpening } from '@/lib/types';
import { getJobs } from '@/lib/jobs';

const jobsFilePath = path.join(process.cwd(), 'src/lib/jobs.json');

// GET all jobs
export async function GET() {
  try {
    const jobs = await getJobs();
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ message: 'Error reading jobs file' }, { status: 500 });
  }
}

// POST a new job
export async function POST(request: Request) {
  try {
    const newJob = await request.json();
    const jobs = await getJobs();
    jobs.push(newJob);
    await fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2));
    return NextResponse.json(newJob, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating job' }, { status: 500 });
  }
}

// PUT (update) a job
export async function PUT(request: Request) {
  try {
    const updatedJob = await request.json();
    let jobs = await getJobs();
    const jobIndex = jobs.findIndex(job => job.id === updatedJob.id);
    if (jobIndex === -1) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }
    jobs[jobIndex] = updatedJob;
    await fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2));
    return NextResponse.json(updatedJob);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating job' }, { status: 500 });
  }
}

// DELETE a job
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    let jobs = await getJobs();
    const filteredJobs = jobs.filter(job => job.id !== id);
    if (jobs.length === filteredJobs.length) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }
    await fs.writeFile(jobsFilePath, JSON.stringify(filteredJobs, null, 2));
    return NextResponse.json({ message: 'Job deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting job' }, { status: 500 });
  }
}
