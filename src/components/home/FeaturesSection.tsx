import { Sun, Zap, Award, Shield, Wrench, Banknote } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Expert Installation",
    description:
      "Professional solar panel installation by certified technicians with years of experience.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Subsidy Support",
    description:
      "Complete assistance with PM Surya Ghar subsidy application and documentation.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    description:
      "Refer customers and earn attractive rewards for every successful installation.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Experience the best in solar energy solutions with our comprehensive services
            and rewarding referral program.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-solar transition-all duration-300 hover:-translate-y-2 hover:shadow-solar-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-transparent transition-transform duration-500 group-hover:scale-150" />

              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} ${feature.color}`}
              >
                <feature.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
