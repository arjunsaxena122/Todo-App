class Api_Response {
  constructor(statusCode, message = "Successfully Done", data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export default Api_Response