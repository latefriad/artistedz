/**
 * Artiste Dz - Official Multilingual Data Store
 * Leading Algerian Entertainment Platform & Digital Journal
 * Founder, Film Critic & Celebrity Interviewer: Halim Zerrouki (حليم زروقي)
 */

const ArtisteDzData = {
  ar: {
    siteName: "ArtisteDz",
    arabicName: "آرتيست ديزاد",
    siteSubtitle: "الجريدة الإلكترونية الرائدة للإعلام الفني، صناعة السينما، وحوارات المشاهير",
    leadJournalist: "حليم زروقي",
    leadHandle: "halim.zerrouki",
    facebookUrl: "https://www.facebook.com/ArtisteDz094",
    officialMotto: "كل المقالات والحوارات هي عبارة عن لقاءات حصرية تابعة لـ ArtisteDZ مع الفنانين",
    
    nav: {
      home: "الرئيسية",
      about: "من هو حليم زروقي؟",
      coverage: "أعمالنا وتغطياتنا",
      artists: "الفنانون الذين تعاملنا معهم",
      journal: "المجلة النقدية",
      contact: "حجز التغطيات والشراكات",
      bookCta: "طلب تغطية إعلامية",
      breakingLabel: "عاجل ArtisteDz"
    },

    breakingNews: [
      "حصري ArtisteDz: كل المقالات والحوارات هي عبارة عن لقاءات وتغطيات حصرية للجريدة الإلكترونية ArtisteDz",
      "حوار تاريخي: أسطورة الشعبي عبد القادر شاعو في جلسة بوح فني استثنائية مع حليم زروقي",
      "انفراد دولي: حوار حصري مع الرابور الأمريكي العالمي Glasses Malone حول مشهد الهيب هوب وتأثيره العالمي",
      "لقاء خاص: النجم اللبناني سعيد سرحان (بطل مسلسل الهيبة) يكشف لـ ArtisteDz أسرار كواليس الدراما العربية",
      "تكريم رواد الفن: عميد التمثيل حكيم دكار والأب الروحي للراب الجزائري Fada Vex في مجهر حليم زروقي",
      "حوار مع النجم التونسي الكبير والصديق أكرم ماغ (Akram Mag) حول جولاته العالمية وتعاونه مع ArtisteDz"
    ],

    heroSlides: [
      {
        id: "slide-glasses-malone",
        tag: "انفراد عالمي • هيب هوب أمريكي",
        tagColor: "ruby",
        title: "حوار حصري مع الرابور الأمريكي العالمي Glasses Malone: كواليس هوليوود ونبض الشارع في ArtisteDz",
        excerpt: "في سابقة إعلامية للمنصات الجزائرية، يستضيف حليم زروقي الفنان العالمي Glasses Malone في حوار شيق عن صناعة الموسيقى في لوس أنجلوس، ورسالة الراب، وتقديره للجمهور العربي والجزائري.",
        date: "حصري ArtisteDz",
        duration: "30 دقيقة حوار",
        views: "480K مشاهدة",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "HOLLYWOOD EXCLUSIVE",
        actionText: "مشاهدة الحوار الحصري",
        videoData: {
          youtubeId: "glasses-malone-interview",
          title: "لقاء حصري: حليم زروقي يحاور النجم الأمريكي العالمي Glasses Malone",
          guest: "Glasses Malone (USA)",
          role: "رابر وفنان عالمي - لوس أنجلوس",
          summary: "حوار شيق يتناول التعاونات العالمية، تاريخ الهيب هوب الأمريكي، ورأي جلاسس مالون في شغف الجيل الجديد بالموسيقى الحضرية."
        }
      },
      {
        id: "slide-chaou",
        tag: "رواد التراث • عمداء الشعبي",
        tagColor: "gold",
        title: "لقائي مع الفنان الكبير عبد القادر شاعو: أسرار المندول العاصمي وحكمة نصف قرن من الطرب",
        excerpt: "جلسة أصالة خالدة وثق فيها حليم زروقي مسيرة الشيخ عبد القادر شاعو، ملامح الأغنية الشعبية في العاصمة، ورسائله لجيل الفنانين الشباب للحفاظ على الهوية الموسيقية.",
        date: "تغطية خاصة",
        duration: "25 دقيقة وثائقي",
        views: "340K مشاهدة",
        image: "assets/images/abdelkader_chaou.jpg",
        type: "video",
        badge: "CHAABI LEGEND",
        actionText: "مشاهدة الجلسة التراثية",
        videoData: {
          youtubeId: "chaou-exclusive",
          title: "لقاء خاص مع عميد الأغنية الشعبية عبد القادر شاعو - ArtisteDz",
          guest: "عبد القادر شاعو (Abdelkader Chaou)",
          role: "أيقونة الطرب الشعبي الجزائري",
          summary: "حديث من القلب عن زمن الفن الجميل، أداء المندول، وعلاقة شاعو بالشيخ الهاشمي قروابي ومحبوبه الجمهور الجزائري."
        }
      },
      {
        id: "slide-said-serhan",
        tag: "دراما عربية • لقاء النجوم",
        tagColor: "blue",
        title: "لقائي مع النجم اللبناني سعيد سرحان: من أروقة «الهيبة» إلى آفاق السينما العربية",
        excerpt: "الممثل اللبناني المبدع سعيد سرحان يتحدث لحليم زروقي عن تقمصه للشخصيات الدرامية الصعبة، تجربته في السينما اللبنانية، وحبه الخاص للشعب الجزائري ولمنصة ArtisteDz.",
        date: "حوار حصري",
        duration: "28 دقيقة لقاء",
        views: "295K مشاهدة",
        image: "assets/images/cinema_hall.jpg",
        type: "video",
        badge: "LEBANESE CINEMA",
        actionText: "مشاهدة الحوار الكامل",
        videoData: {
          youtubeId: "said-serhan-exclusive",
          title: "حوار خاص مع الفنان اللبناني سعيد سرحان - حاوره حليم زروقي",
          guest: "سعيد سرحان (Said Serhan)",
          role: "ممثل سينمائي ودرامي لبناني",
          summary: "إضاءة شاملة على مسيرة سعيد سرحان، كواليس نجاح الدراما المشتركة، ورؤيته للتعاون الفني بين لبنان والجزائر."
        }
      },
      {
        id: "slide-akram-mag",
        tag: "موسيقى ومحبة • نجوم تونس",
        tagColor: "gold",
        title: "حوار مطول ومقال ناصع مع الصديق والفنان التونسي الكبير أكرم ماغ (Akram Mag)",
        excerpt: "استعراض لعلاقة الصداقة والتعاون الإعلامي المستمر مع الفنان التونسي المبدع أكرم ماغ، متحدثاً عن كواليس أغانيه الضاربة، نجاحاته على المسارح الدولية، وتعاونه الحصري مع ArtisteDz.",
        date: "حصري ArtisteDz",
        duration: "22 دقيقة حوار",
        views: "410K مشاهدة",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "TUNISIAN ICON",
        actionText: "مشاهدة الحوار والمقال",
        videoData: {
          youtubeId: "akram-mag-interview",
          title: "لقاء حصري مع الفنان التونسي الكبير أكرم ماغ - تقديم حليم زروقي",
          guest: "أكرم ماغ (Akram Mag)",
          role: "فنان ومغني تونسي عالمي",
          summary: "حوار حصري يتطرق إلى أعمال أكرم ماغ وإصداره الجديد وعشقه لجمهوره الجزائري المخلص."
        }
      },
      {
        id: "slide-fadavex",
        tag: "هيب هوب • التاريخ الحي",
        tagColor: "purple",
        title: "Fada Vex: الأب الروحي للراب الجزائري يفتح خزائن الذاكرة مع حليم زروقي",
        excerpt: "توثيق تاريخي عميق لبدايات الراب الجزائري في التسعينيات وكيف مهد فادافيكس الطريق لأجيال الراب الحالية لتصل إلى الملايين في العالم العربي.",
        date: "تحقيق تاريخي",
        duration: "35 دقيقة تاريخي",
        views: "520K مشاهدة",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "GODFATHER OF RAP",
        actionText: "مشاهدة اللقاء الوثائقي",
        videoData: {
          youtubeId: "fada-vex-godfather",
          title: "الأب الروحي للراب الجزائري Fada Vex في حوار العمر مع حليم زروقي",
          guest: "Fada Vex",
          role: "الأب الروحي لمشهد الراب DZ",
          summary: "سردية سينمائية لتاريخ الهيب هوب الجزائري وتطوره من الأشرطة الأولى إلى المنصات الرقمية."
        }
      }
    ],

    blogFeed: [
      {
        id: "blog-cannes-algeria",
        tag: "Trend • السينما",
        tagColor: "red",
        title: "حضور السينما الجزائرية في المهرجانات الدولية: قراءة نقدية في آفاق الإنتاج والتوزيع",
        excerpt: "تحليل نقدي معمق يرصد التحديات الجمالية والإنتاجية التي تواجه الأفلام الجزائرية في المحافل العالمية ورسالة الجيل الجديد من المخرجين.",
        author: "حليم زروقي",
        date: "أكتوبر 2026",
        comments: "14 تعليق",
        readTime: "5 دقائق قراءة",
        image: "assets/images/cinema_premiere.jpg",
        category: "cinema"
      },
      {
        id: "blog-abdelkader-chaou",
        tag: "Exclusive • أسطورة الشعبي",
        tagColor: "red",
        title: "ماستر كلاس الشعبي مع الشيخ عبد القادر شاعو: أصول النغمة وحفظ الذاكرة الموسيقية",
        excerpt: "جلسة بوح فني استثنائية يستعرض فيها عميد أغنية الشعبي عبد القادر شاعو أسرار النغمة العاصمية والقصيدة الشعبية الأصيلة.",
        author: "حليم زروقي",
        date: "سبتمبر 2026",
        comments: "28 تعليق",
        readTime: "7 دقائق قراءة",
        image: "assets/images/abdelkader_chaou.jpg",
        category: "chaabi"
      },
      {
        id: "blog-glasses-malone",
        tag: "Hollywood • انفراد دولي",
        tagColor: "red",
        title: "حوار لوس أنجلوس الحصري مع Glasses Malone: موسيقى الهيب هوب بين رسالة الشارع وصناعة النجومية",
        excerpt: "الرابور الأمريكي العالمي Glasses Malone يفتح قلبه لـ ArtisteDz متحدثاً عن كواليس هوليوود وإعجابه بالجمهور الجزائري والمغاربي.",
        author: "حليم زروقي",
        date: "أغسطس 2026",
        comments: "42 تعليق",
        readTime: "6 دقائق قراءة",
        image: "assets/images/studio_mic.jpg",
        category: "rap"
      },
      {
        id: "blog-theatre-festival",
        tag: "Culture • مسرح",
        tagColor: "red",
        title: "افتتاح المهرجان الوطني للمسرح المحترف بحضور وزيرة الثقافة: بعث جديد لأبي الفنون",
        excerpt: "تغطية ميدانية ورصد لأهم العروض الافتتاحية وشهادات صناع المسرح الجزائري حول راهن الخشبة الوطنية وآفاق الإبداع المسرحي.",
        author: "حليم زروقي",
        date: "أكتوبر 2026",
        comments: "9 تعليقات",
        readTime: "4 دقائق قراءة",
        image: "assets/images/cinema_hall.jpg",
        category: "theatre"
      }
    ],

    about: {
      sectionBadge: "البروفايل المهني والصحفي",
      title: "من هو حليم زروقي؟",
      subtitle: "محاور صحفي، ناقد سينمائي، ومدير أعمال فنانين | مؤسس ArtisteDz",
      leadParagraph: "يُعتبر الإعلامي والناقد الفني <strong>حليم زروقي (Halim Zerrouki)</strong> المرجع الصحفي الأبرز والأكثر ثقة في المشهد الفني والسينمائي الجزائري والمغاربي. عبر منصته وجريدته الإلكترونية الرائدة <strong>«ArtisteDz»</strong>، قاد حليم مئات اللقاءات والتحقيقات الحصرية التي وثقت نبض السينما، السجادة الحمراء، وعوالم الموسيقى والمسرح.",
      bodyParagraph: "امتدت بصمة حليم زروقي من أروقة المسرح المحترف في الجزائر (بما في ذلك افتتاح المهرجان الوطني بحضور وزيرة الثقافة السابقة د. مليكة بن دودة)، إلى كبرى سجادات المهرجانات السينمائية الدولية والعربية (كان، الجونة، قرطاج، وهران). وبفضل مصداقيته العالية، أصبح المحاور المفضل والمؤتمن لنجوم التمثيل والغناء والراب من الجزائر، تونس، لبنان، مصر، فرنسا، وحتى الولايات المتحدة الأمريكية.",
      officialQuoteBadge: "شعار المنصة الدائم",
      officialStatement: "«كل المقالات والحوارات المنشورة هي عبارة عن لقاءات حصرية تابعة لـ ArtisteDZ مع الفنانين.»",
      accreditations: [
        "إعلامي ومحاور معتمد لدى كبرى المهرجانات السينمائية الدولية (Cannes, JCC, Gouna)",
        "ناقد فني ومحلل درامي متخصص في رصد وتحليل السينما والموسيقى الحضرية",
        "مدير علاقات عامة وإدارة أعمال لنخبة من مشاهير التمثيل والغناء",
        "مؤسس ومدير تحرير الجريدة الفنية الإلكترونية «ArtisteDz» (@ArtisteDz094)"
      ],
      kpis: [
        { value: "12+", label: "سنة من الصحافة الفنية", sub: "تغطيات وتحقيقات ميدانية" },
        { value: "200+", label: "حواراً حصرياً مع النجوم", sub: "جزائريين، عرب، ودوليين" },
        { value: "60+", label: "مهرجاناً وسجادة حمراء", sub: "في الجزائر والوطن العربي وأوروبا" },
        { value: "8M+", label: "تفاعل ومشاهدات رقمية", sub: "على المنصات ومواقع التواصل" }
      ],
      quote: "«الصحافة الفنية ليست نقلاً للسطح، بل غوص في جوهر الفنان وسرد صادق لكفاحه وشغفه الذي يلهم الملايين.»",
      quoteAuthor: "حليم زروقي - Halim Zerrouki",
      buttons: {
        interview: "طلب حوار أو تغطية صحفية",
        presskit: "تحميل الملف الصحفي والـ Media Kit",
        facebook: "متابعة الحساب الرسمي على فيسبوك"
      }
    },

    categories: {
      all: "جميع التغطيات والحوارات",
      cinema: "السينما والدراما",
      heritage: "الشعبي والتراث",
      rap: "الراب والموسيقى الحضرية",
      international: "نجوم العالم والعرب",
      theatre: "المسرح والمهرجانات"
    },

    coverageItems: [
      {
        id: "cov-glasses",
        category: "international",
        categoryLabel: "نجوم العالم والعرب",
        tagColor: "ruby",
        title: "لقائي الحصري مع الفنان الأمريكي العالمي Glasses Malone",
        guest: "Glasses Malone",
        excerpt: "حوار تلفزيوني استثنائي مع مغني الهيب هوب الأمريكي جلاسس مالون، حول الموسيقى كجسر تواصل بين الشعوب وثقافة الشارع.",
        date: "تغطية دولية",
        duration: "30:00 دقيقة",
        views: "480K",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "USA EXCLUSIVE",
        articleLink: "https://artistedz.com/glasses-malon/"
      },
      {
        id: "cov-chaou",
        category: "heritage",
        categoryLabel: "الشعبي والتراث",
        tagColor: "gold",
        title: "جانب من لقائي مع الفنان الكبير عبد القادر شاعو",
        guest: "عبد القادر شاعو (Abdelkader Chaou)",
        excerpt: "جلسة بوح فنية أصيلة يسترجع فيها الشيخ شاعو أجمل محطات مسيرته، وروائع القصيد العاصمي، وذكريات القصبة وباب الواد.",
        date: "جلسة تراثية",
        duration: "25:15 دقيقة",
        views: "340K",
        image: "assets/images/abdelkader_chaou.jpg",
        type: "video",
        badge: "CHAABI MASTER",
        articleLink: "https://artistedz.com/"
      },
      {
        id: "cov-dekkar",
        category: "theatre",
        categoryLabel: "المسرح والمهرجانات",
        tagColor: "ruby",
        title: "لقائي مع الفنان المبدع حكيم دكار (جحا)",
        guest: "حكيم دكار (Hakim Dekkar)",
        excerpt: "حوار ممتع يستعرض فيه دكار كواليس أعماله الخالدة في الذاكرة الجزائرية، ورؤيته للمسرح المحترف والكوميديا الهادفة.",
        date: "حوار خاص",
        duration: "20:30 دقيقة",
        views: "390K",
        image: "assets/images/hakim_dekkar.jpg",
        type: "video",
        badge: "ALGERIAN THEATRE",
        articleLink: "https://artistedz.com/"
      },
      {
        id: "cov-akram-mag",
        category: "international",
        categoryLabel: "نجوم العالم والعرب",
        tagColor: "gold",
        title: "مقالي وحواري المطول مع الفنان التونسي الكبير والصديق Akrammag",
        guest: "أكرم ماغ (Akram Mag)",
        excerpt: "مقالي المبسط وحواري الحصري المطول مع النجم التونسي أكرم ماغ؛ محطات نجاحه في المهرجانات الكبرى وحبه العميق للجزائر.",
        date: "حصري ArtisteDz",
        duration: "22:45 دقيقة",
        views: "410K",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "TUNISIA EXCLUSIVE",
        articleLink: "https://artistedz.com/اكرم-ماغ/"
      },
      {
        id: "cov-said-serhan",
        category: "cinema",
        categoryLabel: "السينما والدراما",
        tagColor: "blue",
        title: "لقائي مع الفنان والصديق اللبناني سعيد سرحan",
        guest: "سعيد سرحان (Said Serhan)",
        excerpt: "نجم مسلسل الهيبة في حوار حصري لـ ArtisteDz حول فلسفة التمثيل، أسرار نجاح الدراما المشتركة، وعشقه للجزائر.",
        date: "حوار درامي",
        duration: "28:10 دقيقة",
        views: "295K",
        image: "assets/images/cinema_hall.jpg",
        type: "video",
        badge: "LEBANON STAR",
        articleLink: "https://artistedz.com/said-serhan/"
      },
      {
        id: "cov-bassem",
        category: "cinema",
        categoryLabel: "السينما والدراما",
        tagColor: "blue",
        title: "لقائي مع الفنان والصديق اللبناني باسم مغنية",
        guest: "باسم مغنية (Bassem Moughnieh)",
        excerpt: "حوار مميز مع النجم والمخرج باسم مغنية حول واقع الدراما العربية، التحديات الإنتاجية، وعلاقته بالإعلام الجزائري.",
        date: "حوار حصري",
        duration: "21:00 دقيقة",
        views: "270K",
        image: "assets/images/cinema_premiere.jpg",
        type: "video",
        badge: "DRAMA LEADER",
        articleLink: "https://artistedz.com/bassem/"
      },
      {
        id: "cov-peter-semaan",
        category: "cinema",
        categoryLabel: "السينما والدراما",
        tagColor: "blue",
        title: "لقائي مع الفنان اللبناني الكبير بيتر سمعان",
        guest: "بيتر سمعان (Peter Semaan)",
        excerpt: "لقاء فني راقٍ مع نجم الشاشة اللبنانية بيتر سمعان حول مسيرته الذهبية والمحطات التلفزيونية البارزة.",
        date: "حوار خاص",
        duration: "19:20 دقيقة",
        views: "230K",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "LEBANESE ICON",
        articleLink: "https://artistedz.com/بيتر-السمعان/"
      },
      {
        id: "cov-nour-saab",
        category: "cinema",
        categoryLabel: "السينما والدراما",
        tagColor: "ruby",
        title: "لقائي مع الفنانة والصديقة اللبنانية نور صعب",
        guest: "نور صعب (Nour Saab)",
        excerpt: "الممثلة نور صعب تتحدث لـ ArtisteDz عن تجاربها الدرامية العربية وتقديرها للمشاهد والصحافة الجزائرية.",
        date: "حوار خاص",
        duration: "17:40 دقيقة",
        views: "215K",
        image: "assets/images/cinema_hall.jpg",
        type: "video",
        badge: "RISING STAR",
        articleLink: "https://artistedz.com/noursaab/"
      },
      {
        id: "cov-fada-vex",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "الأب الروحي للراب الجزائري Fadavex في لقاء للتاريخ",
        guest: "Fada Vex",
        excerpt: "لقاء استثنائي يسجل شهادة فادافيكس حول نشأة الهيب هوب الجزائري ورسالة الكلمات الصادقة في التعبير عن واقع المجتمع.",
        date: "تحقيق راب",
        duration: "35:10 دقيقة",
        views: "520K",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "RAP PIONEER",
        articleLink: "https://artistedz.com/6568-2/"
      },
      {
        id: "cov-leck",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي الحصري مع الفنان الفرنسي Leck Officiel",
        guest: "Leck Officiel (France)",
        excerpt: "حوار حصري مع الرابور الفرنسي ليك أوفيسيال يتطرق فيه إلى أصوله الجزائرية وتعاونه الفني وجديده في الساحة.",
        date: "حصري دولي",
        duration: "24:15 دقيقة",
        views: "360K",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "FRENCH RAP",
        articleLink: "https://artistedz.com/leck/"
      },
      {
        id: "cov-weld15",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الرابور التونسي المعروف Weld 15",
        guest: "ولد 15 (Weld 15 - Tunisia)",
        excerpt: "حوار ساخن مع الرابور التونسي ولد 15 حول حرية التعبير، مشهد الراب في تونس والمغرب العربي، وروابط الأخوة مع الجزائر.",
        date: "حوار حصري",
        duration: "23:00 دقيقة",
        views: "440K",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "TUNISIAN RAP",
        articleLink: "https://artistedz.com/weld-15/"
      },
      {
        id: "cov-theatre-minister",
        category: "theatre",
        categoryLabel: "المسرح والمهرجانات",
        tagColor: "ruby",
        title: "حضور وزيرة الثقافة مليكة بن دودة في افتتاح المهرجان الوطني للمسرح المحترف",
        guest: "وزيرة الثقافة د. مليكة بن دودة ونخبة المسرح",
        excerpt: "تغطية ميدانية شاملة لافتتاح المهرجان الوطني للمسرح المحترف ولقاءات حصرية لـ ArtisteDz مع كبار صناع الخشبة الجزائرية.",
        date: "تغطية رسمية",
        duration: "18:00 دقيقة",
        views: "180K",
        image: "assets/images/cinema_premiere.jpg",
        type: "video",
        badge: "OFFICIAL FESTIVAL",
        articleLink: "https://artistedz.com/"
      },
      {
        id: "cov-azzou",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الرابور الجزائري azzou hk",
        guest: "azzou hk",
        excerpt: "حديث صريح عن واقع موسيقى الأندرغراوند في الجزائر وتطلعات جيل الشباب من فناني الراب.",
        date: "حوار راب",
        duration: "16:20 دقيقة",
        views: "210K",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "RAP DZ",
        articleLink: "https://artistedz.com/azzoukhk/"
      },
      {
        id: "cov-skimi7",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الفنان الكبير skimi7",
        guest: "skimi7",
        excerpt: "حواري مع الفنان سكايمي سفن ورؤيته للإنتاج الموسيقي وتطور المشهد الموسيقي في الجزائر.",
        date: "حوار حصري",
        duration: "15:45 دقيقة",
        views: "195K",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "RAP DZ",
        articleLink: "https://artistedz.com/skimi7/"
      },
      {
        id: "cov-nastyshiit",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الرابور التونسي nastyshiit",
        guest: "nastyshiit (تونس)",
        excerpt: "لقاء فني شبابي حول الموجة الجديدة في موسيقى التراب والراب التونسي.",
        date: "حوار تونس",
        duration: "14:50 دقيقة",
        views: "185K",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "MAGHREB BEATS",
        articleLink: "https://artistedz.com/nastyshiit/"
      },
      {
        id: "cov-hedi",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الرابور التونسي l’hedi l’artiste",
        guest: "l’hedi l’artiste",
        excerpt: "حواري الخاص مع الفنان الهادي لارتيست متحدثاً عن كواليس كتابة الأغاني والتعاونات الفنية المغاربية.",
        date: "حوار فني",
        duration: "16:10 دقيقة",
        views: "175K",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "RAP TUNISIE",
        articleLink: "https://artistedz.com/hedi-lartiste/"
      },
      {
        id: "cov-raf",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "الرابور والصديق التونسي RAF في ضيافة ArtisteDz",
        guest: "RAF (Tunisia)",
        excerpt: "جلسة تجمع بين الصداقة والموسيقى، يتطرق فيها الفنان راف لتطورات الهيب هوب وتعاونه مع منصة ArtisteDz.",
        date: "لقاء الأصدقاء",
        duration: "15:20 دقيقة",
        views: "160K",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "TUNISIAN RAP",
        articleLink: "https://artistedz.com/raf/"
      },
      {
        id: "cov-pissco-nast",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "لقائي مع الفنان والصديق Mc Pissco والفنان العالمي Nas-T",
        guest: "Mc Pissco & Nas-T",
        excerpt: "حوارات فنية توثق إبداعات فناني الراب ومسيرتهم المستمرة بدعم منصة ArtisteDz.",
        date: "حوار خاص",
        duration: "21:30 دقيقة",
        views: "220K",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "COLLAB DZ",
        articleLink: "https://artistedz.com/mc-pissco/"
      },
      {
        id: "cov-casawi",
        category: "rap",
        categoryLabel: "الراب والموسيقى الحضرية",
        tagColor: "purple",
        title: "حواري مع الرابور المغربي الفرنسي Casawi",
        guest: "Casawi (كازاوي)",
        excerpt: "لقاء فني حول جسور الموسيقى في المهجر، الهوية، ولغة الشارع في الراب المعاصر.",
        date: "حوار دولي",
        duration: "18:40 دقيقة",
        views: "245K",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "RAP FRANCO-MAGHREBIN",
        articleLink: "https://artistedz.com/"
      },
      {
        id: "cov-egypt-homage",
        category: "international",
        categoryLabel: "نجوم العالم والعرب",
        tagColor: "gold",
        title: "تحية تقدير: كبار فناني مصر يعبرون عن حبهم للجزائر ولـ ArtisteDz",
        guest: "كبار نجوم السينما والتلفزيون بمصر",
        excerpt: "شهادات ولقاءات مسجلة مع عمالقة الفن المصري يعربون فيها عن محبتهم للشعب الجزائري واعتزازهم بمهنية منصة ArtisteDz وإعلامييها.",
        date: "رسائل النجوم",
        duration: "19:00 دقيقة",
        views: "380K",
        image: "assets/images/red_carpet_lights.jpg",
        type: "video",
        badge: "EGYPT & ALGERIA",
        articleLink: "https://artistedz.com/"
      },
      {
        id: "cov-local-stars",
        category: "cinema",
        categoryLabel: "السينما والدراما",
        tagColor: "blue",
        title: "حواري مع الفنانة كاميليا بن دريسي، يوسف سيلحات، وجلاب عبد الله",
        guest: "كاميليا بن دريسي، يوسف سيلحات، جلاب عبد الله",
        excerpt: "سلسلة من الحوارات المتلفزة مع نجوم الشاشة الجزائرية تكشف أسرار تجاربهم الدرامية والمسرحية.",
        date: "سلسلة حوارات",
        duration: "26:30 دقيقة",
        views: "310K",
        image: "assets/images/cinema_premiere.jpg",
        type: "video",
        badge: "DZ DRAMA",
        articleLink: "https://artistedz.com/6650-2/"
      }
    ],

    collaborations: {
      sectionBadge: "الفنانون الذين تعاملنا معهم",
      title: "نجوم وشخصيات فنية وثّقنا إبداعاتهم في ArtisteDz",
      subtitle: "حوارات حصرية، جلسات توثيقية، وعلاقات إعلامية متينة قادها حليم زروقي مع ألمع رموز الفن في الجزائر، تونس، لبنان، مصر، فرنسا، وأمريكا",
      filterCategories: [
        { id: "all", label: "جميع الفنانين" },
        { id: "cinema", label: "السينما والدراما" },
        { id: "heritage", label: "الشعبي والتراث" },
        { id: "rap", label: "الراب والهيب هوب" },
        { id: "international", label: "النجوم العرب والدوليين" }
      ],
      artists: [
        {
          name: "عبد القادر شاعو",
          latinName: "Abdelkader Chaou",
          category: "heritage",
          role: "عميد الأغنية الشعبية العاصمية",
          domain: "طرب شعبي وتراث",
          badge: "أسطورة الفن",
          image: "assets/images/abdelkader_chaou.jpg",
          desc: "أحد أعمدة الطرب الشعبي الجزائري ورفيق درب كبار المشايخ، خصّ ArtisteDz بجلسة بوح تاريخية تناولت أسرار القصيد والمندول."
        },
        {
          name: "حكيم دكار",
          latinName: "Hakim Dekkar",
          category: "cinema",
          role: "نجم التمثيل والمسرح الجزائري (جحا)",
          domain: "تمثيل ومسرح",
          badge: "قيمة فنية",
          image: "assets/images/hakim_dekkar.jpg",
          desc: "صانع البسمة ورمز المسرح والتلفزيون الجزائري، دار بينه وبين حليم زروقي حوار معمق حول أصالة الفن وأدواره الخالدة."
        },
        {
          name: "Glasses Malone",
          latinName: "Glasses Malone",
          category: "international",
          role: "نجم الهيب هوب الأمريكي العالمي",
          domain: "هيب هوب عالمي - أمريكا",
          badge: "نجم هوليوود",
          image: "assets/images/studio_mic.jpg",
          desc: "الفنان الأمريكي الشهير الذي خصّ منصة ArtisteDz بحوار حصري تناول صناعة الموسيقى في أمريكا ورسالة الراب العالمية."
        },
        {
          name: "أكرم ماغ",
          latinName: "Akram Mag",
          category: "international",
          role: "الفنان والنجم التونسي الكبير والصديق",
          domain: "موسيقى وبوب مغاربي",
          badge: "صديق المنصة",
          image: "assets/images/concert_lights.jpg",
          desc: "صوت تونس الذهبي وصديق المنصة الدائم، حظي بمقالات نقدية وحوارات مطولة حصرية وثقت حضوره الفني الرائد."
        },
        {
          name: "منذر رياحنة",
          latinName: "Monther Rayahneh",
          category: "international",
          role: "نجم السينما والدراما العربية",
          domain: "تمثيل وسينما عربية",
          badge: "نجم دولي",
          image: "assets/images/monther_rayahneh.jpg",
          desc: "النجم الأردني والعربي الكبير الذي جمعته بحليم زروقي جلسات نقدية مطولة على هامش المهرجانات السينمائية الدولية."
        },
        {
          name: "سعيد سرحان",
          latinName: "Said Serhan",
          category: "international",
          role: "نجم الدراما اللبنانية (الهيبة)",
          domain: "تمثيل ودراما - لبنان",
          badge: "نجم الدراما",
          image: "assets/images/cinema_hall.jpg",
          desc: "الممثل اللبناني المتميز الذي فتح قلبه لحليم زروقي في حوار شيق عن كواليس الدراما المشتركة ومحبته للشعب الجزائري."
        },
        {
          name: "باسم مغنية",
          latinName: "Bassem Moughnieh",
          category: "international",
          role: "الفنان والمخرج اللبناني الكبير",
          domain: "إخراج وتمثيل - لبنان",
          badge: "قامة درامية",
          image: "assets/images/cinema_premiere.jpg",
          desc: "نجم الشاشة اللبنانية والعربية، التقى به حليم زروقي في حديث فني معمق حول المسار الفني والإنتاج التلفزيوني."
        },
        {
          name: "بيتر سمعان",
          latinName: "Peter Semaan",
          category: "international",
          role: "نجم السينما والتلفزيون اللبناني",
          domain: "تمثيل وسينما - لبنان",
          badge: "نجم تلفزيوني",
          image: "assets/images/dark_lounge.jpg",
          desc: "الفنان اللبناني القدير صاحب الحضور الأنيق، خصّ جريدة ArtisteDz بلقاء استعاد فيه ذكريات أعماله الشهيرة."
        },
        {
          name: "نور صعب",
          latinName: "Nour Saab",
          category: "international",
          role: "الفنانة والصديقة اللبنانية",
          domain: "دراما وتمثيل - لبنان",
          badge: "نجمة عربية",
          image: "assets/images/cinema_hall.jpg",
          desc: "الممثلة اللبنانية المتألقة التي جمعها حوار فني مع حليم زروقي تناولت فيه تطلعاتها والأدوار الفنية التي تفضلها."
        },
        {
          name: "Fada Vex",
          latinName: "Fada Vex",
          category: "rap",
          role: "الأب الروحي للراب الجزائري",
          domain: "هيب هوب وأصالة",
          badge: "عرّاب الراب",
          image: "assets/images/dark_lounge.jpg",
          desc: "الأب الروحي للهيب هوب الجزائري، حظي بتغطيات نقدية وثقت ريادته التاريخية لموسيقى الشارع في الجزائر."
        },
        {
          name: "Leck Officiel",
          latinName: "Leck Officiel",
          category: "rap",
          role: "الفنان والرابور الفرنسي",
          domain: "راب فرنسي ومغاربي",
          badge: "نجم فرنسي",
          image: "assets/images/concert_lights.jpg",
          desc: "الرابور الفرنسي البارز، خصّ ArtisteDz بحوار حصري عن ألبوماته وجولاته ومكانة أصوله في فنه."
        },
        {
          name: "Weld 15",
          latinName: "Weld 15",
          category: "rap",
          role: "الرابور التونسي المعروف",
          domain: "موسيقى وراب تونس",
          badge: "صوت الثورة",
          image: "assets/images/studio_mic.jpg",
          desc: "أحد أجرأ وأشهر أصوات الراب في تونس، جمعته بحليم زروقي حوارات صريحة حول حرية الفن وواقع الشباب."
        },
        {
          name: "مراد جعفري",
          latinName: "Mourad Djaafri",
          category: "heritage",
          role: "حارس التراث الشعبي الجزائري",
          domain: "أغنية شعبية عاصمية",
          badge: "صوت العاصمة",
          image: "assets/images/mourad_djaafri.jpg",
          desc: "امتداد مدرسة الهاشمي قروابي، جمعته مع حليم زروقي جلسات وثقت حبه للقصيدة وللثقافة العاصمية."
        },
        {
          name: "كاميليا بن دريسي",
          latinName: "Camelia Bendrissi",
          category: "cinema",
          role: "الفنانة ونجمة التمثيل الجزائرية",
          domain: "تلفزيون ودراما",
          badge: "نجمة جزائرية",
          image: "assets/images/cinema_premiere.jpg",
          desc: "لقاءات حصرية متجددة كشفت فيها كاميليا بن دريسي عن كواليس أعمالها التلفزيونية والمسرحية."
        },
        {
          name: "يوسف سيلحات",
          latinName: "Youcef Silhat",
          category: "cinema",
          role: "الفنان والممثل الجزائري",
          domain: "سينما وتلفزيون",
          badge: "ممثل متميز",
          image: "assets/images/cinema_hall.jpg",
          desc: "حوار فني ناقش فيه يوسف سيلحات أعماله الدرامية ودوره في إثراء الإنتاج التلفزيوني الجزائري."
        },
        {
          name: "سهيلة معلم",
          latinName: "Souhila Mallem",
          category: "cinema",
          role: "نجمة السينما والتلفزيون الأولى",
          domain: "سينما ودراما",
          badge: "نجمة الشاشة",
          image: "assets/images/souhila_mallem.png",
          desc: "صاحبة الشعبية الطاغية في الجزائر، حاضرة في مراجعات وحوارات ArtisteDz كنموذج للموهبة الاستثنائية."
        },
        {
          name: "ديدين كانون 16",
          latinName: "Didine Canon 16",
          category: "rap",
          role: "رائد الراب الجزائري المتصدر",
          domain: "موسيقى وراب DZ",
          badge: "صانع الأرقام",
          image: "assets/images/didine_canon_16.jpg",
          desc: "الاسم الأبرز في الراب المغاربي، حظيت مسيرته بتغطيات نقدية وتحليلات للأرقام القياسية التي حققها."
        },
        {
          name: "فوبيا إسحاق",
          latinName: "Phobia Isaac",
          category: "rap",
          role: "صوت الشعر والشارع الجزائري",
          domain: "راب وشعر معاصر",
          badge: "البومة",
          image: "assets/images/phobia_isaac.jpg",
          desc: "الفنان المعروف بشاعريته المظلمة وكلماته العميقة التي حللها حليم زروقي في مقالات المنصة النقدية."
        },
        {
          name: "فلان",
          latinName: "Flenn",
          category: "rap",
          role: "صانع الألحان ومحبوب الشباب",
          domain: "موسيقى وهيب هوب",
          badge: "صوت الواقع",
          image: "assets/images/flenn.jpg",
          desc: "الرابر المبدع فلان صاحب الكلمات الهادفة والموسيقى المعاصرة في لقاءات خاصة مع ArtisteDz."
        },
        {
          name: "سولكينغ",
          latinName: "Soolking",
          category: "international",
          role: "النجم الجزائري العالمي",
          domain: "موسيقى دولية",
          badge: "نجم عالمي",
          image: "assets/images/soolking.jpg",
          desc: "الفنان الذي نقل النكهة الجزائرية إلى العالمية وحصد مليارات الاستماعات عبر العالم."
        },
        {
          name: "azzou hk",
          latinName: "azzou hk",
          category: "rap",
          role: "الفنان والرابور الجزائري",
          domain: "راب وهيب هوب DZ",
          badge: "موهبة راب",
          image: "assets/images/dark_lounge.jpg",
          desc: "حوار خاص وثق مسيرته في الراب ووجهة نظره في مستقبل الموسيقى الحضرية الجزائرية."
        },
        {
          name: "skimi7",
          latinName: "skimi7",
          category: "rap",
          role: "الفنان والرابور المتميز",
          domain: "موسيقى راب",
          badge: "فنان كبير",
          image: "assets/images/studio_mic.jpg",
          desc: "لقاء فني مطول تناول الإنتاج والكلمات والتحديات التي تواجه الفنانين المستقلين."
        },
        {
          name: "خويا تيقا ليزوم",
          latinName: "Tiqa",
          category: "rap",
          role: "أحد أكبر داعمي مسيرة الراب وArtisteDz",
          domain: "دعم ورعاية الهيب هوب",
          badge: "داعم وفي",
          image: "assets/images/concert_lights.jpg",
          desc: "توجّه له حليم زروقي بكل عبارات التقدير والاحترام لوقوفه ودعمه الصادق لمنصة ArtisteDz منذ البدايات."
        },
        {
          name: "nastyshiit",
          latinName: "nastyshiit",
          category: "rap",
          role: "الرابور التونسي",
          domain: "راب تونس",
          badge: "رابور تونسي",
          image: "assets/images/concert_lights.jpg",
          desc: "حوار مميز حول تجربة التراب والراب في تونس وتأثيرها على الساحة المغاربية."
        },
        {
          name: "l'hedi l'artiste",
          latinName: "l'hedi l'artiste",
          category: "rap",
          role: "الرابور التونسي",
          domain: "موسيقى تونسية",
          badge: "موهبة تونس",
          image: "assets/images/studio_mic.jpg",
          desc: "لقاء فني كشف فيه الهادي لارتيست عن جديده وأفكاره الموسيقية المشتركة."
        },
        {
          name: "RAF",
          latinName: "RAF",
          category: "rap",
          role: "الرابور والصديق التونسي",
          domain: "موسيقى وهيب هوب",
          badge: "صديق المنصة",
          image: "assets/images/dark_lounge.jpg",
          desc: "حوار وحضور فني يعكس الصداقة المتينة والتعاون الفني الدائم مع ArtisteDz."
        },
        {
          name: "Mc pissco",
          latinName: "Mc pissco",
          category: "rap",
          role: "الفنان والصديق الرابور",
          domain: "راب وموسيقى",
          badge: "صوت الشارع",
          image: "assets/images/concert_lights.jpg",
          desc: "لقاء فني وثّق أعماله ورسائله الموسيقية مع حليم زروقي."
        },
        {
          name: "Nas-t",
          latinName: "Nas-t",
          category: "rap",
          role: "الفنان العالمي والصديق",
          domain: "موسيقى دولية",
          badge: "فنان عالمي",
          image: "assets/images/studio_mic.jpg",
          desc: "لقاء خاص تناول تجاربه الموسيقية الدولية ومحبته للجمهور الجزائري."
        },
        {
          name: "ماسيطا وطراب كينغ",
          latinName: "Massita & Trap King",
          category: "rap",
          role: "نجوم مشهد الراب والتراب",
          domain: "تراب وراب DZ",
          badge: "موجة جديدة",
          image: "assets/images/dark_lounge.jpg",
          desc: "حوارت حصرية مع ماسيطا وطراب كينغ حول تطور الإيقاعات الحضرية في الجزائر."
        },
        {
          name: "Casawi",
          latinName: "Casawi",
          category: "rap",
          role: "الرابور المغربي الفرنسي",
          domain: "راب فرانكو-مغاربي",
          badge: "مغاربة العالم",
          image: "assets/images/studio_mic.jpg",
          desc: "حواري مع الرابور كازاوي حول اندماج الثقافات وتأثير موسيقى الشارع عبر ضفتي البحر المتوسط."
        },
        {
          name: "جلاب عبد الله وكميا لوزي ومحمد شريف اوديني",
          latinName: "Djellab, Louzi & Ouddini",
          category: "cinema",
          role: "نخبة من فناني الجزائر المبدعين",
          domain: "مسرح، سينما وموسيقى",
          badge: "طاقات وطنية",
          image: "assets/images/cinema_hall.jpg",
          desc: "سلسلة لقاءات حصرية تابعة لـ ArtisteDZ وثقت أعمال ومشاريع هؤلاء الفنانين المتميزين."
        }
      ]
    },

    journal: {
      sectionBadge: "المجلة النقدية لـ ArtisteDz",
      title: "أحدث المقالات والرؤى النقدية",
      subtitle: "بقلم الناقد السينمائي حليم زروقي: تشريح لأبرز الأعمال السينمائية، ظواهر الموسيقى، وأسرار كواليس المهرجانات",
      articles: [
        {
          id: "art-1",
          tag: "مقال نقدي",
          title: "مقالي المبسط عن الفنان التونسي الكبير Akrammag وحصاد مسيرته الاستثنائية",
          excerpt: "قراءة في الخصوصية الفنية للمبدع التونسي أكرم ماغ؛ كيف استطاع صياغة هوية غنائية تجمع بين الإيقاع الإفريقي، البوب المعاصر، والوجدان المغاربي الصادق، مستعيداً حوارنا المطول معه على ArtisteDz.",
          author: "حليم زروقي",
          readTime: "6 دقائق قراءة",
          date: "25 أكتوبر 2026",
          score: "9.7 / 10 تقييم الناقد"
        },
        {
          id: "art-2",
          tag: "توثيق تاريخي",
          title: "الأب الروحي للراب الجزائري Fadavex: عندما كانت الكلمة تزن ذهباً في سنوات الجمر",
          excerpt: "تشريح تاريخي للأثر التأسيسي الذي تركه فادافيكس في موسيقى الشارع بالجزائر، ومقارنة بين حمولة النصوص في التسعينيات والمشهد التجاري الراهن.",
          author: "حليم زروقي",
          readTime: "8 دقائق قراءة",
          date: "20 أكتوبر 2026",
          score: "9.9 / 10 تقييم الناقد"
        },
        {
          id: "art-3",
          tag: "تغطية المهرجانات",
          title: "المهرجان الوطني للمسرح المحترف: رسائل الثقافة بحضور الوزيرة مليكة بن دودة",
          excerpt: "قراءة نقدية في عروض الخشبة الوطنية، وإطلالة على جهود دعم الممثلين والمسرحيين الجزائريين في محفل جمع عمالقة الفن الرابع.",
          author: "حليم زروقي",
          readTime: "5 دقائق قراءة",
          date: "15 أكتوبر 2026",
          score: "9.4 / 10 تقييم الناقد"
        }
      ]
    },

    events: [
      {
        id: "event-cannes",
        title: "مهرجان كان السينمائي الدولي (Festival de Cannes)",
        location: "كان، فرنسا",
        date: "مايو 2026",
        badge: "تغطية السجادة الحمراء",
        desc: "حضور معتمد على السجادة الحمراء، لقاءات حصرية مع نجوم وصناع السينما العالمية وتغطية خاصة للأفلام العربية والمغاربية المشاركة.",
        image: "assets/images/cinema_premiere.jpg"
      },
      {
        id: "event-oran",
        title: "مهرجان وهران الدولي للفيلم العربي",
        location: "وهران، الجزائر",
        date: "أكتوبر 2026",
        badge: "الصحافة الرسمية",
        desc: "تغطية يومية شاملة لفعاليات مهرجان وهران للفيلم العربي، محاورة لجان التحكيم والنجوم المتنافسين على الوهر الذهبي.",
        image: "assets/images/red_carpet_lights.jpg"
      },
      {
        id: "event-annaba",
        title: "مهرجان عنابة للفيلم المتوسطي",
        location: "عنابة، الجزائر",
        date: "أبريل 2026",
        badge: "لقاءات النجوم",
        desc: "متابعة خاصة للأفلام المتوسطية، ورشات العمل السينمائية، وحوارات مطولة مع المخرجين والمنتجين من ضفتي المتوسط.",
        image: "assets/images/dark_lounge.jpg"
      },
      {
        id: "event-theatre",
        title: "المهرجان الوطني للمسرح المحترف",
        location: "المسرح الوطني محي الدين بشطارزي، الجزائر",
        date: "سنوي",
        badge: "حضور رسمي",
        desc: "تغطية ميدانية وافتتاح رسمي بحضور وزيرة الثقافة ورموز المسرح الجزائري، لقاءات الكواليس ومراجعة العروض المنافسة.",
        image: "assets/images/cinema_hall.jpg"
      }
    ],

    booking: {
      sectionBadge: "حجز التغطيات والشراكات الإعلامية",
      title: "احجز تغطيتك الإعلامية مع منصة ArtisteDz",
      subtitle: "سواء كنت منتجاً، فناناً يبحث عن إدارة إعلامية، أو منظماً لمهرجان؛ فريق حليم زروقي جاهز لتقديم تغطية تليق بمكانتكم.",
      form: {
        nameLabel: "الاسم واللقب / الجهة أو الفنان",
        namePlaceholder: "مثال: أمين بن علي - شركة إنتاج سينمائي / اسم الفنان",
        emailLabel: "البريد الإلكتروني المهني",
        emailPlaceholder: "contact@company.com",
        phoneLabel: "رقم الهاتف / واتساب",
        phonePlaceholder: "+213 550 00 00 94",
        serviceLabel: "نوع الخدمة أو التغطية المطلوبة",
        serviceOptions: [
          "حوار حصري رسمي مع حليم زروقي (Exclusive 1-on-1 Interview)",
          "تغطية سجادة حمراء وافتتاح مهرجان سينمائي (Red Carpet & Festival Coverage)",
          "نقد سينمائي وتحليل درامي لعمل فني أو مسرحي (Film & Theatre Review)",
          "إدارة أعمال وعلاقات عامة لفنان أو صانع محتوى (Artist PR & Management)",
          "مقال صحفي وتحقيق في مجلة ArtisteDz الرقمية (Journal Feature)"
        ],
        locationLabel: "مكان وموعد الحدث",
        locationPlaceholder: "مثال: الجزائر العاصمة، وهران، قسنطينة، تونس، بيروت، باريس، كان",
        messageLabel: "تفاصيل المشروع الفني أو التغطية",
        messagePlaceholder: "يرجى تقديم نبذة عن العمل الفني، الموعد المقترح، والأهداف الإعلامية...",
        submitBtn: "إرسال طلب التغطية الفوري",
        submitting: "جارٍ إرسال الطلب...",
        successMsg: "شكراً لتواصلكم! تم استلام طلبكم بنجاح وسيتواصل معكم مكتب الإعلامي حليم زروقي وفريق ArtisteDz خلال 24 ساعة."
      },
      contacts: {
        hqTitle: "المكتب الرئيسي - ArtisteDz",
        hqAddress: "الجزائر العاصمة، الجزائر (Algiers, Algeria)",
        directPhone: "+213 550 94 94 94",
        email: "contact@artistedz.com",
        mediaKitTitle: "الملف الصحفي المعتمد 2026",
        mediaKitDesc: "احصل على كتيّب نسب المشاهدات، باقات الرعاية، وشروط الحوارات الحصرية.",
        downloadBtn: "تحميل الـ Media Kit (PDF)"
      }
    },

    footer: {
      aboutText: "الجريدة الإلكترونية الفنية الرائدة في الجزائر، المتخصصة في كواليس السينما، السجادة الحمراء، وحوارات كبار نجوم الترفيه والموسيقى بإشراف الناقد الفني والمحاور حليم زروقي.",
      mottoText: "كل المقالات والحوارات هي عبارة عن لقاءات حصرية تابعة لـ ArtisteDZ مع الفنانين.",
      quickLinksTitle: "روابط سريعة",
      legalTitle: "الشفافية والحقوق",
      newsletterTitle: "النشرة الإخبارية الحصرية",
      newsletterDesc: "اشترك لتصلك أهم المقالات النقدية ومواعيد بث الحوارات الحصرية قبل الجميع.",
      newsletterPlaceholder: "أدخل بريدك الإلكتروني",
      subscribeBtn: "اشتراك",
      rights: "جميع الحقوق محفوظة © 2026 جريدة ومنصة ArtisteDz. إشراف الإعلامي حليم زروقي (Halim Zerrouki)."
    }
  },

  fr: {
    siteName: "ArtisteDz",
    arabicName: "آرتيست ديزاد",
    siteSubtitle: "Le journal digital de référence du cinéma, des festivals et des célébrités",
    leadJournalist: "Halim Zerrouki",
    leadHandle: "halim.zerrouki",
    facebookUrl: "https://www.facebook.com/ArtisteDz094",
    officialMotto: "Tous les articles et entretiens sont des productions exclusives d'ArtisteDz avec les artistes.",
    
    nav: {
      home: "Accueil",
      about: "Halim Zerrouki",
      coverage: "Nos Réalisations",
      artists: "Nos Collaborations",
      journal: "Journal Critique",
      contact: "Contact & Booking",
      bookCta: "Réserver une Couverture",
      breakingLabel: "FLASH ArtisteDz"
    },

    breakingNews: [
      "EXCLUSIF ArtisteDz: Tous les articles et grands entretiens sont des productions exclusives réalisées par Halim Zerrouki",
      "ÉVÉNEMENT: Rencontre historique avec la légende vivante du Chaâbi Abdelkader Chaou",
      "HOLLYWOOD: Interview exclusive avec le rappeur américain Glasses Malone sur la culture urbaine",
      "LIBAN: L'acteur vedette Said Serhan (Al Hayba) et Bassem Moughnieh se confient à ArtisteDz",
      "PIONNIER: Fada Vex, parrain du rap algérien, et l'immense acteur Hakim Dekkar à l'honneur",
      "TUNISIE: Entretien fraternel et musical avec la star tunisienne internationale Akram Mag"
    ],

    heroSlides: [
      {
        id: "slide-glasses-malone",
        tag: "EXCLUSIF HOLLYWOOD • RAP US",
        tagColor: "ruby",
        title: "Interview exclusive avec la star américaine du rap Glasses Malone : Les secrets de la scène US sur ArtisteDz",
        excerpt: "Dans un entretien inédit pour la presse algérienne, Halim Zerrouki accueille l'artiste californien Glasses Malone pour aborder l'impact de la culture hip-hop et son respect pour le public maghrébin.",
        date: "Exclusivité ArtisteDz",
        duration: "30 min d'interview",
        views: "480K Vues",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "HOLLYWOOD EXCLUSIVE",
        actionText: "Visionner l'Interview",
        videoData: {
          youtubeId: "glasses-malone-interview",
          title: "Glasses Malone reçu par Halim Zerrouki - ArtisteDz",
          guest: "Glasses Malone",
          role: "Rappeur et figure du hip-hop US",
          summary: "Un échange captivant sur les rouages de l'industrie musicale de Los Angeles et le rayonnement universel de la culture de rue."
        }
      },
      {
        id: "slide-chaou",
        tag: "PATRIMOINE • LÉGENDES DU CHAÂBI",
        tagColor: "gold",
        title: "Rencontre d'anthologie avec le grand maître Abdelkader Chaou : La sagesse du mandole algérois",
        excerpt: "Halim Zerrouki recueille les mémoires vivantes de Cheikh Abdelkader Chaou, retraçant un demi-siècle de mélodies inoubliables au cœur de la Casbah et de Bab El Oued.",
        date: "Session Patrimoine",
        duration: "25 min documentaire",
        views: "340K Vues",
        image: "assets/images/abdelkader_chaou.jpg",
        type: "video",
        badge: "CHAABI MASTER",
        actionText: "Regarder la Session",
        videoData: {
          youtubeId: "chaou-exclusive",
          title: "Grand entretien avec Cheikh Abdelkader Chaou - ArtisteDz",
          guest: "Abdelkader Chaou",
          role: "Maître incontesté du Chaâbi algérien",
          summary: "Un voyage émouvant dans l'histoire de la musique populaire algéroise et ses liens éternels avec le peuple."
        }
      },
      {
        id: "slide-said-serhan",
        tag: "CINÉMA & DRAME • STARS ARABES",
        tagColor: "blue",
        title: "Rencontre avec la star libanaise Said Serhan : De la saga « Al Hayba » au cinéma d'auteur",
        excerpt: "Le talentueux acteur libanais Said Serhan se livre à Halim Zerrouki sur l'intensité dramatique de ses rôles, le renouveau de la fiction arabe et son attachement à l'Algérie.",
        date: "Interview Exclusive",
        duration: "28 min d'entretien",
        views: "295K Vues",
        image: "assets/images/cinema_hall.jpg",
        type: "video",
        badge: "LEBANESE CINEMA",
        actionText: "Voir l'Entretien",
        videoData: {
          youtubeId: "said-serhan-exclusive",
          title: "Said Serhan en tête-à-tête avec Halim Zerrouki - ArtisteDz",
          guest: "Said Serhan",
          role: "Comédien star de séries et de cinéma",
          summary: "Les confidences de Said Serhan sur l'incarnation de personnages complexes et la passerelle culturelle Liban-Algérie."
        }
      },
      {
        id: "slide-akram-mag",
        tag: "MUSIQUE & FRATERNITÉ • TUNISIE",
        tagColor: "gold",
        title: "Grand entretien et chronique dédiée à la star tunisienne Akram Mag (أكرم ماغ)",
        excerpt: "Témoignage d'une collaboration durable avec le chanteur tunisien Akram Mag, évoquant ses tournées triomphales et sa complicité renouvelée avec le média ArtisteDz.",
        date: "Exclusivité ArtisteDz",
        duration: "22 min d'interview",
        views: "410K Vues",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "TUNISIAN ICON",
        actionText: "Lire & Visionner",
        videoData: {
          youtubeId: "akram-mag-interview",
          title: "Akram Mag en exclusivité sur ArtisteDz avec Halim Zerrouki",
          guest: "Akram Mag",
          role: "Chanteur et star tunisienne",
          summary: "Une interview rythmée explorant les projets du chanteur et son hommage continu au public algérien."
        }
      },
      {
        id: "slide-fadavex",
        tag: "HIP-HOP • HISTOIRE VIVANTE",
        tagColor: "purple",
        title: "Fada Vex : Le père spirituel du rap algérien ouvre le grand livre des souvenirs",
        excerpt: "Une plongée documentaire historique sur les pionniers des années 1990 qui ont forgé la conscience musicale et poétique de tout un peuple.",
        date: "Dossier Historique",
        duration: "35 min documentaire",
        views: "520K Vues",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "GODFATHER OF RAP",
        actionText: "Voir le Documentaire",
        videoData: {
          youtubeId: "fada-vex-godfather",
          title: "Fada Vex, parrain du rap DZ : L'entretien d'une vie par Halim Zerrouki",
          guest: "Fada Vex",
          role: "Pionnier fondateur du Rap DZ",
          summary: "La genèse du mouvement hip-hop en Algérie racontée par celui qui a ouvert la voie à toute une génération."
        }
      }
    ],

    about: {
      sectionBadge: "Profil Professionnel & Médias",
      title: "Qui est Halim Zerrouki ?",
      subtitle: "Journaliste cinéma, critique officiel & manager d'artistes | Fondateur d'ArtisteDz",
      leadParagraph: "Journaliste culturel et critique de cinéma chevronné, <strong>Halim Zerrouki</strong> s'est imposé comme une figure médiatique incontournable en Algérie et dans le monde arabe. Fondateur de la prestigieuse plateforme <strong>« ArtisteDz » (@ArtisteDz094)</strong>, il a orchestré des centaines d'entretiens exclusifs immortalisant l'actualité des grands écrans, des planches et des scènes musicales.",
      bodyParagraph: "De la scène du Théâtre National Professionnel à Alger (aux côtés de l'ancienne Ministre de la Culture Mme Malika Bendouda) jusqu'aux marches des festivals internationaux de Cannes, El Gouna et Carthage, Halim Zerrouki est salué pour son éthique et la profondeur de ses interviews. Il est l'interlocuteur privilégié des célébrités d'Algérie, de Tunisie, du Liban, d'Égypte, de France et des États-Unis.",
      officialQuoteBadge: "Devise Officielle de la Rédaction",
      officialStatement: "« Tous les articles et grands entretiens sont des productions exclusives d'ArtisteDz avec les artistes. »",
      accreditations: [
        "Journaliste accrédité aux grands festivals internationaux (Cannes, JCC, El Gouna)",
        "Critique et analyste cinéma reconnu par les institutions culturelles",
        "Manager d'artistes & conseiller en relations presse pour personnalités publiques",
        "Fondateur & Rédacteur en chef du média digital « Artiste Dz » (@ArtisteDz094)"
      ],
      kpis: [
        { value: "12+", label: "Années d'expérience", sub: "En journalisme culturel & critique" },
        { value: "200+", label: "Interviews exclusives", sub: "Algérie, Monde Arabe & International" },
        { value: "60+", label: "Tapis rouges couverts", sub: "Festivals et avant-premières VIP" },
        { value: "8M+", label: "Impressions digitales", sub: "Sur nos réseaux et plateformes" }
      ],
      quote: "« Le journalisme culturel ne consiste pas seulement à filmer des paillettes, mais à interroger la vérité humaine qui se cache dans le regard des artistes. »",
      quoteAuthor: "Halim Zerrouki",
      buttons: {
        interview: "Solliciter une Interview",
        presskit: "Télécharger le Dossier de Presse",
        facebook: "Profil Officiel Facebook"
      }
    },

    categories: {
      all: "Toutes nos Réalisations",
      cinema: "Cinéma & Séries",
      heritage: "Chaâbi & Patrimoine",
      rap: "Rap & Musique Urbaine",
      international: "Célébrités Internationales",
      theatre: "Théâtre & Festivals"
    },

    collaborations: {
      sectionBadge: "Nos Collaborations & Artistes",
      title: "Les personnalités marquantes interviewées sur ArtisteDz",
      subtitle: "Un catalogue prestigieux de rencontres exclusives menées par Halim Zerrouki avec des icônes d'Algérie, de Tunisie, du Liban, d'Égypte, de France et des USA",
      filterCategories: [
        { id: "all", label: "Tous les Artistes" },
        { id: "cinema", label: "Cinéma & Télévision" },
        { id: "heritage", label: "Chaâbi & Tradition" },
        { id: "rap", label: "Rap & Musique Urbaine" },
        { id: "international", label: "Stars Internationales" }
      ],
      artists: [] // Populated dynamically or mapped
    },

    journal: {
      sectionBadge: "Journal Critique & Réflexions",
      title: "Analyses & Éditoriaux de la Semaine",
      subtitle: "La plume de Halim Zerrouki au service d'une critique cinématographique et musicale exigeante",
      articles: [
        {
          id: "art-1",
          tag: "CHRONIQUE MUSIQUE",
          title: "Akram Mag : La maturité scénique d'une icône tunisienne au rayonnement maghrébin",
          excerpt: "Retour critique sur le parcours singulier d'Akram Mag et les souvenirs de notre grand entretien exclusif sur ArtisteDz.",
          author: "Halim Zerrouki",
          readTime: "6 min de lecture",
          date: "25 Octobre 2026",
          score: "9.7 / 10 Choix de la Rédaction"
        },
        {
          id: "art-2",
          tag: "HISTOIRE DU RAP",
          title: "Fadavex : Quand le verbe brut écrivait les premières lettres de noblesse du rap algérien",
          excerpt: "Pourquoi le rap des années 90 demeure une boussole esthétique et morale pour la jeunesse contemporaine.",
          author: "Halim Zerrouki",
          readTime: "8 min de lecture",
          date: "20 Octobre 2026",
          score: "9.9 / 10 Choix de la Rédaction"
        },
        {
          id: "art-3",
          tag: "FESTIVAL DU THÉÂTRE",
          title: "Ouverture du Festival National du Théâtre Professionnel en présence de la Ministre Malika Bendouda",
          excerpt: "Les échos d'une soirée inaugurale magistrale célébrant la créativité du 4ème art algérien.",
          author: "Halim Zerrouki",
          readTime: "5 min de lecture",
          date: "15 Octobre 2026",
          score: "9.4 / 10 Choix de la Rédaction"
        }
      ]
    },

    booking: {
      sectionBadge: "Services & Relations Presse",
      title: "Réservez votre Couverture avec ArtisteDz",
      subtitle: "Production cinématographique, sortie d'album, management d'artiste ou festival : sollicitez l'équipe de Halim Zerrouki.",
      form: {
        nameLabel: "Nom, Prénom & Société ou Artiste",
        namePlaceholder: "Ex: Amine Benali - Société de production",
        emailLabel: "Adresse Email Professionnelle",
        emailPlaceholder: "contact@entreprise.com",
        phoneLabel: "Numéro de Téléphone / WhatsApp",
        phonePlaceholder: "+213 550 00 00 94",
        serviceLabel: "Type de Prestation Souhaitée",
        serviceOptions: [
          "Interview Exclusive en tête-à-tête avec Halim Zerrouki",
          "Couverture Tapis Rouge & Événementiel (Red Carpet)",
          "Critique de Film & Chronique Cinématographique",
          "Management d'Artiste & Conseil en Relations Presse",
          "Dossier Spécial dans le Journal Digital ArtisteDz"
        ],
        locationLabel: "Lieu & Date Prévisionnelle",
        locationPlaceholder: "Ex: Alger, Oran, Tunis, Beyrouth, Paris, Cannes",
        messageLabel: "Détails de votre Projet",
        messagePlaceholder: "Présentez brièvement l'œuvre, le calendrier et les objectifs de visibilité...",
        submitBtn: "Transmettre la Demande de Couverture",
        submitting: "Envoi en cours...",
        successMsg: "Merci pour votre confiance ! Votre demande a été transmise au bureau de Halim Zerrouki. Réponse sous 24h."
      },
      contacts: {
        hqTitle: "Bureau de Rédaction - ArtisteDz",
        hqAddress: "Alger Centre, Alger, Algérie",
        directPhone: "+213 550 94 94 94",
        email: "contact@artistedz.com",
        mediaKitTitle: "Kit Média & Tarifs 2026",
        mediaKitDesc: "Téléchargez les données d'audience certifiées, les formats vidéo et les grilles tarifaires.",
        downloadBtn: "Télécharger le Media Kit (PDF)"
      }
    },

    footer: {
      aboutText: "Le premier média digital indépendant dédié aux coulisses du cinéma, aux stars de l'audiovisuel et aux grands entretiens de l'industrie du spectacle, sous la direction de Halim Zerrouki.",
      mottoText: "Tous les articles et entretiens sont des productions exclusives d'ArtisteDz avec les artistes.",
      quickLinksTitle: "Navigation",
      legalTitle: "Transparence & Mentions",
      newsletterTitle: "Newsletter VIP",
      newsletterDesc: "Recevez en avant-première les critiques de films et les liens d'accès aux grands entretiens.",
      newsletterPlaceholder: "Votre adresse email",
      subscribeBtn: "S'inscrire",
      rights: "Tous droits réservés © 2026 Journal ArtisteDz. Dirigé par le journaliste Halim Zerrouki."
    }
  },

  en: {
    siteName: "ArtisteDz",
    arabicName: "آرتيست ديزاد",
    siteSubtitle: "The premier digital media hub for cinema, red carpets, and celebrity interviews",
    leadJournalist: "Halim Zerrouki",
    leadHandle: "halim.zerrouki",
    facebookUrl: "https://www.facebook.com/ArtisteDz094",
    officialMotto: "All articles and interviews are exclusive productions conducted by ArtisteDz with the artists.",
    
    nav: {
      home: "Home",
      about: "Halim Zerrouki",
      coverage: "Our Work",
      artists: "Collaborations & VIPs",
      journal: "Digital Journal",
      contact: "Media Booking",
      bookCta: "Book Press Coverage",
      breakingLabel: "BREAKING ArtisteDz"
    },

    breakingNews: [
      "EXCLUSIVE ArtisteDz: All articles and celebrity interviews are authentic exclusive productions conducted by Halim Zerrouki",
      "HERITAGE MILESTONE: In-depth acoustic dialogue with legendary Chaabi master Abdelkader Chaou",
      "HOLLYWOOD SPOTLIGHT: Global exclusive interview with US rap icon Glasses Malone on hip-hop culture",
      "LEBANESE DRAMA: Stars Said Serhan (Al Hayba) and Bassem Moughnieh open up to ArtisteDz",
      "RAP PIONEER: Godfather of Algerian Rap Fada Vex and legendary actor Hakim Dekkar celebrated",
      "TUNISIA: Longtime friendship and exclusive feature with international Tunisian singer Akram Mag"
    ],

    heroSlides: [
      {
        id: "slide-glasses-malone",
        tag: "HOLLYWOOD EXCLUSIVE • US HIP-HOP",
        tagColor: "ruby",
        title: "Exclusive Interview with US Rap Icon Glasses Malone: The West Coast Sound and Global Beats on ArtisteDz",
        excerpt: "In a landmark broadcast for North African entertainment journalism, Halim Zerrouki sits down with Hollywood hip-hop star Glasses Malone to discuss music, authenticity, and respect for Algerian listeners.",
        date: "ArtisteDz Exclusive",
        duration: "30 min interview",
        views: "480K Views",
        image: "assets/images/studio_mic.jpg",
        type: "video",
        badge: "HOLLYWOOD EXCLUSIVE",
        actionText: "Watch Exclusive Interview",
        videoData: {
          youtubeId: "glasses-malone-interview",
          title: "Glasses Malone interviewed by Halim Zerrouki - ArtisteDz",
          guest: "Glasses Malone (USA)",
          role: "Hip Hop Icon & West Coast Legend",
          summary: "A candid conversation exploring Los Angeles music culture and the universal message of street poetry."
        }
      },
      {
        id: "slide-chaou",
        tag: "CULTURAL TRIBUTE • MUSIC LEGENDS",
        tagColor: "gold",
        title: "Historic Encounter with Master Abdelkader Chaou: The Soul of the Algiers Mandole",
        excerpt: "Halim Zerrouki captures an intimate retrospective with Cheikh Abdelkader Chaou, journeying across half a century of Algerian Chaabi heritage.",
        date: "Heritage Feature",
        duration: "25 min documentary",
        views: "340K Views",
        image: "assets/images/abdelkader_chaou.jpg",
        type: "video",
        badge: "CHAABI MASTER",
        actionText: "Watch Heritage Session",
        videoData: {
          youtubeId: "chaou-exclusive",
          title: "Master Abdelkader Chaou in conversation with Halim Zerrouki",
          guest: "Abdelkader Chaou",
          role: "Pillar of Algerian Chaabi Music",
          summary: "An emotional dialogue documenting traditional Algiers folklore and Chaou's lasting bond with his audiences."
        }
      },
      {
        id: "slide-said-serhan",
        tag: "CINEMA & DRAMA • ARAB STARS",
        tagColor: "blue",
        title: "Said Serhan in Conversation: From the 'Al Hayba' Phenomenon to Arab Cinema",
        excerpt: "Acclaimed Lebanese actor Said Serhan sits down with Halim Zerrouki to discuss method acting, regional television triumphs, and his deep connection to Algerian culture.",
        date: "Exclusive Interview",
        duration: "28 min interview",
        views: "295K Views",
        image: "assets/images/cinema_hall.jpg",
        type: "video",
        badge: "LEBANESE CINEMA",
        actionText: "Watch the Interview",
        videoData: {
          youtubeId: "said-serhan-exclusive",
          title: "Said Serhan Exclusive Conversation - ArtisteDz",
          guest: "Said Serhan",
          role: "Film & Television Actor",
          summary: "Exploring character complexity and cross-border Arab cinematic collaborations."
        }
      },
      {
        id: "slide-akram-mag",
        tag: "MUSIC & BROTHERHOOD • TUNISIA",
        tagColor: "gold",
        title: "Extended Feature & Critical Essay on Tunisian Superstar Akram Mag",
        excerpt: "Documenting a long-standing creative bond with Tunisian music icon Akram Mag, discussing stadium tours, chart-topping singles, and his dedication to ArtisteDz.",
        date: "ArtisteDz Exclusive",
        duration: "22 min interview",
        views: "410K Views",
        image: "assets/images/concert_lights.jpg",
        type: "video",
        badge: "TUNISIAN ICON",
        actionText: "Read & Watch",
        videoData: {
          youtubeId: "akram-mag-interview",
          title: "Akram Mag exclusive interview with Halim Zerrouki",
          guest: "Akram Mag",
          role: "Tunisian Pop & Urban Icon",
          summary: "An exclusive look into Akram Mag's musical evolution and artistic brotherhood with Algeria."
        }
      },
      {
        id: "slide-fadavex",
        tag: "HIP-HOP • LIVING HISTORY",
        tagColor: "purple",
        title: "Fada Vex: The Godfather of Algerian Rap Recalls 30 Years of Street Poetry",
        excerpt: "A documentary retrospective tracing the birth of Algerian hip-hop in the 1990s and how Fada Vex paved the way for modern global streaming hits.",
        date: "Historic Feature",
        duration: "35 min documentary",
        views: "520K Views",
        image: "assets/images/dark_lounge.jpg",
        type: "video",
        badge: "GODFATHER OF RAP",
        actionText: "Watch Documentary",
        videoData: {
          youtubeId: "fada-vex-godfather",
          title: "The Godfather of Rap DZ Fada Vex interviewed by Halim Zerrouki",
          guest: "Fada Vex",
          role: "Founding Father of Rap DZ",
          summary: "The definitive chronicle of Algerian hip-hop from early underground cassette tapes to the digital era."
        }
      }
    ],

    about: {
      sectionBadge: "Professional Media Profile",
      title: "Who is Halim Zerrouki?",
      subtitle: "Film Journalist, Accredited Critic & Celebrity Talent Manager | ArtisteDz Founder",
      leadParagraph: "Acclaimed film journalist and cultural commentator <strong>Halim Zerrouki</strong> is the founder and editor-in-chief of <strong>« ArtisteDz » (@ArtisteDz094)</strong>, North Africa's leading entertainment journal. For over a decade, Zerrouki has conducted hundreds of hard-hitting, exclusive one-on-one celebrity interviews across film, theatre, Chaabi, and urban music.",
      bodyParagraph: "From the stages of the Algerian National Professional Theatre (attended alongside former Minister of Culture Dr. Malika Bendouda) to the red carpets of Cannes, El Gouna, and Carthage, Halim Zerrouki is trusted by stars across Algeria, Tunisia, Lebanon, Egypt, France, and the United States for his integrity and incisive questioning style.",
      officialQuoteBadge: "Official Editorial Motto",
      officialStatement: "“All articles and celebrity interviews are exclusive productions conducted by ArtisteDz with the artists.”",
      accreditations: [
        "Officially accredited press journalist at international festivals (Cannes, JCC, Gouna)",
        "Respected television and digital film critic recognized across the Maghreb",
        "Celebrity talent manager and public relations strategist for leading artists",
        "Founder & Editor-in-Chief of premier digital media hub « Artiste Dz » (@ArtisteDz094)"
      ],
      kpis: [
        { value: "12+", label: "Years in Media", sub: "Cultural journalism & criticism" },
        { value: "200+", label: "Celebrity Interviews", sub: "Top Arab, Algerian & Global icons" },
        { value: "60+", label: "Red Carpets Covered", sub: "Major festivals worldwide" },
        { value: "8M+", label: "Digital Reach", sub: "Monthly impressions across channels" }
      ],
      quote: "“Cultural journalism isn't about chasing paparazzi flashes; it's a sacred responsibility to document human truth in the eyes of genuine artists.”",
      quoteAuthor: "Halim Zerrouki",
      buttons: {
        interview: "Request an Interview",
        presskit: "Download Official Press Kit",
        facebook: "Official Facebook Profile"
      }
    },

    categories: {
      all: "All Coverage",
      cinema: "Cinema & Drama",
      heritage: "Chaabi & Heritage",
      rap: "Rap & Urban Music",
      international: "International & Arab VIPs",
      theatre: "Theatre & Festivals"
    },

    collaborations: {
      sectionBadge: "VIP Network & Talent Roster",
      title: "Artists & Cultural Icons Interviewed on ArtisteDz",
      subtitle: "Exclusive interviews, red-carpet coverage, and trusted artistic relationships curated by Halim Zerrouki",
      filterCategories: [
        { id: "all", label: "All Artists" },
        { id: "cinema", label: "Cinema & Drama" },
        { id: "heritage", label: "Chaabi & Heritage" },
        { id: "rap", label: "Rap & Hip-Hop" },
        { id: "international", label: "International Stars" }
      ],
      artists: []
    },

    journal: {
      sectionBadge: "Critical Journal & Editorial",
      title: "Latest Essays & Film Criticism",
      subtitle: "Uncompromising film reviews and cultural essays authored by Halim Zerrouki",
      articles: [
        {
          id: "art-1",
          tag: "MUSIC ESSAY",
          title: "Akram Mag: The Artistic Mastery of a Pan-Maghrebi Superstar",
          excerpt: "A retrospective analysis of Akram Mag's enduring cultural footprint and the milestones of our extensive exclusive dialogues on ArtisteDz.",
          author: "Halim Zerrouki",
          readTime: "6 min read",
          date: "Oct 25, 2026",
          score: "9.7 / 10 Critic's Choice"
        },
        {
          id: "art-2",
          tag: "RAP HISTORY",
          title: "Fada Vex: How Algerian Rap Laid Its Foundation Stones",
          excerpt: "Why the social realism and raw rhymes of 1990s pioneers continue to anchor the modern streaming generation.",
          author: "Halim Zerrouki",
          readTime: "8 min read",
          date: "Oct 20, 2026",
          score: "9.9 / 10 Critic's Choice"
        },
        {
          id: "art-3",
          tag: "THEATRE FESTIVAL",
          title: "Opening the National Professional Theatre Festival with Minister Malika Bendouda",
          excerpt: "Celebrating stage craftsmanship, actor protection, and the rebirth of Algerian live theatre.",
          author: "Halim Zerrouki",
          readTime: "5 min read",
          date: "Oct 15, 2026",
          score: "9.4 / 10 Critic's Choice"
        }
      ]
    },

    booking: {
      sectionBadge: "Media Services & Inquiries",
      title: "Book Press Coverage with ArtisteDz",
      subtitle: "Film producers, festival organizers, and artists: leverage Halim Zerrouki's team for high-impact media exposure.",
      form: {
        nameLabel: "Full Name & Organization / Artist Name",
        namePlaceholder: "E.g. Amine Benali - Film Production Co. / Artist Name",
        emailLabel: "Professional Email Address",
        emailPlaceholder: "contact@company.com",
        phoneLabel: "Phone / WhatsApp Number",
        phonePlaceholder: "+213 550 00 00 94",
        serviceLabel: "Requested Media Service",
        serviceOptions: [
          "1-on-1 In-Depth Celebrity Interview with Halim Zerrouki",
          "Red Carpet & Festival Coverage (Live Press)",
          "Official Film & Theatre Review & Critical Analysis",
          "Artist PR Consulting & Talent Management",
          "Digital Journal Feature & Brand Sponsorship"
        ],
        locationLabel: "Event Location & Planned Date",
        locationPlaceholder: "E.g. Algiers, Oran, Tunis, Beirut, Paris, Cannes",
        messageLabel: "Project Brief & Objectives",
        messagePlaceholder: "Please share details about your artistic project, timeline, and goals...",
        submitBtn: "Submit Media Inquiry",
        submitting: "Submitting inquiry...",
        successMsg: "Thank you! Your inquiry was successfully received. Halim Zerrouki's press desk will respond within 24 hours."
      },
      contacts: {
        hqTitle: "Press Bureau - ArtisteDz",
        hqAddress: "Algiers Downtown, Algiers, Algeria",
        directPhone: "+213 550 94 94 94",
        email: "contact@artistedz.com",
        mediaKitTitle: "Official 2026 Media Kit",
        mediaKitDesc: "Download verified readership figures, video production packages, and sponsorship terms.",
        downloadBtn: "Download Media Kit (PDF)"
      }
    },

    footer: {
      aboutText: "Algeria's premier independent entertainment platform dedicated to cinema reviews, red carpet access, and exclusive celebrity interviews, steered by journalist and film critic Halim Zerrouki.",
      mottoText: "All articles and interviews are exclusive productions conducted by ArtisteDz with the artists.",
      quickLinksTitle: "Quick Links",
      legalTitle: "Legal & Ethics",
      newsletterTitle: "Exclusive Newsletter",
      newsletterDesc: "Subscribe to receive critical essays, festival updates, and exclusive interview releases first.",
      newsletterPlaceholder: "Enter your email address",
      subscribeBtn: "Subscribe",
      rights: "All Rights Reserved © 2026 ArtisteDz Journal. Led by journalist Halim Zerrouki."
    }
  }
};

// Mirror the artist roster for French and English with appropriate localization
ArtisteDzData.fr.collaborations.artists = ArtisteDzData.ar.collaborations.artists.map(a => ({
  ...a,
  name: a.latinName || a.name
}));
ArtisteDzData.fr.coverageItems = ArtisteDzData.ar.coverageItems;

ArtisteDzData.en.collaborations.artists = ArtisteDzData.ar.collaborations.artists.map(a => ({
  ...a,
  name: a.latinName || a.name
}));
ArtisteDzData.en.coverageItems = ArtisteDzData.ar.coverageItems;

// Mirror blogFeed and events for FR and EN
ArtisteDzData.fr.blogFeed = ArtisteDzData.ar.blogFeed.map(b => ({
  ...b,
  tag: b.tag.replace('السينما', 'Cinéma').replace('أسطورة الشعبي', 'Chaâbi Master').replace('انفراد دولي', 'Exclusivité US').replace('مسرح', 'Théâtre'),
  author: 'Halim Zerrouki',
  readTime: b.readTime.replace('دقائق قراءة', 'min de lecture').replace('دقيقة قراءة', 'min de lecture'),
  comments: b.comments.replace('تعليق', 'commentaires').replace('تعليقات', 'commentaires')
}));
ArtisteDzData.fr.events = ArtisteDzData.ar.events;

ArtisteDzData.en.blogFeed = ArtisteDzData.ar.blogFeed.map(b => ({
  ...b,
  tag: b.tag.replace('السينما', 'Cinema').replace('أسطورة الشعبي', 'Chaabi Master').replace('انفراد دولي', 'Exclusive US').replace('مسرح', 'Theatre'),
  author: 'Halim Zerrouki',
  readTime: b.readTime.replace('دقائق قراءة', 'min read').replace('دقيقة قراءة', 'min read'),
  comments: b.comments.replace('تعليق', 'comments').replace('تعليقات', 'comments')
}));
ArtisteDzData.en.events = ArtisteDzData.ar.events;

