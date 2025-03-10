import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { COLORS } from '../Components/Color'
import { useNavigation } from '@react-navigation/native'
import CustomVectorIcons from '../Components/CustomVectorIcons'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Dropdown } from "react-native-element-dropdown";

const ViewAttendanceScreen = () => {
  const navigation = useNavigation()
  const bottomSheetRef = useRef()
  const [underSelectedYear, setUnderSelectedYear] = useState("2025")
  const [selectedDate, setSelectedDate] = useState('March 2025')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedMonth, setSelectedMonth] = useState('March')
  const [calendarData, setCalendarData] = useState([])

  const years = Array.from({ length: 10 }, (_, i) => ({
    label: `${new Date().getFullYear() - 5 + i}`,
    value: `${new Date().getFullYear() - 5 + i}`
  }))

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const customWeek = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Str"]

  // Attendance data with specific colors
  const attendanceDataTemplate = [
    { status: 'Present', count: 0, color: '#34C759' },    // Green
    { status: 'Absent', count: 0, color: '#FF3B30' },     // Red
    { status: 'Half Day', count: 0, color: '#FF9500' },   // Orange
    { status: 'Paid Leave', count: 0, color: '#007AFF' }, // Blue
    { status: 'Week Off', count: 0, color: '#5856D6' },   // Purple
  ]

  // Sample attendance status (this could come from an API)
  const [attendanceStatus, setAttendanceStatus] = useState({
    "1": "Present", "2": "Present", "3": "Absent", "4": "Half Day",
    "5": "Paid Leave", "6": "Week Off", "7": "Present", "8": "Present",
    "9": "Absent", "10": "Present", "11": "Half Day", "12": "Present",
    "13": "Week Off", "14": "Present", "15": "Present", "16": "Absent",
    "17": "Present", "18": "Half Day", "19": "Paid Leave", "20": "Present",
    "21": "Week Off", "22": "Present", "23": "Present", "24": "Absent",
    "25": "Present", "26": "Half Day", "27": "Present", "28": "Week Off",
    "29": "Present", "30": "Present", "31": "Absent"
  })

  // Function to generate calendar data dynamically
  const generateCalendar = (month, year) => {
    const monthIndex = months.indexOf(month)
    const firstDay = new Date(year, monthIndex, 1)
    const lastDay = new Date(year, monthIndex + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    let calendar = []
    let week = Array(7).fill("")
    let dayCount = 1

    // Fill the first week
    for (let i = startingDay; i < 7 && dayCount <= daysInMonth; i++) {
      week[i] = `${dayCount}`
      dayCount++
    }
    calendar.push([...week])

    // Fill remaining weeks
    while (dayCount <= daysInMonth) {
      week = Array(7).fill("")
      for (let i = 0; i < 7 && dayCount <= daysInMonth; i++) {
        week[i] = `${dayCount}`
        dayCount++
      }
      calendar.push([...week])
    }

    // Fill remaining slots with empty strings if needed
    if (calendar[calendar.length - 1].some(day => day !== "")) {
      week = Array(7).fill("")
      calendar.push(week)
    }

    return calendar
  }

  // Calculate attendance counts
  const calculateAttendanceData = () => {
    return attendanceDataTemplate.map(item => {
      const count = Object.values(attendanceStatus).filter(status => status === item.status).length
      return { ...item, count }
    })
  }

  // Update calendar when month/year changes
  useEffect(() => {
    const newCalendar = generateCalendar(selectedMonth, selectedYear)
    setCalendarData(newCalendar)
  }, [selectedMonth, selectedYear])

  // Handle month selection
  const handleMonthSelect = (month) => {
    setSelectedMonth(month)
  }

  // Handle confirm action
  const handleDateSelect = () => {
    setSelectedYear(underSelectedYear)
    setSelectedDate(`${selectedMonth} ${underSelectedYear}`)
    bottomSheetRef.current.close()
    // Here you could fetch new attendance data based on selected month/year
  }

  // Function to get background color based on attendance status
  const getBackgroundColor = (day) => {
    if (!day) return 'transparent'
    const status = attendanceStatus[day]
    const attendanceItem = attendanceDataTemplate.find(item => item.status === status)
    return attendanceItem ? attendanceItem.color : 'transparent'
  }

  const attendanceData = calculateAttendanceData()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      <View style={{
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        gap: 10,
        alignItems: "center"
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CustomVectorIcons
            name={"arrowleft"}
            color={COLORS.white}
            size={24}
            iconSet={"AntDesign"}
          />
        </TouchableOpacity>
        <View style={{
          height: 33,
          width: 33,
          borderRadius: 20,
          backgroundColor: COLORS.orange,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text style={{
            fontSize: 24,
            color: COLORS.white,
            textAlign: "center",
            marginTop: -3,
            fontWeight: "400"
          }}>
            A
          </Text>
        </View>
        <Text style={{
          fontSize: 18,
          color: COLORS.white,
          fontWeight: "500"
        }}>
          Khalid Pathan
        </Text>
      </View>

      {/* Attendance Info */}
      <View style={{
        flexDirection: "row",
        backgroundColor: "#F7FFA2",
        padding: 10,
        alignItems: "center",
        gap: 10
      }}>
        <CustomVectorIcons
          name={"alert-circle"}
          size={24}
          color={COLORS.red}
          iconSet={"Feather"}
        />
        <Text style={{
          fontSize: 16,
          color: COLORS.red,
          fontWeight: "400"
        }}>
          Attendance For
        </Text>
        <TouchableOpacity
          onPress={() => bottomSheetRef.current.open()}
          style={{
            borderRadius: 30,
            borderWidth: 1,
            borderColor: COLORS.border,
            backgroundColor: COLORS.white,
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            gap: 5
          }}
        >
          <CustomVectorIcons
            name={"calendar-today"}
            iconSet={"MaterialCommunityIcons"}
            color={COLORS.black}
            size={20}
          />
          <Text style={{
            fontSize: 14,
            fontWeight: "500",
            color: COLORS.black
          }}>
            {selectedDate}
          </Text>
          <CustomVectorIcons
            name={"arrow-drop-down"}
            iconSet={"MaterialIcons"}
            color={COLORS.black}
            size={22}
          />
        </TouchableOpacity>
      </View>

      {/* Attendance Summary */}
      <View style={{ paddingHorizontal: 15 }}>
        <View style={{
          marginTop: 10,
          backgroundColor: COLORS.white,
          borderRadius: 12,
          paddingHorizontal: 10,
          elevation: 5
        }}>
          {attendanceData.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                borderBottomWidth: index === attendanceData.length - 1 ? 0 : 0.7,
                borderBottomColor: COLORS.gray,
              }}
            >
              <View style={{
                width: 4,
                height: 30,
                backgroundColor: item.color,
                borderRadius: 2,
                marginRight: 15,
              }} />
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.gray,
                  fontWeight: '500',
                }}>
                  {item.status}
                </Text>
                <View style={{
                  backgroundColor: `${item.color}20`,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                  minWidth: 40,
                  alignItems: 'center',
                }}>
                  <Text style={{
                    fontSize: 16,
                    color: item.color,
                    fontWeight: '600',
                  }}>
                    {item.count}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Calendar Section */}
      <ScrollView style={{ padding: 20 }}>
        {/* Custom Week Days */}
        <View style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 10,
        }}>
          {customWeek.map((item, index) => (
            <Text
              key={index}
              style={{
                fontSize: 14,
                color: COLORS.black,
                fontWeight: '500',
                flex: 1,
                textAlign: 'center'
              }}
            >
              {item}
            </Text>
          ))}
        </View>

        {/* Month Dates */}
        {calendarData.map((week, weekIndex) => (
          <View
            key={weekIndex}
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 5
            }}
          >
            {week.map((day, dayIndex) => (
              <Text
                key={dayIndex}
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  flex: 1,
                  textAlign: 'center',
                  padding: 7,
                  backgroundColor: getBackgroundColor(day),
                  borderRadius: 5,
                  margin:5,
                  fontWeight:"500"
                }}
              >
                {day}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Sheet */}
      <RBSheet
        ref={bottomSheetRef}
        height={500}
        openDuration={250}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white
          },
          draggableIcon: {
            backgroundColor: COLORS.gray
          },
        }}
      >
        <View style={{ flex: 1, padding: 20 }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              padding: 8,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 20,
              marginBottom: 10
            }}
            onPress={() => bottomSheetRef.current.close()}
          >
            <CustomVectorIcons
              name="close"
              iconSet="MaterialIcons"
              size={20}
              color={COLORS.black}
            />
          </TouchableOpacity>
          {/* Select Year */}
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.black }}>
              Select Year
            </Text>
            <Dropdown
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: COLORS.gray,
                paddingVertical: 5,
                paddingHorizontal: 10,
                width: 120,
                backgroundColor: "white",
              }}
              data={years}
              labelField="label"
              valueField="value"
              placeholder={underSelectedYear}
              value={underSelectedYear}
              onChange={(item) => setUnderSelectedYear(item.value)}
            />
          </View>

          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '600',
              color: COLORS.black,
              marginBottom: 10
            }}>
              Select Month
            </Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 60 }}>
              {months.map((month) => (
                <TouchableOpacity
                  key={month}
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    marginBottom: 20
                  }}
                  onPress={() => handleMonthSelect(month)}
                >
                  <View style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: COLORS.gray,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    {selectedMonth === month && (
                      <View style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: COLORS.orange
                      }} />
                    )}
                  </View>
                  <Text style={{
                    fontSize: 14,
                    color: COLORS.black
                  }}>
                    {month}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.orange,
                padding: 12,
                borderRadius: 10,
                alignItems: 'center',
              }}
              onPress={handleDateSelect}
            >
              <Text style={{
                color: COLORS.white,
                fontSize: 16,
                fontWeight: '600'
              }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  )
}

export default ViewAttendanceScreen