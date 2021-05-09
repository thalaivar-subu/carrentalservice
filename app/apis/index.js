import AddUser from "./adduser/handler";
import AddCar from "./addcar/handler";
import SearchCars from "./searchcar/handler";
import CalculatePrice from "./calculateprice/handler";
import GetUserBookings from "./getuserbookings/handler";
import GetCarBookings from "./getcarbookings/handler";
import BookCar from "./bookcar/handler";

const Routes = async (app) => {
  app.post("/users", AddUser);
  app.post("/cars", AddCar);
  app.get("/search-cars", SearchCars);
  app.get("/calculate-price", CalculatePrice);
  app.get("/user/bookings", GetUserBookings);
  app.get("/car/bookings", GetCarBookings);
  app.post("/car/book", BookCar);
};

export default Routes;
