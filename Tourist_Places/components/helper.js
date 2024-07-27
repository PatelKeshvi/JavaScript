export const createElement = (tag, innerHTML, attributes) => {
    const element = document.createElement(tag);
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    return element;
};

export const getElement = (id) => {
    return document.getElementById(id);
};