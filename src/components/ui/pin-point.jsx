'use client'

import { motion } from "framer-motion"



export function PinPoint({ label, x, y }) {
  return (
    <motion.div 
      className="absolute inline-flex items-center"
      style={{ left: x, top: y }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <span className="flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 animate-pulse"></span>
      </span>
      <span className="ml-2 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded-full">
        {label}
      </span>
    </motion.div>
  )
}

