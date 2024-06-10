export function adaptive() {
    const wrapper = document.querySelector('#adaptive');
    let zoom;
    if (document.body.clientWidth > 980 && document.body.clientWidth < 1440) {
        zoom = document.body.clientWidth / 14.4 / 100;
    }
    if (document.body.clientWidth > 520 && document.body.clientWidth < 1024) {
        zoom = document.body.clientWidth / 7.68 / 100;
    }
    if (document.body.clientWidth < 521) {
        zoom = document.body.clientWidth / 3.7 / 100;
    }
    if (zoom) {
        wrapper.style.zoom = zoom;
    }
}