import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="relative bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Aviator Bet
                <span className="block text-red-500">Moçambique</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Experimente a emoção do jogo Aviator online em Moçambique. Registe-se agora e receba bónus exclusivos em
                MZN!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white">
                🎁 Ganhe um Bónus
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                ▶️ Ver Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Pagamentos em MZN</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gray-900 border-2 border-red-600/30">
              <div className="relative h-80 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
                <img
                  src="/aviator-game-interface-with-red-airplane-flying-up.png"
                  alt="Aviator Game Interface"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <div className="text-right">
                    <div className="text-green-400 text-2xl font-bold">2.45x</div>
                    <div className="text-white/70 text-sm">Multiplicador</div>
                  </div>

                  <div className="text-center">
                    <div className="text-white text-lg font-semibold">Voe Alto e Ganhe!</div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-white/70 text-sm">Aposta: 100 MZN</div>
                    <div className="text-green-400 font-bold">Ganho: 245 MZN</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 mb-4">Receba um bónus de boas-vindas exclusivo agora mesmo!</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                  Jogar Aviator ✈️
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
