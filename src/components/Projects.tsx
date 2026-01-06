import pro1 from "@/Assets/healpeer.png"
import pro2 from "@/Assets/Friendship.png"
import pro3 from "@/Assets/studyhub.png"
import pro4 from "@/Assets/showtracr.png"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
const projects = [
  {
   
    title: "Mental health support platform",
    img:pro1,
    description:
      "Built an AI-enabled MERN stack mental health platform with peer support, blogs, payments, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "gemini AI"],
    github: "https://github.com/thilax21/FinalProject-Healpeer.git",
    live: "https://final-project-healpeer.vercel.app/",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    title: "Friendship calculator app",
    img:pro2,
    description:
      "A fun friendship calculator app that lets users check compatibility, generate friendship scores, and share results with friends.",
    tech: ["JavaScript"],
    github: "https://github.com/thilax21/friendship-calc",
    live: "https://thilax21.github.io/friendship-calc/",
    gradient: "from-cyan-500 to-pink-500",
  },
  {
    title: "Student management app",
    img:pro3,
    description:
      "A React app to add and display students dynamically using state and components.",
    tech: ["React"],
    github: "https://github.com/thilax21/StuEdu.git",
    live: "https://stu-edu.vercel.app/",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Movie Shows App",
    img:pro4,
    description:
      "A simple JavaScript app that shows movies and their descriptions dynamically on the page.",
    tech: ["JavaScript"],
    github: "https://github.com/thilax21/ShowTrackr-.git",
    live: "https://thilax21.github.io/ShowTrackr-/",
    gradient: "from-purple-500 to-blue-500",
  }
]

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-pink-400 uppercase tracking-wider mb-4 block">
            Recent work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-background" />
              </div>

              <div className="relative glass-card p-6 h-full flex flex-col group-hover:border-transparent transition-colors duration-500">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-purple-400" size={32} />
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="relative h-40 w-full overflow-hidden rounded-xl mb-4">
  <img
    src={project.img}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
                {/* Content */}
                <h3 className="text-xl font-outfit font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/thilax21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
