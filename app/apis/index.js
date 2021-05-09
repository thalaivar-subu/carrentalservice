import AddUser from "./adduser/handler";
import AddUserValidation from "./adduser/validation";
import AddCar from "./addcar/handler";
import AddCarValidation from "./addcar/validation";
import SearchCars from "./searchcar/handler";
import SearchCarValidation from "./searchcar/validation";
import CalculatePrice from "./calculateprice/handler";
import CalculatePriceValidation from "./calculateprice/validation";
import GetUserBookings from "./getuserbookings/handler";
import GetUserBookingValidation from "./getuserbookings/validation";
import GetCarBookings from "./getcarbookings/handler";
import GetCarBookingValidation from "./getcarbookings/validation";
import BookCar from "./bookcar/handler";
import BookCarValidation from "./bookcar/validation";

const Routes = async (app) => {
  app.get("/search-cars", SearchCarValidation, SearchCars);
  app.get("/calculate-price", CalculatePriceValidation, CalculatePrice);
  app.get("/user/bookings", GetUserBookingValidation, GetUserBookings);
  app.get("/car/bookings", GetCarBookingValidation, GetCarBookings);

  app.post("/users", AddUserValidation, AddUser);
  app.post("/cars", AddCarValidation, AddCar);
  app.post("/car/book", BookCarValidation, BookCar);
};

export default Routes;
