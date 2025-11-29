import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-success/20 blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute right-10 top-20 hidden animate-float md:block">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 backdrop-blur-sm">
          <Sun className="h-8 w-8 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden animate-float md:block animation-delay-200">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20 backdrop-blur-sm">
          <Zap className="h-7 w-7 text-primary-foreground" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Sun className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              PM Surya Ghar Subsidy Available
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
            Power Your Future with{" "}
            <span className="relative">
              <span className="relative z-10 text-accent">Solar Energy</span>
              <span className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-accent/30" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl animate-fade-in-up animation-delay-100">
            Join Mahalaxmi Solar Energies and be part of the clean energy revolution.
            Save on electricity bills and earn rewards through our referral program.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-200">
            <Link to="/submit-lead">
              <Button variant="gold" size="xl" className="gap-2">
                Submit a Lead
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="hero-outline" size="xl">
                Join Referral Program
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                500+
              </p>
              <p className="text-sm text-primary-foreground/70">Installations</p>
            </div>
            <div className="border-x border-primary-foreground/10 text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                ₹78K
              </p>
              <p className="text-sm text-primary-foreground/70">Max Subsidy</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                100+
              </p>
              <p className="text-sm text-primary-foreground/70">Happy Referrers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
