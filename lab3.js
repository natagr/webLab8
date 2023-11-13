function Refrigerator(color, brand, model, price) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const refrigerators = [
    new Refrigerator("Білий", "Samsung", "RB33J3200SA", 15000),
    new Refrigerator("Сірий", "LG", "GA-B459CLWL", 17500),
    new Refrigerator("Чорний", "Bosch", "KGN39VL45", 20000),
    new Refrigerator("Червоний", "Indesit", "DF4180W", 12000),
    new Refrigerator("Зелений", "Electrolux", "EN3487AOY", 21000)
];

function getRefrigeratorRowHtml(refrigerator) {
    return `<tr>
        <td>${refrigerator.color}</td>
        <td>${refrigerator.brand}</td>
        <td>${refrigerator.model}</td>
        <td>${refrigerator.price}</td>
    </tr>`;
}

function display_all_refrigerators() {
    let html = "<table>";
    html += "<tr><th>Колір</th><th>Марка</th><th>Модель</th><th>Ціна</th></tr>";
    refrigerators.forEach(refrigerator => {
        html += getRefrigeratorRowHtml(refrigerator);
    });
    html += "</table>";
    document.getElementById('result3').innerHTML = html;
}
