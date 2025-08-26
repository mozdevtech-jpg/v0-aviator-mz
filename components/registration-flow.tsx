"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, Loader2 } from "lucide-react"

export function RegistrationFlow() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleStartNow = () => {
    setIsLoading(true)
    // Simular verificação
    setTimeout(() => {
      setIsLoading(false)
      // Redirecionar para o cassino
      window.open("https://www.megagamelive.com/affiliates/?btag=2084979", "_blank")
    }, 2000)
  }

  const handleOpenTool = () => {
    if (!isRegistered) {
      alert('Clique no botão "INICIAR AGORA" e cumpra os requisitos para poder usar a nossa ferramenta.')
      return
    }
    // Abrir ferramenta
    console.log("Abrindo ferramenta...")
  }

  return (
    <section className="py-20" id="ferramenta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Como Usar Nossa Ferramenta</h2>
              <p className="text-lg text-muted-foreground">
                Para iniciar com a nossa ferramenta é simples, não precisa de pagar nada, comprar nada.
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Tudo que é necessário é:</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-secondary/20 rounded-2xl">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      <strong>Crie uma nova conta</strong> clicando no botão{" "}
                      <span className="text-primary font-semibold">[INICIAR AGORA]</span>
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Preencha o formulário de Registro no cassino, aceite que é maior de idade, e clica em registrar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-secondary/20 rounded-2xl">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-foreground leading-relaxed">
                      <strong>Último passo:</strong> Faça o seu primeiro depósito no mínimo{" "}
                      <span className="text-accent font-semibold">50 MT</span> usando o Mpesa ou Emola.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      E é só isso. Depois clica no botão{" "}
                      <span className="text-primary font-semibold">[ABRIR FERRAMENTA AGORA]</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleStartNow}
                disabled={isLoading}
                className="btn-animated bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg rounded-2xl min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-5 h-5 mr-2" />
                    INICIAR AGORA
                  </>
                )}
              </Button>

              <Button
                onClick={handleOpenTool}
                variant="outline"
                className="btn-animated border-accent text-accent hover:bg-accent hover:text-black font-bold px-8 py-4 text-lg rounded-2xl min-w-[200px] bg-transparent"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                ABRIR FERRAMENTA AGORA
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">* Ferramenta 100% gratuita e licenciada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
