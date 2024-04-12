const dropdown = document.querySelector('.dropdown')
const dropdownLinkWrapper = document.querySelector('.dropdownLinkWrapper')
const dropdownMenu = document.querySelector('.dropdownMenu')
const heroText = document.querySelector('.heroText')
  


const dropdownLinkWrapperSVG = document.querySelector('.dropdownLinkWrapper .iconWrapper svg')

const dropdownItems = [...document.querySelectorAll('.dropdownItem')]

// Function to check if mouse is inside the dropdown
const isMouseInsideDropdown =(event)=> {
    const rect = dropdown.getBoundingClientRect();
    return (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );
}

document.addEventListener('mousemove', (event) => {
    if (isMouseInsideDropdown(event)) {
        // Apply mouse enter animations
        dropdownLinkWrapper.querySelector('p').style.opacity = '1';
        dropdownLinkWrapperSVG.style.transform = 'rotateZ(180deg)';
        dropdownLinkWrapperSVG.style.opacity = '1';
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.transform = 'translate(-15%, 0%) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg) translate3d(0px, 0px, 0px)';
        dropdownMenu.style.top = '81%';
        heroText.style.zIndex = '-1'
    } 

});


dropdown.addEventListener('mouseleave', ()=>{
    dropdownLinkWrapper.querySelector('p').style.opacity = '0.7'
    dropdownLinkWrapperSVG.style.transform = 'rotateZ(0deg)'
    dropdownLinkWrapperSVG.style.opacity = '0.7'
    dropdownMenu.style.opacity = '0'
    dropdownMenu.style.transform = 'translate(-15%, 0%) translate3d(0px, 15px, 0px)'
    dropdownMenu.style.top = '89%'
    heroText.style.zIndex = '0'
})

dropdownItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        // item.style.opacity = '0.5'; // Change opacity to desired value when hovered

        const itemImageWrapper = item.querySelector('.itemImageWrapper')
        const itemTexts = item.querySelector('.itemTexts')

        itemImageWrapper.style.backgroundColor = 'rgba(123, 97, 255, 0.2)'
        itemImageWrapper.querySelector('img').style.opacity = '1'
        itemTexts.querySelector('.itemTitle').style.color = '#fff'
        itemTexts.querySelector('.itemSubTitle').style.opacity = '0.6'

    });

    item.addEventListener('mouseleave', () => {
        // item.style.opacity = '1'; // Restore opacity to default value when mouse leaves
        const itemImageWrapper = item.querySelector('.itemImageWrapper')
        const itemTexts = item.querySelector('.itemTexts')

        itemImageWrapper.style.backgroundColor = 'rgba(123, 97, 255, 0.1)'
        itemImageWrapper.querySelector('img').style.opacity = '0.5'
        itemTexts.querySelector('.itemTitle').style.color = '#ffffff99'
        itemTexts.querySelector('.itemSubTitle').style.opacity = '0.4'
    });
});

