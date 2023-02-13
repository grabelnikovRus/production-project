import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";

export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation()

    const onClick = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")

    return (
        <Button theme="clear" onClick={onClick}>{t("translate")}</Button>
    )
}