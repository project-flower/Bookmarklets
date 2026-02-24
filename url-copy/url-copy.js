(async function () {
  if (!navigator.clipboard) {
    alert("navigator.clipboard is not supported.");
    return;
  }

  const url = document.URL;
  const title = document.title || url;

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob(
          [
            `<a href="${url}">${title.replace("&", "&amp;").replace("'", "&apos;").replace("<", "&lt;").replace(">", "&gt;")}</a>`,
          ],
          {
            type: "text/html",
          },
        ),
        "text/plain": new Blob([title], {
          type: "text/plain",
        }),
      }),
    ]);

    alert("Copied!");
  } catch (error) {
    alert(error.message);
  }
})();
