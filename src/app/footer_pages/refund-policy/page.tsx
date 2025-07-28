import HeroSection from "~/components/footer_components/ui/hero-section"
import ContentSection from "~/components/footer_components/ui/content-section"
import PolicyCard from "~/components/footer_components/support/policy-card"
import Card from "~/components/footer_components/ui/card"
import { Clock, Package, Calendar, Download, Mail, FileText } from "lucide-react"

export default function RefundPolicyPage() {
  const refundRules = [
    {
      icon: Clock,
      title: "14-Day Window",
      description: "Refunds eligible within 14 days of product delivery or service booking date",
      type: "info" as const,
    },
    {
      icon: Package,
      title: "Original Condition",
      description: "Items must be unused and returned in original condition with all packaging",
      type: "info" as const,
    },
    {
      icon: Calendar,
      title: "Tour Cancellations",
      description: "Tours cancelled 7+ days prior are 90% refundable (10% processing fee applies)",
      type: "success" as const,
    },
    {
      icon: Download,
      title: "Digital Products",
      description: "Downloads and subscriptions are non-refundable unless faulty or misrepresented",
      type: "warning" as const,
    },
  ]

  const refundProcess = [
    {
      step: "1",
      title: "Submit Request",
      description: "Fill out our refund form or email support with your order details",
    },
    {
      step: "2",
      title: "Review Process",
      description: "Our team reviews your request within 24-48 hours",
    },
    {
      step: "3",
      title: "Return Instructions",
      description: "If approved, we'll send return shipping instructions",
    },
    {
      step: "4",
      title: "Refund Processing",
      description: "Refund processed within 5-7 business days after item receipt",
    },
  ]

  return (
    <>
      <HeroSection
        title="Fair & Transparent Refunds"
        subtitle="Your Rights & Our Process"
        description="We stand behind our products and services. Our refund policy is designed to be fair, transparent, and protective of both customers and artisan partners."
         backgroundImage="/images/kashmir.jpg"
      />

      <ContentSection background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Refund Eligibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            Understanding when and how refunds apply to your purchases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {refundRules.map((rule, index) => (
            <PolicyCard key={index} title={rule.title} type={rule.type}>
              <div className="flex items-start gap-4">
                <rule.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">{rule.description}</p>
              </div>
            </PolicyCard>
          ))}
        </div>

        {/* Special Cases */}
        <Card gradient className="mb-16">
          <h3 className="text-2xl font-bold text-[#005380] mb-6 text-center">Special Refund Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Craft Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom/personalized items: Non-refundable unless defective</li>
                <li>• Handmade variations: Minor differences are not grounds for refund</li>
                <li>• Damaged in transit: Full refund or replacement offered</li>
                <li>• Not as described: Full refund if significantly different</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Tourism Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Weather cancellations: Full refund or rescheduling</li>
                <li>• Guide unavailability: Alternative guide or full refund</li>
                <li>• Force majeure events: Full refund with no penalties</li>
                <li>• Customer no-show: No refund unless 24hr notice given</li>
              </ul>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection background="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005380] mb-6">Refund Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">Simple steps to request and receive your refund</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {refundProcess.map((step, index) => (
            <Card key={index} hover className="text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[#005380] to-[#0085CC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">{step.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white" id="refund-form">
        <div className="max-w-4xl mx-auto">
          <Card gradient className="text-center p-12">
            <FileText className="w-16 h-16 text-[#0085CC] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#005380] mb-6">Request a Refund</h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Ready to request a refund? We&apos;ve made the process simple and straightforward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-left">
                <Mail className="w-8 h-8 text-[#0085CC] mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Email Request</h4>
                <p className="text-sm text-gray-600 mb-3">Send us your refund request with order details</p>
                <p className="text-sm font-medium text-[#0085CC]">support@artstayglobal.com</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-left">
                <FileText className="w-8 h-8 text-[#0085CC] mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Online Form</h4>
                <p className="text-sm text-gray-600 mb-3">Fill out our structured refund request form</p>
                <p className="text-sm font-medium text-[#0085CC]">Available 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help-support"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#005380] to-[#0085CC] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Submit Refund Request
              </a>
              <a
                href="mailto:support@artstayglobal.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0085CC] text-[#0085CC] font-semibold rounded-xl hover:bg-[#0085CC] hover:text-white transition-all duration-300"
              >
                Email Support
              </a>
            </div>

            
          </Card>
        </div>
      </ContentSection>
    </>
  )
}
