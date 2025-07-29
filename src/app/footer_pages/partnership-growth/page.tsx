import PageLayout from "~/components/footer_components/ui/page-layout"
import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PartnershipOpportunities from "~/components/footer_components/vendor/partnership-opportunities"

export default function PartnershipGrowthPage() {
  return (
    <PageLayout>
      <HeroSection
        title="Grow With ArtStay"
        subtitle="Partnership Growth"
        description="Scale your craft business through strategic partnerships, international collaborations, and exclusive growth opportunities. Join our elite network of featured vendors and expand your reach globally."
        backgroundImage="/placeholder.svg?height=800&width=1200"
        ctaText="Request Growth Call"
        ctaLink="/partnership-application"
      />

      <ContentSection background="white" padding="lg">
        <PartnershipOpportunities />
      </ContentSection>
    </PageLayout>
  )
}
