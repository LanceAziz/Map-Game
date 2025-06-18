export class Country {
    constructor(id, icon, position, size, labelPosition, color, price, assignedTeam) {
        this.id = id;
        this.icon = icon;
        this.position = position
        this.size = size;
        this.labelPosition = labelPosition;
        this.color = (color == null || color == '') ? "#3d3d3d" : color;
        this.price = price ? price : { "gold": 2, "silver": 20, "bronze": 300 }
        this.assignedTeam = (assignedTeam == null || assignedTeam == '') ? assignedTeam : "";
    }
}
