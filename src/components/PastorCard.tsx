
interface PastorCardProps {
  name: string;
  title: string;
  church: string;
  imageSrc: string;
}

const PastorCard = ({ name, title, church, imageSrc }: PastorCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-800 mb-1">{name}</h3>
        <p className="text-gold-600 font-medium mb-2">{title}</p>
        <p className="text-gray-600">{church}</p>
      </div>
    </div>
  );
};

export default PastorCard;
