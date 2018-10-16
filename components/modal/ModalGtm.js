export let modalGtmObj = (event, eventCategory, eventAction, url) => {
  return {
    'event': event,
    'eventCategory': eventCategory,
    'eventAction': eventAction,
    'eventLabel': url
  };
};
