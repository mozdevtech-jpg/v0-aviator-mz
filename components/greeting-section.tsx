"use client"

import { useEffect, useState } from "react"

export function GreetingSection() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Bom dia")
    } else if (hour < 18) {
      setGreeting("Boa tarde")
    } else {
      setGreeting("Boa noite")
    }
  }, [])

  return (
    <section className="pt-20 pb-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {greeting}, seja bem-vindo!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              À nossa plataforma que disponibiliza aos seus visitantes a chance de
              <span className="text-primary font-semibold"> parar de perder dinheiro </span>
              no Aviator com nossa ferramenta
              <span className="text-accent font-semibold"> licenciada</span>.
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <p className="text-lg text-foreground mb-4">Assista um pouco esse vídeo abaixo:</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
