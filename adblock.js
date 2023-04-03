// Khởi tạo uBlock Origin và đăng ký danh sách EasyList
var ublock = new UBlock({
  lists: ['https://easylist-downloads.adblockplus.org/easylist.txt']
});

// Loại bỏ trang web "example.com" khỏi danh sách chặn quảng cáo của uBlock Origin
ublock.unblock('example.com');

// Lặp qua tất cả các yêu cầu tải xuống từ trang web của bạn và loại bỏ các yêu cầu chứa quảng cáo bằng uBlock Origin
var blockAds = function() {
  var requests = performance.getEntriesByType("resource");
  requests.forEach(function(request) {
    if (ublock.matches(request.name)) {
      ublock.block(request.name);
    }
  });
};

// Thực hiện hàm blockAds khi trang web của bạn được tải
window.addEventListener("load", blockAds);
