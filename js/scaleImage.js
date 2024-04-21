const frontImg = document.querySelector('#learn .sectionContainer .imageSection .frontImg');
const imageBehind = document.querySelector('#learn .sectionContainer .imageSection .imageBehind');

const minScale = 0.9; // Minimum scale value
const maxScale = 1; // Maximum scale value
const startScroll = 531.4437255859375; // Scroll position to start animation
const endScroll = 304.4437255859375; // Scroll position to end animation

const minScaleForImageBehind = 0.5
const maxScaleForImageBehind = 1

const minOpacity = 0
const maxOpacity = 1


const startValueTranslate3dX = 0
const stopValueTranslate3dX = 73

const startValueTranslate3dY = 0
const stopValueTranslate3dY = 113


// Function to calculate scale for front image based on scroll position
const calculate3DScaleForFrontImage = () => {
    const frontImgRect = frontImg.getBoundingClientRect();
    const topPosition = frontImgRect.top;

    if (topPosition <= startScroll && topPosition >= endScroll) {
        const scrollDiff = startScroll - endScroll;
        const currentDiff = startScroll - topPosition;
        const scale = minScale + ((maxScale - minScale) * (currentDiff / scrollDiff));
        return scale;
    } else if (topPosition < endScroll) {
        return maxScale;
    } else {
        return minScale;
    }
};

const calculate3DScaleForImageBehind = () => {
    const frontImgRect = frontImg.getBoundingClientRect();
    const topPosition = frontImgRect.top;

    if (topPosition <= startScroll && topPosition >= endScroll) {
        const scrollDiff = startScroll - endScroll;
        const currentDiff = startScroll - topPosition;
        const scale = minScaleForImageBehind + ((maxScaleForImageBehind - minScaleForImageBehind) * (currentDiff / scrollDiff));
        return scale;
    } else if (topPosition < endScroll) {
        return maxScaleForImageBehind;
    } else {
        return minScaleForImageBehind;
    }
};

const calculateOpacityForImageBehind = () => {
    const frontImgRect = frontImg.getBoundingClientRect();
    const topPosition = frontImgRect.top;

    if (topPosition <= startScroll && topPosition >= endScroll) {
        const scrollDiff = startScroll - endScroll;
        const currentDiff = startScroll - topPosition;
        const opacity = minOpacity + ((maxOpacity - minOpacity) * (currentDiff / scrollDiff));
        return opacity;
    } else if (topPosition < endScroll) {
        return maxOpacity;
    } else {
        return minOpacity;
    }
};

const calculate3DTranslateXForImageBehind = () => {
    const frontImgRect = frontImg.getBoundingClientRect();
    const topPosition = frontImgRect.top;

    if (topPosition <= startScroll && topPosition >= endScroll) {
        const scrollDiff = startScroll - endScroll;
        const currentDiff = startScroll - topPosition;
        const transX = stopValueTranslate3dX - ((stopValueTranslate3dX - startValueTranslate3dX) * (currentDiff / scrollDiff));

        return transX;

    } else if (topPosition < endScroll) {

        return startValueTranslate3dX;

    } else {
        return stopValueTranslate3dX;
    }
};

const calculate3DTranslateYForImageBehind = () => {
    const frontImgRect = frontImg.getBoundingClientRect();
    const topPosition = frontImgRect.top;

    if (topPosition <= startScroll && topPosition >= endScroll) {
        const scrollDiff = startScroll - endScroll;
        const currentDiff = startScroll - topPosition;
        const transY = stopValueTranslate3dY - ((stopValueTranslate3dY - startValueTranslate3dY) * (currentDiff / scrollDiff));

        return transY;

    } else if (topPosition < endScroll) {

        return startValueTranslate3dY;
        
    } else {
        return stopValueTranslate3dY;
    }
};

// Function to update scale dynamically
 const updateScale = () => {
    const scale = calculate3DScaleForFrontImage();
    const scaledValue = Math.max(minScale, Math.min(maxScale, scale)); // Clamp scale between min and max values
    const transformValue = `translate3d(0px, 0px, 0px) scale3d(${scaledValue}, ${scaledValue}, 1)`;
    frontImg.style.transform = transformValue;
    
    

};


// Function to update opacity dynamically
const updateOpacity = () => {
    const opacity = calculateOpacityForImageBehind();
    const opacityValue = Math.max(minOpacity, Math.min(maxOpacity, opacity)); // Clamp opacity between min and max values
    const transformValue = `${opacityValue}`;
    imageBehind.style.opacity = transformValue;
  
};

// Function to update 3D translate dynamically
const update3DTranslate = () => {
    const scaleForImageBehind = calculate3DScaleForImageBehind()
    const transX = calculate3DTranslateXForImageBehind()
    const transY = calculate3DTranslateYForImageBehind()

    
    const scaledValueForImgBehind = Math.max(minScaleForImageBehind, Math.min(maxScaleForImageBehind, scaleForImageBehind)); // Clamp scale between min and max values
    const transformValueForImageBehind = `translate3d(-${transX}px, ${transY}px, 0px) scale3d(${scaledValueForImgBehind}, ${scaledValueForImgBehind}, 1)`;
    imageBehind.style.transform = transformValueForImageBehind;
  
};



export {
    updateScale,
    updateOpacity,
    update3DTranslate
}