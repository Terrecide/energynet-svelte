export default function scroll(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
        top: anchor.offsetTop - 100,
        behavior: 'smooth'
    });
}