// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, GraduationCap } from "lucide-react";

// const experiences = [
//   {
//     type: "work",
//     title: "Senior MERN Developer",
//     company: "Tech Solutions Inc.",
//     period: "2023 - Present",
//     description:
//       "Leading development of scalable web applications using the MERN stack. Mentoring junior developers and implementing best practices.",
//   },
//   {
//     type: "work",
//     title: "Full Stack Developer",
//     company: "Digital Agency Pro",
//     period: "2021 - 2023",
//     description:
//       "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with design teams.",
//   },
//   {
//     type: "education",
//     title: "Bachelor's in Computer Science",
//     company: "Tech University",
//     period: "2017 - 2021",
//     description:
//       "Graduated with honors. Specialized in web technologies and software engineering principles.",
//   },
//   {
//     type: "work",
//     title: "Junior Developer",
//     company: "Startup Hub",
//     period: "2020 - 2021",
//     description:
//       "Built MVPs for various startups. Gained hands-on experience with modern web development tools and methodologies.",
//   },
// ];

// const Experience = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="experience" className="py-24 relative" ref={ref}>
//       {/* Background accent */}
//       <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm text-purple-400 uppercase tracking-wider mb-4 block">
//             My Journey
//           </span>
//           <h2 className="section-title">
//             Experience & <span className="gradient-text">Education</span>
//           </h2>
//         </motion.div>

//         <div className="max-w-3xl mx-auto relative">
//           {/* Timeline line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className={`relative flex flex-col md:flex-row items-start mb-12 ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 -translate-x-1/2 border-4 border-background z-10" />

//               {/* Content */}
//               <div
//                 className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
//                   index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
//                 }`}
//               >
//                 <div className="glass-card p-6 hover:border-white/20 transition-all duration-300 group">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className={`p-2 rounded-lg ${exp.type === "work" ? "bg-purple-500/20" : "bg-cyan-500/20"}`}>
//                       {exp.type === "work" ? (
//                         <Briefcase className="text-purple-400" size={18} />
//                       ) : (
//                         <GraduationCap className="text-cyan-400" size={18} />
//                       )}
//                     </div>
//                     <span className="text-sm text-muted-foreground">
//                       {exp.period}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-lg font-outfit font-semibold mb-1 group-hover:text-purple-400 transition-colors">
//                     {exp.title}
//                   </h3>
//                   <p className="text-cyan-400 text-sm mb-3">{exp.company}</p>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {exp.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
