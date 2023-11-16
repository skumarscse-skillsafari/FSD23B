import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartState } from "../Context/Context";
import Ratings from "./Ratings";
const Filter = () => {
  const {
    productsState: { byStock, byQuickDelivery, byRating, searchQuery, sort },
    productsDispatch,
  } = CartState();
  return (
    <div
      style={{ minHeight: "90vh", background: "grey" }}
      className="rounded p-3"
    >
      <h2>Filter Component</h2>
      <Form>
        <Form.Check
          type="radio"
          label="Sort by price (Ascending)"
          name="asc"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
        <Form.Check
          type="radio"
          label="Sort by price (Decending)"
          name="dsc"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
        <Form.Check
          type="checkbox"
          label="Include out-of-stock"
          name="out-of-stock"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <Form.Check
          type="checkbox"
          label="Include Quick Delivery"
          name="quick-delivery"
          className="my-4"
          onChange={() =>
            productsDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byQuickDelivery}
        />
        <div className="my-3">
          <Ratings
            rating={byRating}
            onClick={(i) =>
              productsDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
          />
        </div>
        <Button
          variant="primary"
          onClick={() =>
            productsDispatch({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear Filter
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
