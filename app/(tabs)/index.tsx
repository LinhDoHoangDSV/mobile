// "use client";

// import { useState, useRef } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
//   SafeAreaView,
//   StatusBar,
//   Animated,
//   Image
// } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// import Svg, {
//   Circle,
//   Path,
//   Defs,
//   LinearGradient,
//   Stop,
// } from "react-native-svg";
// import { useRouter } from "expo-router";

// const { width, height } = Dimensions.get("window");

// const OnboardingScreen = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // const navigation = useNavigation();
//   const router = useRouter();

//   const flatListRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;

//   const handleNext = () => {
//     if (currentIndex < 2) {
//       flatListRef.current?.scrollToIndex({
//         index: currentIndex + 1,
//         animated: true,
//       });
//     } else {
//       // navigation.navigate("/home");
//       router.replace("/home");
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       flatListRef.current?.scrollToIndex({
//         index: currentIndex - 1,
//         animated: true,
//       });
//     }
//   };

//   const handleSkip = () => {
//     // navigation.navigate("/home");
//     router.replace("/home");
//   };

//   // Character component
//   const Character = ({ style }) => (
//     <View style={[styles.characterContainer, style]}>
//       {/* Body */}
//       <View style={styles.body}>
//         {/* Head */}
//         <View style={styles.head}>
//           {/* Face */}
//           <View style={styles.face}>
//             {/* Eyes */}
//             <View style={styles.eyes}>
//               <View style={styles.eye} />
//               <View style={styles.eye} />
//             </View>
//             {/* Smile */}
//             <View style={styles.smile} />
//           </View>

//           {/* Hair */}
//           <View style={styles.hair} />

//           {/* Party Hat */}
//           <View style={styles.partyHat}>
//             <View style={styles.hatBase} />
//             <View style={styles.hatPom} />
//           </View>
//         </View>

//         {/* Shirt */}
//         <View style={styles.shirt} />

//         {/* Arms */}
//         <View style={styles.arms}>
//           <View style={[styles.arm, styles.armLeft]} />
//           <View style={[styles.arm, styles.armRight]} />
//         </View>

//         {/* Pants */}
//         <View style={styles.pants} />

//         {/* Shoes */}
//         <View style={styles.shoes}>
//           <View style={styles.shoe} />
//           <View style={styles.shoe} />
//         </View>
//       </View>

//       {/* Confetti */}
//       <View style={styles.confetti}>
//         {Array.from({ length: 20 }).map((_, i) => (
//           <View
//             key={i}
//             style={[
//               styles.confettiPiece,
//               {
//                 backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4"][i % 3],
//                 top: Math.random() * 300,
//                 left: Math.random() * 300 - 150,
//                 transform: [{ rotate: `${Math.random() * 360}deg` }],
//               },
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );

//   // Coin component
//   const Coin = ({ style }) => (
//     <View style={[styles.coinContainer, style]}>
//       <Svg height="200" width="200" viewBox="0 0 200 200">
//         <Defs>
//           <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
//             <Stop offset="0" stopColor="#FFD700" stopOpacity="1" />
//             <Stop offset="1" stopColor="#FFA500" stopOpacity="1" />
//           </LinearGradient>
//         </Defs>
//         <Circle cx="100" cy="100" r="90" fill="url(#grad)" />
//         <Circle
//           cx="100"
//           cy="100"
//           r="85"
//           fill="url(#grad)"
//           stroke="#E6C200"
//           strokeWidth="2"
//         />

//         {/* Dollar Sign */}
//         <Path
//           d="M100,50 C85,50 75,60 75,75 C75,90 85,95 100,100 C115,105 125,110 125,125 C125,140 115,150 100,150 C85,150 75,140 75,125"
//           stroke="#E6C200"
//           strokeWidth="10"
//           fill="none"
//           strokeLinecap="round"
//         />
//         <Path
//           d="M100,40 L100,60 M100,140 L100,160"
//           stroke="#E6C200"
//           strokeWidth="10"
//           strokeLinecap="round"
//         />

//         {/* Stars around the edge */}
//         {Array.from({ length: 12 }).map((_, i) => {
//           const angle = (i * 30 * Math.PI) / 180;
//           const x = 100 + 75 * Math.cos(angle);
//           const y = 100 + 75 * Math.sin(angle);
//           return (
//             <Path
//               key={i}
//               d={`M${x},${y - 5} L${x + 2},${y - 2} L${x + 5},${y - 2} L${x + 3
//                 },${y + 1} L${x + 4},${y + 4} L${x},${y + 2} L${x - 4},${y + 4
//                 } L${x - 3},${y + 1} L${x - 5},${y - 2} L${x - 2},${y - 2} Z`}
//               fill="#E6C200"
//             />
//           );
//         })}
//       </Svg>
//     </View>
//   );

//   const renderSlide1 = () => (
//     <View style={styles.slide}>
//       <View style={styles.slideContent}>
//         <Coin style={{ marginBottom: 20 }} />
//         <Character style={{ position: "absolute", top: 100 }} />

//         <View style={styles.textContainer}>
//           <Text style={styles.title}>Quick analysis of all expenses</Text>
//           <Text style={styles.description}>
//             All expenses by cards are reflected automatically in the
//             application, and the analytics system helps to control them
//           </Text>
//         </View>
//       </View>
//     </View>
//   );

//   const renderSlide2 = () => (
//     <View style={styles.slide}>
//       <View style={styles.slideContent}>
//         <Coin style={{ marginBottom: 20 }} />
//         <Character style={{ position: "absolute", top: 100 }} />

//         <View style={styles.textContainer}>
//           <Text style={styles.title}>Tips to optimize spending</Text>
//           <Text style={styles.description}>
//             The system notices where you're slipping on the budget and tells you
//             how to optimize costs
//           </Text>
//         </View>
//       </View>
//     </View>
//   );

//   const renderSlide3 = () => (
//     <View style={styles.slide}>
//       <View style={styles.slideContent}>
//         <Coin style={{ marginBottom: 20 }} />
//         <Character style={{ position: "absolute", top: 100 }} />

//         <View style={styles.textContainer}>
//           <Text style={styles.title}>Save for your dreams</Text>
//           <TouchableOpacity style={styles.actionButton} onPress={handleSkip}>
//             <Text
//               style={styles.actionButtonText}
//               onPress={() => router.replace("/home")}
//             >
//               Become a billionaire right now!
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   const slides = [
//     { id: "1", renderSlide: renderSlide1 },
//     { id: "2", renderSlide: renderSlide2 },
//     { id: "3", renderSlide: renderSlide3 },
//   ];

//   const renderItem = ({ item }) => item.renderSlide();

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />

//       <Animated.FlatList
//         ref={flatListRef}
//         data={slides}
//         renderItem={renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         bounces={false}
//         keyExtractor={(item) => item.id}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         onMomentumScrollEnd={(event) => {
//           const index = Math.round(event.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//         scrollEventThrottle={16}
//       />

//       {/* Pagination */}
//       <View style={styles.paginationContainer}>
//         <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
//           <Text style={styles.navButtonText}>{"<"}</Text>
//         </TouchableOpacity>

//         <View style={styles.paginationDots}>
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 {
//                   backgroundColor:
//                     index === currentIndex ? "#5C4DBE" : "#e0e0e0",
//                 },
//               ]}
//             />
//           ))}
//         </View>

//         <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//           <Text style={styles.navButtonText}>{">"}</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   slide: {
//     width,
//     height: height - 100,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 30,
//   },
//   slideContent: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//   },
//   textContainer: {
//     position: "absolute",
//     bottom: 100,
//     width: "100%",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//     paddingHorizontal: 20,
//     lineHeight: 22,
//   },
//   paginationContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     height: 60,
//   },
//   paginationDots: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   navButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#5C4DBE",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   navButtonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   actionButton: {
//     backgroundColor: "#5C4DBE",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginTop: 20,
//   },
//   actionButtonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   // Character styles
//   characterContainer: {
//     width: 150,
//     height: 300,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   body: {
//     alignItems: "center",
//   },
//   head: {
//     width: 60,
//     height: 70,
//     borderRadius: 30,
//     backgroundColor: "#FFE0B2",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },
//   face: {
//     alignItems: "center",
//   },
//   eyes: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: 30,
//     marginTop: 15,
//   },
//   eye: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#333",
//   },
//   smile: {
//     width: 20,
//     height: 10,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10,
//     borderTopWidth: 0,
//     borderLeftWidth: 2,
//     borderRightWidth: 2,
//     borderBottomWidth: 2,
//     borderColor: "#333",
//     marginTop: 5,
//   },
//   hair: {
//     position: "absolute",
//     top: -10,
//     width: 70,
//     height: 40,
//     borderTopLeftRadius: 35,
//     borderTopRightRadius: 35,
//     backgroundColor: "#FF8A65",
//   },
//   partyHat: {
//     position: "absolute",
//     top: -30,
//     left: 20,
//   },
//   hatBase: {
//     width: 0,
//     height: 0,
//     backgroundColor: "transparent",
//     borderStyle: "solid",
//     borderLeftWidth: 15,
//     borderRightWidth: 15,
//     borderBottomWidth: 30,
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#FFC107",
//     transform: [{ rotate: "15deg" }],
//   },
//   hatPom: {
//     position: "absolute",
//     top: -10,
//     left: 5,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "#FF5722",
//   },
//   shirt: {
//     width: 70,
//     height: 60,
//     backgroundColor: "#FFEB3B",
//     borderRadius: 10,
//     marginTop: -10,
//   },
//   arms: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: 120,
//     position: "absolute",
//     top: 100,
//   },
//   arm: {
//     width: 15,
//     height: 60,
//     backgroundColor: "#FFE0B2",
//     borderRadius: 7,
//   },
//   armLeft: {
//     transform: [{ rotate: "-30deg" }],
//   },
//   armRight: {
//     transform: [{ rotate: "30deg" }],
//   },
//   pants: {
//     width: 60,
//     height: 80,
//     backgroundColor: "#64B5F6",
//     borderRadius: 10,
//     marginTop: -10,
//   },
//   shoes: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: 70,
//     marginTop: -5,
//   },
//   shoe: {
//     width: 30,
//     height: 15,
//     backgroundColor: "#EEEEEE",
//     borderRadius: 7,
//   },
//   confetti: {
//     position: "absolute",
//     width: 300,
//     height: 300,
//   },
//   confettiPiece: {
//     position: "absolute",
//     width: 10,
//     height: 5,
//     borderRadius: 1,
//   },

//   // Coin styles
//   coinContainer: {
//     width: 200,
//     height: 200,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default OnboardingScreen;
// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Dimensions,
//   StyleSheet,
//   Image,
//   SafeAreaView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const { width, height } = Dimensions.get("window");

// const slides = [
//   {
//     id: "1",
//     title: "Quick analysis of all expenses",
//     description: "All expenses by cards are reflected automatically in the application, and the analytics system helps to control them.",
//   },
//   {
//     id: "2",
//     title: "Tips to optimize spending",
//     description: "The system notices where you're slipping on the budget and tells you how to optimize costs.",
//   },
//   {
//     id: "3",
//     title: "Save for your dreams",
//     description: "",
//   },
// ];

// const OnboardingScreen = () => {
//   const navigation = useNavigation();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef<FlatList>(null);

//   const handleNext = () => {
//     if (currentIndex < slides.length - 1) {
//       flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
//     }
//   };

//   const renderItem = ({ item }: { item: typeof slides[0] }) => (
//     <View style={styles.slide}>
//       <Image
//         source={require("../../assets/images/figure.png")} // Replace this with your own image path
//         style={styles.image}
//         resizeMode="contain"
//       />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={slides}
//         ref={flatListRef}
//         keyExtractor={(item) => item.id}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onMomentumScrollEnd={(e) => {
//           const index = Math.round(e.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//         renderItem={renderItem}
//       />

//       <View style={styles.pagination}>
//         {slides.map((_, i) => (
//           <View
//             key={i}
//             style={[
//               styles.dot,
//               { backgroundColor: i === currentIndex ? "#333" : "#ccc" },
//             ]}
//           />
//         ))}
//       </View>

//       {currentIndex < slides.length - 1 ? (
//         <View style={styles.buttonRow}>
//           {currentIndex > 0 ? (
//             <TouchableOpacity onPress={handlePrev} style={styles.navButton}>
//               <Text style={styles.navText}>{"<"}</Text>
//             </TouchableOpacity>
//           ) : (
//             <View style={{ width: 48 }} /> // giữ khoảng trống cân nút ">"
//           )}
//           <TouchableOpacity onPress={handleNext} style={styles.navButton}>
//             <Text style={styles.navText}>{">"}</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <TouchableOpacity
//           onPress={() => navigation.navigate("home" as never)}
//           style={styles.getStarted}
//         >
//           <Text style={styles.getStartedText}>Get Started</Text>
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   slide: {
//     width,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   image: {
//     width: width * 0.8,
//     height: height * 0.4,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//     color: "#333",
//   },
//   description: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//     paddingHorizontal: 30,
//   },
//   pagination: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 60,
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   navButton: {
//     backgroundColor: "#5C4DBE",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   navText: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   getStarted: {
//     backgroundColor: "#5C4DBE",
//     paddingHorizontal: 40,
//     paddingVertical: 12,
//     borderRadius: 25,
//     alignSelf: "center",
//     marginBottom: 30,
//   },
//   getStartedText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default OnboardingScreen;
import React, { useRef, useState, useEffect, } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");
// console.log("width", width, "height", height);

const slides = [
  {
    id: "1",
    title: "Quick analysis of all expenses",
    description:
      "All expenses by cards are reflected automatically in the application, and the analytics system helps to control them.",
    image: require("../../assets/images/figure.png"),
  },
  {
    id: "2",
    title: "Tips to optimize spending",
    description:
      "The system notices where you're slipping on the budget and tells you how to optimize costs.",
    image: require("../../assets/images/figure.png"),
  },
  {
    id: "3",
    title: "Save for your dreams",
    description: "",
    image: require("../../assets/images/figure.png"),
  },
];

const OnboardingScreen = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const renderItem = ({ item }: { item: typeof slides[0] }) => (
    <View style={styles.slide}>
      <Animated.Image
        source={require("../../assets/images/coin-full.png")} // Replace with your coin image
        style={[
          styles.coinImage,
          {
            transform: [{ translateY: coinOffset }],
          },
        ]}
      // resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/figure.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {item.id === "3" && (
        <TouchableOpacity
          onPress={() => router.replace("/home")}
          style={styles.ctaButton}
        >
          <Text style={styles.ctaText}>Become a billionaire right now!</Text>
        </TouchableOpacity>
      )}
    </View>

  );

  const coinOffset = useRef(new Animated.Value(0)).current;
  useEffect(() => {

    Animated.timing(coinOffset, {

      toValue: currentIndex * 125,

      duration: 400,

      useNativeDriver: true,

    }).start();

  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={slides}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={renderItem}
      />

      {/* Pagination Dots */}
      <View style={styles.bottomControls}>
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={handlePrev} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{"<"}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 48 }} />
        )}

        <View style={styles.pagination}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { backgroundColor: i === currentIndex ? "#5C4DBE" : "#ccc" },
              ]}
            />
          ))}
        </View>

        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
            <Text style={styles.arrowText}>{">"}</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 48 }} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  image: {
    position: "absolute",
    width: width,
    // height: height * 0.45,
    top: height * 0.5 - 250,
    marginBottom: 20,
  },
  textWrapper: {
    position: "absolute",
    top: height * 0.5 + 120,
    // width: "100%",
    // alignItems: "center",
    // paddingHorizontal: 20,
  },
  title: {
    // position: "absolute",
    // top: 0.7 * height,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    // position
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  // pagination: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginBottom: 10,
  // },
  // dot: {
  //   width: 8,
  //   height: 8,
  //   borderRadius: 4,
  //   marginHorizontal: 5,
  // },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    alignItems: "center",
    marginBottom: 30,
  },
  arrowButton: {
    backgroundColor: "#5C4DBE",
    width: 48, // hoặc 40, 50 tùy bạn
    height: 48,
    borderRadius: 24, // bằng 1/2 width & height
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ctaButton: {
    position: "absolute",
    top: height * 0.5 + 150,
    marginTop: 30,
    backgroundColor: "#5C4DBE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 28,
  },
  ctaText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  coinImage: {
    width: width,
    // height: width,
    position: "absolute",
    top: -250,
    zIndex: 0,

  },
});

export default OnboardingScreen;
// export default function OnboardingScreen() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const coinOffset = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(coinOffset, {
//       toValue: currentIndex * 30,
//       duration: 400,
//       useNativeDriver: true,
//     }).start();
//   }, [currentIndex]);

//   const handleNext = () => {
//     if (currentIndex < slides.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Image Section */}
//       <View style={{ alignItems: "center", justifyContent: "center" }}>
//         {/* Coin image behind */}
//         <Animated.Image
//           source={require("../../assets/images/coin-full.png")} // Replace with your coin image
//           style={[
//             styles.coinImage,
//             {
//               transform: [{ translateY: coinOffset }],
//             },
//           ]}
//           resizeMode="contain"
//         />

//         {/* Foreground image */}
//         <Image
//           source={slides[currentIndex].image}
//           style={styles.foregroundImage}
//           resizeMode="contain"
//         />
//       </View>

//       {/* Text Section */}
//       <Text style={styles.title}>{slides[currentIndex].title}</Text>
//       <Text style={styles.description}>{slides[currentIndex].description}</Text>

//       {/* Pagination + Navigation */}
//       <View style={styles.bottomNav}>
//         {/* Prev */}
//         {currentIndex > 0 ? (
//           <TouchableOpacity onPress={handlePrev}>
//             <Text style={styles.navBtn}>{"<"}</Text>
//           </TouchableOpacity>
//         ) : (
//           <View style={styles.navBtnPlaceholder} />
//         )}

//         {/* Dots */}
//         <View style={styles.dotsContainer}>
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 currentIndex === index && styles.activeDot,
//               ]}
//             />
//           ))}
//         </View>

//         {/* Next */}
//         {currentIndex < slides.length - 1 ? (
//           <TouchableOpacity onPress={handleNext}>
//             <Text style={styles.navBtn}>{">"}</Text>
//           </TouchableOpacity>
//         ) : (
//           <View style={styles.navBtnPlaceholder} />
//         )}
//       </View>

//       {/* Get Started */}
//       {currentIndex === slides.length - 1 && (
//         <TouchableOpacity style={styles.getStartedButton}>
//           <Text style={styles.getStartedText}>Get Started</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     paddingTop: 60,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   coinImage: {
//     width: 250,
//     height: 250,
//     position: "absolute",
//     top: 0,
//     zIndex: 0,
//   },
//   foregroundImage: {
//     width: 400,
//     height: 400,
//     zIndex: 1,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 30,
//   },
//   description: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "#555",
//     marginHorizontal: 20,
//     marginTop: 10,
//   },
//   bottomNav: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     marginTop: 40,
//   },
//   navBtn: {
//     fontSize: 24,
//     color: "#6C63FF",
//     paddingHorizontal: 20,
//   },
//   navBtnPlaceholder: {
//     width: 44,
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#ddd",
//   },
//   activeDot: {
//     backgroundColor: "#6C63FF",
//     width: 10,
//     height: 10,
//   },
//   getStartedButton: {
//     backgroundColor: "#6C63FF",
//     paddingHorizontal: 30,
//     paddingVertical: 12,
//     borderRadius: 30,
//     marginTop: 20,
//   },
//   getStartedText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });
