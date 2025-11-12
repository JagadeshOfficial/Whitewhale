'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Download } from 'lucide-react';

/* --------------------- Types --------------------- */
interface PersonalDetails {
  fullName: string;
  professionalTitle: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string;
  link: string;
}

interface Internship {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

interface Achievement {
  id: number;
  description: string;
}

type Field = {
  name: string;
  placeholder: string;
  type?: 'textarea' | 'text';
};

type Section<T> = {
  title: string;
  items: T[];
  setter: React.Dispatch<React.SetStateAction<T[]>>;
  fields: Field[];
};

/* --------------------- Component --------------------- */
export default function AtsResumeBuilderPage(): JSX.Element {
  const [step, setStep] = useState<'input' | 'refine'>('input');
  const [isLoading, setIsLoading] = useState(false);

  // Step 1
  const [rawResume, setRawResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Step 2
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    fullName: '',
    professionalTitle: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState<WorkExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [skills, setSkills] = useState('');

  /* --------------------- Helpers --------------------- */
  const createItemHandler = <T extends { id: number }>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    newItem: Omit<T, 'id'>
  ) => {
    const itemWithId = { ...(newItem as object), id: Date.now() } as T;
    setter(prev => [...prev, itemWithId]);
  };

  const removeItemHandler = <T extends { id: number }>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    id: number
  ) => {
    setter(prev => prev.filter(item => item.id !== id));
  };

  const updateItemHandler = <T extends { id: number }>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    id: number,
    field: keyof T,
    value: string
  ) => {
    setter(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item)));
  };

  /* --------------------- Simulated AI Generate --------------------- */
  const handleGenerate = () => {
    if (!rawResume) return;
    setIsLoading(true);

    setTimeout(() => {
      setPersonalDetails({
        fullName: 'Jane Doe',
        professionalTitle: 'Full-Stack Developer',
        phone: '555-555-5555',
        email: 'jane.doe@email.com',
        linkedin: 'linkedin.com/in/janedoe',
        github: 'github.com/janedoe',
      });
      setSummary('Innovative and detail-oriented Full-Stack Developer with a record of shipping web applications.');
      setExperience([
        {
          id: Date.now(),
          jobTitle: 'Software Engineer',
          company: 'Innovate Tech',
          period: '2021 - Present',
          description: '- Built features for core product\n- Improved performance by 30%',
        },
      ]);
      setEducation([{ id: Date.now() + 1, institution: 'University of Technology', degree: 'B.S. Computer Science', period: '2017 - 2021' }]);
      setProjects([
        {
          id: Date.now() + 2,
          name: 'E-commerce Platform',
          description: '- Full-stack e-commerce application with cart and payments',
          technologies: 'React, Next.js, Node.js, MongoDB',
          link: 'https://github.com/janedoe/ecommerce',
        },
      ]);
      setSkills('JavaScript, React, Next.js, Node.js, TypeScript');
      setIsLoading(false);
      setStep('refine');
    }, 1200);
  };

  /* --------------------- Doc Download --------------------- */
  const escapeHtml = (s = '') =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const generateResumeHTML = () => {
    const contactLine = [personalDetails.phone, personalDetails.email, personalDetails.linkedin, personalDetails.github]
      .filter(Boolean)
      .join(' | ');

    const experienceHtml = experience
      .map(
        e =>
          `<div><strong>${escapeHtml(e.jobTitle)}</strong> — ${escapeHtml(e.company)} <span style="float:right">${escapeHtml(e.period)}</span><p>${escapeHtml(
            e.description
          ).replace(/- /g, '&#8226; ')}</p></div>`
      )
      .join('');

    const projectsHtml = projects
      .map(
        p =>
          `<div><strong>${escapeHtml(p.name)}</strong><div><em>${escapeHtml(p.technologies)}</em></div><p>${escapeHtml(p.description)}</p>${
            p.link ? `<div><a href="${escapeHtml(p.link)}">${escapeHtml(p.link)}</a></div>` : ''
          }</div>`
      )
      .join('');

    const educationHtml = education
      .map(e => `<div><strong>${escapeHtml(e.institution)}</strong> <span style="float:right">${escapeHtml(e.period)}</span><div>${escapeHtml(e.degree)}</div></div>`)
      .join('');

    const certHtml = certifications.map(c => `<li>${escapeHtml(c.name)} — ${escapeHtml(c.issuer)} (${escapeHtml(c.date)})</li>`).join('');
    const achHtml = achievements.map(a => `<li>${escapeHtml(a.description)}</li>`).join('');

    return `
      <div style="font-family: Arial, sans-serif; color: #000;">
        <h1 style="text-align:center; font-size: 28px; margin-bottom: 6px;">${escapeHtml(personalDetails.fullName)}</h1>
        <div style="text-align:center; font-size: 16px; margin-bottom: 10px;">${escapeHtml(personalDetails.professionalTitle)}</div>
        <div style="text-align:center; font-size:12px; color:#333; margin-bottom:16px;">${escapeHtml(contactLine)}</div>
        ${summary ? `<h3>Summary</h3><p>${escapeHtml(summary)}</p>` : ''}
        ${skills ? `<h3>Skills</h3><p>${escapeHtml(skills)}</p>` : ''}
        ${experience.length ? `<h3>Work Experience</h3>${experienceHtml}` : ''}
        ${projects.length ? `<h3>Projects</h3>${projectsHtml}` : ''}
        ${education.length ? `<h3>Education</h3>${educationHtml}` : ''}
        ${certifications.length ? `<h3>Certifications</h3><ul>${certHtml}</ul>` : ''}
        ${achievements.length ? `<h3>Achievements</h3><ul>${achHtml}</ul>` : ''}
      </div>
    `;
  };

  const handleDownloadDoc = () => {
    if (!personalDetails.fullName) {
      alert('Please generate the resume first.');
      return;
    }
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Resume</title></head><body>";
    const footer = '</body></html>';
    const sourceHTML = header + generateResumeHTML() + footer;
    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = source;
    a.download = `${personalDetails.fullName.replace(/\s+/g, '_')}_resume.doc`;
    a.click();
    document.body.removeChild(a);
  };

  /* --------------------- Sections Config --------------------- */
  const sections: Section<any>[] = [
    {
      title: 'Work Experience',
      items: experience,
      setter: setExperience,
      fields: [
        { name: 'jobTitle', placeholder: 'Job Title', type: 'text' },
        { name: 'company', placeholder: 'Company', type: 'text' },
        { name: 'period', placeholder: 'Period', type: 'text' },
        { name: 'description', placeholder: 'Description', type: 'textarea' },
      ],
    },
    {
      title: 'Projects',
      items: projects,
      setter: setProjects,
      fields: [
        { name: 'name', placeholder: 'Project Name', type: 'text' },
        { name: 'technologies', placeholder: 'Technologies Used', type: 'text' },
        { name: 'link', placeholder: 'Link to Project', type: 'text' },
        { name: 'description', placeholder: 'Description', type: 'textarea' },
      ],
    },
    {
      title: 'Education',
      items: education,
      setter: setEducation,
      fields: [
        { name: 'institution', placeholder: 'Institution', type: 'text' },
        { name: 'degree', placeholder: 'Degree', type: 'text' },
        { name: 'period', placeholder: 'Period', type: 'text' },
      ],
    },
    {
      title: 'Internships',
      items: internships,
      setter: setInternships,
      fields: [
        { name: 'role', placeholder: 'Role', type: 'text' },
        { name: 'company', placeholder: 'Company', type: 'text' },
        { name: 'period', placeholder: 'Period', type: 'text' },
        { name: 'description', placeholder: 'Description', type: 'textarea' },
      ],
    },
    {
      title: 'Certifications',
      items: certifications,
      setter: setCertifications,
      fields: [
        { name: 'name', placeholder: 'Certificate Name', type: 'text' },
        { name: 'issuer', placeholder: 'Issuer', type: 'text' },
        { name: 'date', placeholder: 'Date', type: 'text' },
      ],
    },
    {
      title: 'Achievements',
      items: achievements,
      setter: setAchievements,
      fields: [{ name: 'description', placeholder: 'Achievement', type: 'textarea' }],
    },
  ];

  /* --------------------- Render --------------------- */
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
          <div className="py-12 sm:py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">1. Provide Your Data</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="p-4 border rounded-lg">
                <label htmlFor="resume-details" className="font-semibold mb-2 text-lg">
                  Your Resume Details
                </label>
                <Textarea id="resume-details" value={rawResume} onChange={e => setRawResume(e.target.value)} rows={25} placeholder="Paste your current resume..." />
              </div>

              <div className="p-4 border rounded-lg">
                <label htmlFor="job-desc" className="font-semibold mb-2 text-lg">
                  Job Description
                </label>
                <Textarea id="job-desc" value={jobDescription} onChange={e => setJobDescription(e.target.value)} rows={25} placeholder="Paste job description here..." />
              </div>
            </div>

            <div className="text-center mt-8">
              <Button onClick={handleGenerate} disabled={isLoading || !rawResume} className="w-full md:w-1/2 text-lg py-6">
                {isLoading ? 'Generating...' : 'Generate Resume with AI'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Edit & Refine</h2>
                <Button variant="outline" onClick={() => setStep('input')}>
                  Start Over
                </Button>
              </div>

              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Full Name" value={personalDetails.fullName} onChange={e => setPersonalDetails({ ...personalDetails, fullName: e.target.value })} />
                    <Input placeholder="Title" value={personalDetails.professionalTitle} onChange={e => setPersonalDetails({ ...personalDetails, professionalTitle: e.target.value })} />
                    <Input placeholder="Phone" value={personalDetails.phone} onChange={e => setPersonalDetails({ ...personalDetails, phone: e.target.value })} />
                    <Input placeholder="Email" value={personalDetails.email} onChange={e => setPersonalDetails({ ...personalDetails, email: e.target.value })} />
                    <Input placeholder="LinkedIn" value={personalDetails.linkedin} onChange={e => setPersonalDetails({ ...personalDetails, linkedin: e.target.value })} />
                    <Input placeholder="GitHub" value={personalDetails.github} onChange={e => setPersonalDetails({ ...personalDetails, github: e.target.value })} />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                  <Textarea rows={5} value={summary} onChange={e => setSummary(e.target.value)} />
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <Textarea placeholder="Comma-separated skills..." rows={3} value={skills} onChange={e => setSkills(e.target.value)} />
                </div>

                {sections.map(section => (
                  <div key={section.title} className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <div className="space-y-4">
                      {section.items.map((item: any) => (
                        <div key={item.id} className="p-3 border rounded relative">
                          {section.fields.map(field =>
                            ('type' in field && field.type === 'textarea') ? (
                              <Textarea
                                key={field.name}
                                placeholder={field.placeholder}
                                rows={4}
                                value={(item as any)[field.name] ?? ''}
                                onChange={e => updateItemHandler(section.setter, item.id, field.name as any, e.target.value)}
                                className="mb-2"
                              />
                            ) : (
                              <Input
                                key={field.name}
                                placeholder={field.placeholder}
                                value={(item as any)[field.name] ?? ''}
                                onChange={e => updateItemHandler(section.setter, item.id, field.name as any, e.target.value)}
                                className="mb-2"
                              />
                            )
                          )}

                          <Button variant="ghost" size="icon" onClick={() => removeItemHandler(section.setter, item.id)} className="absolute top-1 right-1 text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => createItemHandler(section.setter, section.fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {}) as any)}
                      className="mt-4"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add {section.title.slice(0, -1)}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Preview */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Resume Preview</h2>
                <Button onClick={handleDownloadDoc}>
                  <Download className="h-4 w-4 mr-2" />
                  Download .doc
                </Button>
              </div>

              <div className="border rounded-lg p-8 bg-white shadow-lg min-h-[800px] text-black text-sm printable-area">
                <h1 className="text-3xl font-bold text-center">{personalDetails.fullName}</h1>
                <p className="text-center text-lg mb-2">{personalDetails.professionalTitle}</p>
                <div className="text-center text-xs text-gray-600 mb-6">
                  {personalDetails.phone}
                  {personalDetails.email && ` | ${personalDetails.email}`}
                  {personalDetails.linkedin && ` | ${personalDetails.linkedin}`}
                </div>

                {summary && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Summary</h2>
                    <p className="mb-4 whitespace-pre-line">{summary}</p>
                  </>
                )}

                {skills && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Skills</h2>
                    <p className="mb-4">{skills}</p>
                  </>
                )}

                {experience.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2">Work Experience</h2>
                    {experience.map(exp => (
                      <div key={exp.id} className="mb-3">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{exp.jobTitle}</h3>
                          <p className="font-light">{exp.period}</p>
                        </div>
                        <p className="italic">{exp.company}</p>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          {String(exp.description)
                            .split('\n')
                            .map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                      </div>
                    ))}
                  </>
                )}

                {projects.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Projects</h2>
                    {projects.map(proj => (
                      <div key={proj.id} className="mb-3">
                        <h3 className="font-semibold">{proj.name}</h3>
                        <p className="text-xs italic">{proj.technologies}</p>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          {String(proj.description)
                            .split('\n')
                            .map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                        {proj.link && (
                          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs">
                            {proj.link}
                          </a>
                        )}
                      </div>
                    ))}
                  </>
                )}

                {education.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Education</h2>
                    {education.map(edu => (
                      <div key={edu.id} className="mb-2">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{edu.institution}</h3>
                          <p className="font-light">{edu.period}</p>
                        </div>
                        <p>{edu.degree}</p>
                      </div>
                    ))}
                  </>
                )}

                {internships.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Internships</h2>
                    {internships.map(intern => (
                      <div key={intern.id} className="mb-3">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{intern.role} at {intern.company}</h3>
                          <p className="font-light">{intern.period}</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 mt-1">
                          {String(intern.description)
                            .split('\n')
                            .map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                        </ul>
                      </div>
                    ))}
                  </>
                )}

                {certifications.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Certifications</h2>
                    {certifications.map(cert => (
                      <div key={cert.id} className="mb-2">
                        <p>
                          <span className="font-semibold">{cert.name}</span> — {cert.issuer}, {cert.date}
                        </p>
                      </div>
                    ))}
                  </>
                )}

                {achievements.length > 0 && (
                  <>
                    <h2 className="text-lg font-bold border-b-2 border-black pb-1 mb-2 mt-4">Achievements</h2>
                    <ul className="list-disc list-inside space-y-1">{achievements.map(ach => <li key={ach.id}>{ach.description}</li>)}</ul>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
