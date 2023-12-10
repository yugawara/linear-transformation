// Dial Creation Class
class Dial {
    constructor(svgId, options) {
        this.svgId = svgId;
        this.options = options;
        this.initDial();
    }

    initDial() {
        const svgNS = "http://www.w3.org/2000/svg";
        const dial = document.getElementById(this.svgId);
        const { radius, centerX, centerY } = this.options;

        // Create 60 notches
        for (let i = 0; i < 60; i++) {
            let angle = (i * 6) * (Math.PI / 180); // Convert angle to radians
            let x1 = centerX + radius * Math.cos(angle);
            let y1 = centerY + radius * Math.sin(angle);
            let x2 = centerX + (radius - 10) * Math.cos(angle); // Notch length is 10
            let y2 = centerY + (radius - 10) * Math.sin(angle);

            let line = document.createElementNS(svgNS, "line");
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', 'black');
            line.setAttribute('stroke-width', '2');

            dial.appendChild(line);
        }

        // Optionally, add the central circle
        let circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', radius);
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('fill', 'none');
        dial.appendChild(circle);
    }
}

// Main App Logic
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dial').forEach(svg => {
        document.querySelectorAll('.dial').forEach(svg => {
            const id = svg.id;
            const radius = parseInt(svg.dataset.radius);
            const centerX = parseInt(svg.dataset.centerX);
            const centerY = parseInt(svg.dataset.centerY);
            
    
            const options = { radius, centerX, centerY };
            new Dial(id, options);
        });
    });
});