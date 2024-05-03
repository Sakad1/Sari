function toggleMoreInfo(button) {
    // Find the parent car element
    var car = button.closest('.car');
    
    // Toggle the visibility of the more-info section
    var moreInfo = car.querySelector('.more-info');
    moreInfo.classList.toggle('show');

    // Change button text based on visibility
    if (moreInfo.classList.contains('show')) {
        button.textContent = 'Show Less';
    } else {
        button.textContent = 'Show More';
    }
}

// Function to check if an element is in the viewport
function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var cars = document.querySelectorAll('.car');
    cars.forEach(function(car) {
        if (isElementInViewport(car)) {
            car.classList.add('animate');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);


