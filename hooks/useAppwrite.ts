import { Alert } from "react-native";
import { useEffect, useState } from "react";

const useAppwrite = (fn: () => any) => {
  const [data, setData] = useState<
    {
      username?: string;
      email?: string;
      password?: string;
      title?: string;
      thumbnail?: string;
      creator?: string;
      avatar?: string;
      _id: string;
      [key: string]: any;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, loading, refetch };
};

export default useAppwrite;
