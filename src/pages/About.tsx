import { FileCheck, Hash, Database, Search, ShieldCheck, Scale, Zap, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layout/MainLayout';

const About = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: FileCheck, title: t.about.howItWorks.step1.title, desc: t.about.howItWorks.step1.desc },
    { icon: Hash, title: t.about.howItWorks.step2.title, desc: t.about.howItWorks.step2.desc },
    { icon: Database, title: t.about.howItWorks.step3.title, desc: t.about.howItWorks.step3.desc },
    { icon: Search, title: t.about.howItWorks.step4.title, desc: t.about.howItWorks.step4.desc },
  ];

  const benefits = [
    { icon: ShieldCheck, text: t.about.benefits.fraud },
    { icon: Scale, text: t.about.benefits.disputes },
    { icon: Zap, text: t.about.benefits.efficiency },
    { icon: Heart, text: t.about.benefits.trust },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">{t.about.title}</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t.about.intro}
          </p>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{t.about.howItWorks.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">{t.about.benefits.title}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-success" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
