const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg p-2 font-bold text-xl">
                B
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">BoostDirect</h1>
                <p className="text-xs text-muted-foreground">Premium Social Media Marketing</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              De beste social media marketing services voor het laten groeien van je online aanwezigheid met echte, actieve gebruikers.
            </p>
          </div>

          {/* BoostDirect links */}
          <div>
            <h3 className="font-semibold mb-4">BoostDirect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/over-ons" className="hover:text-primary transition-colors">Over Ons</a></li>
              <li><a href="/nieuws" className="hover:text-primary transition-colors">Nieuws</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-semibold mb-4">Ontdek</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rapportage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">BoostDirect Wallet</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tickets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gebruiksvoorwaarden</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacybeleid</a></li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>📧 support@boostdirect.nl</div>
            <div>📞 +31 20 123 4567</div>
            <div>📍 Amsterdam, Nederland</div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              Copyright 2017 - 2025 © BoostDirect.nl
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gebruiksvoorwaarden</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacybeleid</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Retourbeleid</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            BoostDirect.nl is op geen enkele wijze geassocieerd of gelieerd met Facebook, Twitter, YouTube, Instagram, LinkedIn, Tidal, Audiomack, Deezer, Pinterest, Sound Cloud, Vine, Periscope, Snapchat, Keek, Mixcloud, Vimeo, Tumblr, Spotify, Radiojavan, VK, Telegram, IMDb, Rottentomatoes, Spreaker, Saatchiart, Chew.tv, Beatstars, TikTok, DatPiff, Bandsintown en Dailymotion. Alle logo's, handelsmerken en merknamen behoren toe aan hun respectievelijke eigenaar en wij maken geen claim of eigendom daarvan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;