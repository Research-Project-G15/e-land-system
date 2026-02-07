import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Eye, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';
import logo from '@/assets/logo.png';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [deedNumber, setDeedNumber] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (deedNumber.trim()) {
      navigate(`/verify?deed=${encodeURIComponent(deedNumber.trim())}`);
    }
  };

  const features = [
    {
      icon: Shield,
      title: t.home.features.security.title,
      description: t.home.features.security.desc,
      color: "text-blue-500",
      bgcolor: "bg-blue-500/10"
    },
    {
      icon: Eye,
      title: t.home.features.transparency.title,
      description: t.home.features.transparency.desc,
      color: "text-emerald-500",
      bgcolor: "bg-emerald-500/10"
    },
    {
      icon: Zap,
      title: t.home.features.speed.title,
      description: t.home.features.speed.desc,
      color: "text-amber-500",
      bgcolor: "bg-amber-500/10"
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-8 inline-block relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img src={logo} alt="Sri Lanka Land Registry Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl" />
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient block mb-2">{t.home.welcome}</span>
              <span className="text-lg md:text-xl font-medium text-muted-foreground block mt-2">{t.systemTitle}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.home.subtitle}
            </p>

            {/* Search Box - Floating Hero Element */}
            <Card className="max-w-xl mx-auto border-0 shadow-glow bg-white/80 dark:bg-card/80 backdrop-blur-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="p-2">
                <form onSubmit={handleVerify} className="flex gap-2 p-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={t.home.searchPlaceholder}
                      value={deedNumber}
                      onChange={(e) => setDeedNumber(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 text-lg border-transparent bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-14 px-8 text-lg font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                    {t.home.searchButton}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Government Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>Secure Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span>24/7 Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.features.title}</h2>
            <div className="w-20 h-1.5 bg-primary/20 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/50 dark:bg-card/40 backdrop-blur-sm hover-lift group overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-1 h-full ${feature.bgcolor.replace('/10', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgcolor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300" onClick={() => navigate('/about')}>
              Learn more about the system <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
