import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const sponsors = [
  {
    name: "SAB",
    logo: "/assets/SAB.jpg",
    description:
      "The world's leading music streaming service, bringing millions of songs to fans worldwide.",
  },
  {
    name: "MTN",
    logo: "/assets/MTN.png",
    description:
      "Apple’s premium music streaming platform, offering exclusive content and high-fidelity audio.",
  },
  {
    name: "Dept. of Sports, Art and Culture",
    logo: "/assets/dept-sac.jpg",
    description:
      "A refreshing partner of the music industry, sponsoring top artists and live events.",
  },
  {
    name: "SABC",
    logo: "/assets/sabc.png",
    description:
      "High-performance audio products endorsed by the biggest names in the industry.",
  },
];

export default function page() {
  return (
    <div className="relative min-h-screen bg-black/50 text-white p-18 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url(/assets/partners-bg.jpg)" }}
      />
      <h1 className="text-4xl text-white font-bold text-center mb-8">
        In Partnership With
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <Card key={index} className=" p-4 rounded-2xl shadow-lg">
            <CardContent className="h-full flex flex-col items-center justify-between">
              <div className="relative h-[120] w-full flex justify-center items-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  
                  width={120}
                  height={120}
                  className=""
                />
              </div>
              <h2 className="text-xl font-semibold h-[30]">{sponsor.name}</h2>
              <p className="text-sm  text-center mt-2">{sponsor.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
