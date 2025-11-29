import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sun,
  Building2,
  Home,
  Wrench,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Complete solar solutions for homes. Reduce your electricity bills by up to 90% with our high-efficiency panels.",
    features: ["Rooftop installation", "Net metering setup", "25-year warranty"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Large-scale solar installations for businesses, factories, and commercial establishments.",
    features: ["Custom capacity design", "ROI optimization", "Maintenance packages"],
  },
  {
    icon: FileText,
    title: "Subsidy Assistance",
    description:
      "Complete support for PM Surya Ghar subsidy application and all government documentation.",
    features: ["Application filing", "Document preparation", "Status tracking"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description:
      "Regular maintenance and repair services to keep your solar system running at peak efficiency.",
    features: ["Panel cleaning", "Inverter service", "Performance monitoring"],
  },
  {
    icon: Sun,
    title: "Solar Consultation",
    description:
      "Expert advice on the best solar solution for your needs, budget, and location.",
    features: ["Site assessment", "Energy audit", "Cost-benefit analysis"],
  },
  {
    icon: Users,
    title: "Referral Program",
    description:
      "Earn rewards by referring customers. Get paid for every successful installation.",
    features: ["Attractive commissions", "Easy tracking", "Quick payouts"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Comprehensive solar solutions from consultation to installation and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-solar transition-all hover:-translate-y-2 hover:shadow-solar-lg"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
            Ready to Go Solar?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Contact us today for a free consultation and quote.
          </p>
          <Link to="/contact">
            <Button variant="solar" size="lg" className="gap-2">
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
