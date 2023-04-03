// Thiết lập các cấu hình cho AdBlock Plus
var config = {
  "filter": ["https://easylist.to/easylist/easylist.txt"]
};

// Khởi tạo AdBlock Plus với các cấu hình đã thiết lập
adblockplus.init(config);

// Loại bỏ một domain cụ thể khỏi danh sách chặn của AdBlock Plus
adblockplus.removeFilter("||example.com^");

// Lặp qua tất cả các yêu cầu tải xuống từ trang web của bạn và loại bỏ các yêu cầu chứa quảng cáo
var blockAds = function() {
  var requests = adblockplus.getRequests({type: "image"});
  requests.forEach(function(request) {
    if (adblockplus.matches(request.url)) {
      adblockplus.block(request.url);
    }
  });
};

// Thực hiện hàm blockAds khi trang web của bạn được tải
window.addEventListener("load", blockAds);
