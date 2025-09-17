import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Bus, Train, Star } from "lucide-react";

const scheduleData = [
  {
    id: 1,
    route: "Blue Line",
    type: "bus",
    destination: "City Center",
    arrivalTime: "2 min",
    status: "On Time",
    occupancy: "Low",
    isFavorite: true
  },
  {
    id: 2,
    route: "Green Route",
    type: "bus", 
    destination: "North Park",
    arrivalTime: "5 min",
    status: "Delayed",
    occupancy: "Medium",
    isFavorite: false
  },
  {
    id: 3,
    route: "Metro Red",
    type: "train",
    destination: "Downtown",
    arrivalTime: "8 min",
    status: "On Time",
    occupancy: "High",
    isFavorite: true
  },
  {
    id: 4,
    route: "Orange Express",
    type: "bus",
    destination: "Airport",
    arrivalTime: "12 min", 
    status: "On Time",
    occupancy: "Low",
    isFavorite: false
  },
  {
    id: 5,
    route: "Blue Line",
    type: "bus",
    destination: "City Center", 
    arrivalTime: "18 min",
    status: "On Time",
    occupancy: "Medium",
    isFavorite: true
  }
];

const LiveSchedule = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Live Arrival Times</h2>
          <p className="text-xl text-muted-foreground">
            Real-time updates for your nearest transit stops
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Main Street Transit Hub</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Star className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {item.type === 'bus' ? (
                          <Bus className="h-5 w-5 text-primary" />
                        ) : (
                          <Train className="h-5 w-5 text-primary" />
                        )}
                        <div>
                          <div className="font-semibold text-sm">{item.route}</div>
                          <div className="text-xs text-muted-foreground">{item.destination}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{item.arrivalTime}</div>
                        <div className="text-xs text-muted-foreground">arrival</div>
                      </div>

                      <div className="flex flex-col items-center space-y-1">
                        <Badge 
                          variant={item.status === "On Time" ? "default" : "destructive"}
                          className="text-xs"
                        >
                          {item.status}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            item.occupancy === 'Low' ? 'text-transit-green' :
                            item.occupancy === 'Medium' ? 'text-accent' : 'text-destructive'
                          }`}
                        >
                          {item.occupancy}
                        </Badge>
                      </div>

                      <Button variant="ghost" size="sm">
                        {item.isFavorite ? (
                          <Star className="h-4 w-4 fill-current text-accent" />
                        ) : (
                          <Star className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  </div>
                  <span>Updates every 30 seconds</span>
                </div>
                <Button variant="link" className="text-xs p-0 h-auto">
                  View all stops nearby
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LiveSchedule;