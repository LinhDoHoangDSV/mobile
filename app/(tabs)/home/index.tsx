import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hi, Welcome Back</Text>
          <Text style={styles.nameText}>David Merry</Text>
        </View>
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitials}>DM</Text>
        </View>
      </View>

      {/* Balance Summary */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceRow}>
          <View style={styles.balanceItem}>
            <Feather name="dollar-sign" size={16} color="#333" />
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>$7,783.00</Text>
          </View>
          <View style={styles.balanceItem}>
            <Feather name="credit-card" size={16} color="#333" />
            <Text style={styles.balanceLabel}>Total Expense</Text>
            <Text style={[styles.balanceAmount, styles.expenseAmount]}>
              -$1,187.40
            </Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "30%" }]} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressPercentage}>30%</Text>
            <Text style={styles.progressTotal}>$20,000.00</Text>
          </View>
          <Text style={styles.progressCaption}>
            30% Of Your Expenses Looks Good!
          </Text>
        </View>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <View style={styles.cardIconContainer}>
              <Feather name="credit-card" size={24} color="white" />
            </View>
            <Text style={styles.cardTitle}>Savings</Text>
            <Text style={styles.cardSubtitle}>On Goals</Text>
          </View>
          <View style={[styles.card, styles.revenueCard]}>
            <View style={styles.cardIconContainer}>
              <MaterialCommunityIcons
                name="chart-line"
                size={24}
                color="white"
              />
            </View>
            <Text style={styles.cardTitle}>Revenue Last Week</Text>
            <Text style={styles.cardAmount}>$4,000.00</Text>
          </View>
        </View>
        <View style={styles.cardRow}>
          <View style={[styles.card, styles.foodCard]}>
            <View style={styles.cardIconContainer}>
              <Ionicons name="restaurant-outline" size={24} color="white" />
            </View>
            <Text style={styles.cardTitle}>Food Last Week</Text>
            <Text style={styles.cardAmount}>$100.00</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <ScrollView style={styles.transactionsContainer}>
        <View style={styles.transaction}>
          <View style={[styles.transactionIcon, styles.salaryIcon]}>
            <Feather name="dollar-sign" size={20} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Salary</Text>
            <Text style={styles.transactionDate}>18:27 • April 30</Text>
          </View>
          <View style={styles.transactionAmountContainer}>
            <Text style={styles.transactionCategory}>Monthly</Text>
            <Text style={styles.transactionAmount}>$4,000.00</Text>
          </View>
        </View>

        <View style={styles.transaction}>
          <View style={[styles.transactionIcon, styles.groceriesIcon]}>
            <Feather name="shopping-cart" size={20} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Groceries</Text>
            <Text style={styles.transactionDate}>17:30 • April 24</Text>
          </View>
          <View style={styles.transactionAmountContainer}>
            <Text style={styles.transactionCategory}>Pantry</Text>
            <Text style={[styles.transactionAmount, styles.expenseText]}>
              -$100.00
            </Text>
          </View>
        </View>

        <View style={styles.transaction}>
          <View style={[styles.transactionIcon, styles.rentIcon]}>
            <Feather name="home" size={20} color="white" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Rent</Text>
            <Text style={styles.transactionDate}>8:30 • April 15</Text>
          </View>
          <View style={styles.transactionAmountContainer}>
            <Text style={styles.transactionCategory}>Rent</Text>
            <Text style={[styles.transactionAmount, styles.expenseText]}>
              -$674.40
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={24} color="#7c4dff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="search" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="repeat" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="layers" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="user" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  nameText: {
    fontSize: 14,
    color: "#666",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInitials: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  balanceContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 15,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  balanceItem: {
    flexDirection: "column",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  expenseAmount: {
    color: "#e74c3c",
  },
  progressContainer: {
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#2ecc71",
    borderRadius: 5,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  progressPercentage: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  progressTotal: {
    fontSize: 12,
    color: "#666",
  },
  progressCaption: {
    fontSize: 14,
    color: "#2ecc71",
    marginTop: 5,
    fontWeight: "500",
  },
  cardsContainer: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#7c4dff",
    borderRadius: 15,
    padding: 15,
    flex: 1,
    marginRight: 10,
  },
  revenueCard: {
    backgroundColor: "#7c4dff",
    marginRight: 0,
  },
  foodCard: {
    backgroundColor: "#9c68ff",
    flex: 0.5,
  },
  cardIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 2,
  },
  cardAmount: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginTop: 2,
  },
  tabsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 25,
    padding: 5,
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#7c4dff",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeTabText: {
    color: "white",
  },
  transactionsContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  transaction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  salaryIcon: {
    backgroundColor: "#2ecc71",
  },
  groceriesIcon: {
    backgroundColor: "#e74c3c",
  },
  rentIcon: {
    backgroundColor: "#3498db",
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  transactionAmountContainer: {
    alignItems: "flex-end",
  },
  transactionCategory: {
    fontSize: 12,
    color: "#999",
    marginBottom: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ecc71",
  },
  expenseText: {
    color: "#e74c3c",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
});

export default HomeScreen;
