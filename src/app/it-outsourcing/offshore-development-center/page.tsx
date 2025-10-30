
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "Offshore Development Center",
};

export default function OffshoreDevelopmentCenterPage() {
  return (
    <div>
      <PageHeader
        title="Offshore Development Center"
        imageUrl="/images/stock/casey-horner-RMO_T7Z1E3c-unsplash.jpg"
      />
      <div className="container py-16">
        <p>Content for Offshore Development Center will be added here soon.</p>
      </div>
    </div>
  );
}
