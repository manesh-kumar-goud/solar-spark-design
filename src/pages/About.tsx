import { Layout } from "@/components/layout/Layout";
import { Sun, Users, Award, Target, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make clean solar energy accessible to every household in India while empowering our community through rewarding partnerships.",
  },
  {
    icon: Sun,
    title: "Our Vision",
    description:
      "To be the leading solar energy provider, creating a sustainable future powered by clean, renewable energy.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A dedicated team of solar experts, engineers, and customer service professionals committed to your satisfaction.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description:
      "Quality installations, transparent pricing, and ongoing support to ensure your solar journey is smooth and rewarding.",
  },
];

const achievements = [
  "500+ Successful Installations",
  "100% Customer Satisfaction",
  "Certified Installation Partners",
  "24/7 Customer Support",
  "Government Approved Vendor",
  "5+ Years of Experience",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            About Mahalaxmi Solar Energies
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Powering homes and businesses with clean, sustainable solar energy since our inception.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="mb-6 text-muted-foreground">
              Mahalaxmi Solar Energies was founded with a simple yet powerful vision: to bring
              the benefits of solar energy to every home in India. We believe that clean energy
              should be accessible, affordable, and rewarding for everyone.
            </p>
            <p className="text-muted-foreground">
              Today, we are proud to be one of the trusted names in solar installation, helping
              hundreds of families reduce their electricity bills while contributing to a cleaner
              environment. Our referral program has created a community of advocates who earn
              rewards while spreading the solar revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-solar transition-all hover:-translate-y-1 hover:shadow-solar-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
              Why Choose Us
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="flex items-center gap-3 rounded-xl bg-success/5 p-4"
                >
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="font-medium text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
