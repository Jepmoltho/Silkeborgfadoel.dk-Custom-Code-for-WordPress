// function createCircle() {
//   // Create a container div for the circle
//   var circleContainer = document.createElement("div");
//   circleContainer.style.position = "fixed";
//   circleContainer.style.bottom = "20px";
//   circleContainer.style.right = "20px";
//   circleContainer.style.zIndex = "9999";

//   // Create the circle button
//   var circleButton = document.createElement("button");
//   circleButton.style.width = "50px";
//   circleButton.style.height = "50px";
//   circleButton.style.borderRadius = "50%";
//   circleButton.style.backgroundColor = "#FFFFFF"; // Change circle background color to white
//   circleButton.style.border = "2px solid #4285F4"; // Add border with Google blue color
//   circleButton.style.cursor = "pointer";
//   circleButton.onclick = function () {
//     window.open("https://www.google.com", "_blank");
//   };

//   // Create the image element for the webp image
//   var imageElement = document.createElement("img");
//   imageElement.src =
//     "https://silkeborgfadoel.dk/wp-content/uploads/2024/04/Google__G__logo.svg_.webp";
//   imageElement.style.width = "100%";
//   imageElement.style.height = "auto"; // Maintain aspect ratio

//   // Append the image to the circle button
//   circleButton.appendChild(imageElement);

//   // Append the button to the container
//   circleContainer.appendChild(circleButton);

//   // Append the container to the page
//   document.getElementById("page").appendChild(circleContainer);
// }

// function createCircle() {
//   // Create a container div for the circle
//   var circleContainer = document.createElement("div");
//   circleContainer.style.position = "fixed";
//   circleContainer.style.bottom = "20px";
//   circleContainer.style.right = "20px";
//   circleContainer.style.zIndex = "9999";

//   // Create the circle button
//   var circleButton = document.createElement("button");
//   circleButton.style.width = "150px"; // Initial width
//   circleButton.style.height = "50px";
//   circleButton.style.borderRadius = "25px"; // Initial border radius
//   circleButton.style.backgroundColor = "#FFFFFF"; // Change circle background color to white
//   //circleButton.style.border = "#e6d234";
//   circleButton.style.border = "2px solid #4285F4"; // Add border with Google blue color
//   circleButton.style.cursor = "pointer";
//   circleButton.style.display = "flex"; // Make it a flex container
//   circleButton.style.alignItems = "center"; // Center items vertically
//   circleButton.style.padding = "0 10px"; // Add padding to separate logo and text

//   // Create the image element for the webp image
//   var imageElement = document.createElement("img");
//   imageElement.src =
//     "https://silkeborgfadoel.dk/wp-content/uploads/2024/04/Google__G__logo.svg_.webp";
//   imageElement.style.width = "40px"; // Adjust logo size
//   imageElement.style.height = "auto"; // Maintain aspect ratio

//   // Create the text element
//   var textElement = document.createElement("span");
//   textElement.textContent = "Bedøm os";
//   textElement.style.marginLeft = "10px"; // Add margin between logo and text

//   // Append the image and text to the circle button
//   circleButton.appendChild(imageElement);
//   circleButton.appendChild(textElement);

//   // Add click event to open Google in new tab
//   circleButton.onclick = function () {
//     window.open("https://www.google.com", "_blank");
//   };

//   // Append the button to the container
//   circleContainer.appendChild(circleButton);

//   // Append the container to the page
//   document.getElementById("page").appendChild(circleContainer);

//   // Add event listener for scroll
//   window.addEventListener("scroll", function () {
//     var scrollPosition = window.scrollY;
//     if (scrollPosition > 0) {
//       // Hide the text when scrolling
//       textElement.style.display = "none";
//       // Narrow the circle from the right
//       circleButton.style.width = "50px"; // Adjust width to show only the logo
//       circleButton.style.borderTopRightRadius = "25px"; // Adjust border radius
//       circleButton.style.borderBottomRightRadius = "25px"; // Adjust border radius
//     } else {
//       // Show the text when not scrolling
//       textElement.style.display = "inline";
//       // Reset the circle width and border radius
//       circleButton.style.width = "150px"; // Initial width
//       circleButton.style.borderRadius = "25px"; // Initial border radius
//     }
//   });
// }

// function createCircle() {
//   // Create a container div for the circle
//   var circleContainer = document.createElement("div");
//   circleContainer.style.position = "fixed";
//   circleContainer.style.bottom = "20px";
//   circleContainer.style.right = "20px";
//   circleContainer.style.zIndex = "9999";

//   // Create the circle button
//   var circleButton = document.createElement("button");
//   circleButton.style.width = "150px"; // Initial width
//   circleButton.style.height = "50px";
//   circleButton.style.borderRadius = "25px"; // Initial border radius
//   circleButton.style.backgroundColor = "#FFFFFF"; // Change circle background color to white
//   //circleButton.style.border = "#e6d234";
//   circleButton.style.border = "2px solid #4285F4"; // Add border with Google blue color
//   circleButton.style.cursor = "pointer";
//   circleButton.style.display = "flex"; // Make it a flex container
//   circleButton.style.alignItems = "center"; // Center items vertically
//   circleButton.style.padding = "0 10px"; // Add padding to separate logo and text

//   // Create the image element for the webp image
//   var imageElement = document.createElement("img");
//   imageElement.src =
//     "https://silkeborgfadoel.dk/wp-content/uploads/2024/04/Google__G__logo.svg_.webp";
//   imageElement.style.width = "40px"; // Adjust logo size
//   imageElement.style.height = "auto"; // Maintain aspect ratio

//   // Create the text element
//   var textElement = document.createElement("span");
//   textElement.textContent = "Bedøm os";
//   textElement.style.marginLeft = "10px"; // Add margin between logo and text

//   // Append the image and text to the circle button
//   circleButton.appendChild(imageElement);
//   circleButton.appendChild(textElement);

//   // Add click event to open Google in new tab
//   circleButton.onclick = function () {
//     window.open("https://www.google.com", "_blank");
//   };

//   // Append the button to the container
//   circleContainer.appendChild(circleButton);

//   // Append the container to the page
//   document.getElementById("page").appendChild(circleContainer);

//   // Add event listener for scroll
//   window.addEventListener("scroll", function () {
//     var scrollPosition = window.scrollY;
//     if (scrollPosition > 0) {
//       // Hide the text when scrolling
//       textElement.style.display = "none";
//       // Narrow the circle from the right with animation
//       circleButton.style.transition = "width 0.5s, border-radius 0.5s";
//       circleButton.style.width = "50px"; // Adjust width to show only the logo
//       circleButton.style.borderTopRightRadius = "25px"; // Adjust border radius
//       circleButton.style.borderBottomRightRadius = "25px"; // Adjust border radius
//     } else {
//       // Show the text when not scrolling
//       textElement.style.display = "inline";
//       // Widen the circle with animation
//       circleButton.style.transition = "width 0.5s, border-radius 0.5s";
//       circleButton.style.width = "150px"; // Initial width
//       circleButton.style.borderRadius = "25px"; // Initial border radius
//     }
//   });
// }

function createCircle() {
  // Create a container div for the circle
  var circleContainer = document.createElement("div");
  circleContainer.style.position = "fixed";
  circleContainer.style.bottom = "20px";
  circleContainer.style.right = "20px";
  circleContainer.style.zIndex = "9999";

  // Create the circle button
  var circleButton = document.createElement("button");
  circleButton.style.width = "150px"; // Initial width
  circleButton.style.height = "50px";
  circleButton.style.borderRadius = "25px"; // Initial border radius
  circleButton.style.backgroundColor = "#FFFFFF"; // Change circle background color to white
  //circleButton.style.border = "#e6d234";
  circleButton.style.border = "2px solid #4285F4"; // Add border with Google blue color
  circleButton.style.cursor = "pointer";
  circleButton.style.display = "flex"; // Make it a flex container
  circleButton.style.alignItems = "center"; // Center items vertically
  circleButton.style.padding = "0 10px"; // Add padding to separate logo and text

  // Create the image element for the webp image
  var imageElement = document.createElement("img");
  imageElement.src =
    "https://silkeborgfadoel.dk/wp-content/uploads/2024/04/Google__G__logo.svg_.webp";
  imageElement.style.width = "40px"; // Adjust logo size
  imageElement.style.height = "auto"; // Maintain aspect ratio

  // Create the text element
  var textElement = document.createElement("span");
  textElement.textContent = "Bedøm os";
  textElement.style.marginLeft = "10px"; // Add margin between logo and tex // Initially hide text

  // Append the image and text to the circle button
  circleButton.appendChild(imageElement);
  circleButton.appendChild(textElement);

  // Add click event to open Google in new tab
  circleButton.onclick = function () {
    window.open("https://www.google.com", "_blank");
  };

  // Append the button to the container
  circleContainer.appendChild(circleButton);

  // Append the container to the page
  document.getElementById("page").appendChild(circleContainer);

  // Add event listener for scroll
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      // Narrow the circle from the right with animation
      //textElement.style.opacity = "0";
      textElement.style.visibility = "hidden";

      circleButton.style.transition = "width 0.5s, border-radius 0.5s";
      circleButton.style.width = "50px"; // Adjust width to show only the logo
      circleButton.style.borderTopRightRadius = "25px"; // Adjust border radius
      circleButton.style.borderBottomRightRadius = "25px"; // Adjust border radius
      // Fade out the text
      textElement.style.transition = "opacity 0.5s"; //HERE
      // textElement.style.opacity = "0"; // Hide text
    } else {
      // Widen the circle with animation
      circleButton.style.transition = "width 0.5s, border-radius 0.5s";
      circleButton.style.width = "150px"; // Initial width
      circleButton.style.borderRadius = "25px"; // Initial border radius
      // Fade in the text
      setTimeout(function () {
        textElement.style.visibility = "visible";
        textElement.style.transition = "opacity 0.5s";
        textElement.style.opacity = "1"; // Show text
      }, 500); // Delay the text fade in to match the circle animation
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  createCircle();
});
