import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PaymentMethods() {
  const methods = [
    {
      category: "Mpesa",
      description:
        "Depósito rápido e seguro através do Mpesa. Mpesa é a opção preferida de muitos jogadores devido à sua conveniência e velocidade nas transações.",
      icon: "📱",
      features: ["Instantâneo", "Sem taxas", "Disponível 24/7"],
    },
    {
      category: "Cartões de Crédito/Débito",
      description:
        "Conveniente e amplamente aceito. Os cartões são uma opção confiável para fazer depósitos, oferecendo uma experiência familiar para a maioria dos usuários.",
      icon: "💳",
      features: ["Visa/Mastercard", "Seguro", "Processamento rápido"],
    },
    {
      category: "E-wallets",
      description:
        "Oferecem transações rápidas e seguras. As carteiras eletrônicas são populares para sua rapidez e segurança nas transações financeiras.",
      icon: "💰",
      features: ["Skrill", "Neteller", "PayPal"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Métodos Populares de Pagamento em Moçambique
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha entre diversos métodos de pagamento seguros e convenientes para depositar e sacar seus ganhos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                <CardTitle className="text-xl">{method.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{method.description}</p>
                <div className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Informações Importantes sobre Pagamentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">💰 Depósitos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Depósito mínimo: 50 MZN</li>
                    <li>• Depósito máximo: 50.000 MZN</li>
                    <li>• Processamento instantâneo</li>
                    <li>• Sem taxas adicionais</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">💸 Levantamentos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Levantamento mínimo: 100 MZN</li>
                    <li>• Processamento: 1-24 horas</li>
                    <li>• Verificação de conta necessária</li>
                    <li>• Múltiplas opções disponíveis</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Nota:</strong> Todos os valores são em Metical Moçambicano (MZN). Certifique-se de verificar
                  sua conta para levantamentos mais rápidos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
