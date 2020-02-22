export const getUrlParameter = (queryString, kay) => {
  kay = kay.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + kay + "=([^&#]*)");
  const results = regex.exec(queryString);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

const TICKET_OPTIONS = [1, 2, 3, 4, 5, 6];

export const getTicketOptions = () =>
  TICKET_OPTIONS.map(item => ({ label: item, value: item }));
