import "./App.css";
import { useState, useEffect } from "react";
import { Card, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [city, setCity] = useState("faisalabad");
  const [country, setCountry] = useState("pakistan");
  const [temp, setTemp] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=ea1c6c54d1ba4162865175047213108&q=${city}&aqi=no`
    );
    const data = await response.json();
    console.log(data);
    if (data.location) {
      setTemp(data.current.temp_c);
      setCountry(data.location.country);
    } else {
      <h1>No data found</h1>;
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <section>
      <Card className=" container text-center mt-5 bg-primary text-light ">
        <Card.Body>
          <Card.Title className="fw-bold">My Weather App</Card.Title>
          <Card.Text className="m-auto w-50">
            <InputGroup className="m-3 pt-5  ">
              <FormControl
                placeholder="Search your City"
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="container py-5 d-flex align-items-center justify-content-center bg-dark text-light">
        <div>
          <h3 className="fw-bold">City : {city}</h3>
          <h3 className="fw-bold">Temperature : {temp} C</h3>
          <h3 className="fw-bold">Country : {country}</h3>
        </div>
      </div>
    </section>
  );
}

export default App;
