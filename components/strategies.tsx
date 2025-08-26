import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Target } from "lucide-react"

export function Strategies() {
  const strategies = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Estratégia de Multiplicadores Baixos",
      description: "Foque em multiplicadores entre 1.2x e 2x para ganhos consistentes",
      details: [
        "Retire sempre entre 1.2x - 1.5x",
        "Mantenha disciplina e não seja ganancioso",
        "Esta estratégia tem 70% de taxa de sucesso",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Gestão de Banca Inteligente",
      description: "Nunca aposte mais de 5% do seu saldo total por rodada",
      details: [
        "Divida seu saldo em 20 partes iguais",
        "Pare quando perder 3 apostas seguidas",
        "Aumente a aposta apenas após 5 vitórias",
      ],
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Padrão de Observação",
      description: "Observe os padrões antes de apostar grandes quantias",
      details: [
        "Observe pelo menos 10 rodadas antes de apostar",
        "Identifique sequências de multiplicadores baixos",
        "Entre após 3 crashes consecutivos abaixo de 2x",
      ],
    },
  ]

  return (
    <section className="py-20 bg-secondary/5" id="estrategias">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              3 Melhores Estratégias Aviator
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estratégias comprovadas para maximizar seus ganhos e minimizar perdas no jogo Aviator
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 rounded-3xl overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {strategy.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">{strategy.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strategy.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border max-w-2xl mx-auto">
              <p className="text-foreground font-medium">
                💡 <strong>Dica Importante:</strong> Nossa ferramenta combina essas estratégias automaticamente para
                otimizar seus resultados!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
