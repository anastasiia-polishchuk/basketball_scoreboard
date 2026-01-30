function increaseScore(points, scoreElementId) {
    const scoreElement = document.getElementById(scoreElementId);
    scoreElement.textContent = parseInt(scoreElement.textContent) + points;
    }