
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

function App() {
    return (
        <div>
            <div className="info">
                {cars.slice(0, visibleCount).map((car, i) => (
                    <Car key={i} {...car} />
                ))}
            </div>
        </div>
    );
}

root.render(<App/>);
