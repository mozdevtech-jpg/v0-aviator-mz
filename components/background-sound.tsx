"use client"

import { useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function BackgroundSound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioElement = new Audio("/aviator-background-sound.mp3")
    audioElement.loop = true
    audioElement.volume = 0.3
    setAudio(audioElement)

    return () => {
      if (audioElement) {
        audioElement.pause()
        audioElement.src = ""
      }
    }
  }, [])

  const toggleSound = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={isPlaying ? "Pausar som" : "Reproduzir som"}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  )
}
