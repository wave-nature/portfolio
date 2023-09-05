"use client";
import ElementCard from "@/components/ElementCard";
import Alert from "@/components/Alert";

const img = "/images/elements/simple/ecom-1.png";

export default function Elements() {
  const data = [
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
    {
      title: "Solar Aura",
      price: 40,
      img,
      redirectUrl: "https://gigplaced.tech",
    },
  ];
  return (
    <main className="mt-16 md:px-28 px-4 space-y-28">
      <Alert />
      <section id="elements" className="w-[95%] max-w-7xl mx-auto my-8">
        <h1 className="text-3xl md:text-4xl font-medium py-10">Elements</h1>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-7 ">
          {data.map((element, index) => (
            <ElementCard
              key={index}
              title={element.title}
              price={element.price}
              img={element.img}
              url={element.redirectUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
