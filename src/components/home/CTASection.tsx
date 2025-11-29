import { Link } from "react-router-dom";
import { ArrowRight, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 gradient-solar" />
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -right-10 top-1/4 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Referral Program
            </span>
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Start Earning?
          </h2>

          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Join our referral program and start earning rewards today.
            Every successful installation means cash rewards for you!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/login">
              <Button variant="gold" size="xl" className="gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">100+ Active Referrers</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              <span className="text-sm">₹5L+ Rewards Paid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
