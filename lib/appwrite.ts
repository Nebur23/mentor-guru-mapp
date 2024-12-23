import {
  Account,
  Client,
  Avatars,
  Databases,
  Query,
  ID,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jpteks.mentor-guru",
  projectId: "6767a5fd00043b8c4c55",

  databaseId: "6767aa2c002ee93f4445",
  userCollectionId: "6767aa6c003948e7d0a0",
  storageId: "6767ac7e001855d5e4b2",
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
    const response = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!response) throw Error;
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: response.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error: any) {
    throw new Error(error.message);
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
