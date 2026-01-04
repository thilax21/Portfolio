// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Globe, Server, Palette, Smartphone, Zap, Shield } from "lucide-react";

// const services = [
//   {
//     icon: Globe,
//     title: "Web Development",
//     description:
//       "Building responsive, modern web applications using React, Next.js, and cutting-edge technologies.",
//     gradient: "from-purple-500 to-purple-600",
//   },
//   {
//     icon: Server,
//     title: "Backend APIs",
//     description:
//       "Creating robust RESTful and GraphQL APIs with Node.js, Express, and MongoDB for seamless data flow.",
//     gradient: "from-cyan-500 to-cyan-600",
//   },
//   {
//     icon: Palette,
//     title: "UI/UX Design",
//     description:
//       "Designing intuitive, beautiful interfaces with a focus on user experience and accessibility.",
//     gradient: "from-pink-500 to-pink-600",
//   },
//   {
//     icon: Smartphone,
//     title: "Responsive Design",
//     description:
//       "Ensuring your application looks and works perfectly on all devices and screen sizes.",
//     gradient: "from-purple-500 to-cyan-500",
//   },
//   {
//     icon: Zap,
//     title: "Performance Optimization",
//     description:
//       "Optimizing web applications for speed, SEO, and best practices to deliver fast experiences.",
//     gradient: "from-cyan-500 to-pink-500",
//   },
//   {
//     icon: Shield,
//     title: "Database Design",
//     description:
//       "Designing efficient, scalable database schemas with MongoDB and PostgreSQL for data integrity.",
//     gradient: "from-pink-500 to-purple-500",
//   },
// ];

// const Services = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="services" className="py-24 relative" ref={ref}>
//       {/* Background accents */}
//       <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm text-cyan-400 uppercase tracking-wider mb-4 block">
//             What I offer
//           </span>
//           <h2 className="section-title">
//             My <span className="gradient-text">Services</span>
//           </h2>
//           <p className="section-subtitle mx-auto mt-4">
//             Comprehensive web development solutions tailored to your needs
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="glass-card p-8 h-full hover:border-white/20 transition-all duration-500 relative overflow-hidden">
//                 {/* Hover gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

//                 {/* Icon */}
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} p-[1px] mb-6`}>
//                   <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
//                     <service.icon className="text-foreground group-hover:text-white transition-colors" size={24} />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-outfit font-semibold mb-3 group-hover:gradient-text transition-all">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
