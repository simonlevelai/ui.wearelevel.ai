import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

interface CarouselContextType {
  currentIndex: number
  setCurrentIndex: (index: number) => void
  itemsCount: number
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const CarouselContext = React.createContext<CarouselContextType | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel")
  }
  return context
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  loop?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, loop = false, autoPlay = false, autoPlayInterval = 3000, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [itemsCount, setItemsCount] = React.useState(0)

    const canScrollPrev = loop ? true : currentIndex > 0
    const canScrollNext = loop ? true : currentIndex < itemsCount - 1

    const scrollPrev = React.useCallback(() => {
      if (canScrollPrev) {
        setCurrentIndex((prev) => {
          if (prev <= 0) {
            return loop ? itemsCount - 1 : 0
          }
          return prev - 1
        })
      }
    }, [canScrollPrev, loop, itemsCount])

    const scrollNext = React.useCallback(() => {
      if (canScrollNext) {
        setCurrentIndex((prev) => {
          if (prev >= itemsCount - 1) {
            return loop ? 0 : itemsCount - 1
          }
          return prev + 1
        })
      }
    }, [canScrollNext, loop, itemsCount])

    React.useEffect(() => {
      if (!autoPlay) return

      const interval = setInterval(() => {
        scrollNext()
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }, [autoPlay, autoPlayInterval, scrollNext])

    React.useEffect(() => {
      const count = React.Children.count(children)
      setItemsCount(count)
    }, [children])

    const contextValue: CarouselContextType = {
      currentIndex,
      setCurrentIndex,
      itemsCount,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
    }

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { currentIndex } = useCarousel()

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 z-10",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 z-10",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { currentIndex, setCurrentIndex, itemsCount } = useCarousel()

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-2 pt-4",
        className
      )}
      {...props}
    >
      {Array.from({ length: itemsCount }, (_, index) => (
        <button
          key={index}
          className={cn(
            "h-2 w-2 rounded-full transition-colors",
            currentIndex === index
              ? "bg-primary"
              : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
          )}
          onClick={() => setCurrentIndex(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}