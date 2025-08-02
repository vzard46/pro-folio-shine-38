import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    "AutoCAD",
    "Figma", 
    "No Code",
    "Photoshop",
    "Power BI"
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
              key={skill}
              className="group section-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-fade-in-up bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-accent/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                  {skill}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;