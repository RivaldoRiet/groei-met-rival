const Testimonials = () => {
  const testimonials = [
    {
      name: "Mike",
      role: "Zanger", 
      content: "Dit was perfect!! Ik heb besteld bij andere sites, en vergeleken met hen is Rival zoveel beter. De plays hier zijn legitiem, van echte bronnen en de kijkers zijn daadwerkelijk gericht. Het grootste punt is echter dat wanneer je plays koopt, volgers zijn INBEGREPEN!! dus het ziet er extreem natuurlijk uit.",
      avatar: "🎤"
    },
    {
      name: "Sarah",
      role: "Content Creator",
      content: "Rival heeft mijn Instagram account volledig getransformeerd. De kwaliteit van de volgers is uitstekend en de groei ziet er volledig organisch uit. Ik ben super tevreden met de service!",
      avatar: "📸"
    },
    {
      name: "David", 
      role: "YouTuber",
      content: "Geweldige service! Mijn YouTube kanaal heeft eindelijk de boost gekregen die het nodig had. De views komen snel binnen en zijn van hoge kwaliteit. Zeker een aanrader!",
      avatar: "🎬"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary-dark/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bij Rival is klanttevredenheid ons ultieme doel. Zie wat Rival klanten te zeggen hebben over de verschillende services die wij hebben geleverd
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
              <div className="mb-4">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white text-lg md:text-xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic leading-relaxed text-sm md:text-base">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex text-primary mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;