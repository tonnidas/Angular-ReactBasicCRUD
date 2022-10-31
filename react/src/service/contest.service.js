import axios from "axios";

const CONTEST_URL = 'http://localhost:8080/contests';

class ContestService {
  addContest(contest) {
    // add the necessary axios here.
    // hint: use axios.post
    // Axios provides methods that include .get(), .post(), and .delete().
    return axios.post(CONTEST_URL, contest);;
  }
  listContest() {
    // add the necessary axios here.
    // hint: use axios.get
    return axios.get(CONTEST_URL);
  }
}

export default new ContestService();
