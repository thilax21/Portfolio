// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message sent!",
//       description: "Thanks for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const contactInfo = [
//     { icon: Mail, label: "Email", value: "thilakshi04@gmail.com" },
//     { icon: MapPin, label: "Location", value: "Periyamavady, Chavakahcheri (Sri Lanka)" },
//     { icon: Phone, label: "Phone", value: "+94 75 809 8759" },
//   ];

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/thilax21", label: "GitHub" },
//     { icon: Linkedin, href: "https://www.linkedin.com/in/thilakshana-satheeskumar-122ba6365/", label: "LinkedIn" }
    
//   ];

//   return (
//     <section id="contact" className="py-24 relative" ref={ref}>
//       {/* Background accents */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm text-pink-400 uppercase tracking-wider mb-4 block">
//             Get in touch
//           </span>
//           <h2 className="section-title">
//             Let's <span className="gradient-text">Connect</span>
//           </h2>
//           <p className="section-subtitle mx-auto mt-4">
//             Have a project in mind? Let's create something amazing together
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-outfit font-semibold mb-6">
//               Contact Information
//             </h3>
//             <p className="text-muted-foreground mb-8">
//               Feel free to reach out through any of these channels. I'm always
//               open to discussing new projects, creative ideas, or opportunities.
//             </p>

//             <div className="space-y-6 mb-10">
//               {contactInfo.map(({ icon: Icon, label, value }) => (
//                 <div key={label} className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
//                     <Icon className="text-purple-400" size={20} />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{label}</p>
//                     <p className="font-medium">{value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div>
//               <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
//               <div className="flex gap-4">
//                 {socialLinks.map(({ icon: Icon, href, label }) => (
//                   <motion.a
//                     key={label}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
//                   >
//                     <Icon size={20} />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <form onSubmit={handleSubmit} className="glass-card p-8">
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Name</label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Email</label>
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Message</label>
//                   <textarea
//                     required
//                     rows={5}
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground resize-none"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full btn-primary flex items-center justify-center gap-2"
//                 >
//                   <Send size={18} />
//                   Send Message
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMailto = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send the email",
      });
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's email client
    window.location.href = `mailto:thilakshi04@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Optional toast
    toast({
      title: "Email client opened",
      description: "Your default email client should open with a pre-filled message.",
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "thilakshi04@gmail.com" },
    { icon: MapPin, label: "Location", value: "Periyamavady, Chavakahcheri (Sri Lanka)" },
    { icon: Phone, label: "Phone", value: "+94 75 809 8759" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/thilax21", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/thilakshana-satheeskumar-122ba6365/", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-pink-400 uppercase tracking-wider mb-4 block">
            Get in touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-outfit font-semibold mb-6">
              Contact Information
            </h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Mailto) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="button"
                onClick={handleMailto}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Email
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
