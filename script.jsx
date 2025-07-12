const root = ReactDOM.createRoot(document.getElementById("root"));

const cars = [
    {serialNumber: "12345", model: "Civic", manufacturer: "Honda", yearManuf: 2019},
    {serialNumber: "23456", model: "Accord", manufacturer: "Honda", yearManuf: 2019},
    {serialNumber: "34567", model: "Corolla", manufacturer: "Toyota", yearManuf: 2020},
    {serialNumber: "45678", model: "Camry", manufacturer: "Toyota", yearManuf: 2019},
    {serialNumber: "56789", model: "370z", manufacturer: "Nissan", yearManuf: 2017},
];

class Car extends React.Component {
    render() {
        return (
            <div className="car">
                <h2>{this.props.model}</h2>
                <h3>{this.props.manufacturer}</h3>
                <h4>{this.props.yearManuf}</h4>
                <h5>{this.props.serialNumber}</h5>
            </div>
        );
    }
}

/*
function Car({serialNumber, model, manufacturer, yearManuf}) {
    return (
        <div className="car">
            <h2>{model}</h2>
            <h3>{manufacturer}</h3>
            <h4>{yearManuf}</h4>
            <h5>{serialNumber}</h5>
        </div>
    );
}
*/

function Appl() {
    return (
        <div className="info">
            {cars.map((car, i) => <Car index={i} {...car} />)}
        </div>
    );
}

root.render(<Appl/>);

