"use client";

// ** react
import { ReactNode, createContext, useEffect, useState } from "react";

// ** config
import { LocalStoreConfig } from "src/config/localStoreConfig";

// ** enum
import { MODE_ENUM } from "src/enum/common";

// ** type
import { TAppContext, TSetting } from "src/type/common";

// ** theme
import ThemeComponent from "../theme/ThemeComponent";
import { lightTheme, darkTheme } from "src/styles/theme";

const initialSetting: TSetting = {
  mode: MODE_ENUM.LIGHT,
};

const initialAppContext: TAppContext = {
  setting: initialSetting,
  saveSetting: (setting: TSetting) => null,
};

export const AppContext = createContext<TAppContext>(initialAppContext);

export const AppConsumer = AppContext.Consumer;

type PropsAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: PropsAppContextProvider) => {
  const [setting, setSetting] = useState<TSetting>({
    ...initialSetting,
  });

  useEffect(() => {
    try {
      let _setting = null;
      const storeData = window.localStorage.getItem(LocalStoreConfig.SETTING);

      _setting = storeData
        ? { ...initialSetting, ...JSON.parse(storeData) }
        : initialSetting;

      setSetting(_setting);
    } catch (err) {}
  }, []);

  const saveSetting = (newSetting: TSetting) => {
    setSetting(newSetting);

    window.localStorage.setItem(
      LocalStoreConfig.SETTING,
      JSON.stringify(newSetting)
    );
  };

  return (
    <AppContext.Provider value={{ setting, saveSetting }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContextWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AppConsumer>
      {({ setting }) => {
        let theme = lightTheme;
        switch (setting.mode) {
          case MODE_ENUM.LIGHT:
            theme = lightTheme;
          case MODE_ENUM.DARK:
            theme = darkTheme;
        }
        return <ThemeComponent theme={theme}>{children}</ThemeComponent>;
      }}
    </AppConsumer>
  );
};
