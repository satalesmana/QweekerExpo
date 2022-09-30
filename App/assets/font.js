import { useFonts } from 'expo-font';

export const onLoadFont=()=>{
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('./font/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./font/Poppins-SemiBold.ttf'),
      });

    return fontsLoaded;
}