import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24 lg:py-32">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute right-16 top-24 hidden animate-float lg:block opacity-60">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
          <Sun className="h-7 w-7 text-accent" />
        </div>
      </div>
      <div className="absolute bottom-24 left-16 hidden animate-float lg:block opacity-60 animation-delay-200">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
          <Zap className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Professional Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2.5 backdrop-blur-sm animate-fade-in">
            <Sun className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              PM Surya Ghar Subsidy Available
            </span>
          </div>

          {/* Company Name */}
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent uppercase animate-fade-in-up">
            MAHALAKSHMI SOLAR ENERGIES
          </p>

          {/* Title */}
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
            Power Your Future with{" "}
            <span className="text-accent">Solar Energy</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-base text-primary-foreground/80 md:text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Join our referral program and be part of the clean energy revolution.
            Save on electricity bills and earn rewards for every successful referral.
          </p>

          {/* CTA Buttons */}
          <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-200">
            <Link to="/submit-lead">
              <Button variant="gold" size="lg" className="gap-2 min-w-[180px]">
                Submit a Lead
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="hero-outline" size="lg" className="min-w-[180px]">
                Join Referral Program
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 md:p-8 backdrop-blur-sm animate-fade-in-up animation-delay-300">
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
                500+
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/70 mt-1">Installations</p>
            </div>
            <div className="border-x border-primary-foreground/10 text-center">
              <p className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
                ₹78K
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/70 mt-1">Max Subsidy</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
                100+
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/70 mt-1">Happy Referrers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
