import React, { useState, useEffect } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

function Files() {
  let [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          setActive(number);
          setPageNumber(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  let [cardData, setCardData] = useState([]);
  let getData = async () => {
    let res = await axios.get("https://webscraping0.herokuapp.com/getdata");
    setCardData(res.data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  const [pageNumber, setPageNumber] = useState(1);
  const usersperPage = 6;
  const pageVisited = (pageNumber - 1) * usersperPage;
  const displayUsers = cardData.slice(pageVisited, pageVisited + usersperPage);
  return (
    <>
      <Row xs={1} md={2} className="g-4 cards-cont">
        {displayUsers.map((e, i) => {
          return (
            <Col key={i} className="cards-element">
              <div className="wrapper">
                <div className="product-img">
                  <img className="img" src={e.Image_url} height="420" width="327" />
                </div>
                <div className="product-info">
                  <div className="product-text">
                    <h1>{e.Name_String}</h1>
                    <h1>{e.Rating}</h1>
                    <h1>{e.Price}</h1>
                    <h1>{e.Final_Price}</h1>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div>
        <Pagination className="pagination">{items}</Pagination>
      </div>
    </>
  );
}

export default Files;
