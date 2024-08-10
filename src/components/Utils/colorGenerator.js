export const getRandomColor = () => {

    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }

    // Convert hex color to RGB
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    // Make the color lighter by increasing the RGB values by a certain percentage
    const percentage = 0.2; // Adjust the percentage to control the lightness
    const lighterR = Math.min(255, Math.floor(r + (255 - r) * percentage));
    const lighterG = Math.min(255, Math.floor(g + (255 - g) * percentage));
    const lighterB = Math.min(255, Math.floor(b + (255 - b) * percentage));

    // Convert back to hex
    const lighterColor = `#${lighterR.toString(16).padStart(2, '0')}${lighterG.toString(16).padStart(2, '0')}${lighterB.toString(16).padStart(2, '0')}`;

    return { originalColor: color, lighterColor: lighterColor };
}
