document.addEventListener('DOMContentLoaded', function () {
    var overlayContainer = document.querySelector('.overlay-container');
    var skeletonImage = document.querySelector('.center-image img');
    var saveButton = document.querySelector('.save-for-later-btn'); // Using the class 'save-for-later-btn'

    function showOverlay() {
        overlayContainer.classList.add('show');
    }

    function hideOverlay() {
        overlayContainer.classList.remove('show');
    }

    function showSystemParts() {
        var currentImageSrc = skeletonImage.getAttribute('src');

        if (currentImageSrc.includes('skeleton1.png')) {
            document.body.classList.remove('s2-background');
            skeletonImage.classList.remove('hide-skeleton');
        }
    }

    function saveForLater() {
        // Add your save for later logic here
        alert("Item saved for later!");
    }

    skeletonImage.addEventListener('click', function () {
        showOverlay();
        showSystemParts();
    });

    overlayContainer.addEventListener('click', function () {
        hideOverlay();
    });

    // Adding event listener for the Save for Later button
    saveButton.addEventListener('click', saveForLater);
});
