import { useStorage } from "../storage/useStorage";

const useSession = () => {
  const { userInfo, onSaveUserInfo } = useStorage();
  const userLogged = !!userInfo;

  return { userInfo, userLogged, onSaveUserInfo };
};

export { useSession };
