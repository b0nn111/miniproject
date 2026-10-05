const districts = [
  "全市",
  "浦东新区",
  "黄浦区",
  "静安区",
  "徐汇区",
  "长宁区",
  "普陀区",
  "虹口区",
  "杨浦区",
  "宝山区",
  "闵行区",
  "嘉定区",
  "金山区",
  "松江区",
  "青浦区",
  "奉贤区",
  "崇明区"
];

const news = [
  {
    id: "n1",
    title: "25项新城重大功能性导入事项、10项合作重点项目发布",
    summary: "聚焦数字经济、产业创新和公共服务协同，推动场景供需精准对接。",
    label: "政策发布",
    image: "/assets/images/news-policy.jpg"
  },
  {
    id: "n2",
    title: "数首发专场活动发布全场景 AI 智慧农业解决方案",
    summary: "优质数字产品集中展示，面向真实应用场景开展试用推广。",
    label: "核心服务",
    image: "/assets/images/news-launch.jpg"
  },
  {
    id: "n3",
    title: "松江多款数首发产品进入场景首试阶段",
    summary: "通过定向邀约和持续跟进，推动供需双方从展示走向签约。",
    label: "场景对接",
    image: "/assets/images/news-scene.jpg"
  }
];

const agencies = [
  {
    id: "a1",
    district: "徐汇区",
    logo: "漕河泾",
    name: "上海市数字公共服务中心（漕河泾开发区）",
    address: "上海市徐汇区桂平路391号",
    scope: "提供数字化转型咨询、产品试用对接、活动承办和供需撮合服务。"
  },
  {
    id: "a2",
    district: "静安区",
    logo: "数通链谷",
    name: "上海市数字公共服务中心（数通链谷）",
    address: "康宁路288弄1号楼12楼",
    scope: "面向数据流通、企业上云、数据资产化提供一站式服务。"
  },
  {
    id: "a3",
    district: "浦东新区",
    logo: "勤创",
    name: "上海市数字公共服务驿站（勤创空间）",
    address: "上海市浦东新区银城路117号瑞明大厦601",
    scope: "连接园区企业、服务官和数字产品，提供线下咨询预约。"
  },
  {
    id: "a4",
    district: "宝山区",
    logo: "科创高境",
    name: "上海市数字公共服务驿站（宝山区·科创高境）",
    address: "上海市宝山区逸仙路1328号6号楼3层",
    scope: "服务中小企业数字化升级，提供活动报名和产品对接。"
  },
  {
    id: "a5",
    district: "杨浦区",
    logo: "杨浦",
    name: "上海市数字公共服务中心（杨浦）",
    address: "上海市杨浦区杨树浦路1366号11楼1102",
    scope: "聚焦人工智能、数据要素、产业沙龙和创新项目路演。"
  },
  {
    id: "a6",
    district: "金山区",
    logo: "湾区",
    name: "上海市数字公共服务中心（金山区·湾区高新区）",
    address: "上海市金山区亭卫公路6496弄168号2楼",
    scope: "提供绿色低碳、工业互联网和园区数字化公共服务。"
  }
];

const serviceOfficers = [
  {
    id: "o1001",
    code: "服务官 1001",
    district: "普陀区",
    center: "上海数字公共服务中心（海纳小镇）",
    organization: "上海真如数科科技发展有限公司",
    title: "总经理",
    avatar: "1001",
    avatarImage: "/assets/images/officer-1001.jpg",
    tags: ["战略规划", "政策申报", "人才服务", "区块链", "隐私计算", "投融资", "法律服务", "出海服务", "综合咨询", "解决方案"],
    intro: "拥有多年数字化咨询和企业服务经验，熟悉产业园区场景、数据资产化路径和企业数字化升级项目管理。可为企业提供战略咨询、政策申报、技术路线和资源对接建议。"
  },
  {
    id: "o1002",
    code: "服务官 1002",
    district: "杨浦区",
    center: "上海数字公共服务中心（杨浦）",
    organization: "上海数据服务联合体",
    title: "秘书长",
    avatar: "1002",
    avatarImage: "/assets/images/officer-1002.jpg",
    tags: ["数据交易", "生态对接", "合规咨询", "场景撮合"],
    intro: "长期参与数据生态服务和产业资源协同，擅长帮助企业梳理数据产品、应用场景和合作伙伴。"
  },
  {
    id: "o1003",
    code: "服务官 1003",
    district: "徐汇区",
    center: "上海数字公共服务中心（漕河泾开发区）",
    organization: "高校数字治理实验室",
    title: "教授",
    avatar: "1003",
    avatarImage: "/assets/images/officer-1003.jpg",
    tags: ["数据安全", "数据治理", "人工智能", "合规评估"],
    intro: "关注数据安全、治理体系和可信计算，能够为企业提供数据合规、风险评估和技术方案建议。"
  },
  {
    id: "o1004",
    code: "服务官 1004",
    district: "静安区",
    center: "上海数字公共服务驿站（现代服务业）",
    organization: "企业征信服务机构",
    title: "战略中心总监",
    avatar: "1004",
    avatarImage: "/assets/images/officer-1004.jpg",
    tags: ["信用评估", "商务分析", "风控建模"],
    intro: "服务企业征信和数字风控场景，擅长将信用数据、业务数据和合规流程结合起来。"
  },
  {
    id: "o1005",
    code: "服务官 1005",
    district: "闵行区",
    center: "上海数字公共服务驿站（莘庄工业数字化创新中心）",
    organization: "工业智能服务平台",
    title: "项目总监",
    avatar: "1005",
    avatarImage: "/assets/images/officer-1005.jpg",
    tags: ["工业互联网", "智能制造", "算力服务", "系统集成"],
    intro: "为制造业企业提供设备联网、数据采集、智能排产和系统集成方案评估。"
  },
  {
    id: "o1006",
    code: "服务官 1006",
    district: "浦东新区",
    center: "上海数字公共服务中心（张江）",
    organization: "数字技术创新服务机构",
    title: "产品负责人",
    avatar: "1006",
    avatarImage: "/assets/images/officer-1006.jpg",
    tags: ["产品规划", "数据服务", "场景对接", "平台建设"],
    intro: "面向科技企业提供数字产品规划、需求梳理、平台建设和服务资源对接建议。"
  },
  {
    id: "o1007",
    code: "服务官 1007",
    district: "长宁区",
    center: "上海数字公共服务驿站（虹桥）",
    organization: "企业数字化咨询机构",
    title: "咨询合伙人",
    avatar: "1007",
    avatarImage: "/assets/images/officer-1007.jpg",
    tags: ["管理咨询", "AI应用", "业务流程", "人才培训"],
    intro: "聚焦企业 AI 应用落地和组织数字化能力建设，提供诊断、培训和实施路径建议。"
  },
  {
    id: "o1008",
    code: "服务官 1008",
    district: "黄浦区",
    center: "上海数字公共服务驿站（外滩）",
    organization: "现代服务业数字化中心",
    title: "运营总监",
    avatar: "1008",
    avatarImage: "/assets/images/officer-1008.jpg",
    tags: ["服务运营", "品牌推广", "活动策划", "资源协同"],
    intro: "长期服务现代服务业企业数字化升级，熟悉活动组织、资源协调和项目推进。"
  },
  {
    id: "o1009",
    code: "服务官 1009",
    district: "嘉定区",
    center: "上海数字公共服务驿站（智能制造）",
    organization: "智能制造产业服务机构",
    title: "技术顾问",
    avatar: "1009",
    avatarImage: "/assets/images/officer-1009.jpg",
    tags: ["智能制造", "设备联网", "数据采集", "系统评估"],
    intro: "为制造企业提供设备数据接入、产线数字化改造和系统选型评估服务。"
  },
  {
    id: "o1010",
    code: "服务官 1010",
    district: "宝山区",
    center: "上海数字公共服务中心（高境）",
    organization: "产业数字化服务机构",
    title: "方案专家",
    avatar: "1010",
    avatarImage: "/assets/images/officer-1010.jpg",
    tags: ["解决方案", "项目评估", "政策辅导", "产业服务"],
    intro: "熟悉园区企业数字化项目评估、解决方案组合和政策服务流程。"
  },
  {
    id: "o1011",
    code: "服务官 1011",
    district: "松江区",
    center: "上海数字公共服务驿站（G60科创走廊）",
    organization: "科创服务平台",
    title: "项目经理",
    avatar: "1011",
    avatarImage: "/assets/images/officer-1011.jpg",
    tags: ["科创服务", "项目申报", "需求调研", "供需对接"],
    intro: "围绕科创企业需求调研、项目申报和数字服务供需对接提供支持。"
  },
  {
    id: "o1012",
    code: "服务官 1012",
    district: "青浦区",
    center: "上海数字公共服务驿站（青浦）",
    organization: "企业服务联络站",
    title: "服务专员",
    avatar: "1012",
    avatarImage: "/assets/images/officer-1012.jpg",
    tags: ["企业走访", "活动报名", "产品试用", "服务跟进"],
    intro: "负责企业服务需求收集、活动报名协助、产品试用跟进和线下服务联络。"
  }
];

const products = [
  {
    id: "p1",
    district: "徐汇区",
    logo: "信链",
    title: "商安信链",
    trial: true,
    provider: "商安信数字服务股份有限公司",
    tags: ["SaaS订阅", "API调用", "信用数据"],
    summary: "面向企业信用管理和商务风控的数字化服务产品。"
  },
  {
    id: "p2",
    district: "浦东新区",
    logo: "VDBP",
    title: "充换电行业数智服务平台",
    trial: true,
    provider: "众链数智智能科技有限公司",
    tags: ["充换电", "基础设施数据", "行业监测"],
    summary: "提供充换电基础设施数据分析、运营监测和行业洞察。"
  },
  {
    id: "p3",
    district: "宝山区",
    logo: "算力",
    title: "算力综合服务",
    trial: false,
    provider: "科华数据服务有限公司",
    tags: ["GPU云服务器", "托管服务", "A100算力"],
    summary: "面向 AI 训练、推理和高性能计算的算力资源服务。"
  },
  {
    id: "p4",
    district: "静安区",
    logo: "AI",
    title: "政企数字化 AI 系统",
    trial: true,
    provider: "神码硅基科技有限公司",
    tags: ["低代码", "智能体", "流程自动化"],
    summary: "支持 JavaScript、Python 与可视化流程编排的政企 AI 平台。"
  },
  {
    id: "p5",
    district: "金山区",
    logo: "能碳",
    title: "工业能碳及零碳园区服务",
    trial: false,
    provider: "电气数科联合服务团队",
    tags: ["能碳管理", "零碳园区", "数字孪生"],
    summary: "为园区和工业企业提供能耗、碳排和资产管理服务。"
  }
];

const solutions = [
  {
    id: "s1",
    district: "浦东新区",
    logo: "AI情报",
    title: "面向生物医药研发全流程的 AI 情报与决策解决方案",
    summary: "提供智能情报检索、高价值专利培育、全流程风险预警和研发决策支持。",
    provider: "智慧研发科技有限公司",
    benefits: ["降低研发信息检索成本", "提升专利和竞品分析效率", "形成可复用的知识沉淀"]
  },
  {
    id: "s2",
    district: "杨浦区",
    logo: "数治",
    title: "公共数据赋能企业风控解决方案",
    summary: "围绕企业信用、经营风险和合规管理，提供数据接入、模型评估和应用落地。",
    provider: "数据治理服务联合体",
    benefits: ["统一企业风险视图", "提升风控预警及时性", "支持合规审计留痕"]
  },
  {
    id: "s3",
    district: "宝山区",
    logo: "工数",
    title: "中小制造企业数字化转型轻量方案",
    summary: "从设备联网、数据看板、移动报工和库存协同入手，快速建立数字化底座。",
    provider: "工业互联网服务中心",
    benefits: ["减少人工统计", "提升生产透明度", "降低首期改造成本"]
  }
];

const activities = [
  {
    id: "ac1",
    district: "杨浦区",
    title: "数智变革·合规守底·云网出海",
    venue: "杨树浦路1366号11楼",
    time: "2026-08-07 14:00",
    status: "open",
    agenda: "AI赋能数智转型、财税合规加速、云网出海服务分享。",
    intro: "面向准备开展数字化升级和海外业务拓展的企业，提供政策、技术和服务资源对接。",
    contact: "联系人 3001",
    phone: "185****4260"
  },
  {
    id: "ac2",
    district: "长宁区",
    title: "企业 AI 实战训练营",
    venue: "长宁路1018号会议中心",
    time: "2026-08-12 13:30",
    status: "open",
    agenda: "企业 AI 场景拆解、智能体搭建、落地案例复盘。",
    intro: "通过案例和工作坊帮助企业识别可落地的 AI 应用场景。",
    contact: "联系人 3002",
    phone: "136****9051"
  },
  {
    id: "ac3",
    district: "徐汇区",
    title: "数首发·徐汇区电信专场",
    venue: "新漕河泾国际商务中心B座2楼报告厅",
    time: "2026-08-19 09:30",
    status: "open",
    agenda: "数字产品首发、企业需求发布、产品试用对接。",
    intro: "帮助企业了解近期可试用数字产品，并与供应商进行现场沟通。",
    contact: "联系人 3003",
    phone: "138****2110"
  },
  {
    id: "ac4",
    district: "静安区",
    title: "AI 新基建企业应用入门与风险透视",
    venue: "上海现代服务业联合会",
    time: "2026-07-20 14:00",
    status: "closed",
    agenda: "AI 基础设施、模型安全、合规风险和企业应用路线。",
    intro: "面向企业管理者的 AI 新基建主题分享，活动已截止。",
    contact: "联系人 3004",
    phone: "139****7788"
  }
];

module.exports = {
  districts,
  news,
  agencies,
  serviceOfficers,
  products,
  solutions,
  activities
};
