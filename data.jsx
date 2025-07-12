const root = ReactDOM.createRoot(document.getElementById("root"));

const cars = [
    {serialNumber: "12345", model: "Civic", manufacturer: "Honda", yearManuf: 2019},
    {serialNumber: "23456", model: "Accord", manufacturer: "Honda", yearManuf: 2019},
    {serialNumber: "34567", model: "Corolla", manufacturer: "Toyota", yearManuf: 2020},
    {serialNumber: "45678", model: "Camry", manufacturer: "Toyota", yearManuf: 2019},
    {serialNumber: "56789", model: "370z", manufacturer: "Nissan", yearManuf: 2017},
    {serialNumber: "67890", model: "Altima", manufacturer: "Nissan", yearManuf: 2018},
    {serialNumber: "78901", model: "Model 3", manufacturer: "Tesla", yearManuf: 2021},
    {serialNumber: "89012", model: "Fusion", manufacturer: "Ford", yearManuf: 2017},
    {serialNumber: "90123", model: "Mazda3", manufacturer: "Mazda", yearManuf: 2020},
    {serialNumber: "01234", model: "Impreza", manufacturer: "Subaru", yearManuf: 2019},
    {serialNumber: "11223", model: "Focus", manufacturer: "Ford", yearManuf: 2016},
    {serialNumber: "22334", model: "Elantra", manufacturer: "Hyundai", yearManuf: 2021},
    {serialNumber: "33445", model: "Rio", manufacturer: "Kia", yearManuf: 2018},
    {serialNumber: "44556", model: "A4", manufacturer: "Audi", yearManuf: 2020},
    {serialNumber: "55667", model: "3 Series", manufacturer: "BMW", yearManuf: 2019},
    {serialNumber: "66778", model: "Passat", manufacturer: "Volkswagen", yearManuf: 2018},
    {serialNumber: "77889", model: "C-Class", manufacturer: "Mercedes-Benz", yearManuf: 2020},
    {serialNumber: "88990", model: "Optima", manufacturer: "Kia", yearManuf: 2019},
    {serialNumber: "99001", model: "CX-5", manufacturer: "Mazda", yearManuf: 2021},
    {serialNumber: "10112", model: "Leaf", manufacturer: "Nissan", yearManuf: 2020},
    {serialNumber: "11213", model: "Yaris", manufacturer: "Toyota", yearManuf: 2017},
    {serialNumber: "12314", model: "Mustang", manufacturer: "Ford", yearManuf: 2022},
    {serialNumber: "13415", model: "i30", manufacturer: "Hyundai", yearManuf: 2018},
    {serialNumber: "14516", model: "Astra", manufacturer: "Opel", yearManuf: 2016},
    {serialNumber: "15617", model: "Scala", manufacturer: "Skoda", yearManuf: 2021}
];

let visibleCount = 0;
