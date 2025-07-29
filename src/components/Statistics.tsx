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
      color: "text-rival-blue"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-dark/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20">
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">
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