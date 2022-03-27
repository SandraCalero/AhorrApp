const useStorage = () => {
  const onSaveUserInfo = (valueToSave) => {
    try {
      localStorage.setItem('USER_INFO', JSON.stringify(valueToSave));
    } catch (error) {}
  };

  const onCleanStorage = () => {
    try {
      localStorage.removeItem('USER_INFO');
    } catch (error) {}
  };

  const localStorageInfo = localStorage.getItem('USER_INFO');
  const parsedItem = JSON.parse(localStorageInfo);

  return {
    userInfo: parsedItem,
    onSaveUserInfo,
    onCleanStorage
  };
};

export { useStorage };
