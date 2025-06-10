import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent } from '../components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">2</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">4</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">5</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const WithDots: Story = {
  args: {},
  render: () => (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots />
    </Carousel>
  ),
}

export const AutoPlay: Story = {
  args: {},
  render: () => (
    <Carousel className="w-full max-w-xs" autoPlay autoPlayInterval={2000}>
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-sunshine">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                    <p className="text-sm text-muted-foreground mt-2">Auto-playing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  ),
}

export const ImageCarousel: Story = {
  args: {},
  render: () => (
    <Carousel className="w-full max-w-lg" loop>
      <CarouselContent>
        <CarouselItem>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-sunshine to-amberglow rounded-lg flex items-center justify-center">
              <div className="text-center text-earthstone">
                <h3 className="text-2xl font-bold">Level AI Analytics</h3>
                <p className="text-sm">Real-time customer insights</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-terragreen to-verdantspring rounded-lg flex items-center justify-center">
              <div className="text-center text-paledawn">
                <h3 className="text-2xl font-bold">Agent Assist</h3>
                <p className="text-sm">AI-powered conversation support</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-sunsetcoral to-amberglow rounded-lg flex items-center justify-center">
              <div className="text-center text-earthstone">
                <h3 className="text-2xl font-bold">Quality Monitoring</h3>
                <p className="text-sm">Automated quality assurance</p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots />
    </Carousel>
  ),
}

export const ProductShowcase: Story = {
  args: {},
  render: () => (
    <div className="w-full max-w-4xl">
      <Carousel loop>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Level AI Platform</h2>
                    <p className="text-muted-foreground mb-6">
                      Transform customer service with AI-powered conversation intelligence. 
                      Get real-time insights and improve agent performance.
                    </p>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-sunshine text-earthstone rounded-full text-sm font-medium">
                        Enterprise Ready
                      </div>
                      <div className="px-3 py-1 bg-terragreen text-paledawn rounded-full text-sm font-medium">
                        SOC 2 Compliant
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-sunshine/20 to-amberglow/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">🤖</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Real-time Analytics</h2>
                    <p className="text-muted-foreground mb-6">
                      Monitor customer sentiment, track KPIs, and get actionable insights 
                      from every conversation in real-time.
                    </p>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-terragreen text-paledawn rounded-full text-sm font-medium">
                        Live Monitoring
                      </div>
                      <div className="px-3 py-1 bg-amberglow text-earthstone rounded-full text-sm font-medium">
                        Custom Reports
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-terragreen/20 to-verdantspring/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">📊</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}