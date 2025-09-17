import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bus, Train, Clock, Navigation } from "lucide-react";

// Mock data for demonstration
const mockRoutes = [
  { id: 1, name: "Blue Line", type: "bus", color: "transit-blue", stops: 12, status: "On Time" },
  { id: 2, name: "Green Route", type: "bus", color: "transit-green", stops: 8, status: "2 min delay" },
  { id: 3, name: "Orange Express", type: "bus", color: "transit-orange", stops: 15, status: "On Time" },
  { id: 4, name: "Metro Red", type: "train", color: "transit-red", stops: 6, status: "On Time" },
];

const mockVehicles = [
  { id: 1, route: "Blue Line", position: { lat: 40.7128, lng: -74.0060 }, occupancy: "Low", nextStop: "City Center" },
  { id: 2, route: "Green Route", position: { lat: 40.7589, lng: -73.9851 }, occupancy: "Medium", nextStop: "Park Ave" },
  { id: 3, route: "Orange Express", position: { lat: 40.7614, lng: -73.9776 }, occupancy: "High", nextStop: "Transit Hub" },
];

const TransitMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Transit Map</h2>
          <p className="text-xl text-muted-foreground">
            Track all vehicles in real-time across your city
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Route List */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Navigation className="mr-2 h-4 w-4" />
                  Active Routes
                </h3>
                <div className="space-y-3">
                  {mockRoutes.map((route) => (
                    <div
                      key={route.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedRoute === route.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {route.type === 'bus' ? (
                            <Bus className="h-4 w-4 text-primary" />
                          ) : (
                            <Train className="h-4 w-4 text-primary" />
                          )}
                          <span className="font-medium text-sm">{route.name}</span>
                        </div>
                        <div className={`w-3 h-3 rounded-full bg-${route.color}`}></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{route.stops} stops</span>
                        <Badge variant={route.status === "On Time" ? "default" : "destructive"} className="text-xs">
                          {route.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Vehicles */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Live Vehicles
                </h3>
                <div className="space-y-3">
                  {mockVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{vehicle.route}</span>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          Next: {vehicle.nextStop}
                        </div>
                        <div>Occupancy: {vehicle.occupancy}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <div 
                  ref={mapContainer} 
                  className="w-full h-full rounded-lg bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center relative overflow-hidden"
                >
                  {/* Map Placeholder with Transit Routes Visualization */}
                  <div className="absolute inset-0">
                    {/* Route Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="blueRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'hsl(var(--transit-blue))', stopOpacity: 0.8}} />
                          <stop offset="100%" style={{stopColor: 'hsl(var(--transit-blue))', stopOpacity: 0.4}} />
                        </linearGradient>
                        <linearGradient id="greenRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'hsl(var(--transit-green))', stopOpacity: 0.8}} />
                          <stop offset="100%" style={{stopColor: 'hsl(var(--transit-green))', stopOpacity: 0.4}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Blue Line */}
                      <path 
                        d="M50 50 Q200 100 350 150 T600 200" 
                        stroke="url(#blueRoute)" 
                        strokeWidth="6" 
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      
                      {/* Green Route */}
                      <path 
                        d="M100 400 Q300 350 500 300 T800 250" 
                        stroke="url(#greenRoute)" 
                        strokeWidth="6" 
                        fill="none"
                        className="drop-shadow-sm"
                      />
                    </svg>

                    {/* Bus Icons */}
                    <div className="absolute top-20 left-32 pulse-transit">
                      <div className="bg-primary text-white p-2 rounded-full shadow-transit">
                        <Bus className="h-4 w-4" />
                      </div>
                    </div>
                    
                    <div className="absolute top-60 right-40 pulse-transit animation-delay-1000">
                      <div className="bg-transit-green text-white p-2 rounded-full shadow-transit">
                        <Bus className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Stop Markers */}
                    <div className="absolute top-16 left-20">
                      <div className="bg-white border-2 border-primary p-1 rounded-full shadow-card">
                        <MapPin className="h-3 w-3 text-primary" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-40 right-60">
                      <div className="bg-white border-2 border-transit-green p-1 rounded-full shadow-card">
                        <MapPin className="h-3 w-3 text-transit-green" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center z-10">
                    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-card">
                      <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
                      <p className="text-muted-foreground mb-4">
                        Full map integration with Mapbox will be added for production
                      </p>
                      <Button>Enable Full Map</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransitMap;