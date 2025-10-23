
'use client';

import { useState } from 'react';
import { projects } from "@/lib/data";
import { PageHeader } from "@/app/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projectCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="flex-1">
      <PageHeader 
        title="Our Work" 
        description="A selection of our featured projects, showcasing our expertise in various domains."
      />
      
      <div className="container mx-auto py-12 px-4">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map(category => (
            <Button 
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-60">
                <Image 
                  src={project.imageUrl} 
                  alt={project.name} 
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.category}</p>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
