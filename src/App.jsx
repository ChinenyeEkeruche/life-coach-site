import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-white text-gray-800">
      <header className="text-center py-20">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Love Liberates You
        </motion.h1>
        <motion.p 
          className="text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Helping you rediscover your worth, heal through love, and walk your unique path with peace.
        </motion.p>
      </header>
    </div>
  )
}
