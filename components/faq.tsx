import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Posso jogar Aviator de graça?",
      answer:
        "Sim, você pode jogar Aviator de graça na versão demo disponível na site. A versão demo permite que você experimente o jogo sem qualquer investimento financeiro.",
    },
    {
      question: "O jogo Aviator é legítimo?",
      answer:
        "Sim, o Aviator é um jogo legítimo desenvolvido pela Spribe, licenciado em casinos licenciados. O jogo é regulado e oferece uma experiência justa para todos os jogadores.",
    },
    {
      question: "O jogo Aviator é uma fraude?",
      answer:
        "Não, o Aviator não é uma fraude. É um jogo justo e regulado. Todos os resultados são gerados aleatoriamente, garantindo uma experiência justa para todos os jogadores.",
    },
    {
      question: "Posso ganhar dinheiro a jogar Aviator?",
      answer:
        "Sim, é possível ganhar dinheiro jogando Aviator, mas lembre-se de que é um jogo de apostas com base nas suas apostas. O jogo oferece oportunidades de ganho através dos multiplicadores, mas também envolve riscos.",
    },
    {
      question: "É possível adivinhar o resultado do Aviator?",
      answer:
        "Não, os resultados do Aviator são gerados de forma aleatória através de um sistema provadamente justo. Não é possível prever quando o avião irá 'voar para longe', tornando cada rodada única e imprevisível.",
    },
    {
      question: "Qual é o depósito mínimo para jogar Aviator?",
      answer:
        "O depósito mínimo varia entre os casinos, mas geralmente é de 50 MZN. Verifique com o casino específico para confirmar os valores mínimos de depósito.",
    },
    {
      question: "Posso jogar Aviator no meu telemóvel?",
      answer:
        "Sim, o Aviator está disponível em dispositivos móveis através de aplicações dedicadas ou versões web otimizadas para mobile. Você pode jogar em qualquer lugar e a qualquer hora.",
    },
    {
      question: "Como funciona o sistema de multiplicadores?",
      answer:
        "O multiplicador começa em 1x e aumenta gradualmente. Você deve retirar sua aposta antes do avião 'voar para longe'. Quanto mais tempo esperar, maior o multiplicador, mas maior o risco de perder tudo.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">FAQ - Aviator em Moçambique</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas às perguntas mais frequentes sobre o jogo Aviator em Moçambique.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de suporte está disponível 24/7 para ajudá-lo com qualquer questão sobre o Aviator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                💬 Chat ao Vivo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                📧 Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
