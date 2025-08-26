export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">✈️ Aviator</div>
              <span className="text-sm text-muted-foreground">Moçambique</span>
            </div>
            <p className="text-sm text-muted-foreground">
              O melhor site para jogar Aviator em Moçambique. Jogue responsavelmente e divirta-se!
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Jogo</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#como-jogar" className="hover:text-primary transition-colors">
                  Como Jogar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Demo Grátis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Estratégias
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dicas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chat ao Vivo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ajuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Jogo Responsável
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Licenças
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© 2024 Aviator Moçambique. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🔞 +18 Anos</span>
              <span>🛡️ Jogue Responsavelmente</span>
              <span>🇲🇿 Moçambique</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Aviso:</strong> O jogo pode causar dependência. Jogue responsavelmente. Se você ou alguém que
              conhece tem problemas com jogos, procure ajuda profissional. Este site é destinado apenas para maiores de
              18 anos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
