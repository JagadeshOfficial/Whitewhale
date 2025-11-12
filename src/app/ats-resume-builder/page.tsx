
'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Download } from 'lucide-react';

// --- TYPES ---
interface PersonalDetails { fullName: string; professionalTitle: string; phone: string; email: string; linkedin: string; github: string; }
interface WorkExperience { id: number; jobTitle: string; company: string; period: string; description: string; }
interface Education { id: number; institution: string; degree: string; period: string; }
interface Project { id: number; name: string; description: string; technologies: string; link: string; }
interface Internship { id: number; company: string; role: string; period: string; description: string; }
interface Certification { id: number; name: string; issuer: string; date: string; }
interface Achievement { id: number; description: string; }

// --- MAIN COMPONENT ---
export default function AtsResumeBuilderPage() {
  const [step, setStep] = useState<'input' | 'refine'>('input');
  const [isLoading, setIsLoading] = useState(false);
  
  // Step 1 States
  const [rawResume, setRawResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Step 2 States
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({ fullName: '', professionalTitle: '', phone: '', email: '', linkedin: '', github: '' });
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState<WorkExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [skills, setSkills] = useState('');

  // --- HANDLERS ---
  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulate AI Parsing and Skill Matching
      setPersonalDetails({ fullName: 'Jane Doe', professionalTitle: 'Full-Stack Developer', phone: '555-555-5555', email: 'jane.doe@email.com', linkedin: 'linkedin.com/in/janedoe', github: 'github.com/janedoe' });
      setSummary('Innovative and detail-oriented Full-Stack Developer...');
      setExperience([{ id: 1, jobTitle: 'Software Engineer', company: 'Innovate Tech', period: '2021-Present', description: '- Building amazing things.\n- Solving complex problems.' }]);
      setEducation([{ id: 1, institution: 'University of Technology', degree: 'B.S. in Computer Science', period: '2017-2021' }]);
      setProjects([{ id: 1, name: 'E-commerce Platform', description: 'A full-stack e-commerce site...', technologies: 'React, Node.js, MongoDB', link: 'github.com/janedoe/ecommerce' }]);
      setSkills('JavaScript, React, Node.js, Next.js, Python');

      setIsLoading(false);
      setStep('refine');
    }, 2000);
  };

  const handleDownloadDoc = () => {
    if (!personalDetails.fullName) {
        alert('Please generate the resume first.');
        return;
    }
    // DOC generation logic remains the same
    const resumeHTML = `...`; // Not showing for brevity
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Resume</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + resumeHTML + footer;
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'resume.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
  }

  // Generic handlers for list management
  const createItemHandler = <T extends { id: number }>(setter: React.Dispatch<React.SetStateAction<T[]>>, newItem: Omit<T, 'id'>) => setter(prev => [...prev, { ...newItem, id: Date.now() } as T]);
  const removeItemHandler = <T extends { id: number }>(setter: React.Dispatch<React.SetStateAction<T[]>>, id: number) => setter(prev => prev.filter(item => item.id !== id));
  const updateItemHandler = <T extends { id: number }>(setter: React.Dispatch<React.SetStateAction<T[]>>, id: number, field: keyof T, value: string) => setter(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));

  // --- RENDER LOGIC ---
  return (
    <div className="bg-background text-foreground">
      {step === 'input' && (
        <PageHeader
            title="AI-Powered Resume Builder"
            description="Create a compelling, professional resume that gets past automated screeners and impresses human recruiters."
            videoUrl="/videos/contact-background.mp4"
        />
      )}

      <main className="container mx-auto px-4 py-12">
        {step === 'input' ? (
          // --- STEP 1: INPUT ---
          <div className="py-12 sm:py-16">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">1. Provide Your Data</h2>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
               <div className="p-4 border rounded-lg"><label htmlFor="resume-details" className="font-semibold mb-2 text-lg">Your Resume Details</label><Textarea id="resume-details" value={rawResume} onChange={e => setRawResume(e.target.value)} rows={25} placeholder="Paste your current resume..." /></div>
               <div className="p-4 border rounded-lg"><label htmlFor="job-desc" className="font-semibold mb-2 text-lg">Job Description</label><Textarea id="job-desc" value={jobDescription} onChange={e => setJobDescription(e.target.value)} rows={25} placeholder="Paste job description here..." /></div>
             </div>
             <div className="text-center mt-8"><Button onClick={handleGenerate} disabled={isLoading || !rawResume} className="w-full md:w-1/2 bg-primary text-primary-foreground text-lg py-6">{isLoading ? 'Generating...' : 'Generate Resume with AI'}</Button></div>
           </div>
        ) : (
          // --- STEP 2: REFINE ---
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold">Edit & Refine</h2><Button variant="outline" onClick={() => setStep('input')}>Start Over</Button></div>
              <div className="space-y-6">
                  {/* Sections */}
                  <div className="p-4 border rounded-lg"><h3 className="text-lg font-semibold mb-4">Personal Details</h3><div className="grid grid-cols-2 gap-4"><Input placeholder="Full Name" value={personalDetails.fullName} onChange={e => setPersonalDetails({...personalDetails, fullName: e.target.value})} /><Input placeholder="Title" value={personalDetails.professionalTitle} onChange={e => setPersonalDetails({...personalDetails, professionalTitle: e.target.value})} /><Input placeholder="Phone" value={personalDetails.phone} onChange={e => setPersonalDetails({...personalDetails, phone: e.target.value})} /><Input placeholder="Email" value={personalDetails.email} onChange={e => setPersonalDetails({...personalDetails, email: e.target.value})} /><Input placeholder="LinkedIn" value={personalDetails.linkedin} onChange={e => setPersonalDetails({...personalDetails, linkedin: e.target.value})} /><Input placeholder="GitHub" value={personalDetails.github} onChange={e => setPersonalDetails({...personalDetails, github: e.target.value})} /></div></div>
                  <div className="p-4 border rounded-lg"><h3 className="text-lg font-semibold mb-2">Professional Summary</h3><Textarea rows={5} value={summary} onChange={e => setSummary(e.target.value)} /></div>
                  <div className="p-4 border rounded-lg"><h3 className="text-lg font-semibold mb-2">Skills</h3><Textarea placeholder="Comma-separated skills..." rows={3} value={skills} onChange={e => setSkills(e.target.value)} /></div>
                  {[ { title: 'Work Experience', items: experience, setter: setExperience, fields: [{name: 'jobTitle', placeholder: 'Job Title'}, {name: 'company', placeholder: 'Company'}, {name: 'period', placeholder: 'Period'}, {name: 'description', placeholder: 'Description', type: 'textarea'}] },
                     { title: 'Projects', items: projects, setter: setProjects, fields: [{name: 'name', placeholder: 'Project Name'}, {name: 'technologies', placeholder: 'Technologies Used'}, {name: 'link', placeholder: 'Link to Project'}, {name: 'description', placeholder: 'Description', type: 'textarea'}] },
                     { title: 'Education', items: education, setter: setEducation, fields: [{name: 'institution', placeholder: 'Institution'}, {name: 'degree', placeholder: 'Degree'}, {name: 'period', placeholder: 'Period'}] },
                     { title: 'Internships', items: internships, setter: setInternships, fields: [{name: 'role', placeholder: 'Role'}, {name: 'company', placeholder: 'Company'}, {name: 'period', placeholder: 'Period'}, {name: 'description', placeholder: 'Description', type: 'textarea'}] },
                     { title: 'Certifications', items: certifications, setter: setCertifications, fields: [{name: 'name', placeholder: 'Certificate Name'}, {name: 'issuer', placeholder: 'Issuer'}, {name: 'date', placeholder: 'Date'}] },
                     { title: 'Achievements', items: achievements, setter: setAchievements, fields: [{name: 'description', placeholder: 'Achievement', type: 'textarea'}] },
                  ].map(section => (
                    <div key={section.title} className="p-4 border rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                      <div className="space-y-4">
                        {section.items.map(item => (
                          <div key={item.id} className="p-3 border rounded relative">
                             {section.fields.map(field => field.type === 'textarea' ? <Textarea key={field.name} placeholder={field.placeholder} rows={4} value={(item as any)[field.name]} onChange={e => updateItemHandler(section.setter as any, item.id, field.name as any, e.target.value)} className="mb-2" /> : <Input key={field.name} placeholder={field.placeholder} value={(item as any)[field.name]} onChange={e => updateItemHandler(section.setter as any, item.id, field.name as any, e.target.value)} className="mb-2" />)}
                            <Button variant="ghost" size="icon" onClick={() => removeItemHandler(section.setter as any, item.id)} className="absolute top-1 right-1 text-red-500"><Trash2 className="h-4 w-4" /></Button>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" onClick={() => createItemHandler(section.setter as any, section.fields.reduce((acc, f) => ({...acc, [f.name]: ''}), {}))} className="mt-4"><PlusCircle className="h-4 w-4 mr-2" />Add {section.title.slice(0, -1)}</Button>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right: Preview */}
            <div>
                <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold">Resume Preview</h2><Button onClick={handleDownloadDoc}><Download className="h-4 w-4 mr-2" />Download .doc</Button></div>
                <div className="border rounded-lg p-8 bg-white shadow-lg min-h-[800px] text-black text-sm printable-area">
                    <h1 className="text-3xl font-bold text-center">{personalDetails.fullName}</h1>
                    <p className="text-center text-lg mb-2">{personalDetails.professionalTitle}</p>
                    <div className="text-center text-xs text-gray-600 mb-6">{personalDetails.phone}{personalDetails.email && ` | ${personalDetails.email}`}{personalDetails.linkedin && ` | ${personalDetails.linkedin}`}</div>
                    
                    {summary && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Summary</h2><p className="mb-4">{summary}</p></>}
                    {skills && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Skills</h2><p className="mb-4">{skills}</p></>}
                    {experience.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Work Experience</h2>{experience.map(exp => <div key={exp.id} className="mb-3"><div className="flex justify-between"><h3 className="font-semibold">{exp.jobTitle}</h3><p className="font-light">{exp.period}</p></div><p className="italic">{exp.company}</p><ul className="list-disc list-inside space-y-1 mt-1">{exp.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}</ul></div>)}</>}
                    {projects.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Projects</h2>{projects.map(proj => <div key={proj.id} className="mb-3"><h3 className="font-semibold">{proj.name}</h3><p className="text-xs italic">{proj.technologies}</p><ul className="list-disc list-inside space-y-1 mt-1">{proj.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}</ul>{proj.link && <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs">{proj.link}</a>}</div>)}</>}
                    {education.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Education</h2>{education.map(edu => <div key={edu.id} className="mb-2"><div className="flex justify-between"><h3 className="font-semibold">{edu.institution}</h3><p className="font-light">{edu.period}</p></div><p>{edu.degree}</p></div>)}</>}
                    {internships.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Internships</h2>{internships.map(intern => <div key={intern.id} className="mb-3"><div className="flex justify-between"><h3 className="font-semibold">{intern.role} at ${intern.company}</h3><p className="font-light">{intern.period}</p></div><ul className="list-disc list-inside space-y-1 mt-1">{intern.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}</ul></div>)}</>}
                    {certifications.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Certifications</h2>{certifications.map(cert => <div key={cert.id} className="mb-2"><p><span className="font-semibold">{cert.name}</span> (${cert.issuer}, ${cert.date})</p></div>)}</>}
                    {achievements.length > 0 && <><h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Achievements</h2><ul className="list-disc list-inside space-y-1">{achievements.map(ach => <li key={ach.id}>{ach.description}</li>)}</ul></>}
                </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
