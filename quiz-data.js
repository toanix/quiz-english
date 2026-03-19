// ĐỀ CƯƠNG KIỂM TRA GIỮA KÌ 2 - TIẾNG ANH 10

const PASSAGES = {
  genderDiscrimination: `<p><strong>Read the following passage about tackling Gender Discrimination in the Workplace:</strong></p>
<p>Gender discrimination at work remains a significant issue in many organizations worldwide. It is believed that <strong>(18) _________</strong> compared to their male counterparts. This inequality is <strong>(19) _______</strong>. Employees who experience discrimination may feel undervalued or overlooked, which can have a negative impact on their motivation and job satisfaction.</p>

<p>Many companies have implemented policies <strong>(20) _______</strong>, yet the progress has been slow. Over the years, I have witnessed how certain women <strong>(21) ________</strong> are still passed over for promotions. This situation often results in frustration, as it undermines their ability to achieve their professional goals.</p>

<p>To combat this issue, it is essential that <strong>(22) _________</strong>. In order to ensure fairness, training and awareness programs should be introduced to help employees understand the importance of gender equality. If we continue to ignore these problems, workplace culture will remain unequal, limiting the potential of many talented individuals.</p>`,

  vietnamDiplomacy: `<p><strong>Read the following passage about Vietnam's Diplomatic Transformation:</strong></p>
<p>Vietnam's remarkable transformation from a war-torn nation to a significant diplomatic player in Asia has captured global attention. Had the country not embraced comprehensive reforms in 1986, it would not have achieved such impressive economic growth and diplomatic influence. The nation's strategic position in Southeast Asia, <strong>(18)_________</strong>, has attracted major powers seeking to expand their influence.</p>

<p>Vietnam's diplomatic success lies in its balanced approach: maintaining strong economic ties with China while fostering deeper security cooperation with the United States. The country's foreign policy <strong>(19)_________</strong>; instead, it actively engages with multiple international partners. Vietnam, understanding the importance of regional stability and desiring to strengthen its international position, <strong>(20)_________</strong>.</p>

<p>This strategic diplomatic approach has not only enhanced Vietnam's regional standing but has also positioned the country as a key mediator in various international disputes, particularly in matters concerning the South China Sea and regional economic integration. In recent years, <strong>(21)_________</strong>, capitalizing on its young workforce and strategic location.</p>

<p>The country's commitment to sustainable development and digital transformation has further strengthened its position as a reliable partner in global supply chains. <strong>(22)_________</strong>. The country's growing startup ecosystem and space technology initiatives are now establishing Vietnam as an emerging tech innovator in Asia.</p>`,

  neuroplasticity: `<p><strong>Read the following passage about Brain Plasticity and Learning:</strong></p>
<p>Not until the late 20th century <strong>(18)_________</strong>. Neural networks, which form the foundation of our learning abilities, can be strengthened through consistent practice and exposure to new experiences. The brain actively rewires itself during learning processes; moreover, it creates new neural pathways to accommodate complex information.</p>

<p>Neuroscientists have discovered revolutionary learning techniques, and they continue to explore the boundaries of human cognitive potential. Understanding the principles of neuroplasticity and <strong>(19)_________</strong>.</p>

<p>This revolutionary understanding of brain plasticity has transformed education and rehabilitation methods. People <strong>(20)_________</strong> that lead to stronger abilities that enhance problem-solving and creative thinking. As we continue to unravel the mysteries of neural plasticity, the potential for human cognitive enhancement seems boundless, promising a future where learning truly becomes a transformative superpower.</p>

<p><strong>(21)_________</strong>. From stroke recovery to skill acquisition in adulthood, the brain's adaptability offers hope for continuous growth and improvement throughout life. Advanced neuroimaging techniques have revealed that even brief learning sessions can trigger measurable changes in brain structure and function.</p>

<p>This understanding has revolutionized therapeutic approaches and learning methodologies, suggesting that with the right strategies and persistence, individuals can reshape their cognitive capabilities at any age. <strong>(22)_________</strong>. These groundbreaking discoveries continue to inspire researchers and educators worldwide, fostering innovative approaches to learning and cognitive development.</p>`,

  unicef: `<p><strong>UNICEF in Viet Nam - Creating Opportunities for Children</strong></p>
<p>UNICEF works to ensure that all children in Viet Nam have access to quality education and opportunities to succeed. The organization's programmes focus on creating opportunities for children to attend school, learn, and succeed, regardless of their background or circumstances.</p>

<p>For disadvantaged teenagers, UNICEF offers job training and career advice to help them build better futures. The programmes for children with disabilities aim to ensure they can access and benefit from quality education, removing barriers that might prevent their participation.</p>

<p>The "Improving Learning Achievements" programme focuses on helping children succeed in their studies and prepare for the future. This initiative aims to better prepare children for future challenges by improving their skills and knowledge through innovative teaching methods and curriculum development.</p>

<p>UNICEF also helps Viet Nam join regional educational programmes, fostering cooperation and knowledge exchange with other countries in the region.</p>`,

  genderInequality: `<p><strong>Gender Inequality and Its Impact on Women</strong></p>
<p>Gender inequality remains one of the most pressing challenges facing women worldwide. From education to employment, women encounter numerous obstacles that limit their opportunities and potential.</p>

<p>One of the most harmful manifestations of gender inequality is child marriage. According to research, child marriage can seriously harm young girls' health because they're not physically mature enough to give birth. This practice not only endangers their health but also cuts short their education and limits their future prospects.</p>

<p>Girls receiving an education are far more likely to escape poverty and build better lives. Education gives them better job skills, higher salaries, and opportunities to improve their lives and contribute to their communities. They can make informed decisions about their health, families, and careers.</p>

<p>However, in many communities, parents support child marriage because they see it as a way to protect their daughters from violence or economic hardship. This belief, while well-intentioned, actually perpetuates the cycle of inequality and limits girls' potential.</p>

<p>Breaking this cycle requires comprehensive efforts to promote girls' education, change cultural attitudes, and provide economic opportunities for families.</p>`,

  modernSchools: `<p><strong>Modern Schools and Educational Approaches</strong></p>
<p>Modern schools have evolved significantly from traditional educational institutions. The main goal of modern schools is to prepare students for lifelong learning and success in an ever-changing world, not just to pass exams.</p>

<p>In these schools, teachers play a different role - they guide and support students in their learning rather than simply delivering lectures. The concept of lifelong learning, meaning continuous learning throughout one's life, is at the heart of modern education philosophy.</p>

<p>Group learning serves an important purpose in modern schools: to encourage collaboration and teamwork on projects. Students learn to work together, share ideas, and solve problems collectively, skills that are essential in today's workplace.</p>

<p>Modern schools also make extensive use of digital learning resources, which refers to computer-based materials used in lessons. These resources make learning more interactive and engaging, allowing students to explore topics at their own pace.</p>

<p>One benefit of field trips for students is that they offer hands-on, real-world experiences that cannot be replicated in a classroom. Students can see concepts in action and make connections between theoretical knowledge and practical applications.</p>

<p>School camps emphasize making friends and developing life skills. Through outdoor activities and group challenges, students learn independence, responsibility, and how to work effectively with others - lessons that extend far beyond the classroom.</p>`,

  genderEquality: `<p><strong>Gender Equality in the Workplace</strong></p>
<p>According to recent studies, gender equality improves workplace productivity significantly. When organizations treat all employees fairly regardless of gender, they create an environment where everyone can contribute their best work.</p>

<p>Other benefits include better team morale and innovation. Companies with diverse teams tend to be more creative and solve problems more effectively. The majority of successful companies now support diversity initiatives as a core business strategy.</p>

<p>Equal rights must be protected in the workplace through clear policies and consistent enforcement. Companies that keeps up with changing social expectations and implements fair practices see improved employee retention and satisfaction.</p>`,

  vietnamDiplomacyShort: `<p><strong>Vietnam's Diplomatic Approach</strong></p>
<p>Vietnam's diplomatic approach stands out from others in Southeast Asia through its remarkable flexibility and resilience. As global tensions rise up, Vietnam continues to maintain balanced relationships with major powers.</p>

<p>The country's astuteness and pragmatism in international relations have become its hallmark in diplomatic circles. In spite of historical complexities, Vietnam has emerged as a trusted partner in regional affairs.</p>

<p>Vietnam's strategic acumen has helped forge meaningful partnerships across continents. A multitude of diplomatic achievements have positioned Vietnam as a key player in Southeast Asian politics.</p>`,

  vietnamEconomy: `<p><strong>Vietnam's Economic Innovation</strong></p>
<p>The innovative Vietnamese economy transforms challenges into opportunities with remarkable resilience. The sophisticated emerging market infrastructure transformation accelerates Vietnam's development.</p>

<p>The entrepreneurs pioneering sustainable solutions have attracted worldwide attention. Vietnam's innovative policies present multinational corporations with game-changing investment possibilities.</p>

<p>Vietnam is pulling out all the stops to create a business-friendly environment. We are committed to expanding our global reach while continuing to strengthen domestic capabilities.</p>`,

  learningPlatform: `<p><strong>Mind Gym - Revolutionary Learning Platform</strong></p>
<p>Transforming traditional education into an engaging experience, our innovative learning platform makes knowledge acquisition as natural as breathing. Our advanced digital curriculum delivers personalized learning solutions that revolutionize how you absorb information.</p>

<p>The students enrolled in Mind Gym, achieving remarkable results, have inspired countless others. Our mentors explain complex concepts to students through interactive sessions.</p>

<p>Mind Gym is absolutely crushing it in the world of modern education. We encourage practicing daily exercises while maintaining a balanced study schedule.</p>`,

  digitalEducation: `<p><strong>The Future of Digital Learning</strong></p>
<p>The revolutionary approach transforms traditional education into engaging digital experiences. The platform features innovative social media integration that enhances student collaboration and engagement.</p>

<p>Students attending our courses achieve remarkable results within weeks. Our quantum-powered system transmits micro-learning modules to participants through interconnected knowledge networks.</p>

<p>While traditional education is still dragging its feet, we're blazing a trail in the quantum learning revolution. Excelling at advanced concepts requires practicing consistently while striving to master core fundamentals.</p>`
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
            'Vietnam\'s unsuccessful management of global challenges during the COVID-19 pandemic has showcased its governance capabilities to the world',
            'Vietnam\'s secretive management of global challenges during the COVID-19 pandemic has showcased its governance capabilities to the world',
            'Vietnam\'s hesitant management of global challenges during the COVID-19 pandemic has showcased its governance capabilities to the world',
            'Vietnam\'s successful management of global challenges during the COVID-19 pandemic has showcased its governance capabilities to the world'
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
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 5: The phrase "Improving Learning Achievements" means:',
          options: [
            'Building better school facilities',
            'Helping children succeed in their studies and prepare for the future',
            'Increasing the number of students',
            'Training more teachers'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 6: What is the goal of UNICEF\'s "Improving Learning Achievements" programme?',
          options: [
            'To provide free meals to students',
            'To build more classrooms',
            'To better prepare children for future challenges by improving their skills and knowledge',
            'To reduce the number of students per class'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'unicef',
          question: 'Question 7: What does UNICEF help Viet Nam join?',
          options: [
            'International sports competitions',
            'Regional educational programmes',
            'Economic partnerships',
            'Cultural exchange programs'
          ],
          correct: 1
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
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 4: The word "They" in paragraph 3 refers to:',
          options: [
            'Girls receiving an education',
            'Uneducated girls',
            'Parents',
            'Communities'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 5: Which of the following is NOT mentioned?',
          options: [
            'Girls face health risks from early marriage',
            'Education helps girls get better jobs',
            'Some families marry off daughters early',
            'Girls see child marriage as a way to pay off debt'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'genderInequality',
          question: 'Question 6: Why do some parents support child marriage?',
          options: [
            'They see it as a way to protect their daughters from violence',
            'They want their daughters to have children early',
            'They believe education is unnecessary',
            'They need money from the marriage'
          ],
          correct: 0
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
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 4: What is the purpose of group learning in modern schools?',
          options: [
            'To reduce teachers\' workload',
            'To encourage collaboration and teamwork on projects',
            'To make classes more fun',
            'To save classroom space'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 5: "Digital learning resources" refers to:',
          options: [
            'Traditional textbooks and worksheets',
            'Computer-based materials used in lessons',
            'Library books and references',
            'Teacher\'s notes and handouts'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 6: What is one benefit of field trips for students?',
          options: [
            'They are a break from regular classes',
            'They offer hands-on, real-world experiences',
            'They are entertaining and fun',
            'They help students make friends'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'modernSchools',
          question: 'Question 7: What skill is emphasized by school camps?',
          options: [
            'Academic excellence',
            'Sports and physical fitness',
            'Making friends and developing life skills',
            'Leadership in competitions'
          ],
          correct: 2
        }
      ]
    },
    {
      id: 'language-knowledge-2',
      name: 'Language Knowledge 2',
      questions: [
        // Passage 1 - Gender Equality
        {
          type: 'tracNghiem',
          passage: 'genderEquality',
          question: 'Câu 7: (7)______ recent studies, gender equality improves workplace productivity.',
          options: [
            'According to',
            'In addition to',
            'Due to',
            'Thanks to'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'genderEquality',
          question: 'Câu 8: (8)______ benefits include better team morale and innovation.',
          options: [
            'Another',
            'Other',
            'Others',
            'The other'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'genderEquality',
          question: 'Câu 9: The (9)______ of companies now support diversity initiatives.',
          options: [
            'most',
            'majority',
            'number',
            'amount'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'genderEquality',
          question: 'Câu 10: Equal (10)______ must be protected in the workplace.',
          options: [
            'opportunities',
            'chances',
            'possibilities',
            'rights'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'genderEquality',
          question: 'Câu 11: The company (11)______ with changing social expectations.',
          options: [
            'keeps up',
            'catches up',
            'comes up',
            'makes up'
          ],
          correct: 0
        },
        
        // Passage 2 - Vietnam Diplomacy Short
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 7: Vietnam\'s diplomatic approach stands out from (7)______ in Southeast Asia.',
          options: [
            'other',
            'the others',
            'others',
            'another'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 8: As global tensions (8)______, Vietnam continues to maintain balanced relationships.',
          options: [
            'break down',
            'rise up',
            'come about',
            'stand out'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 9: The country\'s (9)______ and pragmatism have become its hallmark.',
          options: [
            'astuteness',
            'resilience',
            'dominance',
            'neutrality'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 10: (10)______ historical complexities, Vietnam has emerged as a trusted partner.',
          options: [
            'In spite of',
            'In front of',
            'In place of',
            'As well as'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 11: Vietnam\'s strategic (11)______ has helped forge meaningful partnerships.',
          options: [
            'location',
            'planning',
            'acumen',
            'alliance'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamDiplomacyShort',
          question: 'Question 12: A (12)______ of diplomatic achievements have positioned Vietnam as a key player.',
          options: [
            'plenty',
            'number',
            'amount',
            'multitude'
          ],
          correct: 3
        },
        
        // Passage 3 - Vietnam Economy
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 1: The Vietnamese economy transforms challenges with (1)______ resilience.',
          options: [
            'remark',
            'remarkability',
            'remarkable',
            'remarkably'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 2: The sophisticated (2)______ transformation accelerates development.',
          options: [
            'emerging market infrastructure',
            'market infrastructure emerging',
            'infrastructure market emerging',
            'emerging infrastructure market'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 3: The entrepreneurs (3)______ sustainable solutions have attracted attention.',
          options: [
            'was pioneered',
            'pioneering',
            'pioneered',
            'which pioneered'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 4: Vietnam presents corporations (4)______ investment possibilities.',
          options: [
            'to',
            'for',
            'in',
            'with'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 5: Vietnam is (5)______ out all the stops.',
          options: [
            'pulling',
            'pushing',
            'taking',
            'putting'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'vietnamEconomy',
          question: 'Question 6: We are committed (6)______ our global reach.',
          options: [
            'to expand',
            'expanding',
            'to expanding',
            'expand'
          ],
          correct: 2
        },
        
        // Passage 4 - Learning Platform
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 1: Transforming (1)______ education into an engaging experience.',
          options: [
            'traditional',
            'tradition',
            'traditionalism',
            'traditionalist'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 2: Our curriculum delivers (2)______ that revolutionize learning.',
          options: [
            'learning personalized solutions',
            'personalized learning solutions',
            'solutions learning personalized',
            'learning solutions personalized'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 3: The students (3)______ in Mind Gym have inspired others.',
          options: [
            'was enrolled',
            'enrolling',
            'enrolled',
            'which enrolled'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 4: Our mentors explain concepts (4)______ students.',
          options: [
            'for',
            'at',
            'in',
            'to'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 5: Mind Gym is absolutely (5)______ it.',
          options: [
            'mastering',
            'crushing',
            'dominating',
            'leading'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'learningPlatform',
          question: 'Question 6: We encourage practicing while (6)______ a balanced schedule.',
          options: [
            'maintaining',
            'to maintain',
            'to maintaining',
            'maintain'
          ],
          correct: 0
        },
        
        // Passage 5 - Digital Education
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 1: The approach transforms education into (1)______ experiences.',
          options: [
            'digitally',
            'digitize',
            'digital',
            'digitalness'
          ],
          correct: 2
        },
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 2: The platform features (2)______.',
          options: [
            'media social integration',
            'integration media social',
            'social integration media',
            'social media integration'
          ],
          correct: 3
        },
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 3: Students (3)______ our courses achieve remarkable results.',
          options: [
            'attending',
            'was attended',
            'which attended',
            'attended'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 4: The system transmits modules (4)______ participants.',
          options: [
            'for',
            'to',
            'with',
            'about'
          ],
          correct: 1
        },
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 5: Traditional education is still (5)______ its feet.',
          options: [
            'dragging',
            'finding',
            'moving',
            'testing'
          ],
          correct: 0
        },
        {
          type: 'tracNghiem',
          passage: 'digitalEducation',
          question: 'Question 6: Excelling requires striving (6)______ core fundamentals.',
          options: [
            'master',
            'mastering',
            'to master',
            'to mastering'
          ],
          correct: 2
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
