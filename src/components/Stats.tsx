export default function Stats() {
  const stats = [
    { value: "5,000+", label: "Active Artists" },
    { value: "500+", label: "Podcasts Enhanced" },
    { value: "$2.5M+", label: "Paid to Creators" },
    { value: "50+", label: "Brand Campaigns" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0a6c29] rounded-[64px] p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-black text-[#073c18] mb-2">{stat.value}</h3>
                <p className="text-white text-base font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

