import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Plus, Sparkles } from 'lucide-react'

export default function CoffeeCounter() {
  const [coffeeCount, setCoffeeCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const [showPlusOne, setShowPlusOne] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Load coffee count from localStorage
    const savedCount = localStorage.getItem('coffeeCount')
    if (savedCount) {
      setCoffeeCount(parseInt(savedCount, 10))
    }
  }, [])

  const createParticles = () => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      angle: (i * 45) * (Math.PI / 180),
      distance: Math.random() * 50 + 30
    }))
    setParticles(newParticles)
    setTimeout(() => setParticles([]), 1000)
  }

  const handleClick = () => {
    const newCount = coffeeCount + 1
    setCoffeeCount(newCount)
    localStorage.setItem('coffeeCount', newCount.toString())
    
    // Trigger animations
    setIsClicked(true)
    setShowPlusOne(true)
    createParticles()
    
    setTimeout(() => setIsClicked(false), 500)
    setTimeout(() => setShowPlusOne(false), 800)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-visible"
      >
        {/* Ripple Effect */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-full bg-amber-400 dark:bg-amber-500"
            />
          )}
        </AnimatePresence>

        {/* Sparkle particles */}
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: Math.cos(particle.angle) * particle.distance,
                y: Math.sin(particle.angle) * particle.distance,
                scale: [0, 1, 0],
                opacity: [1, 1, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 pointer-events-none"
            >
              <Sparkles className="w-3 h-3 text-amber-500 dark:text-amber-400" />
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          animate={isClicked ? { 
            rotate: [0, -25, 25, -25, 25, 0],
            scale: [1, 1.3, 1.3, 1.3, 1.3, 1],
            y: [0, -10, -10, -10, -10, 0]
          } : { 
            rotate: [0, -10, 10, -10, 0] 
          }}
          transition={isClicked ? { 
            duration: 0.6 
          } : { 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
          className="relative z-10"
        >
          <Coffee className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </motion.div>
        
        <div className="text-center relative z-10">
          <motion.div 
            key={coffeeCount}
            initial={{ scale: 1 }}
            animate={isClicked ? { 
              scale: [1, 1.4, 1],
              color: ['#78350f', '#f59e0b', '#78350f']
            } : {}}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold text-amber-900 dark:text-amber-100"
          >
            {coffeeCount.toLocaleString()}
          </motion.div>
          <div className="text-xs text-amber-700 dark:text-amber-300">
            Coffees consumed ☕
          </div>
        </div>
      </motion.button>

      {/* Floating +1 */}
      <AnimatePresence>
        {showPlusOne && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 1, 0], y: -50, scale: [0.5, 1.2, 1.2, 0.8] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
          >
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-3 py-1 rounded-full shadow-lg">
              <Plus className="w-4 h-4" />
              <span>1</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
