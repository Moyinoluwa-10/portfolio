import { CERTIFICATES } from "@/constants/activities/certificates";
import CertificateCard from "./card";

export default function Certificates() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-[#131313] dark:text-white">
        Certificates
        {/* and Honors */}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CERTIFICATES.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            image={certificate.image}
          />
        ))}
      </div>
    </div>
  );
}
