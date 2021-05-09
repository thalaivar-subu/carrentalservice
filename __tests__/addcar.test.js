import { TEST_URL } from "../app/lib/constants";
import { post } from "axios";

describe("Adding Cars Test Cases", () => {
  const testData = [
    {
      car_license_number: "KA01EM7070",
      manufacturer: "honda",
      model: "city",
      base_price: 500,
      price_per_hour: 150,
      security_deposit: 1000,
    },
  ];

  for (let i = 0; i < testData.length; i++) {
    const eachData = testData[i];
    it(`Adding Car -> ${eachData.car_license_number}`, async (done) => {
      const {
        status,
        data: { createdCar },
      } = await post(`${TEST_URL}/cars`, eachData, {
        headers: { "Content-Type": "application/json" },
      });
      expect(status).toBe(200);
      expect(eachData.car_license_number).toBe(createdCar.car_license_number);
      done();
    });
  }
});
