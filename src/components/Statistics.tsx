const Statistics = () => {
  const stats = [
    {
      number: "36.509",
      label: "Positieve Reviews",
      color: "text-success"
    },
    {
      number: "16.914", 
      label: "Vaste Klanten",
      color: "text-primary"
    },
    {
      number: "96.731",
      label: "Bestellingen Afgehandeld", 
      color: "text-boostdirect-blue"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-dark/5">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;