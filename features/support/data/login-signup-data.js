import { faker } from "@faker-js/faker";

export const signupData = {
  email: faker.internet.email(),
  password: faker.internet.password()
}

export const invalidLoginData = {
  email: "invalid@login",
  password: faker.internet.password()
}