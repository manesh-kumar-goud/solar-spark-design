import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, FileText, Send, ArrowLeft } from "lucide-react";

const SubmitLead = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Lead Submitted Successfully!",
      description: "Thank you for submitting the lead. We'll contact them soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Submit a Lead
              </h1>
              <p className="text-muted-foreground">
                Know someone interested in solar? Submit their details and earn rewards!
              </p>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-solar md:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Information */}
                <div>
                  <h2 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                    <User className="h-5 w-5 text-primary" />
                    Your Information
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="yourName">Your Name *</Label>
                      <Input
                        id="yourName"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yourPhone">Your Phone *</Label>
                      <Input
                        id="yourPhone"
                        type="tel"
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Lead Information */}
                <div>
                  <h2 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    Lead Information
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="leadName">Lead Name *</Label>
                      <Input
                        id="leadName"
                        placeholder="Customer's name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="leadPhone">Lead Phone *</Label>
                      <Input
                        id="leadPhone"
                        type="tel"
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Customer's city" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="notes" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Additional Notes
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any additional information about the lead..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/" className="sm:flex-1">
                    <Button type="button" variant="outline" className="w-full gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    variant="solar"
                    className="gap-2 sm:flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Lead"}
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                  >
                    Login to track your leads
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitLead;
