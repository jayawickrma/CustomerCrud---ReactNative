import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// Props type: you can adjust the types as needed.
interface CustomerProps {
    children?: React.ReactNode;
    setFirstName: (text: string) => void;
    setLastName: (text: string) => void;
    setAddress: (text: string) => void;
    setEmail: (text: string) => void;
    handleSubmit: () => void;
}

const Customer: React.FC<CustomerProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* Heading */}
                <Text style={styles.heading}>{props.children || 'Customer Form'}</Text>

                {/* First Name */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter First Name"
                        onChangeText={props.setFirstName}
                    />
                </View>

                {/* Last Name */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Last Name"
                        onChangeText={props.setLastName}
                    />
                </View>

                {/* Address */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Address"
                        onChangeText={props.setAddress}
                    />
                </View>

                {/* Email */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        keyboardType="email-address"
                        onChangeText={props.setEmail}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                    <Text style={styles.buttonText}>{props.children || 'Submit'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Customer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6', // Tailwind gray-100 equivalent
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        width: '100%',
        maxWidth: 400,           // similar to max-w-md in Tailwind
        backgroundColor: '#fff',
        borderRadius: 8,         // rounded corners
        padding: 24,             // p-6 equivalent (24px)
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,            // for Android shadow
    },
    heading: {
        fontSize: 24,            // similar to text-2xl
        fontWeight: '600',       // font-semibold
        color: '#1F2937',        // Tailwind gray-800 equivalent
        marginBottom: 24,        // mb-6 equivalent
        textAlign: 'center',
    },
    fieldContainer: {
        marginBottom: 16,        // spacing between fields (mb-4)
    },
    label: {
        fontSize: 14,            // text-sm equivalent
        fontWeight: '500',       // font-medium
        color: '#374151',        // Tailwind gray-700 equivalent
        marginBottom: 4,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#D1D5DB',  // Tailwind border-gray-300 equivalent
        borderRadius: 4,
        paddingHorizontal: 12,   // similar to px-4
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#2563EB', // Tailwind blue-600 equivalent
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 16,            // spacing on top of button
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});
