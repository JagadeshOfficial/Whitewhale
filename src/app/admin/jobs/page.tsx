
'use client';

import { useState, useEffect } from 'react';
import { JobOpening } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { JobForm } from './JobForm';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const JOB_FORM_ID = 'job-form';

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch('/api/jobs');
    const data = await res.json();
    setJobs(data);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this job?')) {
      await fetch(`/api/jobs`, {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      fetchJobs();
    }
  };

  const openForm = (job: JobOpening | null) => {
    setEditingJob(job);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingJob(null);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-headline font-bold text-primary">Manage Jobs</h1>
          <Button onClick={() => openForm(null)} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Job
          </Button>
        </div>

        <Card className="shadow-lg border-border">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-secondary/50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-border">
                  {jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-secondary/40 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{job.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{job.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{job.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="icon" onClick={() => openForm(job)}>
                          <Edit className="h-4 w-4 text-primary" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(job.id)} className="ml-2">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[625px] grid-rows-[auto_1fr_auto] p-0 max-h-[90vh]">
          <DialogHeader className="p-6">
            <DialogTitle className="font-headline text-2xl text-primary">{editingJob ? 'Edit Job' : 'Add New Job'}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-full">
            <div className="p-6">
              <JobForm formId={JOB_FORM_ID} job={editingJob} onFinished={() => {
                closeForm();
                fetchJobs();
              }} />
            </div>
          </ScrollArea>
          <DialogFooter className="p-6 pt-0">
            <Button type="submit" form={JOB_FORM_ID} className="bg-primary text-primary-foreground hover:bg-primary/90">
              {editingJob ? 'Save Changes' : 'Create Job'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
