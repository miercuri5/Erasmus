function searchText() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const contentDiv = document.getElementById("mainContent");
    const resultsInfo = document.getElementById("resultsInfo");

    const originalText = contentDiv.innerText;
    contentDiv.innerHTML = originalText;

    if (!input) {
      resultsInfo.textContent = "Enter a search term.";
      return;
    }

    const regex = new RegExp(`(${input})`, 'gi');
    let matchCount = 0;

    function highlightText(node) {
      if (node.nodeType === 3) {
        const match = node.nodeValue.match(regex);
        if (match) {
          const span = document.createElement('span');
          span.innerHTML = node.nodeValue.replace(regex, '<span class="highlight">$1</span>');
          node.parentNode.replaceChild(span, node);
          matchCount += match.length;
        }
      } else if (node.nodeType === 1 && node.childNodes && !["SCRIPT", "STYLE"].includes(node.tagName)) {
        node.childNodes.forEach(child => highlightText(child));
      }
    }

    highlightText(contentDiv);

    resultsInfo.textContent = matchCount > 0 
      ? `${matchCount} result(s) found.`
      : `No results found.`;

    const firstHighlight = document.querySelector(".highlight");
    if (firstHighlight) {
      firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }