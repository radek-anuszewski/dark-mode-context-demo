import React, {createContext, useContext, useState} from 'react';
import appStyles from './App.module.css';
import messagesStyles from './Messages.module.css';

const ThemeContext = createContext({
  theme: 'No theme set',
  setTheme: () => {},
});

const useThemeContext = () => useContext(ThemeContext);

const Button = ({value}) => {
  const { theme, setTheme } = useThemeContext()

  return (
    <button
      onClick={() => setTheme(value)}
      disabled={theme === value}
    >
      {value.toUpperCase()}
    </button>
  )
}

const Buttons = () => {
  return (
    <>
      <Button value={'light'} />
      <Button value={'dark'} />
      <Button value={'default'} />
    </>
  )
}

const Messages = () => {
  return (
    <>
      <p className={messagesStyles.message}>
        Message first
      </p>
      <p className={messagesStyles.message}>
        Message second
      </p>
      <p className={messagesStyles.message}>
        Message third
      </p>
    </>
  )
};

const App = () => {
  const [theme, setTheme] = useState('default');
  const className = theme === 'default'? ''
    : theme === 'light'? appStyles.light : appStyles.dark;
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div
        className={className}
        style={{marginLeft: '20px'}}
      >
        <p>
          Current theme: {theme}
        </p>
        <Buttons />
        <Messages />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
