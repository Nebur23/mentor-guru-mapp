import React,{useState} from "react";
// import StarRating from "react-native-star-rating";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "@/context/GlobalProvider";
import { router } from "expo-router";
import { logout } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { user } = useGlobalContext();
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isFeedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [isPaymentHistoryModalVisible, setPaymentHistoryModalVisible] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isSubscriptionModalVisible, setSubscriptionModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [isNotificationsModalVisible, setNotificationsModalVisible] = useState(false);
  const subscriptions = [
    {
      planName: 'Premium',
      renewalDate: '2024-12-28',
      status: 'Active',
    },
   
  ];
  type IconType =
    | "edit"
    | "notifications"
    | "subscriptions"
    | "support"
    | "feedback"
    | "payment"
    | "check-circle"
    | "style"
    | "accessible"
    | "key"
    | "sort"
    | "map"
    | "filter"
    | "search"
    | "repeat"
    | "zoom-out-map";
  interface IconItem {
    icon: IconType;
    label: string;
    action?: () => void;
  }
  const Logout = () => {
    logout();

    Alert.alert("logout successful");
    router.replace("/(auth)/sign-in");
  };
  const openEmail = () => {
    Linking.openURL("mailto:jpteks728@gmail.com?subject=Support Request");
  };
  const submitFeedback = () => {
    Linking.openURL(
      `mailto:jpteks728@gmail.com?subject=App Feedback&body=Rating:5%0AFeedback: ${feedback}`
    );
    setFeedbackModalVisible(false);
  };

  const iconsList = [
    { icon: "edit", label: "Edit Profile", action: () => setEditModalVisible(true) },
    { icon: "notifications", label: "Notifications",action: () => setNotificationsModalVisible(true)  },
    { icon: "subscriptions", label: "Subscriptions" },
    { icon: "support", label: "Contact Support", action: openEmail },
    { icon: "feedback", label: "Feedback", action: () => setFeedbackModalVisible(true) },
    { icon: "payment", label: "Payment History", action: () => setPaymentHistoryModalVisible(true) },
    { icon: "check-circle", label: "Completed Courses"},
  ];
  const closeSubscriptionModal = () => setSubscriptionModalVisible(false);
  const closeNotificationsModal = () => setNotificationsModalVisible(false);
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center justify-between p-4  bg-tertiary'>
        <View className='flex-row items-center space-x-3'>
          <Image
            source={{ uri: user?.avatar }}
            className='w-12 h-12 rounded-full bg-white'
          />
          <Text className='text-xl font-semibold text-white ml-2'>{user?.username}</Text>
        </View>

        <TouchableOpacity onPress={Logout}>
          <MaterialIcons name='logout' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <View className='flex-1 p-4 bg-white'>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={iconsList}
          keyExtractor={item => item.label}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={item.action}
              className='flex-row items-center gap-4 mb-4 border border-blue p-6 rounded-[7px]'
            >
              <MaterialIcons name={item.icon} size={24} color='black' />
              <Text className='text-lg'>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal visible={isEditModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg">
            <Text className="text-xl font-semibold mb-4">Edit Profile</Text>
            <TextInput
              placeholder="Username"
             
              className="border border-gray-300 rounded p-2 mb-4"
            />
            <TextInput
              placeholder="password"
              
              className="border border-gray-300 rounded p-2 mb-4"
            />
             <TextInput
              placeholder="email"
             
              className="border border-gray-300 rounded p-2 mb-4"
            />
            <TextInput
              placeholder="phoneNumber"
             
              className="border border-gray-300 rounded p-2 mb-4"
            />
            <TouchableOpacity
              onPress={() => setEditModalVisible(false)}
              className="bg-blue-500 p-4 rounded"
            >
              <Text className="text-white text-center">Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isFeedbackModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg">
            <Text className="text-xl font-semibold mb-4">Feedback</Text>
            <Text className="mb-2">Rate Us</Text>
            {/* <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              selectedStar={(rating) => setRating(rating)}
              fullStarColor="gold"
              emptyStarColor="lightgray"
              starSize={32}
            /> */}
            <TextInput
              placeholder="Write your feedback"
              value={feedback}
              onChangeText={setFeedback}
              multiline
              className="border border-gray-300 rounded p-2 mb-4 h-20"
            />
            <TouchableOpacity
              onPress={submitFeedback}
              className="bg-blue-500 p-4 rounded mb-4"
            >
              <Text className="text-white text-center">Submit Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFeedbackModalVisible(false)}
              className="bg-gray-300 p-4 rounded"
            >
              <Text className="text-center">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isSubscriptionModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg">
            <Text className="text-xl font-semibold mb-4">Current Subscription Plan</Text>
            {subscriptions.length > 0 ? (
              <>
                <Text className="mb-2">Plan: {subscriptions[0].planName}</Text>
                <Text className="mb-2">Renewal Date: {subscriptions[0].renewalDate}</Text>
                <Text className="mb-4">Status: {subscriptions[0].status}</Text>
                <TouchableOpacity
                  onPress={() => Alert.alert("Renew subscription functionality will be implemented soon.")}
                  className="bg-blue-500 p-4 rounded mb-4"
                >
                  <Text className="text-white text-center">Renew Subscription</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={closeSubscriptionModal}
                  className="bg-gray-300 p-4 rounded"
                >
                  <Text className="text-center">Close</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text>No subscription found.</Text>
            )} 
          </View>
        </View>
      </Modal>
      <Modal visible={isPaymentHistoryModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg">
            <Text className="text-xl font-semibold mb-4">Payment History</Text>
            <ScrollView>
              
              <Text className="mb-2">Free Plan: 0 XAF - Jan 2024</Text>
              <Text className="mb-2">Basic Plan: 2000 XAF - Feb 2024</Text>
              <Text className="mb-2">Basic Plan: 2000 XAF - Mar 2024</Text>
              <Text className="mb-2">Basic Plan: 2000 XAF - Apr 2024</Text>
              <Text className="mb-2">Premium Plan: 2500 XAF - May 2024</Text>
              <Text className="mb-2">Premium Plan: 2000 XAF - June 2024</Text>
            </ScrollView>
            <TouchableOpacity
              onPress={() => setPaymentHistoryModalVisible(false)}
              className="bg-gray-300 p-4 rounded mt-4"
            >
              <Text className="text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={isNotificationsModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-11/12 bg-white p-6 rounded-lg">
            <Text className="text-xl font-semibold mb-4">Notifications</Text>
            {/* Notifications content */}
            <Text>No new notifications</Text>
            <TouchableOpacity
              onPress={closeNotificationsModal}
              className="bg-gray-300 p-4 rounded"
            >
              <Text className="text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

export default ProfileScreen;
