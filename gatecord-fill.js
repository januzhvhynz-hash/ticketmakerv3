/**
 * gatecord-fill.js
 * -----------------
 * Reads data from the gatecord iframe and populates four textboxes
 * on the parent page (index.html).
 *
 * How it works:
 * 1. Waits ~2 s for the iframe to finish loading.
 * 2. Grab the raw JSON string from the iframe’s innerHTML.
 * 3. Parses it and writes the four fields (username, displayName,
 *    userId, pictureLink) into the parent page’s textboxes.
 */

(function () {
  // 1️⃣ Wait ~2 s for the iframe to finish loading.
  //    Adjust the delay if your iframe takes longer/shorter.
  setTimeout(() => {
    // 2️⃣ Grab the iframe’s inner HTML (raw JSON string).
    const iframeDoc = document.getElementById(’gatecord’)
                      .contentWindow.document;

    // 3️⃣ Parse the JSON into a JS object.
    const data = JSON.parse(iframeDoc.documentElement.innerHTML);

    // 4️⃣ Write the data into the parent page’s textboxes.
    document.getElementById(’username’).value = data.username;
    document.getElementById(’displayName’).value = data.displayName;
    document.getElementById(’userId’).value = data.userId;
    document.getElementById(’pictureLink’).value = data.pictureLink;
  }, 2000); // 2 second delay
})();
