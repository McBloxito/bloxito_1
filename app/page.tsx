"use client"

import { Button } from "@/components/ui/button"
import { Copy, Check, ShoppingBag, Globe } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function MinecraftLanding() {
  const [copied, setCopied] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const serverIP = "play.bloxito.com"

  const t = {
    es: {
      welcome: "Bienvenido a la página oficial",
      wiki: "Wiki",
      store: "Tienda",
      copyIP: "Copiar IP",
      copied: "¡Copiado!",
      versions: "Versiones compatibles: 1.8 - 1.21",
      socials: "Redes Sociales",
      footer: "© 2025 Bloxito Server - No afiliado con Mojang AB",
    },
    en: {
      welcome: "Welcome to the official page",
      wiki: "Wiki",
      store: "Store",
      copyIP: "Copy IP",
      copied: "Copied!",
      versions: "Compatible versions: 1.8 - 1.21",
      socials: "Social Networks",
      footer: "© 2025 Bloxito Server - Not affiliated with Mojang AB",
    },
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4 md:mb-8">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="minecraft-btn bg-emerald-800 hover:bg-emerald-700 text-white border-2 border-emerald-600"
          >
            <Globe className="mr-2 h-4 w-4" />
            {language === "es" ? "EN" : "ES"}
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center max-w-6xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <h1 className="minecraft-text text-2xl sm:text-3xl md:text-4xl text-white text-balance text-center md:text-left">
              {t[language].welcome}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                onClick={() => window.open("#", "_blank")}
                className="minecraft-btn bg-emerald-700 hover:bg-emerald-600 text-white font-bold shadow-minecraft px-8 sm:px-12 h-12 w-full sm:w-auto"
              >
                {t[language].wiki}
              </Button>
              <Button
                onClick={() => window.open("https://tienda.bloxito.com", "_blank")}
                className="minecraft-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-minecraft px-8 sm:px-12 h-12 w-full sm:w-auto"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                {t[language].store}
              </Button>
            </div>
          </div>

          {/* Right column - Logo with IP */}
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/bloxito-512.png"
              alt="Bloxito Logo"
              width={160}
              height={160}
              className="drop-shadow-2xl w-32 h-32 sm:w-40 sm:h-40"
            />

            <div className="w-full space-y-3 max-w-md px-4 sm:px-0">
              <div className="minecraft-input bg-gray-900 border-4 border-emerald-700 px-3 sm:px-4 py-2 rounded-none">
                <code className="minecraft-text text-sm sm:text-base md:text-lg text-emerald-300 font-bold break-all">
                  {serverIP}
                </code>
              </div>

              <Button
                onClick={copyToClipboard}
                className="minecraft-btn bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-minecraft w-full h-12"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    {t[language].copied}
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    {t[language].copyIP}
                  </>
                )}
              </Button>

              <p className="minecraft-text text-xs text-white text-center">{t[language].versions}</p>
            </div>
          </div>
        </div>

        {/* Social links section */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h3 className="minecraft-text text-base sm:text-lg text-emerald-300 mb-4 md:mb-6">{t[language].socials}</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none px-4 sm:px-0">
            <Button
              onClick={() => window.open("https://www.tiktok.com/@bloxito.oficial", "_blank")}
              className="minecraft-btn bg-emerald-800 hover:bg-emerald-700 text-white border-2 border-emerald-600 shadow-minecraft px-8 h-12 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              TikTok
            </Button>
            <Button
              onClick={() => window.open("https://discord.bloxito.com", "_blank")}
              className="minecraft-btn bg-indigo-600 hover:bg-indigo-500 text-white border-2 border-indigo-700 shadow-minecraft px-8 h-12 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Discord
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pb-8 px-4">
          <p className="minecraft-text text-xs text-white">{t[language].footer}</p>
        </footer>
      </div>
    </div>
  )
}
