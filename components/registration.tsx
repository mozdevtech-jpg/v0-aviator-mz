import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Registration() {
  const steps = [
    "Escolha um casino licenciado. Verifique a lista de casinos recomendados para garantir um ambiente de jogo seguro.",
    "Clique no botão de registo. Encontre o botão de registo na página inicial do casino.",
    "Preencha o formulário de registo. Forneça informações pessoais básicas como nome, email e data de nascimento.",
    "Verifique a sua conta. Confirme o seu email através do link enviado para a sua caixa de entrada.",
    "Faça o seu primeiro depósito. Escolha entre os métodos de pagamento disponíveis.",
    "Faça login na sua conta. Use suas credenciais para acessar sua conta.",
    "Faça um depósito para começar a jogar. Adicione fundos usando um método de pagamento preferido.",
  ]

  return (
    <section id="registo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como se Registar e Fazer Login no Aviator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para começar a jogar Aviator, siga os seguintes passos:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Passos para o Registo:</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Registe-se Agora!</CardTitle>
                <p className="text-muted-foreground">Comece a jogar em menos de 5 minutos</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/10 rounded-lg text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">🎁 Bónus de Boas-vindas</div>
                    <div className="text-lg font-semibold text-foreground">Até 5.000 MZN</div>
                    <div className="text-sm text-muted-foreground">+ 100 Rodadas Grátis</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div className="p-3 bg-card rounded-lg">
                      <div className="font-semibold text-foreground">Depósito Mínimo</div>
                      <div className="text-primary">50 MZN</div>
                    </div>
                    <div className="p-3 bg-card rounded-lg">
                      <div className="font-semibold text-foreground">Tempo de Registo</div>
                      <div className="text-primary">2 minutos</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Registar Agora ✈️
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao registar-se, concorda com os nossos termos e condições. Jogue responsavelmente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Já tem uma conta?</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Fazer Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
