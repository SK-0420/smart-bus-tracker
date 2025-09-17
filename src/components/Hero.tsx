import { Button } from "@/components/ui/button";
import { MapPin, Clock, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Live Tracking Active</span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Real-Time Transit
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              For Your City
            </span>
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            Track buses, trains, and routes in real-time. Never miss your ride again with 
            live arrival times and smart notifications.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="shadow-transit">
              <MapPin className="mr-2 h-5 w-5" />
              View Live Map
            </Button>
            <Button variant="outline" size="lg">
              <Smartphone className="mr-2 h-5 w-5" />
              Get Mobile App
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Live Tracking</h3>
            <p className="text-muted-foreground">See exactly where your bus or train is in real-time</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Accurate Arrivals</h3>
            <p className="text-muted-foreground">Get precise arrival times updated every 30 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-transit-green/10">
              <Smartphone className="h-6 w-6 text-transit-green" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Smart Alerts</h3>
            <p className="text-muted-foreground">Receive notifications about delays and service updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;