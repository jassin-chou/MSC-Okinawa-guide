(function () {
  "use strict";

  const MANUAL_ENTRIES = [
    {
      id: "cover",
      title: "手冊範圍與航次",
      pages: ["P01", "P02"],
      keywords: ["手冊", "說明書", "電子書", "航次", "日期", "MSC", "榮耀號", "Bellissima", "沖繩4日", "沖繩四日"],
      facts: [
        "本網站依 2026 MSC 榮耀號沖繩 4 日電子說資手冊整理，原始手冊共 40 頁。",
        "手冊封面列出的航次日期為 2026/06/18、2026/07/09、2026/07/22。",
        "船名為 MSC 榮耀號 MSC Bellissima。"
      ]
    },
    {
      id: "contents",
      title: "手冊章節",
      pages: ["P02"],
      keywords: ["目錄", "章節", "哪幾頁", "內容", "原始頁面"],
      facts: [
        "手冊目錄包含行程介紹、登船須知、碼頭報到、岸上觀光、甲板圖、船上設施、船上餐飲、船上服務、購物、服務費、離船準備、準備用品與個人筆記。",
        "網站下方保留 P01 到 P40 原始頁面圖片，可逐頁核對。"
      ]
    },
    {
      id: "itinerary",
      title: "航程與港口時間",
      pages: ["P03", "P04", "P05", "P06", "P07"],
      keywords: ["行程", "航程", "幾點", "時間", "出發", "抵達", "啟航", "靠港", "停靠", "基隆", "那霸", "沖繩", "夜泊", "返回", "下船"],
      facts: [
        "DAY 01 於基隆港登船，基隆港預計 17:30 啟航。",
        "DAY 02 那霸預計 13:30 抵達，當晚夜泊那霸港。",
        "DAY 03 那霸預計 13:00 啟航離港。",
        "DAY 04 基隆港預計 07:00 抵達。",
        "手冊明確提醒：所有港口時間皆為預估，實際時間以郵輪公司與船上公告為準。",
        "行程摘要中的聯絡電話為 008-7077-3943806 / 008-7077-3943807。"
      ]
    },
    {
      id: "shore",
      title: "那霸與岸上觀光",
      pages: ["P05", "P06", "P19", "P20"],
      keywords: ["那霸", "沖繩", "岸上觀光", "自費", "自由行", "計程車", "大眾交通", "國際通", "首里城", "景點"],
      facts: [
        "那霸是琉球群島最大的城市，也是沖繩政治與經濟中心。",
        "手冊提到國際通、首里城等那霸知名景點。",
        "旅客可自費參加 MSC 岸上觀光，也可自行安排計程車或大眾交通工具。",
        "手冊沒有列出所有岸上觀光價格與細節；實際內容需以 MSC 或船上公告為準。"
      ]
    },
    {
      id: "boarding-place",
      title: "報到地點與時間",
      pages: ["P03", "P04", "P15", "P16"],
      keywords: ["登船", "報到", "碼頭", "基隆港", "西岸", "旅客中心", "地址", "關櫃", "報到時間", "集合", "幾點到"],
      facts: [
        "登船報到地點為基隆港西岸旅客中心碼頭。",
        "地址為基隆市仁愛區港西街 16-18 號。",
        "手冊列出的報到時間為 12:30 至 15:30。",
        "關櫃時間為 16:00。",
        "船票上會列出指定報到時間；提前抵達可能需在航站外等候。"
      ]
    },
    {
      id: "documents",
      title: "護照與登船文件",
      pages: ["P09", "P15", "P16"],
      keywords: ["護照", "文件", "證件", "影本", "正本", "簽證", "身分證", "雙重國籍", "役男", "出境核准", "帶什麼", "登船資料袋"],
      facts: [
        "多數國家地區規定外國賓客護照效期須在 6 個月以上。",
        "登船報到需攜帶船票、護照正本、護照影本二份與登船文件資料袋。",
        "從提供船公司輸入基本資料、基隆港出境、登船、日本出入境、離船到基隆港入境，全程需使用同一本護照。",
        "雙重國籍賓客入境台灣的證件與登船證件需為同一份。",
        "缺少必要證件或違反規定，可能被拒絕登船。",
        "現役軍人、具軍職身分者、服役完畢或役男，須依規定完成出境核准；役男出國核准可至 https://www.ris.gov.tw/departure/app/Departure/main 申辦。",
        "登船日前會收到文件資料袋，內含船票、航程資訊與加購服務、船卡頸掛帶、托運行李吊牌。"
      ]
    },
    {
      id: "customs",
      title: "海關、肉品水果與入境卡",
      pages: ["P09", "P10", "P35"],
      keywords: ["海關", "肉", "水果", "農產品", "違禁", "罰款", "菸", "香菸", "電子菸", "外幣", "TWAC", "入國登記", "申報單", "日本入境卡", "日本海關"],
      facts: [
        "不可攜帶肉類、水果與農產品出入境或登船。",
        "手冊列明違規罰鍰可能從新台幣 3,000 元至 3,000,000 元。",
        "每人免稅香菸以一條為限；電子菸禁止攜帶入境。",
        "手冊提醒攜帶美金 10,000 元或等值外幣等情形需留意申報規定。",
        "自 114 年 10 月 1 日起，外籍旅客入境台灣前需完成電子入國登記表。",
        "搭乘基隆港郵輪者須於返台前 3 天內免費上網填報 TWAC：https://twac.immigration.gov.tw。",
        "旅客登船後，船上工作人員會將日本海關申報單送至艙房；一個家庭只需填寫一張海關申報單。"
      ]
    },
    {
      id: "luggage-security",
      title: "手提行李、托運與禁止物品",
      pages: ["P10", "P11", "P15", "P18"],
      keywords: ["行李", "托運", "手提", "隨身", "尺寸", "55", "45", "25", "禁止", "不能帶", "違禁品", "液體", "新鮮食物", "電器", "吹風機", "捲髮棒", "延長線", "剪刀", "鋰電池", "對講機"],
      facts: [
        "手提行李尺寸不得超過 55 x 45 x 25 cm，以便接受 X 光檢查。",
        "藥品、電腦、照相機、貴重或易碎物品必須放在手提行李中。",
        "抵達基隆港交付大型托運行李前，須將行李吊牌繫上；吊牌列印姓名與船艙號碼，需先確認正確。",
        "貴重物品如金錢、船票、護照、緊急用藥等不可託運。",
        "手冊列出禁止攜帶液體、新鮮食物與電器用品；個人護理用品、藥品、兒童用品與食物、特殊認證飲品或食品等例外仍需依手冊規定。",
        "禁止物品包含吹風機、捲髮棒、熨斗、爐具、延長線等電器。",
        "刀具原則禁止；嬰兒食品剪刀不超過 10 cm 者為例外。",
        "電動代步車鋰電池與對講機列為禁止物品。",
        "如安檢查出禁止物品，將由安保單位保管寄存，離船時歸還。",
        "旅客行李數量較多，送抵客艙時間可能稍晚；若開航後 2 小時仍未收到行李，請聯絡賓客服務櫃檯。"
      ]
    },
    {
      id: "health-access",
      title: "健康、藥品、孕婦孩童與輪椅",
      pages: ["P11", "P12"],
      keywords: ["健康", "醫療", "藥", "藥品", "暈船藥", "慢性病", "針頭", "發燒", "腹瀉", "咳嗽", "孕婦", "懷孕", "小孩", "嬰兒", "年齡", "輪椅", "行動不便"],
      facts: [
        "登船前如出現發燒、腹瀉、出疹、咳嗽等疑似傳染病症狀，需主動通報船方或前往郵輪醫療中心。",
        "常用藥物如慢性疾病藥方、感冒藥、腸胃藥、暈船藥等，請放在隨身行李中。",
        "手冊建議出發前請醫師多開幾天處方，以備突發狀況。",
        "長期服藥或每日注射藥劑者，需準備藥品英文名稱與英文病歷。",
        "注射器或針頭務必交給郵輪醫療中心回收，或向房務人員索取針頭廢棄物容器。",
        "近期手術或治療旅客建議準備英文診斷書、治療紀錄或病歷摘要。",
        "手冊列明無法接受航程結束前進入第 24 週懷孕期之孕婦登船。",
        "開航前未滿 6 個月之孩童無法登船。",
        "手冊未設最高登船年齡，但提醒超過 70 歲旅客自行體檢並向醫師確認是否適合旅行。",
        "輪椅協助主要限於登船、離船與緊急情況；長期使用輪椅者需自行攜帶折疊式輪椅並由同行者協助。"
      ]
    },
    {
      id: "cabin-diet-clothes",
      title: "艙房用品、飲食需求與衣著",
      pages: ["P12", "P13"],
      keywords: ["插座", "電壓", "轉接頭", "盥洗", "牙刷", "牙膏", "拖鞋", "吹風機", "毛巾", "洗髮精", "沐浴乳", "特殊餐", "素食", "清真", "猶太", "過敏", "衣服", "衣著", "正式", "晚宴", "白色派對", "義大利"],
      facts: [
        "船上插座有 110V 與 220V，台灣插頭可直接使用；手冊說明不需要轉接頭。",
        "艙房僅提供毛巾、洗髮精、沐浴乳與吹風機。",
        "手冊提醒不提供牙刷、牙膏、洗面乳、拖鞋與刮鬍刀等個人盥洗用品。",
        "特殊飲食如低鈉、低糖、全素，以及猶太、清真等需求，手冊提醒需於航程開始前 60 個工作天提出。",
        "對特定食物過敏者，點餐時務必與服務人員確認食材內容；登船後也請再次與餐廳服務人員確認。",
        "船上不提供代冰凍服務。",
        "搭乘郵輪可穿休閒服，例如短褲、長褲或運動服；特殊場地仍須依規定穿著。",
        "正式餐廳晚餐建議 Smart Casual 或 Formal，不可穿短袖運動衫、短褲、背心、拖鞋或涼鞋入場。",
        "Smart Casual 可穿洋裝、連身裙、長褲或襯衫；Formal 可穿晚禮服、旗袍、雞尾酒禮服，男士可穿燕尾服或西裝領帶。",
        "義大利之夜建議穿綠、白、紅三色；白色派對建議穿白色系。實際活動以船上公告為準。"
      ]
    },
    {
      id: "money",
      title: "船上付款、押金與信用卡",
      pages: ["P13", "P14", "P35"],
      keywords: ["消費", "付款", "信用卡", "現金", "押金", "保證金", "美元", "美金", "船卡", "預授權", "帳單", "賭場", "換日幣", "匯率", "結帳"],
      facts: [
        "船上採無現金式交易，所有船上消費以簽帳方式記錄至船卡帳戶。",
        "每位賓客皆需信用卡授權；若沒有信用卡，登船當天需至賓客服務櫃檯預存現金。",
        "無信用卡者須預先支付每人最低 USD 150 保證金，船上消費會自預付款扣除，款項不足需補足。",
        "船上通用貨幣為美金；船上接受美金現金用於賭場，也接受 Visa、MasterCard、American Express、JCB 與銀聯信用卡。",
        "登船後可使用 5/6 樓信用卡自助註冊機綁定船卡帳戶，也可用自己的信用卡幫親友或其他乘客的船卡綁定。",
        "信用卡綁定時會小額試刷 USD 1 以確認有效性。",
        "國際交易預授權額度退回時間取決於發卡銀行，而非 MSC 地中海郵輪。",
        "最終帳單會送至艙房；若帳單正確且已綁定信用卡，不需排隊結帳。",
        "若帳單有疑義，務必在離船前向 5 樓賓客服務中心提出並現場核實。",
        "賭場帳款須於離船前結清，下船後籌碼與代幣無法再兌換。",
        "賓客服務櫃檯可用美元兌換日幣，但手冊提醒匯率較差，建議出發前先兌換。"
      ]
    },
    {
      id: "rules",
      title: "酒類、抽菸與攝影",
      pages: ["P14"],
      keywords: ["酒", "酒精", "免稅酒", "飲料", "未滿18", "抽菸", "吸菸", "菸", "禁菸", "罰款", "攝影", "錄影", "拍照", "表演"],
      facts: [
        "未滿 18 歲賓客禁止於船上購買或飲用酒精類飲料。",
        "船上免稅店購買免稅酒類商品，將由地中海郵輪暫為保管；航程結束前需主動至賓客服務櫃檯取回。",
        "郵輪公共區域與船房皆嚴禁吸菸；如確認在船房內抽菸將罰款，實際以船上公告為主。",
        "屢勸不聽者，船方有權要求提早離船。",
        "指定吸菸區依船上公告為準。手冊提到賭場右舷僅於玩老虎機時允許吸菸，賭場左舷牌桌禁止吸菸。",
        "在吸菸區抽菸時需使用工作人員提供的菸灰缸，切勿向海中丟棄香菸或菸灰。",
        "郵輪旅遊期間可在船上拍攝錄影，但需尊重其他賓客隱私權。",
        "因著作權原因，觀賞船上娛樂表演時禁止錄影。"
      ]
    },
    {
      id: "checkin-flow",
      title: "碼頭報到流程",
      pages: ["P15", "P16", "P17"],
      keywords: ["流程", "報到流程", "櫃台", "二樓", "移民署", "安檢", "拍照", "護照收走", "船卡", "門把", "日本海關申報單"],
      facts: [
        "抵達基隆港後，依照指引托運大型行李；行李吊牌務必先繫上。",
        "搭手扶梯上二樓，先準備好船票、護照正本及影本二份。",
        "依指引於服務櫃台排隊辦理登船報到；櫃台人員會拍攝照片，將肖像與船卡資訊結合並儲存至船上系統。",
        "完成報到後，櫃台人員會交還旅行資料，旅客需再次核對船票、護照正本及影本二份皆已歸還。",
        "之後通過安檢與台灣移民署查驗。",
        "通過移民署後將收取護照正本，旅客自行保管影本。",
        "護照正本會在航程最後一晚送至客艙；若未收到，請至服務櫃檯簽名取回。",
        "登船時船上梯口安檢人員會核對照片與旅客是否一致；照片不清晰可能需再次拍攝。",
        "船卡會掛在艙房門把上，請自行取下並妥善保管。"
      ]
    },
    {
      id: "cruise-card",
      title: "船卡功能",
      pages: ["P18"],
      keywords: ["船卡", "Cruise Card", "房卡", "房間鑰匙", "身分證", "簽帳", "上下船", "餐廳", "桌次", "集合地點"],
      facts: [
        "船卡 Cruise Card 會標示 MSC 緊急聯絡電話、船名與乘船期間、姓名、樓層與艙房號碼、緊急集合地點、主餐廳名稱、用餐時間與桌次。",
        "登船後每人會取得船卡，航行期間等同身分證。",
        "船卡三個作用為航行身分證、消費簽帳卡與房間鑰匙。",
        "請妥善保管並隨身攜帶，上下船都需查驗；未攜帶可能被拒絕下岸或登船。",
        "手冊提醒上船後若發現房間不在朋友房間附近，無法調換房間。"
      ]
    },
    {
      id: "decks",
      title: "甲板圖",
      pages: ["P21", "P22", "P23"],
      keywords: ["甲板", "樓層", "Deck", "deck", "平面圖", "船艙", "設施位置", "在哪裡"],
      facts: [
        "手冊 P21 至 P23 是 MSC 榮耀號甲板圖。",
        "若要查特定艙房、餐廳或設施位置，請在網站下方原始頁面區開啟 P21、P22、P23 逐頁查看。",
        "手冊中的甲板圖屬圖像資訊；小幫手不會自行推估未寫出的路線或位置。"
      ]
    },
    {
      id: "dining-facilities",
      title: "船上餐飲與設施",
      pages: ["P24", "P25", "P26", "P27"],
      keywords: ["餐廳", "餐飲", "主餐廳", "自助餐", "特色餐廳", "晚餐", "梯次", "Market Place", "海王", "燈塔", "櫻桃", "牛排", "壽司", "鐵板燒", "酒吧", "劇院", "泳池", "健身", "SPA", "設施", "娛樂"],
      facts: [
        "主餐廳包含海王餐廳、燈塔餐廳與櫻桃餐廳。",
        "市集自助餐廳為 Market Place Buffet。",
        "晚餐分三個梯次，手冊列出 17:00 或 17:30、19:15 或 19:45、21:30；實際座位與時間依船卡為準。",
        "自費特色餐廳包含墨西哥小館、美式牛排屋、海渡壽司吧、海渡鐵板燒、海中閣餐廳與香檳吧等。",
        "手冊列出倫敦大劇院、旋轉木馬劇院、XD 互動影院、天際線露天劇院、賭場、方程式賽車與虛擬實境迷宮等設施。",
        "運動與泳池設施包含游泳池、天際線泳池、亞利桑那水上樂園、喜馬拉雅橋、泰諾健身中心、健步道與多功能運動館。",
        "MSC Aurea Spa、美髮美甲、熱區與免稅精品購物列於手冊設施表，部分服務為自費。"
      ]
    },
    {
      id: "services-costs",
      title: "服務、自費項目與服務費",
      pages: ["P28", "P29", "P30", "P31", "P32", "P33"],
      keywords: ["服務", "費用", "服務費", "小費", "自費", "飲料", "酒精", "碳酸", "果汁", "網路", "Wi-Fi", "wifi", "電話", "衛星", "醫療", "洗衣", "照片", "購物", "稅", "日本國際觀光旅客稅"],
      facts: [
        "內艙、海景、陽台等房型船上服務費為每人每晚 USD 18。",
        "YC 套房船上服務費為每人每晚 USD 21。",
        "未滿 2 歲嬰兒免收船上服務費。",
        "自 2019/01/07 起，每位離開日本旅客須支付日本國際觀光旅客稅 JPY 1,000，手冊說明會由船上帳戶收取等值美元。",
        "特色餐廳、酒水飲品、洗衣熨燙、照片、紀念品、賭場、醫療、美容美髮、SPA、網路與電話等依手冊為自費或可能自費。",
        "酒精、碳酸飲料、果汁及部分餐廳或表演場域飲品，手冊提醒需額外付費並加收 18% 服務費。",
        "船上可購買衛星網路。",
        "房內直撥國際衛星電話約每分鐘 USD 10，實際仍依船上公告。",
        "手冊沒有寫明的價格、活動細節或開放時間，不應自行推估。"
      ]
    },
    {
      id: "disembarkation",
      title: "離船準備與行李提領",
      pages: ["P35", "P36"],
      keywords: ["離船", "下船", "返台", "行李條", "行李提領", "托運行李", "帳單", "結帳", "保險箱", "早餐", "存根", "拿錯行李", "遺失", "損壞"],
      facts: [
        "離船前一天，客艙內電視會播放離船說明影片，請務必觀看。",
        "船上工作人員會在離船前一天將行李條與離船資訊表送至艙房信箱。",
        "行李條上需寫姓名、聯絡電話與船艙號碼，並詳閱離船資訊。",
        "行李條存根聯請撕下留存，以便分辨自己的行李；請勿拿錯行李條顏色區域。",
        "下船前一晚就寢前，依日報規定時間將托運行李上鎖並放在客艙門外，以利工作人員收集。",
        "牙膏、牙刷、替換衣物、重要文件、護照、藥品、貴重物與易碎品請放入隨身行李。",
        "務必準備一套隔天離船所需穿著，避免所有衣物都託運下船。",
        "離船當天請依離船資訊表於指定時間前往指定地點集合。",
        "離開客艙前請檢查抽屜、衣櫃、保險箱；船卡仍需隨身攜帶，離船程序會用到。",
        "提領行李時，行李放置區同時約有 5,000 至 5,500 件行李；請確認為自身物品後再領取。",
        "拿錯行李造成的責任與費用須自行承擔。",
        "行李損壞或遺失須盡快通報船上服務人員並申報，同時索取副本，以利日後申訴。"
      ]
    },
    {
      id: "packing",
      title: "附錄準備用品",
      pages: ["P37"],
      keywords: ["準備用品", "準備物品", "行李清單", "打包", "要帶什麼", "物品", "用品", "盥洗", "衣物", "電器", "證件", "現金", "信用卡", "泳衣", "雨傘", "自拍棒", "大頭照"],
      facts: [
        "資訊類：護照正本與影本、簽證、身分證與健保卡、行程手冊與地圖、紙筆記事本、國際駕照、美金現金與信用卡、台幣與銅板、日本海關單與日本入出境卡、親友聯絡電話與住址。",
        "衣物類：休閒服、休閒褲、襯衫、薄外套、正式服裝、西裝或洋裝、皮鞋、內衣褲、襪子、泳衣泳褲、泳帽、泳鏡、拖鞋、涼鞋、球鞋、防曬油、遮陽帽、太陽眼鏡、陽傘、眼鏡盒、隱形眼鏡相關用品、換洗衣物用塑膠袋。",
        "電器類：手機、充電器、傳輸線、行動電源、相機、充電器、記憶卡。",
        "手冊特別標註行動電源不得託運。",
        "盥洗類：牙刷、牙膏、牙線、毛巾、浴帽、棉花棒、沐浴乳、洗髮精、洗面乳、隨身面紙包、吸油面紙、化妝品、梳子、刮鬍刀。",
        "其他類：身分證影本備用、個人備用藥品、暈船藥、雨傘或便利雨衣、備用眼鏡、望遠鏡、手帕、衛生紙、濕紙巾、針線、備用鈕扣、自拍棒。",
        "其他類也列出輕便小背包、購物袋、手錶或旅行鬧鐘、手電筒、小型計算機、2 吋大頭照 3 張與其他。",
        "手冊註記手錶、旅行鬧鐘、手電筒與小型計算機可用手機取代。"
      ]
    },
    {
      id: "notes-back",
      title: "個人筆記與封底",
      pages: ["P38", "P39", "P40"],
      keywords: ["個人筆記", "筆記", "空白", "封底", "300年航海世家", "MSC標誌"],
      facts: [
        "P38 為個人筆記頁。",
        "P39 為空白筆記頁。",
        "P40 為 MSC 地中海郵輪封底，畫面標示 300 年航海世家。"
      ]
    }
  ];

  const SYNONYM_GROUPS = [
    ["登船", "報到", "checkin", "check-in", "集合", "碼頭"],
    ["護照", "證件", "文件", "影本", "正本", "簽證"],
    ["準備用品", "準備物品", "行李清單", "打包", "要帶什麼", "用品"],
    ["行李", "托運", "手提", "隨身", "吊牌", "行李條"],
    ["禁帶", "不能帶", "禁止", "違禁", "安檢"],
    ["船卡", "cruisecard", "房卡", "簽帳卡", "身分證", "房間鑰匙"],
    ["費用", "服務費", "小費", "自費", "價格", "收費", "稅"],
    ["信用卡", "押金", "保證金", "現金", "結帳", "預授權"],
    ["餐廳", "餐飲", "晚餐", "自助餐", "主餐廳", "特色餐廳"],
    ["設施", "娛樂", "劇院", "泳池", "健身", "SPA"],
    ["那霸", "沖繩", "岸上觀光", "景點", "國際通", "首里城"],
    ["離船", "下船", "返台", "提領", "帳單"],
    ["健康", "醫療", "藥品", "暈船藥", "孕婦", "輪椅"],
    ["抽菸", "吸菸", "禁菸", "酒精", "攝影", "錄影"],
    ["插座", "電壓", "盥洗", "牙刷", "拖鞋", "吹風機"],
    ["衣著", "服裝", "正式", "晚宴", "白色派對", "義大利之夜"],
    ["海關", "肉品", "水果", "農產品", "TWAC", "入國登記"]
  ];

  const FALLBACK_TEXT = "手冊中沒有明確寫到這個問題，所以我不會補充或猜測。你可以改問航程、登船文件、碼頭報到、船卡、行李、禁帶品、餐飲設施、費用、離船或準備用品；也可以在下方 P01-P40 原始頁面核對。";

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[？！?，,。．.、；;：:\s\-_()（）［\]\[\]【】"'「」『』]/g, "")
      .replace(/臺/g, "台");
  }

  function getQuestionTerms(question) {
    const normalizedQuestion = normalize(question);
    const terms = new Set();

    if (normalizedQuestion) {
      terms.add(normalizedQuestion);
    }

    SYNONYM_GROUPS.forEach((group) => {
      const normalizedGroup = group.map(normalize);
      const hasMatch = normalizedGroup.some((term) => term && normalizedQuestion.includes(term));
      if (hasMatch) {
        normalizedGroup.forEach((term) => {
          if (term) terms.add(term);
        });
      }
    });

    return Array.from(terms).filter((term) => term.length >= 2);
  }

  function scoreEntry(question, entry) {
    const normalizedQuestion = normalize(question);
    const searchable = normalize([entry.title, entry.keywords.join(" "), entry.facts.join(" ")].join(" "));
    let score = 0;

    if (entry.id === "documents" && /文件|證件|護照|影本|正本|簽證|資料袋/.test(question)) {
      score += 28;
    }

    if (entry.id === "packing" && /準備用品|準備物品|行李清單|打包|用品/.test(question)) {
      score += 28;
    }

    if (entry.id === "boarding-place" && /報到時間|關櫃|地點|地址|碼頭|幾點到|集合/.test(question)) {
      score += 24;
    }

    if (entry.id === "checkin-flow" && /流程|步驟|怎麼報到|怎麼登船/.test(question)) {
      score += 24;
    }

    if (entry.id === "itinerary" && /時間|幾點|抵達|啟航|停靠|靠港|離港|出發|返回/.test(question)) {
      score += 24;
    }

    if (entry.id === "services-costs" && /服務費|小費|多少|費用|收費|價格|觀光旅客稅/.test(question)) {
      score += 24;
    }

    if (entry.id === "cruise-card" && /船卡|房卡|簽帳|房間鑰匙/.test(question)) {
      score += 24;
    }

    entry.keywords.forEach((keyword) => {
      const normalizedKeyword = normalize(keyword);
      if (normalizedKeyword && normalizedQuestion.includes(normalizedKeyword)) {
        score += normalizedKeyword.length >= 4 ? 10 : 7;
      }
    });

    getQuestionTerms(question).forEach((term) => {
      if (searchable.includes(term)) {
        score += term.length >= 4 ? 4 : 2;
      }
    });

    const pageMatches = normalizedQuestion.match(/p?\d{1,2}/g) || [];
    pageMatches.forEach((match) => {
      const pageNumber = match.replace("p", "").padStart(2, "0");
      if (entry.pages.includes(`P${pageNumber}`)) {
        score += 12;
      }
    });

    return score;
  }

  function uniqueItems(items) {
    return Array.from(new Set(items));
  }

  function answerManualQuestion(question) {
    const trimmed = String(question || "").trim();
    if (!trimmed) {
      return {
        text: "請輸入想問的手冊問題，例如登船文件、準備用品、船卡、那霸停靠時間或服務費。",
        sources: []
      };
    }

    const ranked = MANUAL_ENTRIES
      .map((entry) => ({ entry, score: scoreEntry(trimmed, entry) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    if (!ranked.length || ranked[0].score < 7) {
      return { text: FALLBACK_TEXT, sources: [] };
    }

    const topScore = ranked[0].score;
    const preciseQuestion = /文件|證件|護照|影本|正本|簽證|船卡|服務費|小費|多少|幾點|時間|抵達|啟航|停靠|靠港|離港|地址|地點|關櫃/.test(trimmed)
      && !/完整|全部|所有|有哪些|清單|準備用品|準備物品|流程|步驟/.test(trimmed);
    const selectedLimit = preciseQuestion ? 1 : 3;
    const selected = ranked
      .filter((item) => item.score >= Math.max(7, topScore - 8))
      .slice(0, selectedLimit)
      .map((item) => item.entry);

    const broadQuestion = /準備|用品|清單|全部|所有|完整|登船|流程|離船|費用|餐廳|設施/.test(trimmed);
    const maxFacts = broadQuestion ? 12 : 8;
    const facts = uniqueItems(selected.flatMap((entry) => entry.facts)).slice(0, maxFacts);
    const sources = uniqueItems(selected.flatMap((entry) => entry.pages));

    return {
      text: [
        "依 40 頁原說明書整理：",
        ...facts.map((fact) => `- ${fact}`),
        "",
        `來源：${sources.join("、")}。`,
        "我只引用手冊已寫出的資訊；若船上公告或郵輪公司有更新，仍以現場與官方公告為準。"
      ].join("\n"),
      sources
    };
  }

  function appendMessage(container, role, text) {
    const message = document.createElement("div");
    message.className = `assistant-message ${role}`;
    message.textContent = text;
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
  }

  function initializeAssistant() {
    const panel = document.getElementById("manualAssistant");
    const fab = document.querySelector(".assistant-fab");
    const closeButton = document.querySelector(".assistant-close");
    const messages = document.querySelector(".assistant-messages");
    const form = document.querySelector(".assistant-form");
    const input = document.querySelector(".assistant-input");
    const suggestions = document.querySelectorAll(".assistant-suggestion");

    if (!panel || !fab || !closeButton || !messages || !form || !input) {
      return;
    }

    let hasWelcomed = false;

    function openPanel() {
      panel.hidden = false;
      fab.setAttribute("aria-expanded", "true");
      if (!hasWelcomed) {
        appendMessage(messages, "bot", "你好，我是手冊限定小幫手。這裡不連外部 API，只用 40 頁說明書內容回答；手冊沒有寫的，我會直接說不知道。");
        hasWelcomed = true;
      }
      input.focus();
    }

    function closePanel() {
      panel.hidden = true;
      fab.setAttribute("aria-expanded", "false");
      fab.focus();
    }

    function ask(question) {
      const text = String(question || "").trim();
      if (!text) return;
      appendMessage(messages, "user", text);
      appendMessage(messages, "bot", answerManualQuestion(text).text);
      input.value = "";
    }

    fab.addEventListener("click", () => {
      if (panel.hidden) {
        openPanel();
      } else {
        closePanel();
      }
    });

    closeButton.addEventListener("click", closePanel);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      ask(input.value);
    });

    suggestions.forEach((button) => {
      button.addEventListener("click", () => {
        openPanel();
        ask(button.textContent);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        closePanel();
      }
    });
  }

  window.manualAssistantKB = {
    answer: answerManualQuestion,
    entries: MANUAL_ENTRIES
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAssistant);
  } else {
    initializeAssistant();
  }
})();
