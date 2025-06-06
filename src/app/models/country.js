export class Country {
    constructor(id, icon, position, size, labelPosition, color = "#3d3d3d", price = { "gold": 2, "silver": 20, "bronze": 300 }) {
        this.id = id;
        this.icon = icon;
        this.position = position
        this.size = size;
        this.labelPosition = labelPosition;
        this.color = color;
        this.price = price;
    }
}
