import React, { useEffect } from "react";
import httpService from "../../services/httpService";
import TranslationManagment from "../components/dashboard/TranslationManagment";
import DataLoad from "../components/common/DataLoad";
function Translation({ data }) {
  const [translations, setTranslations] = React.useState(data);
  const [activeTab, setActiveTab] = React.useState("");
  useEffect(async () => {
    const { data } = await getTranslations();
    setTranslations(data);
  }, []);
  const reload = async () => {
    setTranslations(null);
    const { data } = await getTranslations();
    setTranslations(data);
  };
  return translations ? (
    <TranslationManagment
      translations={translations}
      onReload={reload}
      tab={activeTab}
      setTab={setActiveTab}
    />
  ) : (
    <DataLoad />
  );
}
async function getTranslations() {
  const { data } = await httpService.get("/translations/");
  return { data };
}

const loadData = async () => {
  return getTranslations();
};
export default {
  element: <Translation />,
  loadData,
};
