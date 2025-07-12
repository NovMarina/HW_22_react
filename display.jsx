document.getElementById("showItem").addEventListener("click", () => {
    if (visibleCount < cars.length) {
        visibleCount++;
        root.render(<App/>);
    }
});