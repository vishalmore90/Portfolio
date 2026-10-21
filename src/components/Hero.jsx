import { motion } from "framer-motion"
import { Download, Github } from "lucide-react"
import { Button } from "./ui/button"
import { EncryptedText } from "./ui/encrypted-text"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white relative inline-block"
            >
              <EncryptedText
                text="Hi, I am Vishal"
                revealDelayMs={80}
                encryptedClassName="text-gray-400 dark:text-gray-600"
                revealedClassName="text-gray-900 dark:text-white"
              />

              {/* Scribble underline */}
              <svg className="absolute -bottom-2 left-0 w-full max-w-[160px]" viewBox="0 0 200 20">
                <motion.path
                  d="M5 15 Q 50 5, 100 15 T 195 10"
                  stroke="#60A5FA"
                  strokeWidth="4"
                  fill="transparent"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-3xl md:text-5xl text-gray-800 dark:text-white"
            >
              <EncryptedText
                text="and I am an aspiring"
                revealDelayMs={110}
                encryptedClassName="text-gray-400 dark:text-gray-600"
                revealedClassName="text-gray-800 dark:text-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold relative bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent"
            >
              <EncryptedText
                text="DevOps Engineer & Cloud-Native Developer"
                revealDelayMs={140}
                encryptedClassName="text-gray-500 dark:text-gray-500"
                revealedClassName="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white bg-clip-text text-transparent"
              />

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="hidden lg:block absolute -right-32 top-0 rotate-12"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                <p className="text-blue-400 text-2xl">Passionate about Open Source & K8s! ⚙️</p>
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  className="mt-2 text-blue-400 fill-none stroke-current"
                >
                  <path d="M5 5 C 20 30, 40 35, 55 10" strokeWidth="2" strokeLinecap="round" />
                  <path d="M50 15 L 55 10 L 48 8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                size="lg"
                className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
                asChild
              >
                <a
                  href="https://github.com/vishalmore90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  <EncryptedText
                    text="Download Resume"
                    revealDelayMs={15}
                    encryptedClassName="text-white/70 dark:text-black/70"
                    revealedClassName="text-white dark:text-black"
                  />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                asChild
              >
                <a
                  href="https://github.com/vishalmore90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <EncryptedText
                    text="Visit GitHub"
                    revealDelayMs={15}
                    encryptedClassName="text-gray-500 dark:text-gray-500"
                    revealedClassName="text-gray-900 dark:text-gray-300"
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center relative h-[500px] w-full"
          >
            <motion.div className="relative z-10">
                <motion.img
                  src="./me.png"
                  alt="Vishal More - DevOps Engineer"
                  width="400"
                  height="400"
                  className="w-full max-w-xs h-auto rounded-full shadow-2xl bg-white/70 dark:bg-gray-900/50 p-2 object-contain"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
