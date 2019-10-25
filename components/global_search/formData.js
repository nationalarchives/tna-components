const FormData = {
  options: [
    {
      label: "Search our website",
      action: "https://nationalarchives.gov.uk/search/results/",
      id: "website_search"
    },
    {
      label: "Search our records",
      action: "https://discovery.nationalarchives.gov.uk/results/r",
      id: "discovery_search"
    }
  ],
  labels: {
    component: "Search our website or catalogue",
    search_selector: "Show search options",
    search_query: "Enter search keyword or keywords",
    select_type: "Select to search website or records"
  }
};

export default FormData;
