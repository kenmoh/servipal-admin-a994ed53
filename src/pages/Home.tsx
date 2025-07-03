import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Package, 
  Utensils, 
  WashingMachine, 
  Handshake, 
  ArrowDown, 
  LogIn,
  Apple,
  PlayCircle,
  Users,
  MessageCircle,
  Star,
  Clock
} from 'lucide-react';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

const Home = () => {
  const [email, setEmail] = useState('');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const services = [
    {
      icon: <Package className="h-8 w-8 text-primary" />,
      title: "Item Delivery",
      description: "Fast and reliable package delivery services with real-time tracking and secure handling."
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Food Ordering",
      description: "Order delicious meals from local restaurants with quick delivery and special offers."
    },
    {
      icon: <WashingMachine className="h-8 w-8 text-primary" />,
      title: "Laundry Service",
      description: "Convenient laundry pickup and delivery with professional cleaning and care for all fabrics."
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "P2P Marketplace",
      description: "Connect directly with local service providers and buyers in a secure peer-to-peer environment."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col dark">
      {/* Header */}
      <header style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 30,
        width: '100%',
        backgroundColor: 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(8px',
        borderBottomWidth: '1px',
        borderBottomColor: 'rgba(226, 232, 240, 0.5)'
      }}>
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/e1e93d24-9824-4a19-8628-f3d8a4cef808.png" 
              alt="ServiPal Logo" 
              className="h-10 w-10"
            />
            <div style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, rgb(30, 64, 175), rgb(255, 107, 53))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'rgb(30, 64, 175)' // Fallback for older browsers
            }}>
              ServiPal
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <Link to="/login">
              <Button>
                <LogIn className="mr-2 h-4 w-4" />
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(248, 250, 252, 1), rgba(30, 64, 175, 0.05))',
          zIndex: -10
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          width: '50%',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(30, 64, 175, 0.1), transparent)',
          filter: 'blur(48px)',
          zIndex: -10
        }}></div>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 style={{
                fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, rgb(30, 64, 175), rgb(255, 107, 53))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'rgb(30, 64, 175)' // Fallback
              }}>
                Your All-In-One Service Platform
              </h1>
              <p className="text-xl text-muted-foreground">
                Connecting you with essential services - from food delivery to laundry - all in one convenient app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={() => scrollToSection('services')} className="group">
                  <Button size="lg" className="w-full group" style={{
                    background: 'linear-gradient(135deg, rgb(30, 64, 175), rgb(30, 64, 175))',
                    color: 'white'
                  }}>
                    Explore Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </button>
                <button onClick={() => scrollToSection('how-it-works')}>
                  <Button size="lg" variant="outline" className="w-full" style={{
                    borderColor: 'rgba(30, 64, 175, 0.2)',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)'
                  }}>
                    Learn More
                  </Button>
                </button>
              </div>
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center text-muted-foreground hover:text-primary transition-all gap-2 mt-8 mx-auto md:mx-0"
              >
                <span>Scroll to discover</span>
                <ArrowDown className="animate-bounce" />
              </button>
            </div>
            <div className="relative">
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgb(30, 64, 175), rgb(255, 107, 53))',
                opacity: 0.7,
                filter: 'blur(16px)'
              }}></div>
              <div style={{
                position: 'relative',
                height: '400px',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8), rgba(248, 250, 252, 0.5))',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(226, 232, 240, 0.2)'
              }}>
                {/* Browser bar */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  right: '1rem',
                  height: '2rem',
                  borderRadius: '0.375rem',
                  backgroundColor: 'rgba(248, 250, 252, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '1rem',
                  gap: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#eab308' }}></div>
                  <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                  <div style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: 'rgb(100, 116, 139)' }}>ServiPal</div>
                </div>
                
                {/* App content */}
                <div style={{
                  position: 'absolute',
                  top: '4rem',
                  left: '1rem',
                  right: '1rem',
                  bottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  padding: '1rem',
                  border: '1px solid rgba(226, 232, 240, 0.3)'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                    {/* Header with connecting people */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem',
                      background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(255, 107, 53, 0.1))',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(226, 232, 240, 0.2)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users className="h-5 w-5 text-primary" />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Connecting People</span>
                      </div>
                      <div style={{ display: 'flex', marginLeft: '-0.5rem' }}>
                        <div style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #60a5fa, #2563eb)',
                          border: '2px solid white'
                        }}></div>
                        <div style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                          border: '2px solid white',
                          marginLeft: '-0.5rem'
                        }}></div>
                        <div style={{
                          width: '1.5rem',
                          height: '1.5rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
                          border: '2px solid white',
                          marginLeft: '-0.5rem'
                        }}></div>
                      </div>
                    </div>
                    
                    {/* Service connections */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', flex: 1 }}>
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1))',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Package className="h-4 w-4 text-blue-600" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Delivery</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock className="h-3 w-3 text-blue-500" />
                          <span style={{ fontSize: '0.75rem', color: 'rgb(100, 116, 139)' }}>15 min</span>
                        </div>
                      </div>
                      
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.1))',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(249, 115, 22, 0.2)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Utensils className="h-4 w-4 text-orange-600" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Food</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Star className="h-3 w-3 text-orange-500 fill-current" />
                          <span style={{ fontSize: '0.75rem', color: 'rgb(100, 116, 139)' }}>4.9</span>
                        </div>
                      </div>
                      
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(74, 222, 128, 0.1))',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <WashingMachine className="h-4 w-4 text-green-600" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Laundry</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <MessageCircle className="h-3 w-3 text-green-500" />
                          <span style={{ fontSize: '0.75rem', color: 'rgb(100, 116, 139)' }}>Chat</span>
                        </div>
                      </div>
                      
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(168, 85, 247, 0.1))',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(147, 51, 234, 0.2)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <Handshake className="h-4 w-4 text-purple-600" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>P2P</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Users className="h-3 w-3 text-purple-500" />
                          <span style={{ fontSize: '0.75rem', color: 'rgb(100, 116, 139)' }}>Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(30, 64, 175, 0.05))'
      }}>
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, rgb(30, 64, 175), rgb(255, 107, 53))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'rgb(30, 64, 175)' // Fallback
            }}>Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring together essential services on one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} style={{
                position: 'relative',
                backgroundColor: 'rgba(248, 250, 252, 0.6)',
                backdropFilter: 'blur(8px)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(226, 232, 240, 0.3)'
              }} className="group">
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), transparent, rgba(30, 64, 175, 0.05))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="group-hover:opacity-100"></div>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(30, 64, 175, 0.1))',
                    padding: '0.75rem',
                    borderRadius: '50%',
                    width: 'fit-content',
                    marginBottom: '1rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(226, 232, 240, 0.2)'
                  }}>
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-brand-blue">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, fast and efficient - here's how our platform brings services to your doorstep
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {/* Service 1 - Item Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/30 to-brand-orange/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-background flex items-center justify-center">
                      <Package className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Fast Package Delivery</h3>
                <p className="text-muted-foreground mb-6">
                  Get your packages delivered quickly and securely. From documents to large parcels, we handle it all with care.
                </p>
                <ul className="space-y-3">
                  {["Real-time tracking", "Secure handling", "Flexible delivery options", "Proof of delivery"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 2 - Food Ordering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Delicious Food Delivery</h3>
                <p className="text-muted-foreground mb-6">
                  Order from your favorite local restaurants and enjoy hot, fresh meals delivered to your doorstep.
                </p>
                <ul className="space-y-3">
                  {["Wide restaurant selection", "Special offers and discounts", "Contactless delivery", "Easy reordering"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-background/80 to-background flex items-center justify-center">
                      <Utensils className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 3 - Laundry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/30 to-primary/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-background/80 to-background flex items-center justify-center">
                      <WashingMachine className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Convenient Laundry Service</h3>
                <p className="text-muted-foreground mb-6">
                  Let us handle your laundry with professional care. Schedule pickups and deliveries that fit your busy schedule.
                </p>
                <ul className="space-y-3">
                  {["Professional cleaning", "Fabric-specific care", "Scheduled pickups", "Fast turnaround"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Service 4 - P2P Marketplace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">P2P Marketplace</h3>
                <p className="text-muted-foreground mb-6">
                  Connect directly with local service providers and sellers in a secure peer-to-peer marketplace.
                </p>
                <ul className="space-y-3">
                  {["Verified providers", "Secure transactions", "Rating system", "Direct communication"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1 shadow-sm border border-border/20">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/30 to-brand-blue/30 opacity-70 blur-xl rounded-xl"></div>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/30">
                    <div className="absolute inset-0 bg-gradient-to-bl from-green-500/20 via-background/80 to-background flex items-center justify-center">
                      <Handshake className="w-24 h-24 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from people who use our services every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The food delivery is always on time and the food arrives hot. I use this app almost daily!",
                author: "Sarah Johnson",
                role: "Regular Customer"
              },
              {
                quote: "Their laundry service saved me so much time. The clothes come back perfectly clean and neatly folded.",
                author: "Michael Chen",
                role: "Premium Subscriber"
              },
              {
                quote: "I've found amazing local service providers through the marketplace. It's like having a trusted network at your fingertips.",
                author: "Jessica Miller",
                role: "Business Owner"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="relative bg-background/60 backdrop-blur-sm rounded-lg p-8 shadow-lg group border border-border/30">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-4xl font-serif text-primary">"</div>
                  <p className="my-4 italic">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Download Buttons */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 aspect-square rounded-full bg-gradient-to-br from-brand-orange/10 to-transparent blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 aspect-square rounded-full bg-gradient-to-tr from-brand-blue/10 to-transparent blur-3xl -z-10"></div>
        
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange">Ready to Simplify Your Life?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are making their lives easier with our multi-service platform.
            </p>
            
            {/* Download buttons for mobile apps with icons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto flex items-center gap-2">
                <PlayCircle size={20} />
                Download for Android
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-border/30">
                <Apple size={20} />
                Download for iOS
              </Button>
            </div>
            
            <div className="mt-12 p-8 bg-background/60 backdrop-blur-sm rounded-xl shadow-lg relative group border border-border/30">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="flex-grow bg-background/50 border-border/30"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 border-t border-border/30">
        <div className="max-w-[75vw] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">ServiPal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Item Delivery</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Food Ordering</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Laundry Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">P2P Marketplace</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Safety</a></li>
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
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2025 ServiPal. All rights reserved.</p>
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
