
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulating a registration request
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Registration attempt with:', { name, email, password });
      // Navigate to dashboard after successful registration
      window.location.href = '/';
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <div className="w-full max-w-md">
            <Card className="border-none shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                <CardDescription className="text-center">
                  Enter your information to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Create a secure password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Password must be at least 8 characters and include uppercase, lowercase, and a number
                      </p>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </div>
                </form>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">Google</Button>
                  <Button variant="outline" className="w-full">GitHub</Button>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  By clicking "Create Account", you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
