import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (value) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn', value);

    useEffect(() => {
        if(darkMode){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    }, [darkMode])

    return [darkMode, setDarkMode];
}