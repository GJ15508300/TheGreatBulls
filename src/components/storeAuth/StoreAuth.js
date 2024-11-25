import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSelectedLanguage } from "../lang/GetSelectedLang";

export const StoreAuth = ({ checkAuth, setLoadLang }) => {
  const dispatch = useDispatch();
  const routeName = useSelector((state) => state?.auth);
  const getSelectedLanguage = useSelectedLanguage();

  useEffect(() => {
    const lang = getSelectedLanguage();
    console.log("Selected Language:", lang);

    // dispatch(getAuthId(JSON.parse(checkAuth)));
    setTimeout(() => {
      setLoadLang(false);
    }, 100);
  }, [checkAuth, dispatch, setLoadLang]);

  return null;
};
