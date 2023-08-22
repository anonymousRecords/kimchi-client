// import i18n from "languages/i18n";
import i18n from "../language/i18n";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  const onChangeLang = () => {
    i18n.language === "ko"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko");
  };

  return (
    <>
      <h2>{t("testText")}</h2>
      <button onClick={() => onChangeLang()}>언어변경</button>
    </>
  );
};

export default Test;