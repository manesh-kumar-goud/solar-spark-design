import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Get in touch with our team for any inquiries or support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Get In Touch
              </h2>
              <p className="mb-8 text-muted-foreground">
                Have questions about solar installation or our referral program?
                We're here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@mahalaxmisolar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">Your City, State, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/p/Mahalakshmi-Solar-Energies-61558430126387/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/maha.lakshmisolarenergies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-solar">
              <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="solar"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
