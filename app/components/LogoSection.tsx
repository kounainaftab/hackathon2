import Image from "next/image";

const LogoSection = () => {
  const logos = [
    { src: "/zapier.png", alt: "Zapier Logo", width: 85, height: 87 },
    { src: "/pip.png", alt: "Pipedrive Logo", width: 107, height: 109 },
    { src: "/cib.png", alt: "CIB Bank Logo", width: 135, height: 139 },
    { src: "/z.png", alt: "Z Logo", width: 63, height: 65 },
    { src: "/bur.png", alt: "Burnt Toast Logo", width: 98, height: 101 },
    { src: "/p.png", alt: "PandaDoc Logo", width: 113, height: 115 },
    { src: "/m.png", alt: "Moz Logo", width: 84, height: 87 },
  ];

  return (
    <section className="bg-white flex justify-center items-center py-8">
      <div
        className="w-[1321px] h-[139px] mx-auto flex items-center justify-between space-x-4"
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;