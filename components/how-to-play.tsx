import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HowToPlay() {
  const steps = [
    {
      number: "1",
      title: "Escolha um Casino",
      description: "Selecione um dos casinos online confiáveis que oferece o jogo Aviator.",
    },
    {
      number: "2",
      title: "Registe-se e Deposite",
      description: "Crie a sua conta e faça um depósito usando métodos de pagamento disponíveis.",
    },
    {
      number: "3",
      title: "Faça a sua Aposta",
      description: "Coloque fundos à sua conta utilizando um dos métodos de pagamento disponíveis.",
    },
    {
      number: "4",
      title: "Observe o Avião",
      description: "Procure pelo jogo Aviator. Navegue até à secção de jogos e encontre o Aviator.",
    },
    {
      number: "5",
      title: "Retire no Momento Certo",
      description: "Faça login na sua conta. Use suas credenciais para acessar sua conta.",
    },
    {
      number: "6",
      title: "Retire o Dinheiro Ganho",
      description: "Retire o dinheiro ganho. Ao acumular ganhos, veja as opções para sacar seu dinheiro.",
    },
  ]

  return (
    <section id="como-jogar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Como Jogar Aviator by Spribe?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O jogo Aviator by Spribe é incrivelmente fácil de entender e jogar, tornando-o popular entre jogadores de
            todos os níveis de habilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Instruções</h3>
          <div className="max-w-4xl mx-auto space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">1.</span>
                    <span>
                      Escolha um casino para jogar. Pesquise e selecione um casino online confiável que oferece o jogo
                      Aviator.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">2.</span>
                    <span>
                      Registe-se no casino. Crie uma conta no casino escolhido fornecendo as informações necessárias.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">3.</span>
                    <span>
                      Faça um depósito. Adicione fundos à sua conta utilizando um dos métodos de pagamento disponíveis.
                    </span>
                  </li>
                </ol>
              </div>
              <div>
                <ol start={4} className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">4.</span>
                    <span>Procure pelo jogo Aviator. Navegue até à secção de jogos e encontre o Aviator.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">5.</span>
                    <span>Faça login na sua conta. Use suas credenciais para acessar sua conta.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-primary font-semibold">6.</span>
                    <span>Retire o dinheiro ganho. Ao acumular ganhos, veja as opções para sacar seu dinheiro.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
