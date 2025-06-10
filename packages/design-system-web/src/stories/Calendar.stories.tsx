import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Calendar } from '../components/ui/calendar'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
}

export const Range: Story = {
  args: {},
  render: () => {
    const [dateRange, setDateRange] = useState<{from: Date | undefined, to: Date | undefined} | undefined>()
    
    return (
      <Calendar
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        className="rounded-md border"
        numberOfMonths={2}
      />
    )
  },
}

export const Multiple: Story = {
  args: {},
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([])
    
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    )
  },
}

export const Disabled: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    const disabledDays = [
      new Date(2024, 6, 4),
      new Date(2024, 6, 11),
      new Date(2024, 6, 18),
      new Date(2024, 6, 25),
    ]
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border"
      />
    )
  },
}

export const MinMax: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    const today = new Date()
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
    
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fromDate={today}
        toDate={nextMonth}
        className="rounded-md border"
      />
    )
  },
}

export const Controlled: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return (
      <div className="space-y-4">
        <div className="text-sm">
          Selected date: {date ? date.toLocaleDateString() : 'None'}
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setDate(new Date())}
            className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
          >
            Today
          </button>
          <button
            onClick={() => setDate(undefined)}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    )
  },
}