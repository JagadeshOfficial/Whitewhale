
import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
  title: "IT Staff Augmentation",
};

export default function ITStaffAugmentationPage() {
  return (
    <div>
      <PageHeader
        title="IT Staff Augmentation"
        imageUrl="/images/stock/casey-horner-RMO_T7Z1E3c-unsplash.jpg"
      />
      <div className="container py-16">
        <p>Content for IT Staff Augmentation will be added here soon.</p>
      </div>
    </div>
  );
}
