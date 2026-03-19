// ĐỀ CƯƠNG KIỂM TRA GIỮA KÌ 2 - TIẾNG ANH 10

const PASSAGES = {
  // READING 1 PASSAGES
  genderDiscrimination: `<p><strong>Read the following passage about tackling Gender Discrimination in the Workplace:</strong></p>
<p>Gender discrimination at work remains a significant issue in many organizations worldwide. It is believed that <strong>(18) _________</strong> compared to their male counterparts. This inequality is <strong>(19) _______</strong>. Employees who experience discrimination may feel undervalued or overlooked, which can have a negative impact on their motivation and job satisfaction.</p>
<p>Many companies have implemented policies <strong>(20) _______</strong>, yet the progress has been slow. Over the years, I have witnessed how certain women <strong>(21) ________</strong> are still passed over for promotions. This situation often results in frustration, as it undermines their ability to achieve their professional goals.</p>
<p>To combat this issue, it is essential that <strong>(22) _________</strong>. In order to ensure fairness, training and awareness programs should be introduced to help employees understand the importance of gender equality.</p>`,

  vietnamDiplomacy: `<p><strong>Read the following passage about Vietnam's Diplomatic Transformation:</strong></p>
<p>Vietnam's remarkable transformation from a war-torn nation to a significant diplomatic player in Asia has captured global attention. Had the country not embraced comprehensive reforms in 1986, it would not have achieved such impressive economic growth and diplomatic influence. The nation's strategic position in Southeast Asia, <strong>(18)_________</strong>, has attracted major powers seeking to expand their influence.</p>
<p>Vietnam's diplomatic success lies in its balanced approach: maintaining strong economic ties with China while fostering deeper security cooperation with the United States. The country's foreign policy <strong>(19)_________</strong>; instead, it actively engages with multiple international partners. Vietnam, understanding the importance of regional stability and desiring to strengthen its international position, <strong>(20)_________</strong>.</p>
<p>In recent years, <strong>(21)_________</strong>, capitalizing on its young workforce and strategic location. <strong>(22)_________</strong>. The country's growing startup ecosystem and space technology initiatives are now establishing Vietnam as an emerging tech innovator in Asia.</p>`,

  neuroplasticity: `<p><strong>Read the following passage about Brain Plasticity and Learning:</strong></p>
<p>Not until the late 20th century <strong>(18)_________</strong>. Neural networks, which form the foundation of our learning abilities, can be strengthened through consistent practice and exposure to new experiences. The brain actively rewires itself during learning processes; moreover, it creates new neural pathways to accommodate complex information.</p>
<p>Neuroscientists have discovered revolutionary learning techniques, and they continue to explore the boundaries of human cognitive potential. Understanding the principles of neuroplasticity and <strong>(19)_________</strong>.</p>
<p>This revolutionary understanding of brain plasticity has transformed education and rehabilitation methods. People <strong>(20)_________</strong> that lead to stronger abilities that enhance problem-solving and creative thinking.</p>
<p><strong>(21)_________</strong>. From stroke recovery to skill acquisition in adulthood, the brain's adaptability offers hope for continuous growth and improvement throughout life. <strong>(22)_________</strong>. These groundbreaking discoveries continue to inspire researchers and educators worldwide.</p>`,

  // READING 2 PASSAGES
  unicef: `<p><strong>UNICEF in Viet Nam - Creating Opportunities for Children</strong></p>
<p>UNICEF works to ensure that all children in Viet Nam have access to quality education and opportunities to succeed. The organization's programmes focus on creating opportunities for children to attend school, learn, and succeed, regardless of their background or circumstances.</p>
<p>For disadvantaged teenagers, UNICEF offers job training and career advice to help them build better futures. The programmes for children with disabilities aim to ensure they can access and benefit from quality education, removing barriers that might prevent their participation.</p>
<p>The "Improving Learning Achievements" programme focuses on helping children succeed in their studies and prepare for the future. This initiative aims to better prepare children for future challenges by improving their skills and knowledge through innovative teaching methods and curriculum development.</p>
<p>UNICEF also helps Viet Nam join regional educational programmes, fostering cooperation and knowledge exchange with other countries in the region.</p>`,

  genderInequality: `<p><strong>Gender Inequality and Its Impact on Women</strong></p>
<p>Gender inequality remains one of the most pressing challenges facing women worldwide. From education to employment, women encounter numerous obstacles that limit their opportunities and potential.</p>
<p>One of the most harmful manifestations of gender inequality is child marriage. According to research, child marriage can seriously harm young girls' health because they're not physically mature enough to give birth. This practice not only endangers their health but also cuts short their education and limits their future prospects.</p>
<p>Girls receiving an education are far more likely to escape poverty and build better lives. Education gives them better job skills, higher salaries, and opportunities to improve their lives and contribute to their communities. They can make informed decisions about their health, families, and careers.</p>
<p>However, in many communities, parents support child marriage because they see it as a way to protect their daughters from violence or economic hardship.</p>`,

  modernSchools: `<p><strong>Modern Schools and Educational Approaches</strong></p>
<p>Modern schools have evolved significantly from traditional educational institutions. The main goal of modern schools is to prepare students for lifelong learning and success in an ever-changing world, not just to pass exams.</p>
<p>In these schools, teachers play a different role - they guide and support students in their learning rather than simply delivering lectures. The concept of lifelong learning, meaning continuous learning throughout one's life, is at the heart of modern education philosophy.</p>
<p>Group learning serves an important purpose in modern schools: to encourage collaboration and teamwork on projects. Modern schools also make extensive use of digital learning resources, which refers to computer-based materials used in lessons.</p>
<p>One benefit of field trips for students is that they offer hands-on, real-world experiences. School camps emphasize making friends and developing life skills through outdoor activities and group challenges.</p>`,

  // ANNOUNCEMENTS (Language Knowledge 1)
  announcement1Part1: `<p><strong>Read the following passage:</strong></p>
<p>In many parts of the world, gender equality has made great progress, but challenges still remain. One of the most significant areas where gender equality is essential is in education. In some countries, girls are still less likely to <strong>(12) _______</strong> to school compared to boys. This is particularly true in rural areas, where cultural norms often prevent girls from attending school.</p>
<p>However, organizations like UNESCO and various national governments have worked hard to <strong>(13) _______</strong> the importance of educating girls. Over the years, many countries have introduced policies and programs to support girls' education, which has led to an increase in the number of girls completing primary and secondary school.</p>
<p>Education not only empowers girls but also <strong>(14) _______</strong> their ability to contribute to society in meaningful ways. Educated women are more likely to pursue higher-paying jobs, support their families, and contribute to the development of their communities.</p>`,

  announcement1Part2: `<p><strong>Advertisement:</strong></p>
<p><strong>Do you want to:</strong></p>
<ul>
<li>Communicate confidently in English at work and while traveling?</li>
<li>Improve your soft skills and <strong>(12) _______</strong>?</li>
<li>Connect with new friends and learn from others at your age?</li>
</ul>
<p><strong>Join our English conversation class specifically designed for working adults at BRIDGEND!</strong></p>
<p><strong>Our classes:</strong></p>
<ul>
<li>Are tailored specifically for you</li>
<li>Have experienced teachers</li>
<li>Have flexible schedules and a <strong>(13) _______</strong></li>
</ul>
<p><strong>You will:</strong></p>
<ul>
<li><strong>(14) _______</strong> engaging discussions and develop practical communication skills.</li>
<li>Practice effective speaking techniques in a supportive environment.</li>
</ul>
<p><strong>Register now to start your English journey!</strong></p>`,

  announcement2: `<p><strong>ARE YOU READY TO BECOME AN INTERNATIONAL UN VOLUNTEER?</strong></p>
<ul>
<li>The minimum age to serve as an international UN Volunteer is 18 years old.</li>
<li>You can contribute your time, skills and knowledge through volunteering with the UN. This is <strong>(9) _______</strong> opportunity to create a positive impact and be a <strong>(10) _______</strong> force for achieving peace and development. Make a difference to the lives of many!</li>
<li>The registration process follows a few simple steps, all of which <strong>(11) _______</strong> before you can apply for onsite or online volunteering assignments.</li>
<li>In order to apply for assignments, candidates need to register in our Global Talent Pool.</li>
</ul>
<p><strong>Do you want to:</strong></p>
<ul>
<li>Communicate confidently in English at work and while traveling?</li>
<li>Improve your soft skills and <strong>(12) _______</strong>?</li>
<li>Connect with new friends and learn from others at your age?</li>
</ul>
<p><strong>Join our English conversation class at BRIDGEND!</strong></p>
<p><strong>Our classes:</strong> tailored for you, experienced teachers, flexible schedules and a <strong>(13) _______</strong></p>
<p><strong>You will:</strong> <strong>(14) _______</strong> engaging discussions and develop practical communication skills.</p>`,

  announcement3: `<p><strong>ARE YOU READY TO BECOME AN INTERNATIONAL UN VOLUNTEER?</strong></p>
<p>This is <strong>(9) _______</strong> opportunity to create a positive impact and be a <strong>(10) _______</strong> force for achieving peace and development. The registration process follows a few simple steps, all of which <strong>(11) _______</strong> before you can apply.</p>
<p><strong>Do you want to:</strong></p>
<ul>
<li><strong>(12) _______</strong> your career opportunities?</li>
<li>Join a <strong>(13) _______</strong>?</li>
<li><strong>(14) _______</strong> engaging discussions?</li>
</ul>`,

  announcement4: `<p><strong>ARE YOU READY TO BECOME AN INTERNATIONAL UN VOLUNTEER?</strong></p>
<p>This is <strong>(9) _______</strong> opportunity to create a positive impact and be a <strong>(10) _______</strong> force for achieving peace and development. All steps <strong>(11) _______</strong> before you can apply.</p>
<p><strong>Do you want to:</strong></p>
<ul>
<li><strong>(12) _______</strong> your career opportunities?</li>
<li>Join a <strong>(13) _______</strong>?</li>
<li><strong>(14) _______</strong> engaging discussions?</li>
</ul>`,

  announcement5: `<p><strong>ARE YOU READY TO LEARN SMARTER WITH TECHNOLOGY?</strong></p>
<p>The use of electronic devices has changed the way students' study. With modern gadgets, students can <strong>(9) _______</strong> lessons, take notes, and do assignments more easily. This is an <strong>(10) _______</strong> opportunity to improve your learning experience and develop independent study habits. The registration process includes a few steps, all of which <strong>(11) _______</strong> before you can access our e-learning system.</p>
<p><strong>DO YOU WANT TO:</strong></p>
<ul>
<li>Study anytime, anywhere with smart devices?</li>
<li>Improve your study skills and <strong>(12) _______</strong>?</li>
<li>Use voice recognition to practice pronunciation?</li>
</ul>
<p><strong>OUR PLATFORM OFFERS:</strong></p>
<ul>
<li>Smart applications for self-study</li>
<li>A <strong>(13) _______</strong> environment for effective learning</li>
<li>E-books and multimedia tools for all subjects</li>
</ul>
<p><strong>YOU WILL:</strong></p>
<ul>
<li><strong>(14) _______</strong> digital devices to search for information</li>
<li>Learn more efficiently with online resources</li>
</ul>`,

  // LANGUAGE KNOWLEDGE 2 PASSAGES
  langKnow2Pass1: `<p><strong>Gender Equality in Vietnam: Laws and Social Change</strong></p>
<ul>
<li><strong>(7) _______</strong> recent studies, gender equality laws in Vietnam have had a profound impact on women's rights. Legal protection has improved significantly, ensuring that women can work and live free from discrimination.</li>
<li><strong>(8) _______</strong> important development is the collaboration between women's organizations and local governments to advocate for women's rights. The <strong>(9) _______</strong> of women in urban areas now have access to basic legal <strong>(10) _______</strong>, but in rural areas, challenges remain.</li>
<li>The number of women joining the workforce <strong>(11) _______</strong> with the rising demand, yet gender stereotypes often persist. The increasing awareness of gender equality in society is encouraging, but there is still much work to be done to achieve true <strong>(12) _______</strong>.</li>
</ul>`,

  langKnow2Pass2: `<p><strong>Vietnam's Diplomatic Approach</strong></p>
<p>Vietnam's diplomatic approach stands out from <strong>(7) _______</strong> in Southeast Asia through its remarkable flexibility and resilience. As global tensions <strong>(8) _______</strong>, Vietnam continues to maintain balanced relationships with major powers. The country's <strong>(9) _______</strong> and pragmatism in international relations have become its hallmark in diplomatic circles. <strong>(10) _______</strong> historical complexities, Vietnam has emerged as a trusted partner in regional affairs. Vietnam's strategic <strong>(11) _______</strong> has helped forge meaningful partnerships across continents. A <strong>(12) _______</strong> of diplomatic achievements have positioned Vietnam as a key player in Southeast Asian politics.</p>`,

  langKnow2Pass3: `<p><strong>Vietnam's Economic Innovation</strong></p>
<p>The innovative Vietnamese economy transforms challenges into opportunities with <strong>(1) _______</strong> resilience. The sophisticated <strong>(2) _______</strong> transformation accelerates Vietnam's development. The entrepreneurs <strong>(3) _______</strong> sustainable solutions have attracted worldwide attention. Vietnam's innovative policies present multinational corporations <strong>(4) _______</strong> game-changing investment possibilities. Vietnam is <strong>(5) _______</strong> out all the stops to create a business-friendly environment. We are committed <strong>(6) _______</strong> our global reach while continuing to strengthen domestic capabilities.</p>`,

  langKnow2Pass4: `<p><strong>Mind Gym - Revolutionary Learning Platform</strong></p>
<p>Transforming <strong>(1) _______</strong> education into an engaging experience, our innovative learning platform makes knowledge acquisition as natural as breathing. Our advanced digital curriculum delivers <strong>(2) _______</strong> that revolutionize how you absorb information. The students <strong>(3) _______</strong> in Mind Gym, achieving remarkable results, have inspired countless others. Our mentors explain complex concepts <strong>(4) _______</strong> students through interactive sessions. Mind Gym is absolutely <strong>(5) _______</strong> it in the world of modern education. We encourage practicing daily exercises while <strong>(6) _______</strong> a balanced study schedule.</p>`,

  langKnow2Pass5: `<p><strong>The Future of Digital Learning</strong></p>
<p>The revolutionary approach transforms traditional education into engaging <strong>(1) _______</strong> experiences. The platform features innovative <strong>(2) _______</strong>. Students <strong>(3) _______</strong> our courses achieve remarkable results within weeks. Our quantum-powered system transmits micro-learning modules <strong>(4) _______</strong> participants through interconnected knowledge networks. While traditional education is still <strong>(5) _______</strong> its feet, we're blazing a trail in the quantum learning revolution. Excelling at advanced concepts requires practicing consistently while striving <strong>(6) _______</strong> core fundamentals.</p>`
};

const QUIZ_DATA = {
  modes: [
    // READING 1
    {
      id: 'reading1-p1',
      name: 'Reading 1: P1',
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
      name: 'Reading 1: P2',
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
      name: 'Reading 1: P3',
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

    // READING 2
    {
      id: 'reading2',
      name: 'Reading 2',
      questions: [
        // UNICEF
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 1: What is the main purpose of UNICEF\'s programmes in Viet Nam?', options: ['To provide financial support to Vietnamese families', 'To create opportunities for children to attend school, learn, and succeed', 'To build more schools across the country', 'To train teachers in modern education methods'], correct: 1},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 2: What does UNICEF offer to disadvantaged teenagers?', options: ['Job training and career advice', 'Free education materials', 'Healthcare services', 'Transportation to school'], correct: 0},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 3: The word "disadvantaged" is closest in meaning to:', options: ['privileged', 'underprivileged', 'advantaged', 'fortunate'], correct: 1},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 4: What does the programme for children with disabilities aim to do?', options: ['Provide medical treatment', 'Build special schools', 'Ensure they can access and benefit from quality education', 'Offer financial support to their families'], correct: 2},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 5: The phrase "Improving Learning Achievements" means:', options: ['Building better school facilities', 'Helping children succeed in their studies and prepare for the future', 'Increasing the number of students', 'Training more teachers'], correct: 1},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 6: What is the goal of UNICEF\'s "Improving Learning Achievements" programme?', options: ['To provide free meals to students', 'To build more classrooms', 'To better prepare children for future challenges by improving their skills and knowledge', 'To reduce the number of students per class'], correct: 2},
        {type: 'tracNghiem', passage: 'unicef', question: 'Question 7: What does UNICEF help Viet Nam join?', options: ['International sports competitions', 'Regional educational programmes', 'Economic partnerships', 'Cultural exchange programs'], correct: 1},
        
        // Gender Inequality
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 1: What does the passage mainly discuss?', options: ['Women\'s rights in developed countries', 'Educational opportunities for girls', 'Child marriage customs', 'Gender inequality that women face'], correct: 3},
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 2: The word "challenges" is closest in meaning to:', options: ['obstacles', 'opportunities', 'advantages', 'benefits'], correct: 0},
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 3: Child marriage can harm young girls\' health because:', options: ['they have to work too hard', 'they cannot go to school', 'they\'re not physically mature enough to give birth', 'they don\'t have access to healthcare'], correct: 2},
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 4: The word "They" in paragraph 3 refers to:', options: ['Girls receiving an education', 'Uneducated girls', 'Parents', 'Communities'], correct: 0},
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 5: Which of the following is NOT mentioned?', options: ['Girls face health risks from early marriage', 'Education helps girls get better jobs', 'Some families marry off daughters early', 'Girls see child marriage as a way to pay off debt'], correct: 3},
        {type: 'tracNghiem', passage: 'genderInequality', question: 'Question 6: Why do some parents support child marriage?', options: ['They see it as a way to protect their daughters from violence', 'They want their daughters to have children early', 'They believe education is unnecessary', 'They need money from the marriage'], correct: 0},
        
        // Modern Schools
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 1: What is the main goal of modern schools?', options: ['To teach students traditional subjects only', 'To prepare students for lifelong learning and success', 'To focus on exam preparation', 'To provide vocational training'], correct: 1},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 2: What is the role of teachers in modern schools?', options: ['To lecture and give assignments', 'To guide and support students in their learning', 'To discipline students strictly', 'To focus only on academic achievement'], correct: 1},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 3: "Lifelong learning" means:', options: ['Continuous learning throughout one\'s life', 'Learning only in school', 'Professional development courses', 'Adult education programs'], correct: 0},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 4: What is the purpose of group learning in modern schools?', options: ['To reduce teachers\' workload', 'To encourage collaboration and teamwork on projects', 'To make classes more fun', 'To save classroom space'], correct: 1},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 5: "Digital learning resources" refers to:', options: ['Traditional textbooks and worksheets', 'Computer-based materials used in lessons', 'Library books and references', 'Teacher\'s notes and handouts'], correct: 1},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 6: What is one benefit of field trips for students?', options: ['They are a break from regular classes', 'They offer hands-on, real-world experiences', 'They are entertaining and fun', 'They help students make friends'], correct: 1},
        {type: 'tracNghiem', passage: 'modernSchools', question: 'Question 7: What skill is emphasized by school camps?', options: ['Academic excellence', 'Sports and physical fitness', 'Making friends and developing life skills', 'Leadership in competitions'], correct: 2}
      ]
    },

    // LANGUAGE KNOWLEDGE 1 (Announcements)
    {
      id: 'lang-know-1',
      name: 'Language Knowledge 1',
      questions: [
        // Announcement 1 Part 1
        {type: 'tracNghiem', passage: 'announcement1Part1', question: 'Câu 12: In some countries, girls are still less likely to (12) _______ to school.', options: ['go to', 'stay away from', 'avoid attending', 'help in'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement1Part1', question: 'Câu 13: Organizations have worked hard to (13) _______ the importance of educating girls.', options: ['ignore and dismiss', 'underline and highlight', 'reject and downplay', 'misunderstand and confuse'], correct: 1},
        {type: 'tracNghiem', passage: 'announcement1Part1', question: 'Câu 14: Education (14) _______ their ability to contribute to society.', options: ['diminish', 'limit', 'increase', 'reduce'], correct: 2},
        
        // Announcement 1 Part 2
        {type: 'tracNghiem', passage: 'announcement1Part2', question: 'Câu 12: Improve your soft skills and (12) _______?', options: ['expand your career opportunities', 'boost your career opportunities', 'deepen your career opportunities', 'lengthen your career opportunities'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement1Part2', question: 'Câu 13: Have flexible schedules and a (13) _______.', options: ['environment comfortable learning', 'environment comfortably learning', 'comfortable learning environment', 'learning environment comfortable'], correct: 2},
        {type: 'tracNghiem', passage: 'announcement1Part2', question: 'Câu 14: You will (14) _______ engaging discussions.', options: ['Set up', 'Participate in', 'Take down', 'fill in'], correct: 1},
        
        // Announcement 2
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 9: This is (9) _______ opportunity.', options: ['an', 'ϴ (no article)', 'a', 'the'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 10: Be a (10) _______ force.', options: ['significant', 'signify', 'signification', 'significantly'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 11: All of which (11) _______ before you can apply.', options: ['be completed', 'must be complete', 'must complete', 'must be completed'], correct: 3},
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 12: Improve your soft skills and (12) _______?', options: ['expand your career opportunities', 'boost your career opportunities', 'deepen your career opportunities', 'lengthen your career opportunities'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 13: A (13) _______ learning environment.', options: ['environment comfortable learning', 'environment comfortably learning', 'comfortable learning environment', 'learning environment comfortable'], correct: 2},
        {type: 'tracNghiem', passage: 'announcement2', question: 'Câu 14: You will (14) _______ engaging discussions.', options: ['Set up', 'Participate in', 'Take down', 'fill in'], correct: 1},
        
        // Announcement 3
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 9: This is (9) _______ opportunity.', options: ['an', 'ϴ (no article)', 'a', 'the'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 10: Be a (10) _______ force.', options: ['significant', 'signify', 'signification', 'significantly'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 11: All of which (11) _______ before you can apply.', options: ['be completed', 'must be complete', 'must complete', 'must be completed'], correct: 3},
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 12: Do you want to (12) _______ your career opportunities?', options: ['expand', 'boost', 'deepen', 'lengthen'], correct: 1},
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 13: Join a (13) _______.', options: ['environment comfortable learning', 'environment comfortably learning', 'comfortable learning environment', 'learning environment comfortable'], correct: 2},
        {type: 'tracNghiem', passage: 'announcement3', question: 'Câu 14: (14) _______ engaging discussions?', options: ['Set up', 'Participate in', 'Take down', 'fill in'], correct: 1},
        
        // Announcement 4
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 9: This is (9) _______ opportunity.', options: ['an', 'ϴ (no article)', 'a', 'the'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 10: Be a (10) _______ force.', options: ['significant', 'signify', 'signification', 'significantly'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 11: All steps (11) _______ before you can apply.', options: ['be completed', 'must be complete', 'must complete', 'must be completed'], correct: 3},
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 12: (12) _______ your career opportunities?', options: ['expand', 'boost', 'deepen', 'lengthen'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 13: Join a (13) _______.', options: ['environment comfortable learning', 'environment comfortably learning', 'comfortable learning environment', 'learning environment comfortable'], correct: 2},
        {type: 'tracNghiem', passage: 'announcement4', question: 'Câu 14: (14) _______ engaging discussions?', options: ['Set up', 'Participate in', 'Take down', 'fill in'], correct: 1},
        
        // Announcement 5
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 9: Students can (9) _______ lessons.', options: ['look up', 'store', 'record', 'take notes on'], correct: 2},
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 10: This is an (10) _______ opportunity.', options: ['beneficial', 'exciting', 'useful', 'effective'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 11: All of which (11) _______ before you can access.', options: ['be completed', 'must be complete', 'must complete', 'must be completed'], correct: 3},
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 12: Improve your study skills and (12) _______?', options: ['boost your memory', 'expand your vocabulary', 'improve your reading speed', 'increase your screen time'], correct: 1},
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 13: A (13) _______ environment.', options: ['user-friendly learning environment', 'learning-friendly user environment', 'friendly-learning user environment', 'user learning-friendly environment'], correct: 0},
        {type: 'tracNghiem', passage: 'announcement5', question: 'Câu 14: (14) _______ digital devices.', options: ['Make use of', 'Read aloud', 'Type in', 'Write down'], correct: 0}
      ]
    },

    // LANGUAGE KNOWLEDGE 2
    {
      id: 'lang-know-2',
      name: 'Language Knowledge 2',
      questions: [
        // Passage 1
        {type: 'tracNghiem', passage: 'langKnow2Pass1', question: 'Câu 7: (7) _______ recent studies.', options: ['According to', 'Irrespective of', 'On account of', 'Thanks to'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass1', question: 'Câu 8: (8) _______ important development.', options: ['Others', 'Other', 'The others', 'Another'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass1', question: 'Câu 9: The (9) _______ of women.', options: ['maximine', 'majority', 'percentage', 'amount'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass1', question: 'Câu 10: Access to basic legal (10) _______.', options: ['practices', 'choices', 'achievements', 'rights'], correct: 3},
        {type: 'tracNghiem', passage: 'langKnow2Pass1', question: 'Câu 11: The number (11) _______ with the rising demand.', options: ['keeps up', 'catch up', 'put up', 'deal'], correct: 0},
        
        // Passage 2
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 7: Stands out from (7) _______ in Southeast Asia.', options: ['other', 'the others', 'others', 'another'], correct: 2},
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 8: As global tensions (8) _______.', options: ['break down', 'rise up', 'come about', 'stand out'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 9: The country\'s (9) _______ and pragmatism.', options: ['astuteness', 'resilience', 'dominance', 'neutrality'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 10: (10) _______ historical complexities.', options: ['In spite of', 'In front of', 'In place of', 'As well as'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 11: Vietnam\'s strategic (11) _______.', options: ['location', 'planning', 'acumen', 'alliance'], correct: 2},
        {type: 'tracNghiem', passage: 'langKnow2Pass2', question: 'Câu 12: A (12) _______ of diplomatic achievements.', options: ['plenty', 'number', 'amount', 'multitude'], correct: 3},
        
        // Passage 3
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 1: With (1) _______ resilience.', options: ['remark', 'remarkability', 'remarkable', 'remarkably'], correct: 2},
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 2: The sophisticated (2) _______ transformation.', options: ['emerging market infrastructure', 'market infrastructure emerging', 'infrastructure market emerging', 'emerging infrastructure market'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 3: The entrepreneurs (3) _______ sustainable solutions.', options: ['was pioneered', 'pioneering', 'pioneered', 'which pioneered'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 4: Present corporations (4) _______ investment possibilities.', options: ['to', 'for', 'in', 'with'], correct: 3},
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 5: Vietnam is (5) _______ out all the stops.', options: ['pulling', 'pushing', 'taking', 'putting'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass3', question: 'Câu 6: Committed (6) _______ our global reach.', options: ['to expand', 'expanding', 'to expanding', 'expand'], correct: 2},
        
        // Passage 4
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 1: Transforming (1) _______ education.', options: ['traditional', 'tradition', 'traditionalism', 'traditionalist'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 2: Delivers (2) _______ that revolutionize learning.', options: ['learning personalized solutions', 'personalized learning solutions', 'solutions learning personalized', 'learning solutions personalized'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 3: The students (3) _______ in Mind Gym.', options: ['was enrolled', 'enrolling', 'enrolled', 'which enrolled'], correct: 2},
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 4: Explain concepts (4) _______ students.', options: ['for', 'at', 'in', 'to'], correct: 3},
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 5: Absolutely (5) _______ it.', options: ['mastering', 'crushing', 'dominating', 'leading'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass4', question: 'Câu 6: While (6) _______ a balanced schedule.', options: ['maintaining', 'to maintain', 'to maintaining', 'maintain'], correct: 0},
        
        // Passage 5
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 1: Into engaging (1) _______ experiences.', options: ['digitally', 'digitize', 'digital', 'digitalness'], correct: 2},
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 2: Features innovative (2) _______.', options: ['media social integration', 'integration media social', 'social integration media', 'social media integration'], correct: 3},
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 3: Students (3) _______ our courses.', options: ['attending', 'was attended', 'which attended', 'attended'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 4: Transmits modules (4) _______ participants.', options: ['for', 'to', 'with', 'about'], correct: 1},
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 5: Still (5) _______ its feet.', options: ['dragging', 'finding', 'moving', 'testing'], correct: 0},
        {type: 'tracNghiem', passage: 'langKnow2Pass5', question: 'Câu 6: Striving (6) _______ core fundamentals.', options: ['master', 'mastering', 'to master', 'to mastering'], correct: 2}
      ]
    },

    // SENTENCE BUILDING
    {
      id: 'sentence-building',
      name: 'Sentence Building',
      questions: [
        {type: 'writing', prompt: 'Unfortunately, / many parts / world / men / women / have / unequal / statuses.', answer: 'Unfortunately, in many parts of the world men and women have an unequal status.'},
        {type: 'writing', prompt: 'In / places / women / have / work / longer / earn / same amount / money / men.', answer: 'In some places, women have to work longer to earn the same amount of money as men.'},
        {type: 'writing', prompt: 'Girls / face / serious / health / risk / if / they / married / young.', answer: 'Girls can face serious health risks if they get married young.'},
        {type: 'writing', prompt: 'What / educated girls / do / their families / children?', answer: 'What can educate girls do for their children and families?'},
        {type: 'writing', prompt: 'Can men / women / given / equal opportunities / workplace?', answer: 'Can men and women be given equal opportunities in the workplace?'},
        {type: 'writing', prompt: 'Viet Nam/ be / one / many countries / be / willing / join / peacekeeping activities / regions.', answer: 'Viet Nam is one of many countries that is willing to join the peacekeeping activities in the region.'},
        {type: 'writing', prompt: 'Ha Noi / become / one / most attractive / destinations / foreign visitors.', answer: 'Ha Noi has become one of the most attractive destinations for foreign visitors.'},
        {type: 'writing', prompt: 'By / join / more international organisations, our country / become / member / higher community.', answer: 'By joining more international organizations, our country has become a member of a higher community.'},
        {type: 'writing', prompt: 'Many / young people / nowadays / prefer / working / more competitive / working environment.', answer: 'Many young people nowadays prefer working in a more competitive working environment.'},
        {type: 'writing', prompt: 'Various / job opportunities / be now available / young people / province.', answer: 'Various job opportunities are now available for young people in the province.'}
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
