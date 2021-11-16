import datetime
import calendar
date = (input("Give date in a form xx.xx.xxxx: "))

def findDay(date):
    born = datetime.datetime.strptime(date, '%d.%m.%Y').weekday()
    return (calendar.day_name[born])

print(findDay(date))