import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  be: {
    translation: {
      title: "Мае планы",
      inputPlaceholder: "Што трэба зрабіць?",
      all: "Усе",
      active: "Актыўныя",
      done: "Гатовыя",
      empty: "Задач пакуль няма",
      itemsLeft: "Выканана {{completed}} з {{total}} задач"
    }
  },
  ru: {
    translation: {
      title: "Мои планы",
      inputPlaceholder: "Что нужно сделать?",
      all: "Все",
      active: "Активные",
      done: "Готовы",
      empty: "Задач пока нет",
      itemsLeft: "Выполнено {{completed}} из {{total}} задач"
    }
  },
  en: {
    translation: {
      title: "My plans",
      inputPlaceholder: "What needs to be done?",
      all: "All",
      active: "Active",
      done: "Done",
      empty: "No tasks yet",
      itemsLeft: "Completed {{completed}} of {{total}} tasks"
    }
  }
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'be', 
    interpolation: { escapeValue: false }
  });

export default i18n;