import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { User, Lock, Phone, Mail, ArrowRight, ArrowLeft, Shield } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

type CustomerStep = "phone" | "email" | "otp";

const Login = () => {
  const { toast } = useToast();
  const [customerStep, setCustomerStep] = useState<CustomerStep>("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneContinue = () => {
    if (phone.length === 10) {
      setCustomerStep("email");
    } else {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
    }
  };

  const handleSendOTP = async () => {
    if (!email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setCustomerStep("otp");
    toast({
      title: "OTP Sent!",
      description: `Verification code sent to ${email}`,
    });
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit verification code.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Login Successful!",
      description: "Welcome to your dashboard.",
    });
    // Navigate to dashboard
  };

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Admin Login",
      description: "Admin authentication will be implemented with backend.",
    });
  };

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center">
              <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Login to access your dashboard and track your referrals.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-solar md:p-8">
              <Tabs defaultValue="customer" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-2">
                  <TabsTrigger value="customer" className="gap-2">
                    <User className="h-4 w-4" />
                    Customer
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="gap-2">
                    <Shield className="h-4 w-4" />
                    Administrator
                  </TabsTrigger>
                </TabsList>

                {/* Customer Login */}
                <TabsContent value="customer">
                  {customerStep === "phone" && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter 10-digit number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          maxLength={10}
                        />
                      </div>
                      <Button
                        variant="solar"
                        className="w-full gap-2"
                        onClick={handlePhoneContinue}
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {customerStep === "email" && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() => setCustomerStep("phone")}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          variant="solar"
                          className="flex-1 gap-2"
                          onClick={handleSendOTP}
                          disabled={isLoading}
                        >
                          {isLoading ? "Sending..." : "Send OTP"}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {customerStep === "otp" && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="text-center">
                        <p className="mb-4 text-sm text-muted-foreground">
                          Enter the 6-digit code sent to{" "}
                          <span className="font-medium text-foreground">{email}</span>
                        </p>
                        <div className="flex justify-center">
                          <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={(value) => setOtp(value)}
                          >
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="gap-2"
                          onClick={() => setCustomerStep("email")}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          Back
                        </Button>
                        <Button
                          variant="solar"
                          className="flex-1"
                          onClick={handleVerifyOTP}
                          disabled={isLoading}
                        >
                          {isLoading ? "Verifying..." : "Verify OTP"}
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Admin Login */}
                <TabsContent value="admin">
                  <form onSubmit={handleAdminLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="adminUser" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Username / Email
                      </Label>
                      <Input
                        id="adminUser"
                        type="text"
                        placeholder="Enter username or email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="adminPass" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Password
                      </Label>
                      <Input
                        id="adminPass"
                        type="password"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="solar"
                      className="w-full gap-2"
                      disabled={isLoading}
                    >
                      <Shield className="h-4 w-4" />
                      {isLoading ? "Logging in..." : "Login as Administrator"}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Admin access is restricted to authorized personnel only.
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/submit-lead" className="font-medium text-primary hover:underline">
                Submit a lead to get started
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
