import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { COLORS } from './Color'; // Assuming you have this file from previous code

const HistoryComponent = () => {
    // Sample leave history data (replace with your actual data source)
    const leaveHistory = [
        {
            id: 1,
            type: "Sick Leave",
            date: "2025-03-01",
            status: "Pending",
            days: 2
        },
        {
            id: 2,
            type: "Casual Leave",
            date: "2025-02-25",
            status: "Approved",
            days: 1
        },
        {
            id: 3,
            type: "Privilege Leave",
            date: "2025-02-20",
            status: "Rejected",
            days: 3
        }
    ];

    return (
        <ScrollView style={{
            flex: 1,
            paddingTop: 20
        }}>
            {/* Header */}
            <Text style={{
                fontSize: 16,
                fontWeight: "600",
                paddingLeft: 20,marginBottom:20
            }}>
                Leave History
            </Text>

            {/* History List or No History Message */}
            {leaveHistory.length > 0 ? (
                <View style={{ paddingHorizontal: 20 }}>
                    {leaveHistory.map((leave) => (
                        <View
                            key={leave.id}
                            style={{
                                backgroundColor: '#f5f5f5',
                                padding: 15,
                                borderRadius: 10,
                                marginBottom: 15,
                                elevation: 5
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontWeight: '600',
                                    fontSize: 16
                                }}>
                                    {leave.type}
                                </Text>
                                <Text style={{
                                    color: COLORS.gray,
                                    fontSize: 14
                                }}>
                                    {leave.days} day{leave.days > 1 ? 's' : ''}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 8
                            }}>
                                <Text style={{
                                    color: COLORS.gray,
                                    fontSize: 14
                                }}>
                                    Date: {leave.date}
                                </Text>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: 14,
                                    color: leave.status === 'Pending' ? '#FFA500' :
                                        leave.status === 'Approved' ? '#008000' :
                                            '#FF0000'
                                }}>
                                    {leave.status}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            ) : (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 50
                }}>
                    <Text style={{
                        color: COLORS.gray,
                        fontSize: 18,
                        fontWeight: '600'
                    }}>
                        No Leave History
                    </Text>
                </View>
            )}
        </ScrollView>
    );
};

export default HistoryComponent;