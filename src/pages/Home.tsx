
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Check, ArrowRight, Users, Shield, BarChart, Wallet } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "User Management",
      description: "Powerful tools to manage users, roles, and permissions across your platform."
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain insights with real-time reporting and customizable dashboards."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security with multi-factor authentication and data encryption."
    },
    {
      icon: <Wallet className="h-8 w-8 text-primary" />,
      title: "Payment Solutions",
      description: "Seamless payment processing with multiple gateway integrations."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="font-bold text-2xl">Nexus Platform</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10"></div>
        <div className="absolute top-1/2 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl -z-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Powering Next-Gen Enterprise Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Streamline operations, enhance user experience, and drive growth with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/register" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full group">
                    Get Started <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="#features">
                  <Button size="lg" variant="outline" className="w-full">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-purple-500 opacity-70 blur-lg"></div>
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-background/80 to-muted border border-muted">
                <div className="absolute top-4 left-4 right-4 h-8 rounded-md bg-muted flex items-center px-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">Nexus Platform Dashboard</div>
                </div>
                <div className="absolute top-16 left-4 right-4 bottom-4 bg-card rounded-md shadow-lg p-4">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="h-24 bg-primary/5 rounded-md border border-primary/10 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded-md w-3/4"></div>
                        <div className="h-4 bg-muted rounded-md"></div>
                        <div className="h-4 bg-muted rounded-md w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-primary/10 rounded-md border border-primary/20 animate-pulse delay-300"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-muted rounded-md"></div>
                        <div className="h-16 bg-muted rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Platform Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and scale your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover-card border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {/* Service 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-muted/50 rounded-lg border shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Enterprise Platform Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Our flagship enterprise solution gives you complete control over your business operations with powerful tools designed for scale and performance.
                </p>
                <ul className="space-y-3">
                  {["Customizable workflows", "Advanced user management", "Real-time analytics", "Seamless integrations"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 group">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Payment & Transaction Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Secure, reliable payment processing with advanced fraud detection and support for multiple currencies and payment methods.
                </p>
                <ul className="space-y-3">
                  {["Multi-currency support", "Fraud prevention", "Automated reconciliation", "Payment analytics"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 group">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-primary/50 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden border">
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-background/80 to-background flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-muted/50 rounded-lg border shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't take our word for it - hear from some of our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Implementing Nexus Platform has transformed our business operations and increased efficiency by over 40%.",
                author: "Sarah Johnson",
                role: "COO, TechGrowth Inc"
              },
              {
                quote: "The customer support team is exceptional. They're always available and go above and beyond to resolve our issues.",
                author: "Michael Chen",
                role: "CTO, Innovate Labs"
              },
              {
                quote: "We've seen a significant reduction in operational costs since switching to Nexus Platform. Highly recommended!",
                author: "Jessica Miller",
                role: "Operations Director, GlobalTech"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border shadow-sm">
                <div className="text-4xl font-serif text-primary">"</div>
                <p className="my-4 italic">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 aspect-square rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies using Nexus Platform to streamline operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Contact Sales</Button>
            </div>
            
            <div className="mt-12 p-8 bg-background rounded-xl border shadow-md">
              <h3 className="text-xl font-bold mb-6">Subscribe to our newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="flex-grow"
                />
                <Button className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and receive updates from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Nexus Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 Nexus Platform. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
