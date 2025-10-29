
import { Metadata } from 'next';
import { PageHeader } from '@/components/common/PageHeader';
import { Summarizer } from './Summarizer';

export const metadata: Metadata = {
  title: 'AI Document Summarizer',
  description: 'Summarize long technical documents or articles into concise, easy-to-understand summaries using our AI-powered tool.',
};

export default function SummarizePage() {
  return (
    <>
      <PageHeader
        title="AI-Powered Summarizer"
        description="Paste any technical document or article below to get a concise summary in seconds. Save time and get to the key insights faster."
        videoUrl="https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4"
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Summarizer />
        </div>
      </section>
    </>
  );
}
