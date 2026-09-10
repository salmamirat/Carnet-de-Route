import { View, Text, Pressable, Image, StyleSheet,} from "react-native";

export default function TripCard({ trip, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
        }}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.title}>
          {trip.destination}
        </Text>

        <Text style={styles.country}>
          {trip.destination?.toLowerCase().includes("paris")
            ? "France"
            : "Maroc"}
        </Text>

        <Text style={styles.date}>
          {trip.startDate} - {trip.endDate}
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,

    elevation: 2,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },

  country: {
    marginTop: 3,
    fontSize: 12,
    color: "#64748B",
  },

  date: {
    marginTop: 5,
    fontSize: 11,
    color: "#94A3B8",
  },

  arrow: {
    fontSize: 28,
    color: "#94A3B8",
  },
});