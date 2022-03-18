import { useStorage } from "../storage/useStorage";

const useSession = () => {
  const { userInfo } = useStorage();
  const userLogged = !!userInfo;

  return { userInfo, userLogged };
};

export { useSession };
