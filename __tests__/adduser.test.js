import { TEST_URL } from "../app/lib/constants";
import { post } from "axios";

describe("Adding Users Test Cases", () => {
  const testData = [
    {
      email: "vesubramanian1996@gmail.com",
      name: "Subramanian.VE",
    },
  ];

  for (let i = 0; i < testData.length; i++) {
    const eachData = testData[i];
    it(`Adding User -> ${eachData.name}`, async (done) => {
      const {
        status,
        data: { createdUser },
      } = await post(`${TEST_URL}/users`, eachData, {
        headers: { "Content-Type": "application/json" },
      });
      expect(status).toBe(200);
      expect(eachData.name).toBe(createdUser.name);
      done();
    });
  }
});
