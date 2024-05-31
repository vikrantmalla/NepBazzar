export enum Message {
  INTERNAL_SERVER_ERROR = "Internal server error",
  BAD_NETWORK = "Network response was not ok",
  FETCH_ERROR = "Error fetching data",
}

export enum SortBy {
  lowToHigh = "lowToHigh",
  highToLow = "highToLow",
  rate = "rate",
  count = "count",
}
