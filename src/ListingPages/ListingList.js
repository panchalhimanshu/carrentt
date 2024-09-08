import React, { useContext, useEffect, useState } from "react";
import ListingcomonCom from "./ListingcomonCom";
import { CarsApi } from "../Cardata/CarsApi";
import "./ListingList.css";
import NavBarPart from "../navbar/NavBarPart";
import { Link, useNavigate } from "react-router-dom";
import { Carsdata } from "../App";
import { FaCar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdAddLocation } from "react-icons/md";
import { FaList } from "react-icons/fa";
import Footer from "../Footer/Footer";

function ListingList({ Handleaddcart }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const { carssetdetailes } = useContext(Carsdata);
  const Navigate = useNavigate();

  {
    /* pagination-code */
  }
  const [showcars, setshowcars] = useState(5);
  {
    /* pagination-code */
  }

  // console.log(showcars)

  const [objectsToShow, setToShow] = useState(CarsApi);

  // pagination

  const [currentpage, setcurrentpage] = useState(1);
  const reacordperpages = showcars;
  const lastindex = currentpage * reacordperpages;
  const firstindex = lastindex - reacordperpages;

  const records = objectsToShow.slice(firstindex, lastindex);
  const npage = Math.ceil(objectsToShow.length / reacordperpages);

  const numbers = [...Array(npage + 1).keys()].slice(1);

  // pagination

  const carchanges = (e) => {
    if (e.target.value == "default") {
      setToShow(CarsApi);
      setcurrentpage(1);
    } else {
      const Apidcr = CarsApi.filter(
        (item) => item.carcompany === e.target.value
      );
      setToShow(Apidcr);
      setcurrentpage(1);
    }
  };

  // sort by

  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  };
  const handleChange = (value) => {
    if (value == "none") {
      setToShow(CarsApi);
      setcurrentpage(1);
    } else {
      setcurrentpage(1);
      let toType, toAscending;
      switch (value) {
        case "ascending":
          toType = true;
          toAscending = true;
          break;
        case "descending":
          toType = true;
          toAscending = false;
          break;
        case "high":
          toType = false;
          toAscending = true;
          break;
        case "low":
          toType = false;
          toAscending = false;
          break;
      }
      let current = [...objectsToShow];
      current.sort((a, b) =>
        toType
          ? compare(a.name, b.name, toAscending)
          : compare(a.price, b.price, toAscending)
      );
      setToShow([...current]);
    }
  };

  // sort by

  return (
    <div>
      <NavBarPart />
      <ListingcomonCom />

      <div className="Selected_options">
        <div>showing 1-8 of 10 Results</div>

        <div className="selected_results">
          <label htmlFor="">Show :</label>
          <div>
            <select
              name=""
              id=""
              onChange={(e) => (setshowcars(e.target.value), setcurrentpage(1))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>

          {/* short by */}

          <select onChange={(e) => handleChange(e.target.value)}>
            <option value="none">Default</option>
            <option value="ascending">Alphabetically, A-Z</option>
            <option value="descending">Alphabetically, Z-A</option>
            <option value="high">Low to high</option>
            <option value="low">High to low</option>
          </select>

          {/* short by */}

          <div>
            <select name="" id="" onChange={carchanges}>
              <option value="default">Default</option>
              <option value="mazda">Mazda</option>
              <option value="audi">Audi</option>
              <option value="honda">Honda</option>
              <option value="toyota">Toyota</option>
              <option value="acura">Acura</option>
              <option value="tesla">Tesla</option>
            </select>
          </div>
        </div>

        <div className="selected_icons">
          <FaList className="selected-list" />
          <Link to={"/listing/listinggrid"}>
            <FaList className="selected-list selected-list-grid" />
          </Link>
        </div>
      </div>

      <div className="ListingList_main_card">
        {records &&
          records.map((Car, carid) => (
            <div className="ListingList_card" key={carid}>
              <div
                className="ListingList_img"
                onClick={() => {
                  carssetdetailes(Car);
                  Navigate("/listing/listingdetails");
                }}
              >
                <img src={Car.url} alt="" />
              </div>

              <div className="ListingList_details">
                <div className="Listinglist_name_review">
                  <div>
                    <p>{Car.name}</p>
                    <p>Category : {Car.category}</p>
                  </div>
                  <div>
                    <p className="car_review">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      (5.0)
                    </p>
                    <p className="Listing_carrent">
                      {" "}
                      ${Car.price} <span>/ Day</span>{" "}
                    </p>
                  </div>
                </div>

                <div className="Listinglist_car_info">
                  <div>{Car.gear}</div>
                  <div>{Car.Speed}</div>
                  <div>{Car.engine}</div>
                  <div>{Car.stearing}</div>
                  <div>{Car.model}</div>
                  <div>{Car.sit}</div>
                </div>

                <div className="Listinglist_Rent_country">
                  <div>
                    <p>
                      {" "}
                      <FaCar /> {Car.carcompany}
                    </p>
                    <p>
                      <MdAddLocation /> {Car.country}
                    </p>
                  </div>

                  <div>
                    <div className="Listinglist_Rent">
                      {" "}
                      <Link
                        to={"/addcart"}
                        className="Link_tag"
                        onClick={() => {
                          Handleaddcart(Car);
                        }}
                      >
                        {" "}
                        <i className="bx bxs-calendar-alt"></i>Rent Now{" "}
                      </Link>{" "}
                    </div>
                    {/* <input type="submit" name="" id="" value={"Rent Now"} onClick={()=>{carssetdetailes(Car) ; Navigate('/listing/listingdetails')}} className='Listinglist_Rent'/> */}
                    {/* <a onClick={(e)=>{carssetdetailes(Car) }} className='Listinglist_Rent' target='_blank' href='/listing/listingdetails'>Rent Now</a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* pagination-code */}

      <ul className="pagination">
        <li
          className="page-item"
          style={{ display: currentpage === 1 ? "none" : "block" }}
          onClick={prePage}
        >
          <a href="#" className="page-link" onClick={prePage}>
            Prev
          </a>
        </li>
        {numbers.map((n, i) => (
          <li
            key={i}
            className={`page-item ${
              currentpage === n ? "activecurrntpage" : ""
            }`}
          >
            <a href="#" className="page-link" onClick={() => changecpage(n)}>
              {n}{" "}
            </a>
          </li>
        ))}
        <li
          className="page-item"
          style={{ display: currentpage === npage ? "none" : "block" }}
          onClick={nextPage}
        >
          <a href="#" className="page-link ">
            Next
          </a>
        </li>
      </ul>

      {/* pagination-code */}

      <Footer />
    </div>
  );

  {
    /* pagination-code */
  }

  function prePage() {
    if (currentpage !== 1) {
      setcurrentpage(currentpage - 1);
    }
  }

  function changecpage(n) {
    setcurrentpage(n);
  }

  function nextPage() {
    if (currentpage !== npage) {
      setcurrentpage(currentpage + 1);
    }
  }

  {
    /* pagination-code */
  }
}

export default ListingList;
