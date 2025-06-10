import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker, DateRangePicker } from '../components/ui/date-picker'
import { Label } from '../components/ui/label'

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    return <DatePicker date={date} onDateChange={setDate} />
  },
}

export const WithLabel: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="date">Date of birth</Label>
        <DatePicker 
          date={date} 
          onDateChange={setDate}
          placeholder="Select your date of birth"
          className="w-full"
        />
      </div>
    )
  },
}

export const Preselected: Story = {
  args: {},
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return <DatePicker date={date} onDateChange={setDate} />
  },
}

export const Disabled: Story = {
  args: {},
  render: () => {
    return <DatePicker disabled placeholder="This date picker is disabled" />
  },
}

export const DateRange: Story = {
  args: {},
  render: () => {
    const [dateRange, setDateRange] = useState<{from: Date | undefined, to: Date | undefined} | undefined>()
    
    return (
      <DateRangePicker 
        dateRange={dateRange} 
        onDateRangeChange={setDateRange}
        placeholder="Select date range"
      />
    )
  },
}

export const FormExample: Story = {
  args: {},
  render: () => {
    const [startDate, setStartDate] = useState<Date | undefined>()
    const [endDate, setEndDate] = useState<Date | undefined>()
    const [dateRange, setDateRange] = useState<{from: Date | undefined, to: Date | undefined} | undefined>()
    
    return (
      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-2">
          <Label htmlFor="start-date">Start Date</Label>
          <DatePicker 
            date={startDate} 
            onDateChange={setStartDate}
            placeholder="Select start date"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="end-date">End Date</Label>
          <DatePicker 
            date={endDate} 
            onDateChange={setEndDate}
            placeholder="Select end date"
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date-range">Date Range</Label>
          <DateRangePicker 
            dateRange={dateRange} 
            onDateRangeChange={setDateRange}
            placeholder="Select date range"
            className="w-full"
          />
        </div>
        
        <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
          <div><strong>Start Date:</strong> {startDate ? startDate.toLocaleDateString() : 'Not selected'}</div>
          <div><strong>End Date:</strong> {endDate ? endDate.toLocaleDateString() : 'Not selected'}</div>
          <div><strong>Date Range:</strong> {
            dateRange?.from && dateRange?.to 
              ? `${dateRange.from.toLocaleDateString()} - ${dateRange.to.toLocaleDateString()}`
              : dateRange?.from 
                ? `${dateRange.from.toLocaleDateString()} - ...`
                : 'Not selected'
          }</div>
        </div>
      </div>
    )
  },
}

export const ReportingDateRange: Story = {
  args: {},
  render: () => {
    const [reportRange, setReportRange] = useState<{from: Date | undefined, to: Date | undefined} | undefined>({
      from: new Date(2024, 0, 1),
      to: new Date()
    })
    
    const presets = [
      {
        label: "Today",
        range: { from: new Date(), to: new Date() }
      },
      {
        label: "Yesterday", 
        range: { 
          from: new Date(Date.now() - 86400000), 
          to: new Date(Date.now() - 86400000) 
        }
      },
      {
        label: "Last 7 days",
        range: { 
          from: new Date(Date.now() - 7 * 86400000), 
          to: new Date() 
        }
      },
      {
        label: "Last 30 days",
        range: { 
          from: new Date(Date.now() - 30 * 86400000), 
          to: new Date() 
        }
      },
      {
        label: "This year",
        range: { 
          from: new Date(new Date().getFullYear(), 0, 1), 
          to: new Date() 
        }
      }
    ]
    
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Reporting Period</Label>
          <DateRangePicker 
            dateRange={reportRange} 
            onDateRangeChange={setReportRange}
            placeholder="Select reporting period"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Quick Presets</Label>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, index) => (
              <button
                key={index}
                onClick={() => setReportRange(preset.range)}
                className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-md"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  },
}