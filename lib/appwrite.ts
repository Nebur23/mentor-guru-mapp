import { Account, Client, Avatars, Databases, ID, QueryTypesList } from "react-native-appwrite";
import { Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jpteks.mentor-guru",
  projectId: "6767a5fd00043b8c4c55",

  databaseId: "6767aa2c002ee93f4445",
  userCollectionId: "6767aa6c003948e7d0a0",
  storageId: "6767ac7e001855d5e4b2",
  videoCollectionId: "",
};
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    // Create User Account with unique userId
    const response = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

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
  } catch (error: any) {
    console.error("Error in createUser:", error);
    throw new Error(error.message || "An error occurred during user creation");
  }
};
export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error: any) {
    console.log(error.message);
  }
};
export const logout = async () => {
  try {
    await account.deleteSession("current");

    console.log("Successfully logged out");
    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
};

export async function getAllPosts() {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId
    );

    return posts.documents;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get video posts created by user
export async function getUserPosts(userId: string | number | boolean | QueryTypesList) {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.equal("creator", userId)]
    );

    return posts.documents;
  } catch (error:any) {
    throw new Error(error);
  }
}
