"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { CONFERENCE } from "@/constants/conference"


const scheduleItems = [
  [
      { time: "8:00AM - 9:15AM", title: "Registration" },
      { time: "9:15AM - 9:30AM", title: "Inaugural Function" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech (Session 1)" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "1st Session" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 02:30PM", title: "Keynote Speech" },
      { time: "2:30PM - 5:00PM", title: "2nd Session" },
  ],
  [
      { time: "9:00AM - 9:30AM", title: "Registration" },
      { time: "9:30AM - 10:00AM", title: "Closing Ceremony Opening Remarks" },
      { time: "10:00AM - 11:00AM", title: "Final Keynote Speech" },
      { time: "11:00AM - 11:15AM", title: "Coffee Break" },
      { time: "11:15AM - 12:45PM", title: "Panel Discussion: Future of Sustainability" },
      { time: "12:45PM - 2:00PM", title: "Networking Lunch" },
      { time: "2:00PM - 3:30PM", title: "Workshops and Breakout Sessions" },
      { time: "3:30PM - 4:00PM", title: "Closing Remarks and Next Steps" },
      { time: "4:00PM - 5:00PM", title: "Farewell Reception" },
  ],
]

const formatScheduleDate = (day) => new Date(Date.UTC(
  CONFERENCE.scheduleDates.year,
  CONFERENCE.scheduleDates.month,
  day,
)).toLocaleDateString("en-US", { month: "long", day: "numeric", timeZone: "UTC" })

const scheduleData = scheduleItems.map((items, index) => ({
  date: `${formatScheduleDate(CONFERENCE.scheduleDates.days[index])} | ${index === 0 ? "Registration" : "Closing Day"}`,
  items,
}))

export default function ConferenceSchedule() {
  const startDate = new Date(
    CONFERENCE.scheduleDates.year,
    CONFERENCE.scheduleDates.month,
    CONFERENCE.scheduleDates.days[0],
  )
  const [selectedDates, setSelectedDates] = useState(
    CONFERENCE.scheduleDates.days.map((day) => new Date(
      CONFERENCE.scheduleDates.year,
      CONFERENCE.scheduleDates.month,
      day,
    )),
  )

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Shaping Tomorrow&apos;s Sustainable Landscape
          </h1>
          <p className="text-muted-foreground">
            Join us {CONFERENCE.date} for two days of cutting-edge insights and networking. Reserve your spot today!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <Card className="border-primary">
            <CardHeader>
              <CardTitle>{startDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="multiple"
                selected={selectedDates}
                onSelect={setSelectedDates}
                month={startDate}
                className="w-full"
                classNames={{
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 mr-0.5",
                  day_today: "bg-orange-100 text-orange-900",
                }}

              />
            </CardContent>
          </Card>

          <ScrollArea className="h-[600px]">
            <div className="space-y-8">
              {scheduleData.map((day, index) => (
                <Card key={index} className="border-primary/50">
                  <CardHeader>
                    <CardTitle>{day.date}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {day.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={cn(
                            "grid grid-cols-[140px_1fr] gap-4 p-3 rounded-lg",
                            "bg-primary/5 hover:bg-primary/10 transition-colors"
                          )}
                        >
                          <div className="text-sm font-medium text-blue-900">
                            {item.time}
                          </div>
                          <div className="text-sm">{item.title}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

