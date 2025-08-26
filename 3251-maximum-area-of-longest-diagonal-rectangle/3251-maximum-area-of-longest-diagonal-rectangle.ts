function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = 0;
    let maxArea = 0;
    for (let [w, h] of dimensions) {
        let diagonal = Math.sqrt(w * w + h * h);
        let area = w * h;

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        } else if (diagonal === maxDiagonal && area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
}
