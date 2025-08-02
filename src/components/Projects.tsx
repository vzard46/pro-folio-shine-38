import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Text to Speech Application",
      description: "An intelligent text-to-speech conversion application with natural voice synthesis",
      technologies: ["Python", "Figma", "AI"]
    },
    {
      title: "Sales Information Dashboard",
      description: "Comprehensive sales analytics and reporting system for business intelligence",
      technologies: ["Power BI", "Excel"]
    },
    {
      title: "Blinklit Dashboard",
      description: "Interactive dashboard for Blinklit platform with real-time data visualization",
      technologies: ["Power BI", "AI", "Excel"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group section-card hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in-up bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:border-primary/50 hover:bg-gradient-to-br hover:from-accent/20 hover:to-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed mb-6 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline" 
                          className="bg-primary/10 text-primary border-primary/30 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/50 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;