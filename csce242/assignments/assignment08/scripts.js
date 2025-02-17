function showImage() {
    const transport = document.getElementById('transport').value.toLowerCase();
    const bikeImage = document.getElementById('bikeImage');
    const scooterImage = document.getElementById('scooterImage');
    const carImage = document.getElementById('carImage');
    const skateboardImage = document.getElementById('skateboardImage');
    
    bikeImage.style.display = 'none';
    scooterImage.style.display = 'none';
    carImage.style.display = 'none';
    skateboardImage.style.display = 'none';

    if (transport === "bike") {
        bikeImage.style.display = 'block';
    } else if (transport === "scooter") {
        scooterImage.style.display = 'block';
    } else if (transport === "car") {
        carImage.style.display = 'block';
    } else if (transport === "skateboard") {
        skateboardImage.style.display = 'block';
    }
}

function changeColor(color) {
    document.getElementById('heart').style.color = color;
}