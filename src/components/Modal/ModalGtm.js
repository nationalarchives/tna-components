export const eventLabel = (id) => {
  return document.getElementById(id).innerHTML;
};

export const modalObjFunc = (survey, eventCategory, eventAction, eventLabel  ) => {
  return {
    'event': survey,
    'eventCategory': eventCategory,
    'eventAction': eventAction,
    'eventLabel': eventLabel
  };
};

export const pushInDataLayer = (obj) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
};
