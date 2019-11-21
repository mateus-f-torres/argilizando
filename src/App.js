import React from 'react';
import {useTranslation} from "react-i18next";

import {getDetailedRaceDescription} from "./model/race/race";

function App() {
  const {t, i18n} = useTranslation()

  const handleOnClick = () => {
    i18n.language == 'en'
      ? i18n.changeLanguage('pt')
      : i18n.changeLanguage('en')
  }

  console.log(getDetailedRaceDescription())

  return (
    <div>
      <button onClick={handleOnClick}>
        {t('example')}
      </button>
      <p>
        {t('race.human.age')}
      </p>
    </div>
  );
}

export default App;