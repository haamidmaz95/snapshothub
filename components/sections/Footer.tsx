import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-card-border/50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center gap-8 text-sm text-foreground-muted">
            <a href="#catalog" className="hover:text-foreground transition-colors">
              Snapshots
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
          <p className="text-sm text-foreground-muted">
            Built by Hamid Mazumder
          </p>
        </div>
      </div>
    </footer>
  );
}
