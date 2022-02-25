import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ3YjMyNzIwYTVlZDU1MjA2MzY2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTI0MzA5NiwiZXhwIjoxNjQ1NTAyMjk2fQ.2D4e_58FD9BJUIAdujBFIfCi0D4AbrM0KAYcHgDRFF4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
