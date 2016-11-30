// source: https://github.com/MilanKacurak/FormatGoogleCalendar and https://www.tutorialspoint.com/jquery/ajax-jquery-getjson.htm


$(document).ready(function() {
			
  $("#driver").click(function(event){
    $.getJSON('https://www.googleapis.com/calendar/v3/calendars/andrew.cmu.edu_333234353933332d373938@resource.calendar.google.com/events?key=AIzaSyD8whTj2d-Qune9-DfAUoCS8FNbgMvTghg', function(data) {
      var result = [];
      var config;
      var dayNames = true;
       

      // ------ Handling Date Info -----

      //Get temp array with information abou day in followin format: [day number, month number, year, hours, minutes]
      var getDateInfo = function(date) {
        date = new Date(date);
        return [date.getDate(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes(), 0, 0];
      };

      //Get month name according to index
      var getMonthName = function (month) {
        var monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[month];
      };

      //Get day of the week name according to index
      var getDayName = function (day) {
        var dayNames = [
          'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        return dayNames[day];
      };

      var getDayNameFormatted = function (dateFormatted) {
        return getDayName(getDateFormatted(dateFormatted).getDay()) + ' ';
      };

      var getDateFormatted = function (dateInfo) {
        return new Date(dateInfo[2], dateInfo[1], dateInfo[0], dateInfo[3], dateInfo[4] + 0, 0);
      };

      //Subtract one day
      var subtractOneDay = function (dateInfo) {
        var date = getDateFormatted(dateInfo);
        date.setTime(date.getTime() - 86400000);
        return getDateInfo(date);
      };

      //Subtract one minute
      var subtractOneMinute = function (dateInfo) {
        var date = getDateFormatted(dateInfo);
        date.setTime(date.getTime() - 60000);
        return getDateInfo(date);
      };

        //Transformations for formatting date into human readable format
        var formatDateSameDay = function(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames) {
          var formattedTime = '',
              dayNameStart = '';

          if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
          }

          if (!moreDaysEvent && !isAllDayEvent) {
            formattedTime = ' from ' + getFormattedTime(dateStart) + ' - ' + getFormattedTime(dateEnd);
          }

          //month day, year time-time
          return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2] + formattedTime;
        };

        var formatDateOneDay = function(dateStart, dayNames) {
          var dayName = '';

          if (dayNames) {
            dayName = getDayNameFormatted(dateStart);
          }
          //month day, year
          return dayName + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2];
        };

        var formatDateDifferentDay = function(dateStart, dateEnd, dayNames) {
          var dayNameStart = '',
              dayNameEnd = '';

          if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
          }
          //month day-day, year
          return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + '-' + dayNameEnd + dateEnd[0] + ', ' + dateStart[2];
        };

        var formatDateDifferentMonth = function(dateStart, dateEnd, dayNames) {
          var dayNameStart = '',
              dayNameEnd = '';

          if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
          }
          //month day - month day, year
          return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + '-' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ', ' + dateStart[2];
        };

        var formatDateDifferentYear = function(dateStart, dateEnd, dayNames) {
          var dayNameStart = '',
              dayNameEnd = '';

          if (dayNames) {
            dayNameStart = getDayNameFormatted(dateStart);
            dayNameEnd = getDayNameFormatted(dateEnd);
          }
          //month day, year - month day, year
          return dayNameStart + getMonthName(dateStart[1]) + ' ' + dateStart[0] + ', ' + dateStart[2] + '-' + dayNameEnd + getMonthName(dateEnd[1]) + ' ' + dateEnd[0] + ', ' + dateEnd[2];
        };

        //Check differences between dates and format them
        var getFormattedDate = function(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames) {
          var formattedDate = '';

          if (dateStart[0] === dateEnd[0]) {
            if (dateStart[1] === dateEnd[1]) {
              if (dateStart[2] === dateEnd[2]) {
                //month day, year
                formattedDate = formatDateSameDay(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames);
              } else {
                //month day, year - month day, year
                formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
            } else {
              if (dateStart[2] === dateEnd[2]) {
                //month day - month day, year
                formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
              } else {
                //month day, year - month day, year
                formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
            }
          } else {
            if (dateStart[1] === dateEnd[1]) {
              if (dateStart[2] === dateEnd[2]) {
                //month day-day, year
                formattedDate = formatDateDifferentDay(dateStart, dateEnd, dayNames);
              } else {
                //month day, year - month day, year
                formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
            } else {
              if (dateStart[2] === dateEnd[2]) {
                //month day - month day, year
                formattedDate = formatDateDifferentMonth(dateStart, dateEnd, dayNames);
              } else {
                //month day, year - month day, year
                formattedDate = formatDateDifferentYear(dateStart, dateEnd, dayNames);
              }
            }
          }

          return formattedDate;
        };

        var getFormattedTime = function (date) {
          var formattedTime = '',
              period = 'AM',
              hour = date[3],
              minute = date[4];

          // Handle afternoon.
          if (hour >= 12) {
            period = 'PM';

            if (hour >= 13) {
              hour -= 12;
            }
          }

          // Handle midnight.
          if (hour === 0) {
            hour = 12;
          }

          // Ensure 2-digit minute value.
          minute = (minute < 10 ? '0' : '') + minute;

          // Format time.
          formattedTime = hour + ':' + minute + period;
          
          return formattedTime;
        };   

        var isAllDay = function (dateStart, dateEnd) {
          var dateStartFormatted = getDateFormatted(dateStart),
              dateEndFormatted = getDateFormatted(dateEnd);

          //if start date is midnight and the end date a following day midnight as well
          if ((dateStartFormatted.getTime() === dateEndFormatted.getTime() - 86400000) &&
              dateStartFormatted.getMinutes() === 0 &&
              dateStartFormatted.getHours() === 0) {
              return true;
          }

          return false;
        };





        // ---- Handling the JSON data ---
        data.items.forEach(function addToResultsArray(item) {

                        // if ((typeof item.start !== 'undefined') || (item.start != null)) {
                        //    var dateStart = item.start.date;
                        // }

                        // var today = new Date();
                        // if (dateStart > today) {
                        //    result.push(item);
                        // }

          result.push(item);
          console.log(new Date());
                       
        });
        console.log(result);


        for (i in result) {
          if ((typeof result[i].start !== 'undefined') || (result[i].start != null)) {
            var dateStart = getDateInfo(result[i].start.dateTime || result[i].start.date)
          }
                     
          if ((typeof result[i].end !== 'undefined') || (result[i].end != null)) {
            var dateEnd = getDateInfo(result[i].end.dateTime || result[i].end.date)
          }

          var dateFormatted = getFormattedDate(dateStart, dateEnd, moreDaysEvent, isAllDayEvent, dayNames)

          if ((typeof result[i].end !== 'undefined') || (result[i].end != null)) {
            var moreDaysEvent = (typeof result[i].end.date !== 'undefined');
          }
          var isAllDayEvent = isAllDay(dateStart, dateEnd);

          if (moreDaysEvent) {
            dateEnd = subtractOneDay(dateEnd);
          }

          if (isAllDayEvent) {
            dateEnd = subtractOneMinute(dateEnd);
          }


        $('#stage').append('<p>Time: ' + dateFormatted + '</p>');
        $('#stage').append('<p>Title: ' + result[i].summary + '</p>');
        $('#stage').append('<p>Description: ' + result[i].description + '</p>');
        $('#stage').append('<p>Location: ' + result[i].location + '</p><br><br>');
      }
    });
  });
});






