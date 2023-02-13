import { useTranslation } from "react-i18next";

export const Main = () => {
    const { t, i18n } = useTranslation("main")
    return (
        <div>
            {t("main")}
        </div>
    )
};