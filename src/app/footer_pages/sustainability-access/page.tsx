import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import EthicsCharter from "~/components/footer_components/vendor/ethics-charter"

export default function SustainabilityEthicsPage() {
  return (
    <>
      <HeroSection
        title="Tradition. Transparency. Trust."
        subtitle="Sustainability & Ethics"
        description="At ArtStay, we believe that preserving Kashmir's craft heritage goes hand in hand with ethical business practices. Our comprehensive ethics framework ensures that every transaction supports sustainable livelihoods and environmental responsibility."
        backgroundImage="/placeholder.svg?height=800&width=1200"
        ctaText="View Ethics Charter"
        ctaLink="#ethics-charter"
      />

      <ContentSection background="white" padding="lg" id="ethics-charter">
        <EthicsCharter />
      </ContentSection>
    </>
  )
}
