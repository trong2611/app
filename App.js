import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';  
import { t, color } from 'react-native-tailwindcss';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';
import StateScreen from './src/screens/StateScreen';
import Markdown from 'react-native-markdown-display';

export default function App() {

  const list = `### **Giới thiệu sản phẩm** \n\n 
  — *Thông tin sản phẩm* — \n\n 
  Bắt đầu chuyến đi thú vị đến **Bà Nà Hills**, một khu vực xinh đẹp có bề ngoài trông giống một lâu đài thời trung cổ. Ngạc nhiên trước những tòa nhà kiến ​​trúc nguy nga khi dạo bước trên những lối đi được trang trí tỉ mỉ.\ n\n
  Du khách có thể ngắm cảnh từ cáp treo khi lên đỉnh núi và ngắm nhìn khung tuyệt đẹp của thành phố **Đà Nẵng** từ xa. Đi bộ dọc theo **Cầu Vàng** cùng bạn bè và chụp ảnh với đôi bàn tay khổng lồ đang nâng đỡ cây cầu. Khám phá **chùa Linh Ứng** gần đó và bày tỏ lòng thành kính trước bức tượng Phật cao chót vót. \n\n
  Tận hưởng cảm giác mạnh nhớ đời với hơn 100 trò chơi lôi cuốn tại **Fantasy Park**, đặc biệt là tàu lượn Alpine, nơi du khách có thể cảm nhận được cảm giác hồi hộp khi lướt qua khung cảnh tuyệt đẹp.\n\n
  Đắm mình trong **Làng Pháp** với kiến trúc Châu Âu tuyệt đẹp và phong cảnh ngoạn mục, là nơi lý tưởng để check-in chụp hình. Du khách chắc chắn sẽ có khoảng thời gian vui chơi tuyệt vời cùng gia đình và bạn bè tại đây!\n\n\n 
  ---*Thông tin quan trọng*---\n\n 
  Khung giờ hoạt động của Sun World Ba na Hills:
   1. Cáp treo Hội An - Marseille: 6:45 AM - 1:00 PM 
   2. Bordeaux - Louvre: 7:15 AM - 5:20 PM 
   3. Champa - Taiga: 1:00 PM - 5:30 PM 
  (Giờ hoạt động thực tế có thể bị ảnh hưởng bởi thời tiết hoặc các vấn đề kỹ thuật khác)\n\n 
  Buffet trưa được phục vụ tại nhà hàng Beer Plaza từ ngày 01/01/2023: 11:00 AM - 3:00 PM\n\n
  ---*Thông tin bổ sung*---\n\n
  Voucher chỉ có giá trị vào những ngày đã chọn\n\n
  Các điểm tham quan sau sẽ có thu phụ phí, xin lưu ý, các mức phí này có thể thay đổi
  - Bảo tàng Sáp: 100.000 VNĐ
  - Anpaz Spa và Beauty Partial
  - Debay Wine Cellar
  - Alpine Coaster
  - Leo núi trong nhà (Fantasy Park)\n\n
  Thời gian vận hành cáp treo: 8:00 AM - 10:00 PM. Lịch trình chi tiết của từng tuyến cáp treo còn tùy thuộc vào tình hình thực tế.\n\n
  [Khuyến mãi dành cho du khách Việt Nam từ 01/04 - 30/09] 
  - Vé các ngày trong tuần áp dụng từ thứ Hai đến thứ Năm 
  - Vé cuối tuần áp dụng từ thứ Sáu đến Chủ Nhật 
  - Ngày lễ bao gồm 18/4, 30/4, 1/5, 31/8 - 3/9 \n
  *Ngắm nhìn Bà Nà Hills xinh đẹp từ cáp treo trên cao*\n
  ![Banahills](https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_37521/20220405040815_gOyer/png)`
   return (
    // <WelcomeScreen/>
    // <HomeScreen/>
    <Navigation />
    // <HomeScreen/>
    // <ScrollView style={[t.flex, t.flex1]} showsVerticalScrollIndicator={false}>
    //   <Markdown style={[t.flex, t.flex1, t.justifyCenter, t.itemsCenter]}>{list}</Markdown>
    // </ScrollView>
  );
}

