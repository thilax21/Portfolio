import profile from "@/Assets/profile1.jpg"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, text: "Clean Code", color: "text-purple-400" },
    { icon: Palette, text: "Modern Design", color: "text-cyan-400" },
    { icon: Rocket, text: "Fast Delivery", color: "text-pink-400" },
    { icon: Sparkles, text: "Creative Solutions", color: "text-purple-400" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-purple-400 uppercase tracking-wider mb-4 block">
            Get to know me
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 p-[2px]">
                <div className="w-full h-full rounded-3xl bg-background" />
              </div>
              
              {/* Profile placeholder */}
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <img
  src={profile}
  alt="Profile"
  className="w-full h-full object-cover rounded-2xl"
/>

              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Code2 className="text-purple-400" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Sparkles className="text-cyan-400" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate MERN Stack Developer with a love for creating beautiful,
              functional web applications. With expertise in MongoDB, Express.js, React,
              and Node.js, I craft seamless digital experiences that blend form and function.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey in web development started with curiosity and evolved into a
              dedication to writing clean, efficient code. I believe in continuous learning
              and staying ahead of the curve with modern technologies and best practices.
            </p>

            {/* Gradient divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, text, color }, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-3 hover:border-white/20 transition-colors group"
                >
                  <Icon className={`${color} group-hover:scale-110 transition-transform`} size={20} />
                  <span className="text-sm font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
