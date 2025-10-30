
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "Managed Teams",
};

export default function ManagedTeamsPage() {
  return (
    <div>
      <PageHeader
        title="Managed Teams"
        imageUrl="/images/stock/casey-horner-RMO_T7Z1E3c-unsplash.jpg"
      />
      <div className="container py-16">
        <p>Content for Managed Teams will be added here soon.</p>
      </div>
    </div>
  );
}
