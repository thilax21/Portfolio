// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { 
//   Database, 
//   Server, 
//   Code2, 
//   Palette, 
//   GitBranch, 
//   Container,
//   FileCode,
//   Layers,
//   Zap,
//   Globe,
//   Terminal,
//   Figma
// } from "lucide-react";

// const skills = [
//   { name: "React.js", icon: Code2, category: "Frontend", color: "from-cyan-400 to-cyan-600" },
//   // { name: "Next.js", icon: Layers, category: "Frontend", color: "from-white/80 to-white/40" },
//   // { name: "TypeScript", icon: FileCode, category: "Frontend", color: "from-blue-400 to-blue-600" },
//   { name: "Tailwind CSS", icon: Palette, category: "Frontend", color: "from-cyan-400 to-teal-500" },
//   { name: "Node.js", icon: Server, category: "Backend", color: "from-green-400 to-green-600" },
//   { name: "Express.js", icon: Zap, category: "Backend", color: "from-yellow-400 to-orange-500" },
//   { name: "MongoDB", icon: Database, category: "Backend", color: "from-green-500 to-emerald-600" },
//   { name: "REST APIs", icon: Globe, category: "Backend", color: "from-purple-400 to-purple-600" },
//   { name: "Git", icon: GitBranch, category: "Tools", color: "from-orange-400 to-red-500" },
//   { name: "Docker", icon: Container, category: "Tools", color: "from-blue-400 to-blue-600" },
//   { name: "Figma", icon: Figma, category: "Tools", color: "from-pink-400 to-purple-500" },
//   { name: "Linux", icon: Terminal, category: "Tools", color: "from-yellow-400 to-amber-500" },
// ];

// const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
//   const [rotateX, setRotateX] = useState(0);
//   const [rotateY, setRotateY] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = e.currentTarget;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateXValue = ((y - centerY) / centerY) * -15;
//     const rotateYValue = ((x - centerX) / centerX) * 15;
    
//     setRotateX(rotateXValue);
//     setRotateY(rotateYValue);
//   };

//   const handleMouseLeave = () => {
//     setRotateX(0);
//     setRotateY(0);
//     setIsHovered(false);
//   };

//   const Icon = skill.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50, rotateX: -15 }}
//       whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.05 }}
//       className="perspective-1000"
//     >
//       <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={handleMouseLeave}
//         animate={{
//           rotateX,
//           rotateY,
//           scale: isHovered ? 1.05 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="relative group cursor-pointer"
//         style={{ transformStyle: "preserve-3d" }}
//       >
//         {/* Glow effect */}
//         <div 
//           className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
//         />
        
//         {/* Card */}
//         <div className="relative glass-card p-6 flex flex-col items-center gap-4 group-hover:border-white/30 transition-all duration-300">
//           {/* Floating icon */}
//           <motion.div
//             animate={{ y: isHovered ? -5 : 0 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg`}
//           >
//             <div className="w-full h-full rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
//               <Icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors duration-300" />
//             </div>
//           </motion.div>

//           {/* Skill name */}
//           <h3 className="font-outfit font-semibold text-lg text-center">
//             {skill.name}
//           </h3>

//           {/* Category badge */}
//           <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 text-muted-foreground`}>
//             {skill.category}
//           </span>

//           {/* Shine effect */}
//           <div 
//             className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//             style={{
//               background: isHovered 
//                 ? `radial-gradient(circle at ${50 + rotateY * 2}% ${50 + rotateX * 2}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
//                 : 'none'
//             }}
//           />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
//       {/* Background accents */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm text-cyan-400 uppercase tracking-wider mb-4 block">
//             What I work with
//           </span>
//           <h2 className="section-title">
//             My <span className="gradient-text">Skills</span>
//           </h2>
//           <p className="section-subtitle mx-auto mt-4">
//             A comprehensive toolkit for building modern, scalable web applications
//           </p>
//         </motion.div>

//         {/* 3D Cards Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <SkillCard key={skill.name} skill={skill} index={index} />
//           ))}
//         </div>

//         {/* MERN Stack Highlight */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="mt-20"
//         >
//           <div className="glass-card p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
//             {/* Gradient background */}
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10" />
            
//             <div className="relative z-10">
//               <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
//                 <span className="gradient-text">MERN Stack</span> Specialist
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 Building end-to-end web applications with MongoDB, Express.js, React, and Node.js
//               </p>
              
//               {/* MERN Icons */}
//               <div className="flex justify-center gap-8">
//                 {[
//                   { letter: "M", color: "from-green-400 to-green-600", name: "MongoDB" },
//                   { letter: "E", color: "from-gray-400 to-gray-600", name: "Express" },
//                   { letter: "R", color: "from-cyan-400 to-cyan-600", name: "React" },
//                   { letter: "N", color: "from-green-500 to-lime-500", name: "Node.js" },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={item.letter}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     className="flex flex-col items-center gap-2"
//                   >
//                     <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-outfit font-bold text-2xl shadow-lg`}>
//                       {item.letter}
//                     </div>
//                     <span className="text-xs text-muted-foreground">{item.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { useState } from "react";
import { 
  Database, 
  Server, 
  Code2, 
  Palette, 
  GitBranch, 
  Container,
  Zap,
  Globe,
  Terminal,
  Figma,
  Cloud,
  LucideIcon
} from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  category: string;
  color: string;
  level?: string;
}

const skills: Skill[] = [
  { name: "React.js", icon: Code2, category: "Frontend", color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend", color: "from-cyan-400 to-teal-500" },
  { name: "Python", icon: Terminal, category: "Backend", color: "from-yellow-400 to-blue-500", level: "Basics" },
  { name: "Node.js", icon: Server, category: "Backend", color: "from-green-400 to-green-600" },
  { name: "Express.js", icon: Zap, category: "Backend", color: "from-yellow-400 to-orange-500" },
  { name: "MongoDB", icon: Database, category: "Backend", color: "from-green-500 to-emerald-600" },
  { name: "REST APIs", icon: Globe, category: "Backend", color: "from-purple-400 to-purple-600" },
  { name: "Git", icon: GitBranch, category: "Tools", color: "from-orange-400 to-red-500" },
  { name: "GitHub", icon: GitBranch, category: "Tools", color: "from-gray-400 to-gray-600" },
  { name: "AWS", icon: Cloud, category: "Cloud", color: "from-orange-400 to-yellow-500", level: "Beginner" },
  { name: "Figma", icon: Figma, category: "Tools", color: "from-pink-400 to-purple-500" },
  { name: "Linux", icon: Terminal, category: "Tools", color: "from-yellow-400 to-amber-500" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      className="perspective-1000 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group cursor-pointer transition-transform duration-300 ${
          isHovered ? "scale-105" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow effect */}
        <div 
          className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
        />
        
        {/* Card */}
        <div className="relative glass-card p-6 flex flex-col items-center gap-4 group-hover:border-foreground/30 transition-all duration-300">
          {/* Floating icon */}
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg transition-transform duration-300 ${
              isHovered ? "-translate-y-1" : ""
            }`}
          >
            <div className="w-full h-full rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Icon className="w-8 h-8 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
          </div>

          {/* Skill name */}
          <h3 className="font-outfit font-semibold text-lg text-center">
            {skill.name}
          </h3>

          {/* Category badge */}
          <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} bg-opacity-20 text-muted-foreground`}>
            {skill.category}
          </span>

          {/* Level badge if exists */}
          {skill.level && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {skill.level}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-glow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-glow/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm text-primary uppercase tracking-wider mb-4 block">
            What I work with
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <div className="mt-20 animate-fade-in animation-delay-800">
          <div className="glass-card p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-glow/10 via-cyan-glow/10 to-pink-glow/10" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
                <span className="gradient-text">MERN Stack</span> Specialist
              </h3>
              <p className="text-muted-foreground mb-6">
                Building end-to-end web applications with MongoDB, Express.js, React, and Node.js
              </p>
              
              {/* MERN Icons */}
              <div className="flex justify-center gap-8">
                {[
                  { letter: "M", color: "from-green-400 to-green-600", name: "MongoDB" },
                  { letter: "E", color: "from-gray-400 to-gray-600", name: "Express" },
                  { letter: "R", color: "from-cyan-400 to-cyan-600", name: "React" },
                  { letter: "N", color: "from-green-500 to-lime-500", name: "Node.js" },
                ].map((item, index) => (
                  <div
                    key={item.letter}
                    className="flex flex-col items-center gap-2 animate-scale-in hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-primary-foreground font-outfit font-bold text-2xl shadow-lg`}>
                      {item.letter}
                    </div>
                    <span className="text-xs text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;