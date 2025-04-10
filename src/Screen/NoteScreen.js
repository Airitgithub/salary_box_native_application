import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../Components/Color';
import CustomVectorIcons from '../Components/CustomVectorIcons';
import { useNavigation } from '@react-navigation/native';

const NoteScreen = () => {
    const navigation = useNavigation();
    const [chatInput, setChatInput] = useState('');
    const [notes, setNotes] = useState([]); // Changed to store note objects

    const handleSend = () => {
        if (chatInput.trim()) {
            // Create a new note object with name and message
            const newNote = {
                name: "Khalid Pathan", // You can modify this to be dynamic if needed
                message: chatInput,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            setNotes([...notes, newNote]);
            setChatInput('');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header */}
            <View style={{
                width: '100%',
                padding: 10,
                backgroundColor: COLORS.white,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingVertical: 15,
                borderBottomColor: COLORS.bgCard,
                borderBottomWidth: 1,
                elevation: 10
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CustomVectorIcons
                        name={'arrowleft'}
                        color={COLORS.black}
                        size={24}
                        iconSet={'AntDesign'}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 17,
                    color: COLORS.black,
                    fontWeight: '600'
                }}>
                    My Notes
                </Text>
            </View>

            {/* Notes Display */}
            <View style={{ flex: 1, padding: 10 }}>
                {notes.map((note, index) => (
                    <View
                        key={index}
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.bgCard,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <View style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: COLORS.orange,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    color: COLORS.white,
                                    bottom: 2
                                }}>
                                    A
                                </Text>
                            </View>
                            <View style={{ gap: 7 }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '500',
                                    color: COLORS.gray
                                }}>
                                    {note.name}
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    color: COLORS.black
                                }}>
                                    {note.message}
                                </Text>
                            </View>
                        </View>
                        <View style={{ gap: 7,justifyContent:"center",alignItems:"center" }}>
                            <Text style={{
                                fontSize: 12,
                                color: COLORS.gray,
                                fontWeight: '500'
                            }}>
                                {note.timestamp}
                            </Text>
                            <CustomVectorIcons name={"whatsapp"} iconSet={"FontAwesome"} size={24}/>
                        </View>
                    </View>
                ))}
            </View>

            {/* Footer with Chat Input and Send Icon */}
            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundColor: COLORS.white,
                padding: 10,
                borderTopWidth: 1,
                borderTopColor: COLORS.bgCard,
                elevation: 10,
                alignItems: 'center'
            }}>
                <TextInput
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.ScreenColor,
                        borderRadius: 25,
                        padding: 10,
                        paddingLeft:25,
                        fontSize: 16,
                        color: COLORS.black,
                        marginRight: 10,
                        marginLeft:10
                    }}
                    placeholder="Type a message..."
                    value={chatInput}
                    onChangeText={setChatInput}
                    onSubmitEditing={handleSend}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.orange,
                        borderRadius: 20,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={handleSend}
                >
                    <CustomVectorIcons
                        name={'send'}
                        color={COLORS.white}
                        size={20}
                        iconSet={'Feather'}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NoteScreen;