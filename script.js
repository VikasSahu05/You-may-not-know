function updateDetailsStyling() {
    var detailsElement = document.getElementById("contactdetails");
    var isOpen = detailsElement.hasAttribute("open");

    if (isOpen) {
      detailsElement.classList.add("open");
    } else {
      detailsElement.classList.remove("open");
    }
  }

  // Attach an event listener to the details element to update styling on open/close
  document.getElementById("contactdetails").addEventListener("toggle", updateDetailsStyling);

  // Initial styling update when the page loads
  updateDetailsStyling();