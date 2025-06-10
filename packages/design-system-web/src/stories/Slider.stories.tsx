import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from '../components/ui/slider'
import { useState } from 'react'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
}

export const Steps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
}

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState([50])
    
    return (
      <div className="w-80 space-y-4">
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
        <div className="text-center text-sm text-muted-foreground">
          Value: {value[0]}
        </div>
      </div>
    )
  },
}

export const Temperature: Story = {
  render: () => {
    const [temperature, setTemperature] = useState([20])
    
    return (
      <div className="w-80 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Temperature</label>
          <Slider
            value={temperature}
            onValueChange={setTemperature}
            max={30}
            min={10}
            step={0.5}
          />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>10°C</span>
          <span className="font-semibold">{temperature[0]}°C</span>
          <span>30°C</span>
        </div>
      </div>
    )
  },
}

export const Volume: Story = {
  render: () => {
    const [volume, setVolume] = useState([30])
    
    return (
      <div className="w-80 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Volume</label>
            <span className="text-sm text-muted-foreground">{volume[0]}%</span>
          </div>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="[&_[role=slider]]:bg-sunshine"
          />
        </div>
      </div>
    )
  },
}

export const PriceRange: Story = {
  render: () => {
    const [price, setPrice] = useState([100, 400])
    
    return (
      <div className="w-80 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <Slider
            value={price}
            onValueChange={setPrice}
            max={1000}
            min={0}
            step={50}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="text-muted-foreground">Min: ${price[0]}</div>
          <div className="text-muted-foreground">Max: ${price[1]}</div>
        </div>
      </div>
    )
  },
}