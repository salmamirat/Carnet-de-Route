import { View,  Text,Image,Pressable,ScrollView,ActivityIndicator,StyleSheet,} from "react-native";
import {  useLocalSearchParams,  useRouter,} from "expo-router";
import { useTripDetail } from "../../src/hooks/useTripDetail";

export default function TripDetailScreen() {
  const router = useRouter();

  const { id } = useLocalSearchParams();

  const {
    trip,
    loading,
    error,
  } = useTripDetail(id);

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

  if (error || !trip) {
    return (
      <View style={styles.center}>
        <Text>
          {error || "Voyage introuvable"}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
          }}
          style={styles.image}
        />

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {trip.destination}
        </Text>

        <Text style={styles.subtitle}>
          {trip.title}
        </Text>

        <View style={styles.card}>
          <Text style={styles.icon}>📅</Text>

          <View>
            <Text style={styles.label}>
              Date de début
            </Text>

            <Text style={styles.value}>
              {trip.startDate}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>📅</Text>

          <View>
            <Text style={styles.label}>
              Date de fin
            </Text>

            <Text style={styles.value}>
              {trip.endDate}
            </Text>
          </View>
        </View>

        <View style={styles.notesCard}>
          <Text style={styles.icon}>📝</Text>

          <View style={styles.notesContent}>
            <Text style={styles.label}>
              Mes impressions
            </Text>

            <Text style={styles.notes}>
              {trip.notes}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  image: {
    width: "100%",
    height: 185,
  },

  backButton: {
    position: "absolute",
    top: 48,
    left: 16,

    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontSize: 30,
    color: "#1F2937",
  },

  content: {
    padding: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 3,
    marginBottom: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    borderRadius: 16,

    padding: 18,
    marginBottom: 12,

    elevation: 1,
  },

  notesCard: {
    flexDirection: "row",

    backgroundColor: "#FFFFFF",
    borderRadius: 16,

    padding: 18,

    elevation: 1,
  },

  icon: {
    fontSize: 20,
    marginRight: 14,
  },

  notesContent: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },

  notes: {
    fontSize: 14,
    lineHeight: 22,
    color: "#334155",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FA",
  },
});