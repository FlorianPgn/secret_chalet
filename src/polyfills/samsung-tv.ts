// Polyfills for Samsung TV Browsers

// Flexbox polyfill
if (!('flex' in document.documentElement.style) || !('flexWrap' in document.documentElement.style)) {
  // Basic flex container polyfill
  const flexContainers = document.querySelectorAll('.secret-grid');
  flexContainers.forEach((container: Element) => {
    if (container instanceof HTMLElement) {
      const containerWidth = container.offsetWidth;
      const children = Array.from(container.children);
      let rowWidth = 0;

      children.forEach((child: Element) => {
        if (child instanceof HTMLElement) {
          // Set width for two columns
          child.style.width = 'calc(50% - 20px)';
          child.style.float = 'left';
          child.style.marginRight = '20px';
          child.style.marginBottom = '20px';

          rowWidth += child.offsetWidth + 20;
          if (rowWidth > containerWidth) {
            child.style.clear = 'left';
            rowWidth = child.offsetWidth + 20;
          }
        }
      });

      // Clear the float
      const clearFix = document.createElement('div');
      clearFix.style.clear = 'both';
      container.appendChild(clearFix);
    }
  });
}

// CSS Variables polyfill for older browsers
if (!('CSS' in window) || !('supports' in (window as any).CSS) || !(window as any).CSS.supports('--fake-var', 0)) {
  const elementsWithVars = document.querySelectorAll('*');
  const cssVars: { [key: string]: string } = {
    '--background': '#ffffff',
    '--foreground': '#171717'
  };

  elementsWithVars.forEach((element: Element) => {
    if (element instanceof HTMLElement) {
      const styles = getComputedStyle(element);
      Object.keys(cssVars).forEach((variable) => {
        const value = styles.getPropertyValue(variable);
        if (value) {
          element.style.setProperty(variable.replace('--', ''), cssVars[variable]);
        }
      });
    }
  });
}

// Box-shadow polyfill
if (!('boxShadow' in document.documentElement.style)) {
  const elementsWithShadow = document.querySelectorAll('.secret-block');
  elementsWithShadow.forEach((element: Element) => {
    if (element instanceof HTMLElement) {
      element.style.border = '1px solid #ddd';
      // Add a background color gradient for depth
      element.style.background = 'linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%)';
    }
  });
}

// Border-radius polyfill
if (!('borderRadius' in document.documentElement.style)) {
  const elementsWithRadius = document.querySelectorAll('.secret-block');
  elementsWithRadius.forEach((element: Element) => {
    if (element instanceof HTMLElement) {
      element.style.position = 'relative';
      element.style.overflow = 'hidden';
    }
  });
}
