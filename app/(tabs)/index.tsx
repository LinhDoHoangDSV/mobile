"use client";

import { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < 2) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("home");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  const handleSkip = () => {
    navigation.navigate("Home");
  };

  // Character component
  const Character = ({ style }) => (
    <View style={[styles.characterContainer, style]}>
      {/* Body */}
      <View style={styles.body}>
        {/* Head */}
        <View style={styles.head}>
          {/* Face */}
          <View style={styles.face}>
            {/* Eyes */}
            <View style={styles.eyes}>
              <View style={styles.eye} />
              <View style={styles.eye} />
            </View>
            {/* Smile */}
            <View style={styles.smile} />
          </View>

          {/* Hair */}
          <View style={styles.hair} />

          {/* Party Hat */}
          <View style={styles.partyHat}>
            <View style={styles.hatBase} />
            <View style={styles.hatPom} />
          </View>
        </View>

        {/* Shirt */}
        <View style={styles.shirt} />

        {/* Arms */}
        <View style={styles.arms}>
          <View style={[styles.arm, styles.armLeft]} />
          <View style={[styles.arm, styles.armRight]} />
        </View>

        {/* Pants */}
        <View style={styles.pants} />

        {/* Shoes */}
        <View style={styles.shoes}>
          <View style={styles.shoe} />
          <View style={styles.shoe} />
        </View>
      </View>

      {/* Confetti */}
      <View style={styles.confetti}>
        {Array.from({ length: 20 }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.confettiPiece,
              {
                backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4"][i % 3],
                top: Math.random() * 300,
                left: Math.random() * 300 - 150,
                transform: [{ rotate: `${Math.random() * 360}deg` }],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );

  // Coin component
  const Coin = ({ style }) => (
    <View style={[styles.coinContainer, style]}>
      <Svg height="200" width="200" viewBox="0 0 200 200">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFD700" stopOpacity="1" />
            <Stop offset="1" stopColor="#FFA500" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Circle cx="100" cy="100" r="90" fill="url(#grad)" />
        <Circle
          cx="100"
          cy="100"
          r="85"
          fill="url(#grad)"
          stroke="#E6C200"
          strokeWidth="2"
        />

        {/* Dollar Sign */}
        <Path
          d="M100,50 C85,50 75,60 75,75 C75,90 85,95 100,100 C115,105 125,110 125,125 C125,140 115,150 100,150 C85,150 75,140 75,125"
          stroke="#E6C200"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M100,40 L100,60 M100,140 L100,160"
          stroke="#E6C200"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Stars around the edge */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 100 + 75 * Math.cos(angle);
          const y = 100 + 75 * Math.sin(angle);
          return (
            <Path
              key={i}
              d={`M${x},${y - 5} L${x + 2},${y - 2} L${x + 5},${y - 2} L${
                x + 3
              },${y + 1} L${x + 4},${y + 4} L${x},${y + 2} L${x - 4},${
                y + 4
              } L${x - 3},${y + 1} L${x - 5},${y - 2} L${x - 2},${y - 2} Z`}
              fill="#E6C200"
            />
          );
        })}
      </Svg>
    </View>
  );

  const renderSlide1 = () => (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
        <Coin style={{ marginBottom: 20 }} />
        <Character style={{ position: "absolute", top: 100 }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Quick analysis of all expenses</Text>
          <Text style={styles.description}>
            All expenses by cards are reflected automatically in the
            application, and the analytics system helps to control them
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSlide2 = () => (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
        <Coin style={{ marginBottom: 20 }} />
        <Character style={{ position: "absolute", top: 100 }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Tips to optimize spending</Text>
          <Text style={styles.description}>
            The system notices where you're slipping on the budget and tells you
            how to optimize costs
          </Text>
        </View>
      </View>
    </View>
  );

  const renderSlide3 = () => (
    <View style={styles.slide}>
      <View style={styles.slideContent}>
        <Coin style={{ marginBottom: 20 }} />
        <Character style={{ position: "absolute", top: 100 }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Save for your dreams</Text>
          <TouchableOpacity style={styles.actionButton} onPress={handleSkip}>
            <Text
              style={styles.actionButtonText}
              onPress={() => navigation.navigate("/home")}
            >
              Become a billionaire right now!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const slides = [
    { id: "1", renderSlide: renderSlide1 },
    { id: "2", renderSlide: renderSlide2 },
    { id: "3", renderSlide: renderSlide3 },
  ];

  const renderItem = ({ item }) => item.renderSlide();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />

      {/* Pagination */}
      <View style={styles.paginationContainer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
          <Text style={styles.navButtonText}>{"<"}</Text>
        </TouchableOpacity>

        <View style={styles.paginationDots}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? "#7c4dff" : "#e0e0e0",
                },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.navButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slide: {
    width,
    height: height - 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  slideContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
  },
  paginationDots: {
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
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#7c4dff",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  actionButton: {
    backgroundColor: "#7c4dff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Character styles
  characterContainer: {
    width: 150,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    alignItems: "center",
  },
  head: {
    width: 60,
    height: 70,
    borderRadius: 30,
    backgroundColor: "#FFE0B2",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  face: {
    alignItems: "center",
  },
  eyes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 30,
    marginTop: 15,
  },
  eye: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
  },
  smile: {
    width: 20,
    height: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 0,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#333",
    marginTop: 5,
  },
  hair: {
    position: "absolute",
    top: -10,
    width: 70,
    height: 40,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: "#FF8A65",
  },
  partyHat: {
    position: "absolute",
    top: -30,
    left: 20,
  },
  hatBase: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#FFC107",
    transform: [{ rotate: "15deg" }],
  },
  hatPom: {
    position: "absolute",
    top: -10,
    left: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF5722",
  },
  shirt: {
    width: 70,
    height: 60,
    backgroundColor: "#FFEB3B",
    borderRadius: 10,
    marginTop: -10,
  },
  arms: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
    position: "absolute",
    top: 100,
  },
  arm: {
    width: 15,
    height: 60,
    backgroundColor: "#FFE0B2",
    borderRadius: 7,
  },
  armLeft: {
    transform: [{ rotate: "-30deg" }],
  },
  armRight: {
    transform: [{ rotate: "30deg" }],
  },
  pants: {
    width: 60,
    height: 80,
    backgroundColor: "#64B5F6",
    borderRadius: 10,
    marginTop: -10,
  },
  shoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    marginTop: -5,
  },
  shoe: {
    width: 30,
    height: 15,
    backgroundColor: "#EEEEEE",
    borderRadius: 7,
  },
  confetti: {
    position: "absolute",
    width: 300,
    height: 300,
  },
  confettiPiece: {
    position: "absolute",
    width: 10,
    height: 5,
    borderRadius: 1,
  },

  // Coin styles
  coinContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
