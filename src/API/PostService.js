import axios from "axios";

export default class PostService {
  // eslint-disable-next-line consistent-return
  static async getAll() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
}
