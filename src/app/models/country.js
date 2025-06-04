export class Country {
    constructor(id, icon, position, size, color = "#3d3d3d", price = { "gold": 2, "silver": 3, "bronze": 5 }) {
        this.id = id;
        this.icon = icon;
        this.position = position
        this.size = size;
        this.color = color;
        this.price = price;
    }
}
