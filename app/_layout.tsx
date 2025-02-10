import {Stack} from "expo-router";

function RootLayout(){
    return(
        <>
            <Stack>
                <Stack.Screen name="DashBoard" options={{headerTitle:"Dashboard"}}/>
                <Stack.Screen name="Customer" options={{headerTitle:"Customer"}}/>
            </Stack>
        </>
    )

}
export default RootLayout