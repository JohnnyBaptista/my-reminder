const View = {
    render(time) {
        document.body.innerHTML = `
            <p>Next task:</p>
            <span>${time}</span>
        `;
    }
}

export { View };