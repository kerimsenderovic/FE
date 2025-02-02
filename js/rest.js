var RestClient = {
    get: function (url, callback, error_callback) {
      $.ajax({
        url: Constants.get_api_base_url() + url,
        type: "GET",
        success: function (response) {
          if (callback) callback(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          if (error_callback) error_callback(jqXHR);
          else console.error("Error occurred during GET request:", errorThrown);
        },
      });
    },
    request: function (url, method, data, callback, error_callback) {
      $.ajax({
        url: Constants.get_api_base_url() + url,
        type: method,
        data: data,
        success: function (response) {
          if (callback) callback(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          if (error_callback) error_callback(jqXHR);
          else console.error("Error occurred during " + method + " request:", errorThrown);
        },
      });
    },
    post: function (url, data, callback, error_callback) {
      RestClient.request(url, "POST", data, callback, error_callback);
    },
    delete: function (url, data, callback, error_callback) {
      RestClient.request(url, "DELETE", data, callback, error_callback);
    },
    put: function (url, data, callback, error_callback) {
      RestClient.request(url, "PUT", data, callback, error_callback);
    },
};