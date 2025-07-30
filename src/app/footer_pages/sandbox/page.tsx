import type React from "react"
import HeroSection  from "~/components/footer_components/ui/hero-section"
import  ContentSection  from "~/components/footer_components/ui/content-section"
import { SandboxDemo } from "~/components/footer_components/developer/sandbox-demo"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { TestTube, Play, Shield, Zap, Database, Code } from "lucide-react"

const sandboxFeatures = [
  {
    icon: <Database className="h-6 w-6 text-blue-600" />,
    title: "Production Mirror",
    description: "Exact replica of our production environment with real API responses",
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: "Safe Testing",
    description: "Test all operations without affecting live data or real transactions",
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-600" />,
    title: "No Rate Limits",
    description: "Unlimited API calls for thorough testing and development",
  },
  {
    icon: <Code className="h-6 w-6 text-purple-600" />,
    title: "Pre-generated Data",
    description: "Sample vendors, products, and bookings ready for immediate testing",
  },
]

const testScenarios = [
  {
    category: "Vendor Operations",
    scenarios: [
      "Register new vendor account",
      "Update product inventory levels",
      "Process vendor payments",
      "Generate vendor analytics reports",
    ],
  },
  {
    category: "Affiliate Tracking",
    scenarios: [
      "Track conversion events",
      "Calculate commission rates",
      "Process affiliate payments",
      "Generate performance reports",
    ],
  },
  {
    category: "Tour Management",
    scenarios: [
      "Check tour availability",
      "Create booking reservations",
      "Handle cancellations",
      "Sync with external calendars",
    ],
  },
  {
    category: "Webhook Testing",
    scenarios: [
      "Simulate webhook events",
      "Test signature verification",
      "Handle retry scenarios",
      "Debug payload formats",
    ],
  },
]

const sampleCredentials = {
  apiKey: "sk_sandbox_1234567890abcdef1234567890abcdef",
  baseUrl: "https://sandbox-api.artstay.com/v1",
  webhookSecret: "whsec_sandbox_abcdef1234567890abcdef1234567890",
}

export default function SandboxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <HeroSection
        title="Test Without Limits"
        subtitle="SandBox"
        description="Our Sandbox mirrors the production environment, allowing you to simulate vendor registration and inventory sync, trigger and observe affiliate conversions, test webhook payloads and response handling. Pre-generated API tokens are available for demo apps with no setup required."
        backgroundImage="/placeholder.svg?height=600&width=1200&text=API+Sandbox+Environment"
      />

      <ContentSection className="py-16">
        <div className="container mx-auto px-4">
          {/* Interactive Demo */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive API Testing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Try our APIs instantly with pre-configured endpoints and sample data. No authentication required in
                sandbox mode.
              </p>
            </div>
            <SandboxDemo />
          </div>

          {/* Sandbox Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Sandbox Environment Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sandboxFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-gray-50 rounded-full">{feature.icon}</div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Test Scenarios */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Test Scenarios</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testScenarios.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TestTube className="h-5 w-5 text-amber-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.scenarios.map((scenario, scenarioIndex) => (
                        <li key={scenarioIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          {scenario}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sample Credentials */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-600" />
                  Sandbox Credentials
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Use these pre-configured credentials for immediate testing. No signup required.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">API Key</Label>
                    <div className="mt-1 p-3 bg-white border rounded-lg font-mono text-sm break-all">
                      {sampleCredentials.apiKey}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Base URL</Label>
                    <div className="mt-1 p-3 bg-white border rounded-lg font-mono text-sm">
                      {sampleCredentials.baseUrl}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Webhook Secret</Label>
                    <div className="mt-1 p-3 bg-white border rounded-lg font-mono text-sm break-all">
                      {sampleCredentials.webhookSecret}
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Quick Start Tips:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• All sandbox data resets every 24 hours</li>
                    <li>• No real payments or transactions are processed</li>
                    <li>• Webhook events are simulated but not delivered</li>
                    <li>• Rate limits are disabled for unlimited testing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Launch Sandbox */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <Play className="h-16 w-16 text-amber-600 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-amber-900 mb-4">Ready to Start Testing?</h2>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Launch our interactive sandbox environment and start testing your integrations immediately. No setup
                  required - just click and start building.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Play className="h-5 w-5 mr-2" />
                    Launch Sandbox
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    <Code className="h-5 w-5 mr-2" />
                    View Code Examples
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </div>
  )
}

function Label({ className, children, ...props }: { className?: string; children: React.ReactNode }) {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  )
}
