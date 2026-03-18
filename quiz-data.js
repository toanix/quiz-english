// ĐỀ CƯƠNG KIỂM TRA GIỮA KÌ 2 - TIẾNG ANH 10

const PASSAGES = {
  genderDiscrimination: `<p><strong>Read the following passage about tackling Gender Discrimination in the Workplace:</strong></p>
<p>Gender discrimination at work remains a significant issue in many organizations worldwide. It is believed that <strong>(18) _________</strong> compared to their male counterparts. This inequality is <strong>(19) _______</strong>. Employees who experience discrimination may feel undervalued or overlooked, which can have a negative impact on their motivation and job satisfaction.</p>

<p>Many companies have implemented policies <strong>(20) _______</strong>, yet the progress has been slow. Over the years, I have witnessed how certain women <strong>(21) ________</strong> are still passed over for promotions. This situation often results in frustration, as it undermines their ability to achieve their professional goals.</p>

<p>To combat this issue, it is essential that <strong>(22) _________</strong>. In order to ensure fairness, training and awareness programs should be introduced to help employees understand the importance of gender equality. If we continue to ignore these problems, workplace culture will remain unequal, limiting the potential of many talented individuals.</p>`,

  vietnamDiplomacy: `<p><strong>Read the following passage about Vietnam's Diplomatic Transformation:</strong></p>
<p>Vietnam's remarkable transformation from a war-torn nation to a significant diplomatic player in Asia has captured global attention. Had the country not embraced comprehensive reforms in 1986, it would not have achieved such impressive economic growth and diplomatic influence. The nation's strategic position in Southeast Asia, <strong>(18)_________</strong>, has attracted major powers seeking to expand their influence.</p>

<p>Vietnam's diplomatic success lies in its balanced approach: maintaining strong economic ties with China while fostering deeper security cooperation with the United States. The country's foreign policy <strong>(19)_________</strong>; instead, it actively engages with multiple international partners. Vietnam, understanding the importance of regional stability and desiring to strengthen its international position, <strong>(20)_________</strong>.</p>

<p>In recent years, <strong>(21)_________</strong>, capitalizing on its young workforce and strategic location. <strong>(22)_________</strong>. The country's growing startup ecosystem and space technology initiatives are now establishing Vietnam as an emerging tech innovator in Asia.</p>`,

  neuroplasticity: `<p><strong>Read the following passage about Brain Plasticity and Learning:</strong></p>
<p>Not until the late 20th century <strong>(18)_________</strong>. Neural networks, which form the foundation of our learning abilities, can be strengthened through consistent practice and exposure to new experiences. The brain actively rewires itself during learning processes; moreover, it creates new neural pathways to accommodate complex information.</p>

<p>Neuroscientists have discovered revolutionary learning techniques, and they continue to explore the boundaries of human cognitive potential. Understanding the principles of neuroplasticity and <strong>(19)_________</strong>.</p>

<p>People <strong>(20)_________</strong> that lead to stronger abilities that enhance problem-solving and creative thinking. <strong>(21)_________</strong>. From stroke recovery to skill acquisition in adulthood, the brain's adaptability offers hope for continuous growth and improvement throughout life.</p>

<p><strong>(22)_________</strong>. These groundbreaking discoveries continue to inspire researchers and educators worldwide, fostering innovative approaches to learning and cognitive development.</p>`,

  unicef: `<p><strong>UNICEF in Viet Nam - Creating Opportunities for Children</strong></p>
<p>UNICEF works to ensure that all children in Viet Nam have access to quality education and opportunities to succeed. The organization's programmes focus on creating opportunities for children to attend school, learn, and succeed, regardless of their background or circumstances.</p>

<p>For disadvantaged teenagers, UNICEF offers job training and career advice to help them build better futures. The programmes for children with disabilities aim to ensure they can access and benefit from quality education, removing barriers that might prevent their participation.</p>

<p>The "Improving Learning Achievements" programme focuses on helping children succeed in their studies and prepare for the future. This initiative aims to better prepare children for future challenges by improving their skills and knowledge through innovative teaching methods and curriculum development.</p>

<p>UNICEF also helps Viet Nam join regional educational programmes, fostering cooperation and knowledge exchange with other countries in the region.</p>`,

  genderInequality: `<p><strong>Gender Inequality and Its Impact on Women</strong></p>
<p>Gender inequality remains one of the most pressing challenges facing women worldwide. From education to employment, women encounter numerous obstacles that limit their opportunities and potential.</p>

<p>One of the most harmful manifestations of gender inequality is child marriage. According to research, child marriage can seriously harm young girls' health because they're not physically mature enough to give birth. This practice not only endangers their health but also cuts short their education and limits their future prospects.</p>

<p>Girls receiving an education are far more likely to escape poverty and build better lives. They can make informed decisions about their health, families, and careers. However, in many communities, parents support child marriage because they see it as a way to protect their daughters from violence or economic hardship.</p>

<p>Breaking this cycle requires comprehensive efforts to promote girls' education, change cultural attitudes, and provide economic opportunities for families.</p>`,

  modernSchools: `<p><strong>Modern Schools and Educational Approaches</strong></p>
<p>Modern schools have evolved significantly from traditional educational institutions. The main goal of modern schools is to prepare students for lifelong learning and success in an ever-changing world, not just to pass exams.</p>

<p>In these schools, teachers play a different role - they guide and support students in their learning rather than simply delivering lectures. The concept of lifelong learning, meaning continuous learning throughout one's life, is at the heart of modern education philosophy.</p>

<p>Group learning serves an important purpose in modern schools: to encourage collaboration and teamwork on projects. Modern schools also make extensive use of digital learning resources, which refers to computer-based materials used in lessons.</p>

<p>One benefit of field trips for students is that they offer hands-on, real-world experiences. School camps emphasize making friends and developing life skills through outdoor activities and group challenges.</p>`
};

const QUIZ_DATA = {
  modes: [
    {
      id: 'reading1-p1',
      name: 'P1: Gender Discrimination',
      questions: [
        {
          type: 'tracNghiem',
          passage: 'genderDiscrimination',
          question: 'Câu 18: It is believed that (18) _________ compared to their male counterparts.',
          options: [
            'women often face higher barriers to career advancement',
            'women often stop more higher barriers to career advancement',
            'women often prevent higher barriers to the career advancement',
            'women often confirm higher barriers to the advancement career'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'genderDiscrimination',
          question: 'Câu 19: This inequality is (19) _______.',
          options: [
            'both reflected in pay gaps and in access to leadership roles or career development opportunities',
            'neither reflected in pay gaps nor in access to leadership roles and career development opportunities',
            'either reflected in pay gaps or in access to leadership roles and career opportunities development',
            'not only reflected in pay gaps but also in access to leadership roles and career development opportunities'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'genderDiscrimination',
          question: 'Câu 20: Many companies have implemented policies (20) _______, yet the progress has been slow.',
          options: [
            'to prevent gender bias and promoted equality',
            'to preventing gender bias and promote equality',
            'to prevent gender bias and promote equality',
            'to prevent gender bias and promoting equality'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'genderDiscrimination',
          question: 'Câu 21: Over the years, I have witnessed how certain women (21) ________ are still passed over for promotions.',
          options: [
            'whom possess the same qualifications with men',
            'who possess the same qualifications as men',
            'which possess the same qualifications like men',
            'whose possess the same qualifications as men'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'genderDiscrimination',
          question: 'Câu 22: To combat this issue, it is essential that (22) _________.',
          options: [
            'organizations have created an inclusive environment where everyone has an equal chances to succeed',
            'organizations are being created the inclusive environment where everyone has an equal chance to be succeeded',
            'organizations created an inclusive environment which everyone had an equally chance to succeed',
            'organizations create an inclusive environment where everyone has an equal chance to succeed'
          ],
          correct: 3
        }
      ]
    },
    {
      id: 'reading1-p2',
      name: 'P2: Vietnam Diplomacy',
      questions: [
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacy',
          question: 'Câu 18: The nation\'s strategic position in Southeast Asia, (18)_________, has attracted major powers.',
          options: [
            'of whom has become increasingly important in regional geopolitics',
            'which has become increasingly important in regional geopolitics',
            'had became increasingly important in regional geopolitics',
            'was becoming increasingly important in regional geopolitics'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacy',
          question: 'Câu 19: The country\'s foreign policy (19)_________.',
          options: [
            'has been carefully crafted to avoid dependence on any single power',
            'that has been carefully crafted to avoid dependence on any single power',
            'which being carefully crafted to avoid dependence on any single power',
            'having carefully crafted to avoid dependence on any single power'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacy',
          question: 'Câu 20: Vietnam... (20)_________.',
          options: [
            'participating actively in ASEAN\'s collective decision-making processes',
            'which actively participates in ASEAN\'s collective decision-making processes',
            'has actively participated in ASEAN\'s collective decision-making processes',
            'having actively participate in ASEAN\'s collective decision-making processes'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacy',
          question: 'Câu 21: In recent years, (21)_________.',
          options: [
            'Vietnam has emerged as a declined destination for international investment and manufacturing',
            'Vietnam has emerged as a restricted destination for international investment and manufacturing',
            'Vietnam has emerged as a preferred destination for international investment and manufacturing',
            'Vietnam has emerged as an avoided destination for international investment and manufacturing'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacy',
          question: 'Câu 22: (22)_________.',
          options: [
            'Vietnam\'s unsuccessful management of global challenges during the COVID-19 pandemic has showcased its governance capabilities',
            'Vietnam\'s secretive management of global challenges during the COVID-19 pandemic has showcased its governance capabilities',
            'Vietnam\'s hesitant management of global challenges during the COVID-19 pandemic has showcased its governance capabilities',
            'Vietnam\'s successful management of global challenges during the COVID-19 pandemic has showcased its governance capabilities'
          ],
          correct: 3
        }
      ]
    },
    {
      id: 'reading1-p3',
      name: 'P3: Neuroplasticity',
      questions: [
        {
          type: 'tracNghiem',
          passage: 'neuroplasticity',
          question: 'Câu 18: Not until the late 20th century (18)_________.',
          options: [
            'which scientists fully grasp the brain\'s remarkable capacity for change and adaptation',
            'whom scientists fully grasp the brain\'s remarkable capacity for change and adaptation',
            'did scientists fully grasp the brain\'s remarkable capacity for change and adaptation',
            'do scientists fully grasp the brain\'s remarkable capacity for change and adaptation'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'neuroplasticity',
          question: 'Câu 19: Understanding the principles of neuroplasticity and (19)_________.',
          options: [
            'applying them to daily learning routines, students can unlock unprecedented levels of cognitive performance',
            'apply them to daily learning routines, students can unlock unprecedented levels of cognitive performance',
            'to apply them to daily learning routines, students can unlock unprecedented levels of cognitive performance',
            'applied them to daily learning routines, students can unlock unprecedented levels of cognitive performance'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'neuroplasticity',
          question: 'Câu 20: People (20)_________.',
          options: [
            'which engage in diverse learning experiences develop neural connections',
            'who engage in diverse learning experiences develop neural connections',
            'whom engage in diverse learning experiences develop neural connections',
            'whose engage in diverse learning experiences develop neural connections'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'neuroplasticity',
          question: 'Câu 21: (21)_________.',
          options: [
            'The implications of neural plasticity are limited to traditional educational settings',
            'The implications of neural plasticity exclude traditional educational settings',
            'The implications of neural plasticity contradict traditional educational settings',
            'The implications of neural plasticity extend far beyond traditional educational settings'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'neuroplasticity',
          question: 'Câu 22: (22)_________.',
          options: [
            'The past of neural enhancement held limited possibilities for human potential and lifelong learning',
            'The present of neural enhancement holds restricted possibilities for human potential and lifelong learning',
            'The future of neural enhancement holds promising possibilities for human potential and lifelong learning',
            'The future of neural enhancement holds uncertain possibilities for human potential and lifelong learning'
          ],
          correct: 2
        }
      ]
    },
    {
      id: 'reading2',
      name: 'Reading 2 (Comprehension)',
      questions: [
        // UNICEF Passage
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 1: What is the main purpose of UNICEF\'s programmes in Viet Nam?',
          options: [
            'To provide financial support to Vietnamese families',
            'To create opportunities for children to attend school, learn, and succeed',
            'To build more schools across the country',
            'To train teachers in modern education methods'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 2: What does UNICEF offer to disadvantaged teenagers?',
          options: [
            'Job training and career advice',
            'Free education materials',
            'Healthcare services',
            'Transportation to school'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 3: The word "disadvantaged" is closest in meaning to:',
          options: [
            'privileged',
            'underprivileged',
            'advantaged',
            'fortunate'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 4: What does the programme for children with disabilities aim to do?',
          options: [
            'Provide medical treatment',
            'Build special schools',
            'Ensure they can access and benefit from quality education',
            'Offer financial support to their families'
          ],
          correct: 2
        },
        
        // Gender Inequality Passage
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 1: What does the passage mainly discuss?',
          options: [
            'Women\'s rights in developed countries',
            'Educational opportunities for girls',
            'Child marriage customs',
            'Gender inequality that women face'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 2: The word "challenges" is closest in meaning to:',
          options: [
            'obstacles',
            'opportunities',
            'advantages',
            'benefits'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 3: Child marriage can harm young girls\' health because:',
          options: [
            'they have to work too hard',
            'they cannot go to school',
            'they\'re not physically mature enough to give birth',
            'they don\'t have access to healthcare'
          ],
          correct: 2
        },
        
        // Modern Schools Passage
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 1: What is the main goal of modern schools?',
          options: [
            'To teach students traditional subjects only',
            'To prepare students for lifelong learning and success',
            'To focus on exam preparation',
            'To provide vocational training'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 2: What is the role of teachers in modern schools?',
          options: [
            'To lecture and give assignments',
            'To guide and support students in their learning',
            'To discipline students strictly',
            'To focus only on academic achievement'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 3: "Lifelong learning" means:',
          options: [
            'Continuous learning throughout one\'s life',
            'Learning only in school',
            'Professional development courses',
            'Adult education programs'
          ],
          correct: 0
        }
      ]
    },
    {
      id: 'sentence-building',
      name: 'Sentence Building',
      questions: [
        {
          type: 'writing',
          prompt: 'Unfortunately, / many parts / world / men / women / have / unequal / statuses.',
          answer: 'Unfortunately, in many parts of the world men and women have an unequal status.'
        },
        {
          type: 'writing',
          prompt: 'In / places / women / have / work / longer / earn / same amount / money / men.',
          answer: 'In some places, women have to work longer to earn the same amount of money as men.'
        },
        {
          type: 'writing',
          prompt: 'Girls / face / serious / health / risk / if / they / married / young.',
          answer: 'Girls can face serious health risks if they get married young.'
        },
        {
          type: 'writing',
          prompt: 'What / educated girls / do / their families / children?',
          answer: 'What can educate girls do for their children and families?'
        },
        {
          type: 'writing',
          prompt: 'Can men / women / given / equal opportunities / workplace?',
          answer: 'Can men and women be given equal opportunities in the workplace?'
        },
        {
          type: 'writing',
          prompt: 'Viet Nam/ be / one / many countries / be / willing / join / peacekeeping activities / regions.',
          answer: 'Viet Nam is one of many countries that is willing to join the peacekeeping activities in the region.'
        },
        {
          type: 'writing',
          prompt: 'Ha Noi / become / one / most attractive / destinations / foreign visitors.',
          answer: 'Ha Noi has become one of the most attractive destinations for foreign visitors.'
        },
        {
          type: 'writing',
          prompt: 'By / join / more international organisations, our country / become / member / higher community.',
          answer: 'By joining more international organizations, our country has become a member of a higher community.'
        },
        {
          type: 'writing',
          prompt: 'Many / young people / nowadays / prefer / working / more competitive / working environment.',
          answer: 'Many young people nowadays prefer working in a more competitive working environment.'
        },
        {
          type: 'writing',
          prompt: 'Various / job opportunities / be now available / young people / province.',
          answer: 'Various job opportunities are now available to young people in the province.'
        }
      ]
    },
    {
      id: 'all',
      name: 'Tổng hợp tất cả',
      questions: []
    }
  ]
};

// Tổng hợp tất cả câu hỏi
QUIZ_DATA.modes.find(m => m.id === 'all').questions = QUIZ_DATA.modes
  .filter(m => m.id !== 'all')
  .flatMap(m => m.questions);
