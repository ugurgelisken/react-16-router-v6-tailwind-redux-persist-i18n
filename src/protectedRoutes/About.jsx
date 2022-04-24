import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./../i18n";

const About = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <p>{t("pages.dashboard.title")}</p>
      <input
        type="checkbox"
        className="toggle"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default About;
