// Khởi tạo AdGuard API với các cấu hình mặc định và đường dẫn đến danh sách chặn của bạn
var adguard = new Adguard({
  filters: ["https://filters.adtidy.org/extension/chromium/filters/3.txt"]
});

// Loại bỏ yêu cầu tải xuống từ trang web "example.com" khỏi danh sách chặn quảng cáo
adguard.skip("https://example.com/*");

// Lặp qua tất cả các yêu cầu tải xuống từ trang web của bạn và loại bỏ các yêu cầu chứa quảng cáo
var blockAds = function() {
  var requests = performance.getEntriesByType("resource");
  requests.forEach(function(request) {
    if (adguard.matches(request.name)) {
      adguard.block(request.name);
    }
  });
};

// Thực hiện hàm blockAds khi trang web của bạn được tải
window.addEventListener("load", blockAds);
