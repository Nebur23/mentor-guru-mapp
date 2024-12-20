import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

//import { images } from "../../constants";
import FormField from "@/components/ui/form-field";
import CustomButtom from "@/components/ui/custom-btn";
//import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  //const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const submit = async () => {
  //   if (form.username === "" || form.email === "" || form.password === "") {
  //     Alert.alert("Error", "Please fill in all fields");
  //   }
  //   setSubmitting(true);
  //   try {
  //     const result = await createUser(form.email, form.password, form.username);
  //     //setUser(result);
  //     //setIsLogged(true);
  //     router.replace("/home");
  //   } catch (error: any) {
  //     Alert.alert("Sign-up Error", error.message);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View
          className='w-full flex justify-center h-full px-4 my-6'
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text>Logo</Text>

          <Text className='text-2xl font-semibold text-black mt-10 font-psemibold'>
            Sign Up to Aora
          </Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={e => setForm({ ...form, username: e })}
            otherStyles='mt-10'
            placeholder='John Doe'
          />

          <FormField
            title='Email'
            value={form.email}
            handleChangeText={e => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            //keyboardType='email-address'
            placeholder='jpteks728@gmail.com'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={e => setForm({ ...form, password: e })}
            otherStyles='mt-7'
            placeholder='password'
          />

          <CustomButtom
            title='Sign Up'
            handlePress={() => "submit"}
            containerStyle='mt-7'
            isLoading={isSubmitting}
          />

          <View className='flex justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-900 font-pregular'>
              Have an account already?
            </Text>
            <Link
              href='/sign-in'
              className='text-lg font-psemibold text-secondary'
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;