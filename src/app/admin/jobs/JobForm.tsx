
'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { JobOpening } from '@/lib/types';
import { PlusCircle, Trash2 } from 'lucide-react';

const jobFormSchema = z.object({
  id: z.string().min(1, 'ID is required').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'ID must be a valid slug (e.g., senior-developer)'),
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  location: z.string().min(2, 'Location is required'),
  department: z.string().min(2, 'Department is required'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  responsibilities: z.array(z.object({ value: z.string().min(5, 'Responsibility must be at least 5 characters long') })).min(1, 'At least one responsibility is required'),
  qualifications: z.array(z.object({ value: z.string().min(5, 'Qualification must be at least 5 characters long') })).min(1, 'At least one qualification is required'),
});

type JobFormData = z.infer<typeof jobFormSchema>;

interface JobFormProps {
  job: JobOpening | null;
  onFinished: () => void;
  formId: string;
}

export function JobForm({ job, onFinished, formId }: JobFormProps) {
  const form = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: job
      ? { 
          ...job,
          responsibilities: job.responsibilities.map(value => ({ value })),
          qualifications: job.qualifications.map(value => ({ value }))
        }
      : {
          id: '',
          title: '',
          location: '',
          department: '',
          description: '',
          responsibilities: [{ value: '' }],
          qualifications: [{ value: '' }],
        },
  });

  const { fields: responsibilities, append: appendResponsibility, remove: removeResponsibility } = useFieldArray({
    control: form.control,
    name: "responsibilities",
  });

  const { fields: qualifications, append: appendQualification, remove: removeQualification } = useFieldArray({
    control: form.control,
    name: "qualifications",
  });

  const onSubmit = async (data: JobFormData) => {
    const jobData: JobOpening = {
      ...data,
      responsibilities: data.responsibilities.map(r => r.value),
      qualifications: data.qualifications.map(q => q.value),
    };

    const method = job ? 'PUT' : 'POST';
    const res = await fetch('/api/jobs', {
      method,
      body: JSON.stringify(jobData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      onFinished();
    }
  };

  return (
    <Form {...form}>
      <form id={formId} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Senior Frontend Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job ID</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., senior-frontend-developer" {...field} disabled={!!job} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Engineering" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Remote or City, Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea placeholder="A brief summary of the role..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Responsibilities</h3>
          {responsibilities.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
              <FormField
                control={form.control}
                name={`responsibilities.${index}.value` as const}
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormControl>
                            <Input placeholder={`Responsibility ${index + 1}`} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
              />
              {responsibilities.length > 1 && (
                  <Button type="button" variant="destructive" size="icon" onClick={() => removeResponsibility(index)}>
                      <Trash2 className="h-4 w-4" />
                  </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => appendResponsibility({ value: '' })}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Responsibility
          </Button>
        </div>

        <div className="space-y-4 rounded-lg border p-4">
          <h3 className="text-lg font-medium">Qualifications</h3>
          {qualifications.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2">
                 <FormField
                    control={form.control}
                    name={`qualifications.${index}.value` as const}
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormControl>
                                <Input placeholder={`Qualification ${index + 1}`} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                 />
              {qualifications.length > 1 && (
                <Button type="button" variant="destructive" size="icon" onClick={() => removeQualification(index)}>
                    <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => appendQualification({ value: '' })}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Qualification
          </Button>
        </div>
      </form>
    </Form>
  );
}
