
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from 'lucide-react';
import { toast } from "sonner";
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulating a password reset request
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Password reset requested for:', email);
      toast.success("Reset link sent to your email!");
      setResetSent(true);
    } catch (error) {
      console.error('Password reset request failed:', error);
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link to="/login" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Login</span>
          </Link>
          <ThemeSwitcher />
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full max-w-md">
            <Card className="border-none shadow-lg bg-card dark:bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
                <CardDescription className="text-center">
                  {!resetSent 
                    ? "Enter your email and we'll send you a link to reset your password"
                    : "Check your email for a link to reset your password"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!resetSent ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-10 bg-background/50"
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Reset Link"}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <p className="mb-4">A password reset link has been sent to <strong>{email}</strong></p>
                    <p className="text-sm text-muted-foreground">
                      If you don't see the email, check your spam folder or
                      <Button variant="link" className="p-0 h-auto ml-1 text-sm" onClick={() => setResetSent(false)}>
                        try again with a different email
                      </Button>
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <p className="text-xs text-center w-full text-muted-foreground">
                  Remember your password? <Link to="/login" className="text-primary hover:underline">Back to Login</Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
