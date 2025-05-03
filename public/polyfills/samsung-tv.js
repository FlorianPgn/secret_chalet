// Polyfills for Samsung TV Browsers
// Flexbox polyfill
if (!('flex' in document.documentElement.style) || !('flexWrap' in document.documentElement.style)) {
    // Basic flex container polyfill
    var flexContainers = document.querySelectorAll('.secret-grid');
    flexContainers.forEach(function (container) {
        if (container instanceof HTMLElement) {
            var containerWidth_1 = container.offsetWidth;
            var children = Array.from(container.children);
            var rowWidth_1 = 0;
            children.forEach(function (child) {
                if (child instanceof HTMLElement) {
                    // Set width for two columns
                    child.style.width = 'calc(50% - 20px)';
                    child.style.float = 'left';
                    child.style.marginRight = '20px';
                    child.style.marginBottom = '20px';
                    rowWidth_1 += child.offsetWidth + 20;
                    if (rowWidth_1 > containerWidth_1) {
                        child.style.clear = 'left';
                        rowWidth_1 = child.offsetWidth + 20;
                    }
                }
            });
            // Clear the float
            var clearFix = document.createElement('div');
            clearFix.style.clear = 'both';
            container.appendChild(clearFix);
        }
    });
}
// CSS Variables polyfill for older browsers
if (!('CSS' in window) || !('supports' in window.CSS) || !window.CSS.supports('--fake-var', 0)) {
    var elementsWithVars = document.querySelectorAll('*');
    var cssVars_1 = {
        '--background': '#ffffff',
        '--foreground': '#171717'
    };
    elementsWithVars.forEach(function (element) {
        if (element instanceof HTMLElement) {
            var styles_1 = getComputedStyle(element);
            Object.keys(cssVars_1).forEach(function (variable) {
                var value = styles_1.getPropertyValue(variable);
                if (value) {
                    element.style.setProperty(variable.replace('--', ''), cssVars_1[variable]);
                }
            });
        }
    });
}
// Box-shadow polyfill
if (!('boxShadow' in document.documentElement.style)) {
    var elementsWithShadow = document.querySelectorAll('.secret-block');
    elementsWithShadow.forEach(function (element) {
        if (element instanceof HTMLElement) {
            element.style.border = '1px solid #ddd';
            // Add a background color gradient for depth
            element.style.background = 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)';
        }
    });
}
// Border-radius polyfill
if (!('borderRadius' in document.documentElement.style)) {
    var elementsWithRadius = document.querySelectorAll('.secret-block');
    elementsWithRadius.forEach(function (element) {
        if (element instanceof HTMLElement) {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
        }
    });
}
