import { useLanguage } from '@/lib/i18n/LanguageContext';
import logo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/40 bg-white/50 dark:bg-black/20 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white/50 dark:bg-white/10 rounded-xl shadow-sm border border-white/20">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <p className="font-bold text-lg text-foreground">{t.systemTitle}</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.country}</p>
            </div>
          </div>

          <div className="text-center md:text-right text-sm space-y-1">
            <p className="font-semibold text-foreground">{t.footer.research}</p>
            <p className="text-muted-foreground">{t.footer.university}</p>
            <p className="text-muted-foreground text-xs mt-2 opacity-70">© {new Date().getFullYear()} {t.footer.copyright}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground bg-secondary/50 inline-block px-4 py-2 rounded-full border border-border/50">
            ⚠️ {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
