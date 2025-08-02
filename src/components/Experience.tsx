import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";
const Experience = () => {
  const experiences = [
    {
      title: "Fresher",
      company: "Available for Opportunities",
      location: "Remote/On-site",
      period: "2024 - Present",
      type: ["Full-time", "Internship"],
      description: "Passionate UX/UI designer seeking opportunities to create meaningful digital experiences. Ready to bring fresh perspectives and modern design thinking to innovative projects.",
      responsibilities: ["Creating user-centered design solutions", "Prototyping and wireframing in Figma", "Collaborating with development teams", "Conducting user research and testing"],
      skills: ["UI/UX Design", "Figma", "Prototyping", "User Research"]
    }
  ];
  return <section className="py-20 bg-white relative overflow-hidden" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
         {experiences.map((exp, index) => <Card key={index} className="group section-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-scale-in mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-orange-500 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(Array.isArray(exp.type) ? exp.type : [exp.type]).map((type) => (
                          <Badge key={type} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            {type}
                          </Badge>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Focus Areas</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{resp}</span>
                          </li>)}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                            {skill}
                          </Badge>)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Experience;