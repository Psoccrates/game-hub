import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c2814c9ac6b418c8f039a35fb02a0c0",
  },
});
