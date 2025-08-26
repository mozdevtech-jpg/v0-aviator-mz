export function VideoSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 border border-border shadow-2xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-secondary/20">
              <iframe
                src="https://www.youtube.com/embed/ps_bsdlPBwE?start=25"
                title="Como usar nossa ferramenta Aviator"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
