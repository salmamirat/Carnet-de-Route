import { View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

import { useAddTrip } from "../src/hooks/useAddTrip";

export default function AddTripScreen() {
  const router = useRouter();

  const {
    form,
    setField,
    submitTrip,
    loading,
    error,
  } = useAddTrip();

  const handleSubmit = async () => {
    if (
      !form.title.trim() ||
      !form.destination.trim() ||
      !form.startDate.trim() ||
      !form.endDate.trim() ||
      !form.notes.trim()
    ) {
      return;
    }

    const trip = await submitTrip();

    if (trip) {
      router.back();
    }
  };

 return (
  <ScrollView
    style={styles.container}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
  >
    <View style={styles.content}>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.backText}>‹</Text>
      </Pressable>

      <Text style={styles.title}>
        Nouveau Voyage
      </Text>

      <Text style={styles.label}>
        Titre *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex : Aventure au Maroc"
        placeholderTextColor="#94A3B8"
        value={form.title}
        onChangeText={(value) =>
          setField("title", value)
        }
      />

      <Text style={styles.label}>
        Destination *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex : Marrakech"
        placeholderTextColor="#94A3B8"
        value={form.destination}
        onChangeText={(value) =>
          setField("destination", value)
        }
      />

      <Text style={styles.label}>
        Date de début *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="AAAA-MM-JJ"
        placeholderTextColor="#94A3B8"
        value={form.startDate}
        onChangeText={(value) =>
          setField("startDate", value)
        }
      />

      <Text style={styles.label}>
        Date de fin *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="AAAA-MM-JJ"
        placeholderTextColor="#94A3B8"
        value={form.endDate}
        onChangeText={(value) =>
          setField("endDate", value)
        }
      />

      <Text style={styles.label}>
        Notes *
      </Text>

      <TextInput
        style={[styles.input, styles.notesInput]}
        placeholder="Décris ton expérience, tes ressentis..."
        placeholderTextColor="#94A3B8"
        value={form.notes}
        onChangeText={(value) =>
          setField("notes", value)
        }
        multiline
        textAlignVertical="top"
        maxLength={500}
      />

      {error ? (
        <Text style={styles.error}>
          {error}
        </Text>
      ) : null}

      <Pressable
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>
            Enregistrer
          </Text>
        )}
      </Pressable>

    </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 50,
    paddingBottom: 30,
  },

  backText: {
    fontSize: 32,
    color: "#1F2937",
    marginBottom: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 24,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 8,
  },

  input: {
    height: 50,

    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,

    paddingHorizontal: 14,

    fontSize: 14,
    color: "#1F2937",

    marginBottom: 18,
  },

  notesInput: {
    height: 120,
    paddingTop: 14,
  },

  error: {
    color: "#DC2626",
    marginBottom: 10,
  },

  button: {
    height: 52,

    backgroundColor: "#2F80ED",
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});