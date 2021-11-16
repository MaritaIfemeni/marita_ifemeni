class Clock:
    def __init__(self, time) -> None:
        self.time = time

    def tick(self) -> int:
        self.time += 1
        return self.time

    def alarm(self) -> str:
        return "no alarm"

class AlarmClock(Clock):
    alarm_time = 10
    def __init__(self, time) -> None:
        super().__init__(time)
        if time >= 10:
            print("RING RING MOTHERFU*KER")

    def alarm(self) -> str:
        return f"Time is now: {self.time}\nAlarm set for {self.alarm_time}"

def main():
    kello = Clock(2)
    print(kello.tick())
    print(kello.tick())
    print(kello.alarm())
    herätyskello = AlarmClock(kello.time)
    print(herätyskello.alarm())
    herätyskello2 = AlarmClock(11)
    print(herätyskello2.time)
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    print(kello.tick())
    herätyskello3 = AlarmClock(kello.time)
    print(herätyskello3.time)

if __name__ == '__main__':
    main()
