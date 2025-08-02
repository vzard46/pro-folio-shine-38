import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "AutoCAD", level: 90 },
    { name: "Figma", level: 95 },
    { name: "No Code", level: 85 },
    { name: "Photoshop", level: 88 },
    { name: "Power BI", level: 75 }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="section-card animate-scale-in">
            <CardContent className="p-8">
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-200"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;