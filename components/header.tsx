"use client"

import { Button } from "@/components/ui/button"
import { Plane, Target, MessageCircleQuestion, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card/50 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
            <Plane className="text-white w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold text-foreground">Aviator Tool</div>
            <div className="text-xs text-muted-foreground">Sistema Licenciado</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#ferramenta"
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <Settings className="w-4 h-4" />
            Ferramenta
          </a>
          <a
            href="#estrategias"
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <Target className="w-4 h-4" />
            Estratégias
          </a>
          <a
            href="#faq"
            className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
          >
            <MessageCircleQuestion className="w-4 h-4" />
            FAQ
          </a>
        </nav>

        <div className="flex items-center">
          <Button
            className="btn-animated bg-primary hover:bg-primary/90 text-white font-semibold px-6"
            onClick={() => window.open("https://www.megagamelive.com/affiliates/?btag=2084979", "_blank")}
          >
            Iniciar Agora
          </Button>
        </div>
      </div>
    </header>
  )
}
