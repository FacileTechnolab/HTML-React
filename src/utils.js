export const getUrlParameter = (queryString, kay) => {
  kay = kay.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + kay + "=([^&#]*)");
  const results = regex.exec(queryString);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};
