import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
const Certifications = () => {
  const certifications = [{
    title: "AutoCAD Certification",
    issuer: "Autodesk",
    date: "2023",
    description: "Professional certification in AutoCAD drafting and design",
    skills: ["2D Drafting", "3D Modeling", "Technical Drawing"]
  }, {
    title: "Basics in Python",
    issuer: "Programming Institute",
    date: "2023",
    description: "Fundamental concepts in Python programming language",
    skills: ["Python Syntax", "Data Structures", "Basic Algorithms"]
  }, {
    title: "Power BI Certification",
    issuer: "Microsoft",
    date: "2022",
    description: "Data visualization and business intelligence with Power BI",
    skills: ["Data Analysis", "Dashboard Creation", "Business Intelligence"]
  }];
  return <section className="py-20 bg-gray-50 relative overflow-hidden" id="certifications">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Certifications</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => <Card key={cert.title} className="group section-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">{cert.title}</h3>
                    <p className="text-orange-500 group-hover:text-orange-200 font-medium transition-colors duration-300">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  
                  
                </div>
                
                <p className="text-gray-700 group-hover:text-gray-100 mb-4 text-sm leading-relaxed transition-colors duration-300">{cert.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => <Badge key={skill} variant="outline" className="text-xs bg-orange-100 text-orange-700 border-orange-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/50 transition-all duration-300">
                        {skill}
                      </Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Certifications;