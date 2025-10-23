import { PageHeader } from "@/app/common/PageHeader";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <PageHeader 
        title="Our Services" 
        description="We offer a wide range of services to help you achieve your business goals."
      />
      {children}
    </main>
  );
}