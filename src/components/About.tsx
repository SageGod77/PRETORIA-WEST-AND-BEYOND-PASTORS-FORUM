import { Cross, Users, Heart } from "lucide-react";
import { Button } from "./ui/button";

const AboutWithConstitution = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 md:mr-[900px]">About Our Forum</h2>
          <div className="w-20 h-1 md:mr-[1200px] bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Pretoria West and Beyond Pastors Forum was established to unite spiritual leaders across denominations, 
              creating a collaborative network focused on strengthening our community through faith, service, and cooperation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We provide support, resources, and fellowship opportunities for pastors, promoting unity in Christ while respecting 
              our diverse traditions and approaches to ministry.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
            <video
  src="/video/vid-1.mp4"
  className="w-full h-auto object-cover"
  controls
  autoPlay
  loop
  muted
/>
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold-400 rounded-lg z-[-1]"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-lg z-[-1]"></div>
          </div>
        </div>
        <br></br>
        {/* Constitution Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">Pretoria West and Beyond Pastors Forum Constitution</h3>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>1. Definition of the Entity:</strong> The "Forum" refers to PRETORIA WEST AND BEYOND PASTORS FORUM. "Members" are Pastors and their churches, duly approved as members of the Forum by its leadership.</p>
            <p><strong>2. The Name of the Forum:</strong> The Forum is officially named PRETORIA WEST AND BEYOND PASTORS FORUM, shortened as PTAWPF.</p>
            <p><strong>3. Preamble:</strong> The Pretoria West Pastors Forum unites pastors in the City of Tshwane, glorifying God through unity, ministry, and service.</p>
            <p><strong>4. Physical and Postal Addresses:</strong> Postal Address: P.O. Box 19286, Pretoria West, 0117. Physical Address: c/o VEK Jubal Congregation, Kwaggasrand, Pretoria, 0183.</p>
            <p><strong>5. Motto:</strong> UNITY, PEACE, JUSTICE, AND CARE</p>
            <p><strong>6. Vision:</strong> To unite the Body of Christ (churches) in the City of Tshwane and beyond into one body.</p>
            <p><strong>7. Mission:</strong> Connecting and uniting God’s people through prayer, worship, love, and care.</p>
            <p><strong>8. Purpose:</strong> To support and encourage church leaders in upholding biblical standards and enhancing effectiveness in ministry.</p>
            <p><strong>9. Objectives:</strong> Promote unity, train pastors, advise officials, and improve socio-economic conditions.</p>
            <p><strong>10. Powers:</strong> Promote fellowship, educate members, raise funds, and manage finances for the Forum.</p>
            <p><strong>11. Faith Formation:</strong> Introduce people to Jesus Christ and nurture their faith across all ages.</p>
            <p><strong>12. Servant Leadership:</strong> Identify, recruit, and train leaders to be servants in the Kingdom of God.</p>
            <p><strong>13. Tenets of Faith:</strong> Beliefs in God, the Bible, Christ, Salvation, Tithes, Second Coming, and Judgment.</p>
            <p><strong>14. Membership:</strong> Open to all churches, with registration fees and annual renewals.</p>
            <p><strong>15. Executive Committee:</strong> Composed of seven members responsible for governance and program implementation.</p>
            <p><strong>16. Finance:</strong> Funds used solely for the Forum's activities with authorization requirements.</p>
            <p><strong>17. Meetings:</strong> Annual General Meeting held in November each year, with special meetings as needed.</p>
            <p><strong>18. Affiliation:</strong> Affiliated with organizations like the SACC and local government structures.</p>
            <p><strong>19. Amendment of the Constitution:</strong> Changes require a two-thirds vote and proper notification.</p>
            <p><strong>20. Dissolution:</strong> Assets will be donated to similar organizations if dissolved.</p>
            <p><strong>21. Autonomy:</strong> The Forum serves as an umbrella body while affiliated churches remain independent.</p>
            <p><strong>22. Constitution Management:</strong> Adoption, implementation, and changes are the responsibility of the Executive Committee.</p>
            <p><strong>23. Adoption:</strong> This constitution is adopted and effective upon approval by two-thirds of members present and voting.</p>
          </div>
          <a href="/doc/Pretoria West Pastors Forum Constitution 2022.pdf" download>
          <Button className="mt-20 h-12 w-52 bg-blue-700">Download Full Constitution</Button>
        </a>
        </div>
      </div>
    </section>
  );
};

export default AboutWithConstitution;
