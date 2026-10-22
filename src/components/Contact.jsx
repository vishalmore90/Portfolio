"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail, Github, MapPin, CheckCircle2 } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    // Show typing indicator
    setIsTyping(true);
    
    // Clear existing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    // Hide typing indicator after 1 second of no typing
    const newTimeout = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    setTypingTimeout(newTimeout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "httpsvishal07@gmail.com",
      href: "mailto:httpsvishal07@gmail.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "vishalmore90",
      href: "https://github.com/vishalmore90",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-12 px-4 overflow-hidden">
      {/* Lamp effect for dark mode */}
      <div className="absolute top-0 left-0 right-0 h-[200px] hidden dark:block pointer-events-none">
        <LampContainer className="opacity-50 absolute inset-0">
          <div></div>
        </LampContainer>
      </div>
      <div className="container mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 space-y-4"
                  >
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Message Sent!</p>
                    <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll respond soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                    />

                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                    />

                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                    />

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                    />

                    {/* Typing Indicator */}
                    <AnimatePresence>
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400"
                        >
                          <div className="flex gap-1">
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"
                            />
                          </div>
                          <span>Typing...</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  You can also reach me through these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black border-none text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex gap-4">
                  <Button
                    variant="secondary"
                    asChild
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    <a href="https://drive.google.com/drive/u/0/folders/1AdwZEwRKRFTqQYn-uEYy9pmKlDpdaU3k" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
