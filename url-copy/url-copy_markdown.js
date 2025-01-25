(function () {
  if (!navigator.clipboard) {
    alert("navigator.clipboard is not supported.");
    return;
  }

  const url = document.URL;
  const title = document.title || url;

  try {
    navigator.clipboard.writeText(
      `[${title.replace(/_|[-]|[!]|\.|\(|\)|\[|\]|\{|\}|\*|\\|#|`|\+/gi, "\\$&")}](${url})`
    );

    alert("Copied!");
  } catch (error) {
    alert(error.message);
  }
})();
