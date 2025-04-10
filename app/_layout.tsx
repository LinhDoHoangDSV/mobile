// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import "react-native-reanimated";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { useColorScheme } from "@/hooks/useColorScheme";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);

//   // Check if it's the first launch
//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value === null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);

//   // Hide splash screen when fonts are loaded
//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   // Render nothing until both fonts and first-launch check are complete
//   if (!loaded || isFirstLaunch === null) {
//     return null;
//   }

//   // Main render
//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "@/hooks/useColorScheme";

// Ngăn splash screen tự động ẩn trước khi tải tài nguyên
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  // Kiểm tra xem có phải lần đầu chạy ứng dụng không
  useLayoutEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      console.log(value);

      if (value === null) {
        console.log("First launch");
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        console.log("Not first launch");
        router.replace("/home"); // Chuyển hướng đến tabs nếu không phải lần đầu
        setIsFirstLaunch(false);
      }
    });
  }, []);

  // Ẩn splash screen khi font đã tải xong
  useEffect(() => {
    if (loaded && isFirstLaunch !== null) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isFirstLaunch]);

  // Không hiển thị gì cho đến khi font và kiểm tra lần đầu hoàn tất
  // if (!loaded || isFirstLaunch === null) {
  //   return null;
  // }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Nếu là lần đầu, hiển thị onboarding, nếu không thì chuyển thẳng đến tabs */}
        <Stack.Screen
          name={isFirstLaunch ? "index" : "(tabs)"}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
