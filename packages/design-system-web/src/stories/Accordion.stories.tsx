import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-full max-w-md"
  },
  render: (args: any) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the Level AI design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: {
    type: "multiple",
    className: "w-full max-w-md"
  },
  render: (args: any) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. This accordion is configured to allow multiple items to be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is this customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the styles, animations, and behavior.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be controlled?</AccordionTrigger>
        <AccordionContent>
          Yes. You can control which items are open using the value prop.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DefaultOpen: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-2",
    className: "w-full max-w-md"
  },
  render: (args: any) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          This item is closed by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
        <AccordionContent>
          This item is open by default using the defaultValue prop.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          This item is also closed by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const FAQ: Story = {
  args: {
    type: "single",
    collapsible: true
  },
  render: (args: any) => (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Level AI?</AccordionTrigger>
          <AccordionContent>
            Level AI is a cutting-edge AI platform that helps businesses automate and optimize their workflows. Our platform uses advanced machine learning to provide intelligent insights and automation capabilities.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does the pricing work?</AccordionTrigger>
          <AccordionContent>
            We offer flexible pricing plans based on your usage and needs. Our plans include a free tier for small teams, and scalable options for growing businesses. Contact our sales team for custom enterprise pricing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is my data secure?</AccordionTrigger>
          <AccordionContent>
            Yes, security is our top priority. We use industry-standard encryption for data at rest and in transit. Our platform is SOC 2 compliant and undergoes regular security audits. Your data is never shared with third parties.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I integrate with other tools?</AccordionTrigger>
          <AccordionContent>
            Absolutely! Level AI offers a comprehensive API and integrations with popular tools like Slack, Microsoft Teams, Salesforce, and more. Our webhook system allows you to connect with virtually any platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
          <AccordionContent>
            We provide 24/7 email support for all customers, with priority support for premium plans. Enterprise customers also get access to a dedicated success manager and phone support. Our comprehensive documentation and community forum are available to all users.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Nested: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-full max-w-lg"
  },
  render: (args: any) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Features</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>Our product includes several key features:</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="nested-1">
                <AccordionTrigger>AI-Powered Analytics</AccordionTrigger>
                <AccordionContent>
                  Get deep insights into your data with our machine learning models.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nested-2">
                <AccordionTrigger>Automation Tools</AccordionTrigger>
                <AccordionContent>
                  Automate repetitive tasks and workflows with our no-code builder.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="nested-3">
                <AccordionTrigger>Real-time Collaboration</AccordionTrigger>
                <AccordionContent>
                  Work together with your team in real-time with our collaboration features.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Technical Specifications</AccordionTrigger>
        <AccordionContent>
          Our platform is built on modern cloud infrastructure with 99.9% uptime SLA.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}