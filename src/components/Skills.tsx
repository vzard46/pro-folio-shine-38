import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    {
      name: "AutoCAD",
      category: "Design Software",
      level: "Advanced"
    },
    {
      name: "Figma", 
      category: "UI/UX Design",
      level: "Expert"
    },
    {
      name: "No Code",
      category: "Development",
      level: "Intermediate"
    },
    {
      name: "Photoshop",
      category: "Graphics",
      level: "Advanced"
    },
    {
      name: "Power BI",
      category: "Analytics",
      level: "Intermediate"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="group section-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-all duration-300">
                  {skill.name}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 mb-4 transition-colors duration-300">
                  {skill.category}
                </p>
                <Badge 
                  variant="outline" 
                  className="bg-primary/10 text-primary border-primary/30 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/50 transition-all duration-300"
                >
                  {skill.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;