
import EventCard from "./EventCard";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Pastors Prayer Breakfast",
      date: "June 15, 2024",
      time: "7:30 AM - 9:30 AM",
      location: "Grace Community Church, Pretoria West",
      description: "Join us for a time of fellowship, prayer, and encouragement as we share breakfast and lift up our community in prayer."
    },
    {
      id: 2,
      title: "Leadership Conference 2024",
      date: "July 22-24, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Hope Cathedral Conference Center",
      description: "A three-day intensive conference focused on equipping pastors with leadership skills and spiritual insights for effective ministry."
    },
    {
      id: 3,
      title: "Community Outreach Program",
      date: "August 5, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Pretoria West Community Center",
      description: "A collaborative effort to serve our community through food distribution, health screenings, and prayer ministry."
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Upcoming Events</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay connected with our community through these upcoming events and gatherings designed to strengthen our ministry and impact.
          </p>
        </div>
        
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
