import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BestSites() {
  const sites = [
    {
      name: "Placard MZ",
      rating: 4.9,
      bonus: "Até 5.000 MZN",
      features: ["Licenciado em MZ", "Pagamentos M-Pesa", "Suporte em Português"],
      color: "bg-red-600",
      logo: "/placard-mz-logo.png",
    },
    {
      name: "Megagamelive",
      rating: 4.8,
      bonus: "Até 3.500 MZN",
      features: ["Live Streaming", "Cashback Diário", "App Mobile"],
      color: "bg-blue-600",
      logo: "/megagamelive-logo.png",
    },
    {
      name: "Txuna Bet",
      rating: 4.7,
      bonus: "Até 4.000 MZN",
      features: ["Pagamentos Rápidos", "Interface Simples", "Bónus Semanais"],
      color: "bg-green-600",
      logo: "/txuna-bet-logo.png",
    },
  ]

  return (
    <section id="sites" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Os Melhores Cassinos de MZ para Jogar Aviator
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa equipe selecionou os melhores cassinos para jogar Aviator em Moçambique. Todos os sites são
            licenciados e estão disponíveis para jogadores moçambicanos. Aproveite uma experiência de jogo segura e
            emocionante nessas plataformas recomendadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sites.map((site, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-2 bg-gray-900 border-gray-700"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${site.color}`}></div>

              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={`${site.name} Logo`}
                    className="w-16 h-16 mx-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <CardTitle className="text-xl text-white">{site.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold text-white">{site.rating}</span>
                  </div>
                </div>
                <div className="text-lg font-bold text-red-500">{site.bonus}</div>
                <div className="text-sm text-gray-400">Bónus de Boas-vindas</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {site.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full group-hover:scale-105 transition-transform bg-red-600 hover:bg-red-700 text-white">
                  Jogar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-red-600/30 bg-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">🏆 Cassino Recomendado #1</h3>
              <p className="text-lg text-gray-300 mb-6">
                Baseado na nossa análise, <strong className="text-red-500">Placard MZ</strong> oferece a melhor
                experiência Aviator para jogadores moçambicanos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  🎁 Receber Bónus de 5.000 MZN
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  📱 Baixar App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
