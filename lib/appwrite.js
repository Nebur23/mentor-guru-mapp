import { Account, Client,Avatars, Databases,ID } from "react-native-appwrite";
import {Query}  from "react-native-appwrite"; 

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jpteks.mentor-guru",
  projectId: "6769d281000da48af681",

  databaseId: "6769d320001029cbe39c",
  userCollectionId: "6769d33f0032d479b8ae",
  storageId: "6769d5be002be3386ae6",
};
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)
export const createUser = async (email, password, username) => {
    try {
      // Create User Account with unique userId
      const response = await account.create(ID.unique(), email, password, username);
  
      if (!response) throw new Error("User creation failed");
  
      // Generate Avatar URL
      const avatarUrl = avatars.getInitials(username);
  
      // Save User Data in Database
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(), // Generate a unique ID for the document
        {
          accountId: response.$id,
          email,
          username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
  
    } catch (error) {
      console.error("Error in createUser:", error);
      throw new Error(error.message || "An error occurred during user creation");
    }
  };
export const signIn=async(email,password)=>{
    try {
        const session=await account.createEmailPasswordSession(email,password)
        
    } catch (error) {
        throw new Error(error.message);
        
    }

}
export const getCurrentUser=async()=>{
    try {
        const currentAccount=await account.get()
        if(!currentAccount) throw Error;
        const currentUser=await databases.listDocuments(appwriteConfig.databaseId,appwriteConfig.userCollectionId,[Query.equal('accountId',currentAccount.$id)])
        if (!currentUser) throw Error
        return currentUser.documents[0]
    } catch (error) {
        console.log(error.message)
    }
}
export const logout = async () => {
    try {
     
      await account.deleteSession('current');
      
      console.log("Successfully logged out");
      return true; 
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };