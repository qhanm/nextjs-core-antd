import initTranslations from "src/config/i18n";
import TranslationProvider from "./TranslationProvider";

const i18nNamespaces = ["translation"];

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
    </TranslationProvider>
  );
}
