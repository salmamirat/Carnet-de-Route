import { View,Text, FlatList, Pressable, ActivityIndicator, StyleSheet,} from "react-native";
import { useRouter } from "expo-router";
import { useTrips } from "../src/hooks/useTrips";
import TripCard from "../src/components/TripCard";

export default function HomeScreen() {
  const router = useRouter();

  const {trips,loading,error,} = useTrips();

  const openTrip = (trip) => {
    router.push(`/trip/${trip.id}`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="#2F80ED"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mes Voyages ✈️
      </Text>

      <FlatList
        data={trips}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TripCard
            trip={item}
            onPress={() => openTrip(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => router.push("/add")}
      >
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 18,
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 20,
  },

  list: {
    paddingBottom: 100,
  },

  addButton: {
    position: "absolute",
    right: 22,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2F80ED",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  addText: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "300",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FA",
  },

  error: {
    color: "#DC2626",
  },
});