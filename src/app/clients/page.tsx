
import { clients } from "@/lib/data";
import { PageHeader } from "@/app/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ClientsPage() {
  return (
    <main className="flex-1">
      <PageHeader 
        title="Our Clients" 
        description="We are proud to work with a diverse range of clients."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <Card key={client.id} className="h-40">
              <CardContent className="flex justify-center items-center h-full p-6">
                <div className="relative w-40 h-20">
                  <Image 
                    src={client.logoUrl} 
                    alt={client.name} 
                    fill
                    className="object-contain" 
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
