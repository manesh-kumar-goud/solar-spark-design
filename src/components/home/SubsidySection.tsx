import { Check, Shield, Zap, Leaf, CreditCard, Sun } from "lucide-react";

const subsidyDetails = [
  { range: "Up to 3 kW", amount: "₹30,000 per kW", max: "Max ₹90,000" },
  { range: "Above 3 kW to 10 kW", amount: "₹18,000 per kW", max: "" },
  { range: "Above 10 kW", amount: "Fixed ₹1,17,000", max: "" },
];

const benefits = [
  { icon: Zap, text: "Free electricity for 25+ years" },
  { icon: CreditCard, text: "Reduce electricity bills by up to 90%" },
  { icon: Leaf, text: "Environment-friendly solution" },
  { icon: Shield, text: "Easy loan options available" },
];

export function SubsidySection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
            <Sun className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Government Subsidy</span>
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            PM Surya Ghar Subsidy Benefits
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get up to{" "}
            <span className="font-semibold text-success">₹78,000 subsidy</span> on
            your solar installation
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Subsidy Details */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-solar">
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
              Subsidy Rates
            </h3>
            <div className="space-y-4">
              {subsidyDetails.map((item, index) => (
                <div
                  key={item.range}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-solar text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.range}</p>
                      {item.max && (
                        <p className="text-sm text-muted-foreground">{item.max}</p>
                      )}
                    </div>
                  </div>
                  <p className="font-heading text-lg font-bold text-primary">
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-solar">
            <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
              Key Benefits
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-start gap-3 rounded-xl bg-success/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10">
                    <benefit.icon className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl gradient-solar p-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <Check className="h-5 w-5" />
                <p className="font-medium">
                  We handle all paperwork and subsidy applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
