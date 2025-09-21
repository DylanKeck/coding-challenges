function formatDuration (seconds) {
    if (seconds === 0) return "now";

    const units = [
        { unit: "year",   value: 31536000 },
        { unit: "day",    value: 86400 },
        { unit: "hour",   value: 3600 },
        { unit: "minute", value: 60 },
        { unit: "second", value: 1 }
    ];

    let parts = [];

    for (let { unit, value } of units) {
        let amount = Math.floor(seconds / value);
        if (amount > 0) {
            parts.push(amount + " " + (amount === 1 ? unit : unit + "s"));
            seconds %= value;
        }
    }

    if (parts.length === 1) return parts[0];
    if (parts.length === 2) return parts.join(" and ");

    return parts.slice(0, -1).join(", ") + " and " + parts.slice(-1);
}