export function drillContribution() {
    const heatmap = document.getElementById("heatmap");
    const totalDays = 364; // 52 weeks * 7 days
    const today = new Date();

    const colors = [
        "#ebedf0", // 0
        "#c6e48b", // 1–9
        "#7bc96f", // 10–19
        "#239a3b", // 20–29
        "#196127"  // 30+
    ];

    function getColor(count) {
        if (count === 0) return colors[0];
        if (count < 10) return colors[1];
        if (count < 20) return colors[2];
        if (count < 30) return colors[3];
        return colors[4];
    }

    // Generate squares from oldest to newest (left to right)
    for (let i = totalDays - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const count = Math.floor(Math.random() * 20);
        const color = getColor(count);

        const square = document.createElement("div");
        square.className = "w-3 h-3 rounded-sm transition duration-300 hover:scale-110 hover:ring-2 hover:ring-offset-1 hover:ring-gray-500";
        square.style.backgroundColor = color;
        square.title = `${date.toISOString().split("T")[0]} — ${count} contributions`;

        heatmap.appendChild(square);
    }
};