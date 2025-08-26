import { Header } from "@/components/header"
import { GreetingSection } from "@/components/greeting-section"
import { VideoSection } from "@/components/video-section"
import { RegistrationFlow } from "@/components/registration-flow"
import { Strategies } from "@/components/strategies"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-20">
        <GreetingSection />
        <VideoSection />
        <RegistrationFlow />
        <Strategies />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
