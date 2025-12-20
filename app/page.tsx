"use client"

import { Check } from "lucide-react"
import { useState } from "react"

interface BloxitoHeroProps {
  title?: string
  highlightedWord?: string
  description?: string
  serverIP?: string
  backgroundColor?: string
  highlightColor?: string
}

export function BloxitoHero({
  title = "Jugar nunca fue tan",
  highlightedWord = "divertido.",
  description = "Bloxito se caracteriza por ofrecer una experiencia RPG completa, con ítems exclusivos, texture pack original, comandos en español y un sistema bien optimizado que lo diferencia de otros servidores.",
  serverIP = "PLAY.BLOXITO.COM",
  backgroundColor = "#6FBBF0",
  highlightColor = "#FFE500",
}: BloxitoHeroProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor }}>
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight text-balance">
            {title}
          </h1>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight"
            style={{ color: highlightColor }}
          >
            {highlightedWord}
          </h1>
        </div>

        {/* Right side - Description and IP */}
        <div className="space-y-8">
          <p className="text-white text-lg md:text-xl leading-relaxed">{description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-white text-lg md:text-xl font-bold">IP: {serverIP}</div>
            <button
              onClick={handleCopy}
              className="bg-white hover:bg-gray-100 font-bold px-6 py-2.5 rounded-md transition-colors uppercase text-sm flex items-center gap-2"
              style={{ color: backgroundColor }}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copiado
                </>
              ) : (
                "Copiar"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
