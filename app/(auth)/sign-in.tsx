import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import FormField from "@/components/ui/form-field";
import CustomButtom from "@/components/ui/custom-btn";
import { signIn } from "@/lib/appwrite";
const logo = require("../../assets/images/splashScreen.jpeg");
const SignIn = () => {
  //const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      //const result = await getCurrentUser();
      //setUser(result);
      //setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Sign-in Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='h-full'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className='w-full flex justify-center h-full px-4 my-6 bg-white'
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image source={logo} className="w-12 h-12"/>

          <Text className='text-2xl font-semibold text-black mt-10 font-psemibold'>
            Log in to Mentor Guru
          </Text>

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            placeholder='rubneloic@gmail.com'
            //keyboardType='email-address'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder='*******'
          />

          <CustomButtom
            title='Sign In'
            handlePress={submit}
            containerStyle='mt-7'
            isLoading={isSubmitting}
          />

          <View className='flex justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-900 font-pregular'>
              Don't have an account?
            </Text>
            <Link
              href='/sign-up'
              className='text-lg font-psemibold text-secondary'
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
