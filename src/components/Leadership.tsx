
import PastorCard from "./PastorCard";

const Leadership = () => {
  // Sample pastor data
  const pastors = [
    {
      id: 1,
      name: "Rev. Joseph Mokoena",
      title: "Chairperson",
      church: "Grace Community Church",
      imageSrc: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Rev. Sarah Nkosi",
      title: "Vice Chairperson",
      church: "Hope Cathedral",
      imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Pastor Michael Ndlovu",
      title: "Secretary",
      church: "Faith Fellowship",
      imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Rev. Elizabeth Dlamini",
      title: "Treasurer",
      church: "Abundant Life Ministry",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
    }
  ];

  return (
    <section id="pastors" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Our Leadership</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated pastors who lead our forum with vision, wisdom, and a commitment to building God's kingdom through cooperation and mutual support.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastors.map((pastor) => (
            <PastorCard 
              key={pastor.id}
              name={pastor.name}
              title={pastor.title}
              church={pastor.church}
              imageSrc={pastor.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
