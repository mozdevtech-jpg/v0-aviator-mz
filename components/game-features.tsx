import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GameFeatures() {
  const features = [
    {
      icon: "🎯",
      title: "Jogo Simples",
      description: "Interface intuitiva e fácil de usar, perfeita para iniciantes e experientes.",
    },
    {
      icon: "⚡",
      title: "Resultados Rápidos",
      description: "Rodadas rápidas com resultados instantâneos. Não precisa esperar muito tempo.",
    },
    {
      icon: "💰",
      title: "Grandes Multiplicadores",
      description: "Multiplicadores que podem chegar até 1000x ou mais da sua aposta inicial.",
    },
    {
      icon: "📱",
      title: "Jogue em Qualquer Lugar",
      description: "Disponível em desktop e mobile. Jogue onde e quando quiser.",
    },
    {
      icon: "🔒",
      title: "Jogo Justo",
      description: "Sistema provadamente justo que garante transparência em cada rodada.",
    },
    {
      icon: "🎁",
      title: "Bónus Exclusivos",
      description: "Receba bónus de boas-vindas e promoções especiais regulares.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Descrição do Jogo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Aviator é um jogo emocionante e inovador. O objetivo é apostar no momento certo para encaixar o voo da
            aposta e ganhar. O jogo tem bónus de aposta, multiplicadores e uma classificação de apostadores, fácil de
            entender e jogar, proporcionando muita diversão e adrenalina. A emoção do jogo, combinada com a emoção de
            fazer e apostar cartas no momento exato, cria uma experiência de jogo única.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
