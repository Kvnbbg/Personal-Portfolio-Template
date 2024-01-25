'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Like button functionality
    const likeButton = document.querySelector('.btn-primary');
    const likeCount = document.querySelector('.like-count');
    let likeCounter = parseInt(likeCount.textContent);

    likeButton.addEventListener('click', () => {
        likeCounter++;
        likeCount.textContent = likeCounter;
    });

    // Certification items functionality
    const certificationItemsContainer = document.querySelector('.certification-items-container');

    const handleCertificationItemHover = (e, action) => {
        const targetItem = e.target.closest('.certification-item');
        if (targetItem) {
            const altText = targetItem.querySelector('img').alt;
            const infoBubble = targetItem.querySelector('.info-bubble');

            infoBubble.innerText = altText;
            targetItem.classList[action]('touch-hold');
        }
    };

    certificationItemsContainer.addEventListener('mouseover', (e) => {
        handleCertificationItemHover(e, 'add');
    });

    certificationItemsContainer.addEventListener('mouseout', (e) => {
        handleCertificationItemHover(e, 'remove');
    });

    // Touch events for certification items
    certificationItemsContainer.addEventListener('touchstart', (e) => {
        handleCertificationItemHover(e, 'add');
    });

    certificationItemsContainer.addEventListener('touchend', (e) => {
        handleCertificationItemHover(e, 'remove');
    });

    // Visitor count initialization
    const visitorCount = document.querySelector('.visitor-count');
    let visitorCounter = parseInt(visitorCount.textContent);

    updateVisitorCount(); // Initialize visitor count

    // Create and style the warning message
    const warningDiv = createWarningDiv();
    document.body.appendChild(warningDiv);

    function createWarningDiv() {
        const warningDiv = document.createElement('div');
        warningDiv.innerHTML = `This website isn't free. If you like it, tap the like button and visit <a href='https://ko-fi.com/kvnbbg/' target='_blank'>here</a>.`;
        warningDiv.classList.add('warning-div');

        const closeButton = document.createElement('span');
        closeButton.innerHTML = 'X';
        closeButton.classList.add('close-button');
        closeButton.onclick = () => {
            warningDiv.style.display = 'none';
        };

        warningDiv.appendChild(closeButton);
        return warningDiv;
    }

    // Function to update the visitor count
    function updateVisitorCount() {
        visitorCounter++;
        visitorCount.textContent = visitorCounter;
    }
});
