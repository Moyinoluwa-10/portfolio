'use client'
import { CERTIFICATES } from "@/constants/activities/certificates";
import Card from "./card";

const Certificates = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-[#131313] dark:text-white">
        Certificates and Honors
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES.map((certificate, index) => (
          <Card
            key={index}
            title={certificate.title}
            image={certificate.image}
          />
        ))}
      </div>
      <CertificateOverlay
    </div>
  );
};

export default Certificates;
