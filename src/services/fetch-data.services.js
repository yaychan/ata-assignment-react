import AccountList from "../mocks/account-list.mock";
const FetchData = () => {
  try {
    return AccountList;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default FetchData;
