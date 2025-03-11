
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({ title, date, time, location, description }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
            <div className="flex items-center text-gray-600 mb-1">
              <Calendar size={16} className="mr-2 text-gold-500" />
              <span>{date} • {time}</span>
            </div>
            <p className="text-gray-600 mb-4">{location}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="flex justify-end">
          <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
            RSVP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
