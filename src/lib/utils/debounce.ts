export function debounce(func: Function, debounceTime: number = 300) {
    let timer: ReturnType<typeof setTimeout>
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, debounceTime)
    }
}