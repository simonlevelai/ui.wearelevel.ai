import type { Meta, StoryObj } from '@storybook/react'
import {
  Footer,
  FooterContent,
  FooterSection,
  FooterGrid,
  FooterTitle,
  FooterLink,
  FooterText,
  FooterDivider,
  FooterBottom,
} from '../components/ui/footer'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Smartphone, Bot, Twitter, Linkedin, Github, Facebook } from 'lucide-react'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'minimal', 'sticky'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    layout: {
      control: 'select',
      options: ['default', 'centered', 'inline'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer>
        <FooterContent>
          <FooterGrid>
            <FooterSection>
              <FooterTitle>Product</FooterTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Resources</FooterTitle>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Support</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Status</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Legal</FooterTitle>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </FooterSection>
          </FooterGrid>
          <FooterDivider />
          <FooterBottom>
            <FooterText>© 2024 Level AI. All rights reserved.</FooterText>
            <div className="flex gap-4">
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">LinkedIn</FooterLink>
              <FooterLink href="#">GitHub</FooterLink>
            </div>
          </FooterBottom>
        </FooterContent>
      </Footer>
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer variant="minimal" size="sm">
        <FooterContent>
          <FooterBottom>
            <FooterText>© 2024 Level AI</FooterText>
            <nav className="flex gap-6">
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </nav>
          </FooterBottom>
        </FooterContent>
      </Footer>
    </div>
  ),
}

export const Centered: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer layout="centered">
        <FooterContent>
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold mb-4">
              <span className="text-primary">Level</span> AI
            </h2>
            <FooterText className="max-w-md">
              Empowering customer success teams with AI-powered conversation intelligence
              and quality assurance solutions.
            </FooterText>
          </div>
          <nav className="flex flex-wrap gap-8 justify-center mb-8">
            <FooterLink href="#">Product</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Company</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </nav>
          <FooterDivider />
          <FooterBottom>
            <FooterText>© 2024 Level AI. All rights reserved.</FooterText>
          </FooterBottom>
        </FooterContent>
      </Footer>
    </div>
  ),
}

export const WithNewsletter: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer variant="elevated">
        <FooterContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">
                <span className="text-primary">Level</span> AI
              </h2>
              <FooterText className="mb-6 max-w-md">
                Transform your customer conversations into actionable insights with our
                AI-powered platform.
              </FooterText>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Smartphone className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button variant="outline" size="sm">
                  <Bot className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>
            <div>
              <FooterTitle>Stay Updated</FooterTitle>
              <FooterText className="mb-4">
                Get the latest updates and insights delivered to your inbox.
              </FooterText>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <FooterGrid className="mb-8">
            <FooterSection>
              <FooterTitle>Solutions</FooterTitle>
              <FooterLink href="#">Call Centers</FooterLink>
              <FooterLink href="#">Sales Teams</FooterLink>
              <FooterLink href="#">Support Teams</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Platform</FooterTitle>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Company</FooterTitle>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle>Support</FooterTitle>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">API Docs</FooterLink>
              <FooterLink href="#">Status</FooterLink>
            </FooterSection>
          </FooterGrid>
          <FooterDivider />
          <FooterBottom>
            <FooterText>© 2024 Level AI. All rights reserved.</FooterText>
            <div className="flex gap-6">
              <FooterLink href="#" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </FooterLink>
              <FooterLink href="#" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </FooterLink>
              <FooterLink href="#" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </FooterLink>
              <FooterLink href="#" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </FooterLink>
            </div>
          </FooterBottom>
        </FooterContent>
      </Footer>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer layout="inline" size="sm">
        <FooterContent>
          <FooterText>© 2024 Level AI</FooterText>
          <nav className="flex gap-6">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </nav>
          <div className="flex gap-4">
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
          </div>
        </FooterContent>
      </Footer>
    </div>
  ),
}

export const BrutalistFooter: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold">Page Content</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
      <Footer className="bg-primary text-primary-foreground">
        <FooterContent>
          <div className="mb-8">
            <h2 className="text-4xl font-display font-bold mb-4">Level AI</h2>
            <p className="text-lg max-w-2xl">
              Brutalist design meets cutting-edge AI. Transform your customer service
              with conversation intelligence that actually works.
            </p>
          </div>
          <FooterGrid className="mb-8">
            <FooterSection>
              <FooterTitle className="text-primary-foreground">Product</FooterTitle>
              <FooterLink href="#" className="text-primary-foreground hover:underline">Features</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">Pricing</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">API</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle className="text-primary-foreground">Company</FooterTitle>
              <FooterLink href="#" className="text-primary-foreground hover:underline">About</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">Blog</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">Careers</FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterTitle className="text-primary-foreground">Connect</FooterTitle>
              <FooterLink href="#" className="text-primary-foreground hover:underline">Twitter</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">LinkedIn</FooterLink>
              <FooterLink href="#" className="text-primary-foreground hover:underline">GitHub</FooterLink>
            </FooterSection>
            <FooterSection>
              <Button variant="secondary" className="w-full shadow-md">
                Get Started Free
              </Button>
            </FooterSection>
          </FooterGrid>
          <div className="border-t-2 border-primary-foreground pt-8">
            <FooterBottom>
              <p className="text-primary-foreground">© 2024 Level AI. No BS. Just Results.</p>
            </FooterBottom>
          </div>
        </FooterContent>
      </Footer>
    </div>
  ),
}