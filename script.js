    // --- Scroll Spy for Nav Highlight ---
    const sectionIds = [
      'guide',
      'binary',
      'sorting',
      'visual',
      'quiz'
    ];
    const navLinks = [
      document.getElementById('navGuideLink'),
      document.getElementById('navBinaryLink'),
      document.getElementById('navSortingLink'),
      document.getElementById('navVisualLink'),
      document.getElementById('navQuizLink')
    ];

    function onScrollSpy() {
      let current = '';
      const threshold = window.innerHeight * 0.33; // Section is active if at least 1/3 visible
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > threshold) {
            current = id;
          }
        }
      }
      navLinks.forEach((link, i) => {
        if (link) link.classList.toggle('active', sectionIds[i] === current);
      });
    }
    window.addEventListener('scroll', onScrollSpy);
    window.addEventListener('resize', onScrollSpy);
    document.addEventListener('DOMContentLoaded', onScrollSpy);
    const binaryArrayInput = document.getElementById('binaryArray');
    const binaryTargetInput = document.getElementById('binaryTarget');
    const binaryView = document.getElementById('binaryView');
    const binaryStatus = document.getElementById('binaryStatus');

    const binaryState = {
      array: [],
      target: null,
      low: 0,
      high: -1,
      mid: -1,
      done: false,
      foundIndex: -1
    };

    function parseNumbers(text) {
      return text
        .split(',')
        .map(v => Number(v.trim()))
        .filter(v => Number.isFinite(v));
    }

    function renderBinary() {
      binaryView.innerHTML = '';
      if (!binaryState.array.length) {
        binaryView.innerHTML = `<span style="color: var(--muted);">${t('noDataLoaded')}</span>`;
        return;
      }

      binaryState.array.forEach((value, index) => {
        const el = document.createElement('div');
        el.className = 'cell';
        if (index === binaryState.low) el.classList.add('low');
        if (index === binaryState.high) el.classList.add('high');
        if (index === binaryState.mid) el.classList.add('mid');
        if (index === binaryState.foundIndex) el.classList.add('found');
        el.textContent = value;
        binaryView.appendChild(el);
      });
    }

    function startBinary() {
      const values = parseNumbers(binaryArrayInput.value).sort((a, b) => a - b);
      const target = Number(binaryTargetInput.value);

      if (!values.length || !Number.isFinite(target)) {
        binaryStatus.textContent = t('pleaseProvideNumbers');
        return;
      }

      binaryArrayInput.value = values.join(',');
      binaryState.array = values;
      binaryState.target = target;
      binaryState.low = 0;
      binaryState.high = values.length - 1;
      binaryState.mid = -1;
      binaryState.done = false;
      binaryState.foundIndex = -1;

      renderBinary();
      binaryStatus.textContent = t('startedClickNext');
    }

    function randomBinaryInput() {
      const values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10).sort((a, b) => a - b);
      const target = values[Math.floor(Math.random() * values.length)];
      binaryArrayInput.value = values.join(',');
      binaryTargetInput.value = String(target);
      startBinary();
      binaryStatus.textContent = t('binaryRandomGenerated');
    }

    function stepBinary() {
      if (!binaryState.array.length) {
        binaryStatus.textContent = t('clickStartFirst');
        return;
      }
      if (binaryState.done) {
        binaryStatus.textContent = t('searchAlreadyDone');
        return;
      }

      if (binaryState.low > binaryState.high) {
        binaryState.done = true;
        binaryState.mid = -1;
        binaryStatus.textContent = t('targetNotFound');
        renderBinary();
        return;
      }

      binaryState.mid = Math.floor((binaryState.low + binaryState.high) / 2);
      const midValue = binaryState.array[binaryState.mid];

      if (midValue === binaryState.target) {
        binaryState.foundIndex = binaryState.mid;
        binaryState.done = true;
        binaryStatus.textContent = t('foundAtIndex')(binaryState.target, binaryState.mid);
      } else if (midValue < binaryState.target) {
        binaryStatus.textContent = t('moveRight')(binaryState.mid, midValue);
        binaryState.low = binaryState.mid + 1;
      } else {
        binaryStatus.textContent = t('moveLeft')(binaryState.mid, midValue);
        binaryState.high = binaryState.mid - 1;
      }

      renderBinary();
    }

    function resetBinary() {
      binaryState.array = [];
      binaryState.target = null;
      binaryState.low = 0;
      binaryState.high = -1;
      binaryState.mid = -1;
      binaryState.done = false;
      binaryState.foundIndex = -1;
      binaryView.innerHTML = '';
      binaryStatus.textContent = t('resetComplete');
    }

    document.getElementById('binaryStart').addEventListener('click', startBinary);
    document.getElementById('binaryRandom').addEventListener('click', randomBinaryInput);
    document.getElementById('binaryStep').addEventListener('click', stepBinary);
    document.getElementById('binaryReset').addEventListener('click', resetBinary);

    const algoData = {
      en: {
        bubble: {
          title: 'Bubble Sort',
          desc: 'Compares adjacent elements and swaps them when they are out of order.',
          steps: [
            'Start from index 0 to n-2',
            'Compare arr[j] and arr[j+1]',
            'Swap if arr[j] > arr[j+1]',
            'After each pass, largest value goes to the end'
          ],
          code: `function bubbleSort(arr) {\n  const a = [...arr];\n  for (let i = 0; i < a.length - 1; i++) {\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];\n    }\n  }\n  return a;\n}`
        },
        selection: {
          title: 'Selection Sort',
          desc: 'Finds the minimum element in the unsorted part and places it at the current position.',
          steps: [
            'Set i from 0 to n-2',
            'Find min index from i..n-1',
            'Swap arr[i] with arr[minIndex]',
            'Move to next i'
          ],
          code: `function selectionSort(arr) {\n  const a = [...arr];\n  for (let i = 0; i < a.length - 1; i++) {\n    let min = i;\n    for (let j = i + 1; j < a.length; j++) {\n      if (a[j] < a[min]) min = j;\n    }\n    [a[i], a[min]] = [a[min], a[i]];\n  }\n  return a;\n}`
        },
        insertion: {
          title: 'Insertion Sort',
          desc: 'Builds a sorted portion from left to right by inserting each element into its correct position.',
          steps: [
            'Assume first element is sorted',
            'Pick current key from unsorted part',
            'Shift larger elements one step right',
            'Insert key at correct location'
          ],
          code: `function insertionSort(arr) {\n  const a = [...arr];\n  for (let i = 1; i < a.length; i++) {\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) {\n      a[j + 1] = a[j];\n      j--;\n    }\n    a[j + 1] = key;\n  }\n  return a;\n}`
        }
      },
      bn: {
        bubble: {
          title: 'বাবল সর্ট',
          desc: 'পাশাপাশি দুইটি উপাদান তুলনা করে, ভুল ক্রমে থাকলে অদলবদল করে।',
          steps: [
            'ইন্ডেক্স 0 থেকে n-2 পর্যন্ত শুরু করুন',
            'arr[j] এবং arr[j+1] তুলনা করুন',
            'arr[j] > arr[j+1] হলে swap করুন',
            'প্রতি pass শেষে সবচেয়ে বড় মান শেষে চলে যায়'
          ],
          code: `function bubbleSort(arr) {\n  const a = [...arr];\n  for (let i = 0; i < a.length - 1; i++) {\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];\n    }\n  }\n  return a;\n}`
        },
        selection: {
          title: 'সিলেকশন সর্ট',
          desc: 'Unsorted অংশ থেকে সর্বনিম্ন উপাদান খুঁজে বর্তমান অবস্থানে বসায়।',
          steps: [
            'i কে 0 থেকে n-2 পর্যন্ত নিন',
            'i..n-1 থেকে min index খুঁজুন',
            'arr[i] এবং arr[minIndex] swap করুন',
            'পরের i তে যান'
          ],
          code: `function selectionSort(arr) {\n  const a = [...arr];\n  for (let i = 0; i < a.length - 1; i++) {\n    let min = i;\n    for (let j = i + 1; j < a.length; j++) {\n      if (a[j] < a[min]) min = j;\n    }\n    [a[i], a[min]] = [a[min], a[i]];\n  }\n  return a;\n}`
        },
        insertion: {
          title: 'ইনসার্শন সর্ট',
          desc: 'বাম দিক থেকে ধীরে ধীরে sorted অংশ তৈরি করে, প্রতিটি উপাদানকে সঠিক স্থানে বসায়।',
          steps: [
            'প্রথম উপাদানকে sorted ধরুন',
            'Unsorted অংশ থেকে key নিন',
            'বড় উপাদানগুলো এক ধাপ ডানে সরান',
            'key-কে সঠিক স্থানে insert করুন'
          ],
          code: `function insertionSort(arr) {\n  const a = [...arr];\n  for (let i = 1; i < a.length; i++) {\n    const key = a[i];\n    let j = i - 1;\n    while (j >= 0 && a[j] > key) {\n      a[j + 1] = a[j];\n      j--;\n    }\n    a[j + 1] = key;\n  }\n  return a;\n}`
        }
      }
    };

    const sortState = {
      algorithm: 'bubble',
      original: [],
      array: [],
      i: 0,
      j: 0,
      min: 0,
      key: null,
      done: false,
      running: null,
      activeA: -1,
      activeB: -1,
      completedSteps: 0,
      stepHistory: []
    };

    const algoTitle = document.getElementById('algoTitle');
    const algoDesc = document.getElementById('algoDesc');
    const algoSteps = document.getElementById('algoSteps');
    const algoCode = document.getElementById('algoCode');
    const sortBars = document.getElementById('sortBars');
    const sortStatus = document.getElementById('sortStatus');
    const sortHistoryTitle = document.getElementById('sortHistoryTitle');
    const sortHistoryList = document.getElementById('sortHistoryList');
    const sortArrayInput = document.getElementById('sortArrayInput');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizAnswers = document.getElementById('quizAnswers');
    const quizResult = document.getElementById('quizResult');
    const quizMeta = document.getElementById('quizMeta');
    const quizResultCard = document.getElementById('quizResultCard');
    const quizTimerPill = document.getElementById('quizTimerPill');
    const quizScorePill = document.getElementById('quizScorePill');
    const quizStartTimerBtn = document.getElementById('quizStartTimer');
    const nextQuizBtn = document.getElementById('nextQuiz');
    const resetQuizBtn = document.getElementById('resetQuiz');
    const sortLoadBtn = document.getElementById('sortLoad');
    const sortRandomBtn = document.getElementById('sortRandom');
    const sortStepBtn = document.getElementById('sortStep');
    const sortRunBtn = document.getElementById('sortRun');
    const sortResetBtn = document.getElementById('sortReset');
    const algoTabButtons = document.querySelectorAll('.tab');
    const langToggleBtn = document.getElementById('langToggle');
    const QUIZ_TIME_PER_QUESTION = 20;
    let currentLang = 'en';

    const i18n = {
      en: {
        brand: 'Algorithm Academy',
        navGuide: 'Guide',
        navBinary: 'Binary Search',
        navSorting: '3 Sorting',
        navVisual: 'Visualizer',
        navQuiz: 'Quiz',
        heroTitle: 'Learn <span class="gradient">Binary Search</span> and the <span class="gradient">3 Core Sorting</span> Algorithms',
        heroLead: 'This page has one goal: to help you master Binary Search, Bubble Sort, Selection Sort, and Insertion Sort through clear explanations, complexity analysis, code, and interactive simulations.',
        heroGetTitle: 'What you will get',
        heroGetList: [
          'Clear explanations and real use cases',
          'Complexity and comparison table',
          'Step-by-step binary search simulator',
          'Step-by-step sorting visualizer',
          'JavaScript implementation code'
        ],
        heroPillBeginner: 'Beginner Friendly',
        heroPillInterview: 'Interview Focused',
        heroPillStep: 'Step by Step',
        guideTitle: 'Study Guide',
        studyHowTitle: 'How to Study This Page',
        studyChecklist: [
          'First read concept + complexity of Binary Search.',
          'Run the binary simulator until you can predict each next step.',
          'Compare all 3 sorting algorithms from the table.',
          'Use sorting visualizer with your own input values.',
          'Finish with quiz and try to score full marks.'
        ],
        interviewTipsTitle: 'Interview Tips',
        interviewTipsList: [
          'Always mention pre-condition for Binary Search: input must be sorted.',
          'For nearly sorted arrays, Insertion Sort often performs very well.',
          'Selection Sort does minimal swaps, useful when swap cost is high.',
          'Bubble Sort is easy to explain and good for learning swap logic.'
        ],
        interviewProTip: 'Pro Tip: Explain both <strong>time complexity</strong> and <strong>why</strong> it occurs.',
        binaryTitle: 'Binary Search — Complete Explanation',
        binaryDefTitle: 'Definition',
        binaryDefText: 'Binary Search finds a target value in a sorted array by repeatedly checking the middle element and eliminating half of the search space.',
        binaryPreTitle: 'Pre-condition',
        binaryPreList: ['Array must be sorted (ascending)', 'Works on random-access collections (like arrays)'],
        binaryHowTitle: 'How it Works',
        binaryHowList: [
          'Set low = 0 and high = n - 1',
          'Compute mid = floor((low + high) / 2)',
          'If array[mid] == target, found',
          'If target > array[mid], search right half',
          'If target < array[mid], search left half'
        ],
        binaryComplexityTitle: 'Complexity',
        binaryComplexityHead: '<tr><th>Case</th><th>Time</th><th>Space (Iterative)</th></tr>',
        binaryComplexityBody: '<tr><td>Best</td><td>O(1)</td><td>O(1)</td></tr><tr><td>Average</td><td>O(log n)</td><td>O(1)</td></tr><tr><td>Worst</td><td>O(log n)</td><td>O(1)</td></tr>',
        binarySimTitle: 'Binary Search Step Simulator',
        binaryCodeTitle: 'JavaScript Code',
        binaryDryRunTitle: 'Binary Search Dry Run (Target = 23)',
        binaryDryRunHead: '<tr><th>Step</th><th>Low</th><th>High</th><th>Mid</th><th>Action</th></tr>',
        binaryDryRunBody: '<tr><td>1</td><td>0</td><td>9</td><td>4</td><td>16 < 23 → Right</td></tr><tr><td>2</td><td>5</td><td>9</td><td>7</td><td>56 > 23 → Left</td></tr><tr><td>3</td><td>5</td><td>6</td><td>5</td><td>Found 23</td></tr>',
        binaryMistakesTitle: 'Common Mistakes',
        binaryMistakesList: [
          'Applying Binary Search on unsorted data.',
          'Forgetting to update low/high after comparison.',
          'Infinite loops due to incorrect loop conditions.',
          'Ignoring edge cases like empty array.'
        ],
        binaryWhereTitle: 'Where to Use',
        binaryWhereText: 'Use it for lookups in sorted lists, searching sorted logs, and finding boundaries in monotonic arrays.',
        sortingTitle: 'Three Core Sorting Algorithms',
        sortingCompareTitle: 'Comparison Table',
        sortingCompareHead: '<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>',
        sortingCompareBody: '<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr><tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>No</td></tr><tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>',
        algoStepsTitle: 'Steps',
        algoCodeTitle: 'Algorithm Code',
        sortingVisualTitle: 'Sorting Visualizer',
        sortChooseTitle: 'When to Choose Which Sort?',
        sortChooseList: [
          '<strong>Bubble Sort:</strong> Best for learning and very small arrays.',
          '<strong>Selection Sort:</strong> Useful when writes/swaps are expensive.',
          '<strong>Insertion Sort:</strong> Great for nearly sorted arrays and online insertion.'
        ],
        sortRealTitle: 'Real World Examples',
        sortRealList: [
          'Insertion Sort appears when arranging cards in your hand.',
          'Selection-like logic appears when repeatedly picking the minimum-priority task.',
          'Bubble Sort is great for understanding adjacent swaps in local optimization.'
        ],
        tabBubble: 'Bubble Sort',
        tabSelection: 'Selection Sort',
        tabInsertion: 'Insertion Sort',
        quizTitle: 'Knowledge Check',
        footerLead: 'Focused learning page: Binary Search + Bubble / Selection / Insertion Sort • 2026',
        noDataLoaded: 'No data loaded.',
        start: 'Start',
        nextStep: 'Next Step',
        reset: 'Reset',
        loadInput: 'Load Input',
        random: 'Random',
        runFull: 'Run Full',
        startTimer: 'Start Timer',
        nextQuestion: 'Next Question',
        resetQuiz: 'Reset Quiz',
        skipQuestion: 'Skip Question',
        completed: 'Completed',
        langBtn: 'বাংলা',
        binaryInitial: 'Load values and click Start.',
        sortInitial: 'Choose algorithm and click Load Input.',
        pleaseProvideNumbers: 'Please provide valid numbers and a target.',
        startedClickNext: 'Started. Click Next Step to continue.',
        clickStartFirst: 'Click Start first.',
        searchAlreadyDone: 'Search already completed. Click Reset or Start again.',
        targetNotFound: 'Target not found.',
        foundAtIndex: (target, index) => `Found target ${target} at index ${index}.`,
        moveRight: (mid, value) => `mid=${mid}, value=${value} < target. Move right.`,
        moveLeft: (mid, value) => `mid=${mid}, value=${value} > target. Move left.`,
        resetComplete: 'Reset complete. Enter values and click Start.',
        sortProvideValid: 'Please provide a valid array for sorting.',
        sortDataLoaded: 'Data loaded. Click Next Step or Run Full.',
        sortRandomGenerated: 'Random array generated.',
        binaryRandomGenerated: 'Random sorted array generated. Click Next Step to continue.',
        sortLoadFirst: 'Load input first.',
        sortAlreadyComplete: 'Sorting already completed.',
        sortCompleted: 'Sorting completed.',
        sortNothingToReset: 'Nothing to reset yet. Load data first.',
        sortResetDone: 'Reset to original input.',
        sortSwitchedTo: title => `Switched to ${title}.`,
        sortHistoryTitle: 'Completed Steps',
        sortHistoryEmpty: 'No completed steps yet.',
        stepWord: 'Step',
        sortBubbleStepComplete: (stepNo, snapshot) => `Bubble pass ${stepNo} complete. Array: ${snapshot}`,
        sortSelectionStepComplete: (stepNo, snapshot) => `Selection step ${stepNo} complete. Array: ${snapshot}`,
        sortInsertionStepComplete: (stepNo, snapshot) => `Insertion step ${stepNo} complete. Array: ${snapshot}`,
        sortFinalComplete: snapshot => `Final sorted array: ${snapshot}`,
        timerLabel: 'Time Left',
        finalLabel: 'FINAL',
        timerStartedMsg: 'Timer started. Select one option to submit this question.',
        timeUpMsg: 'Time is up. Loading the next question...',
        quizCompleted: 'Quiz Completed 🎉',
        finalScore: (score, total, percent, marks) => `Final Score: ${score}/${total} (${percent}%). Total Marks: ${marks}`,
        assessmentComplete: 'Assessment Complete',
        totalQuestions: 'Total Questions',
        totalMarks: 'Total Marks',
        timerAutoMsg: 'Timer starts automatically. Select one option to submit this question.',
        timerClickMsg: 'Click Start Timer, then select one option.',
        questionLabel: 'Question',
        markLabel: 'Mark',
        timerShort: 'Timer',
        answerSubmitted: 'Answer submitted. Loading the next question...',
        notAnswered: 'Not Answered',
        notAnsweredTimeUp: 'Not Answered (Time Up)',
        resultQuestions: 'Questions',
        resultCorrect: 'Correct',
        resultWrong: 'Wrong',
        resultMarks: 'Marks',
        resultPercent: 'Percentage',
        scoreLabel: 'Score',
        yourAnswer: 'Your Answer',
        correctAnswer: 'Correct Answer',
        selectedLabel: 'Selected',
        checkedIndex: index => `Checked index ${index}.`,
        newMinAt: index => `New min found at index ${index}.`,
        placedMinAt: index => `Placed minimum at position ${index}.`,
        shiftedAt: index => `Shifted value at index ${index}.`,
        insertedAt: index => `Inserted key at index ${index}.`,
        swappedIndexes: (a, b) => `Swapped index ${a} and ${b}.`,
        comparedNoSwap: (a, b) => `Compared index ${a} and ${b}, no swap.`
      },
      bn: {
        brand: 'অ্যালগরিদম একাডেমি',
        navGuide: 'গাইড',
        navBinary: 'বাইনারি সার্চ',
        navSorting: '৩টি সর্টিং',
        navVisual: 'ভিজ্যুয়ালাইজার',
        navQuiz: 'কুইজ',
        heroTitle: '<span class="gradient">বাইনারি সার্চ</span> এবং <span class="gradient">৩টি মূল সর্টিং</span> অ্যালগরিদম শিখুন',
        heroLead: 'এই পেজের একটাই লক্ষ্য: স্পষ্ট ব্যাখ্যা, কমপ্লেক্সিটি বিশ্লেষণ, কোড এবং ইন্টারঅ্যাকটিভ সিমুলেশনের মাধ্যমে Binary Search, Bubble Sort, Selection Sort এবং Insertion Sort ভালোভাবে শেখানো।',
        heroGetTitle: 'আপনি যা পাবেন',
        heroGetList: [
          'সহজ ভাষায় ব্যাখ্যা এবং বাস্তব উদাহরণ',
          'কমপ্লেক্সিটি ও তুলনামূলক টেবিল',
          'ধাপে ধাপে বাইনারি সার্চ সিমুলেটর',
          'ধাপে ধাপে সর্টিং ভিজ্যুয়ালাইজার',
          'JavaScript ইমপ্লিমেন্টেশন কোড'
        ],
        heroPillBeginner: 'বিগিনার ফ্রেন্ডলি',
        heroPillInterview: 'ইন্টারভিউ ফোকাসড',
        heroPillStep: 'স্টেপ বাই স্টেপ',
        guideTitle: 'স্টাডি গাইড',
        studyHowTitle: 'এই পেজ কীভাবে পড়বেন',
        studyChecklist: [
          'প্রথমে Binary Search এর কনসেপ্ট ও কমপ্লেক্সিটি পড়ুন।',
          'বাইনারি সিমুলেটর চালিয়ে পরের স্টেপ আগে থেকে অনুমান করার অভ্যাস করুন।',
          'টেবিল দেখে ৩টি sorting algorithm তুলনা করুন।',
          'নিজের ভ্যালু দিয়ে sorting visualizer ব্যবহার করুন।',
          'শেষে কুইজ দিয়ে ফুল মার্কস পাওয়ার চেষ্টা করুন।'
        ],
        interviewTipsTitle: 'ইন্টারভিউ টিপস',
        interviewTipsList: [
          'Binary Search বলার সময় pre-condition (input sorted হতে হবে) অবশ্যই উল্লেখ করুন।',
          'Nearly sorted array হলে Insertion Sort অনেক সময় ভালো কাজ করে।',
          'Swap cost বেশি হলে Selection Sort উপকারী হতে পারে।',
          'Swap logic বোঝাতে Bubble Sort খুব সহজ।'
        ],
        interviewProTip: 'প্রো টিপ: শুধু <strong>time complexity</strong> না, <strong>কেন</strong> এমন হয় সেটাও ব্যাখ্যা করুন।',
        binaryTitle: 'বাইনারি সার্চ — সম্পূর্ণ ব্যাখ্যা',
        binaryDefTitle: 'সংজ্ঞা',
        binaryDefText: 'Binary Search একটি sorted array-এ target value খুঁজে বের করে; প্রতি ধাপে middle element দেখে search space অর্ধেক করে।',
        binaryPreTitle: 'পূর্বশর্ত',
        binaryPreList: ['Array sorted (ascending) হতে হবে', 'Random-access collection (যেমন array)-এ ভালো কাজ করে'],
        binaryHowTitle: 'কীভাবে কাজ করে',
        binaryHowList: [
          'low = 0 এবং high = n - 1 নিন',
          'mid = floor((low + high) / 2) হিসাব করুন',
          'array[mid] == target হলে পাওয়া গেছে',
          'target > array[mid] হলে ডান পাশে সার্চ করুন',
          'target < array[mid] হলে বাম পাশে সার্চ করুন'
        ],
        binaryComplexityTitle: 'কমপ্লেক্সিটি',
        binaryComplexityHead: '<tr><th>কেস</th><th>সময়</th><th>স্পেস (Iterative)</th></tr>',
        binaryComplexityBody: '<tr><td>সেরা</td><td>O(1)</td><td>O(1)</td></tr><tr><td>গড়</td><td>O(log n)</td><td>O(1)</td></tr><tr><td>খারাপতম</td><td>O(log n)</td><td>O(1)</td></tr>',
        binarySimTitle: 'বাইনারি সার্চ স্টেপ সিমুলেটর',
        binaryCodeTitle: 'JavaScript কোড',
        binaryDryRunTitle: 'বাইনারি সার্চ ড্রাই রান (Target = 23)',
        binaryDryRunHead: '<tr><th>ধাপ</th><th>Low</th><th>High</th><th>Mid</th><th>অ্যাকশন</th></tr>',
        binaryDryRunBody: '<tr><td>1</td><td>0</td><td>9</td><td>4</td><td>16 < 23 → ডান</td></tr><tr><td>2</td><td>5</td><td>9</td><td>7</td><td>56 > 23 → বাম</td></tr><tr><td>3</td><td>5</td><td>6</td><td>5</td><td>23 পাওয়া গেছে</td></tr>',
        binaryMistakesTitle: 'সাধারণ ভুল',
        binaryMistakesList: [
          'Unsorted ডেটাতে Binary Search প্রয়োগ করা।',
          'Comparison এর পরে low/high আপডেট করতে ভুলে যাওয়া।',
          'ভুল loop condition এর কারণে infinite loop হওয়া।',
          'Empty array-এর মতো edge case না ধরা।'
        ],
        binaryWhereTitle: 'কোথায় ব্যবহার করবেন',
        binaryWhereText: 'Sorted list এ lookup, sorted log search এবং monotonic array-এ boundary খুঁজতে এটি ব্যবহার করুন।',
        sortingTitle: 'তিনটি মূল সর্টিং অ্যালগরিদম',
        sortingCompareTitle: 'তুলনামূলক টেবিল',
        sortingCompareHead: '<tr><th>অ্যালগরিদম</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>',
        sortingCompareBody: '<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr><tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>না</td></tr><tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr>',
        algoStepsTitle: 'ধাপসমূহ',
        algoCodeTitle: 'অ্যালগরিদম কোড',
        sortingVisualTitle: 'সর্টিং ভিজ্যুয়ালাইজার',
        sortChooseTitle: 'কোন sort কখন ব্যবহার করবেন?',
        sortChooseList: [
          '<strong>Bubble Sort:</strong> শেখার জন্য এবং খুব ছোট array-এর জন্য ভালো।',
          '<strong>Selection Sort:</strong> write/swap খরচ বেশি হলে উপকারী।',
          '<strong>Insertion Sort:</strong> nearly sorted array এবং online insertion-এ ভালো।'
        ],
        sortRealTitle: 'রিয়েল ওয়ার্ল্ড উদাহরণ',
        sortRealList: [
          'হাতে তাস সাজানোর সময় Insertion Sort-এর মতো কাজ করা হয়।',
          'বারবার minimum-priority task বাছাই করা Selection-এর মতো লজিক।',
          'Adjacent swap বোঝার জন্য Bubble Sort দারুণ।'
        ],
        tabBubble: 'বাবল সর্ট',
        tabSelection: 'সিলেকশন সর্ট',
        tabInsertion: 'ইনসার্শন সর্ট',
        quizTitle: 'জ্ঞান যাচাই কুইজ',
        footerLead: 'ফোকাসড লার্নিং পেজ: Binary Search + Bubble / Selection / Insertion Sort • 2026',
        noDataLoaded: 'কোনো ডেটা লোড করা হয়নি।',
        start: 'শুরু',
        nextStep: 'পরের ধাপ',
        reset: 'রিসেট',
        loadInput: 'ইনপুট লোড',
        random: 'র‌্যান্ডম',
        runFull: 'ফুল রান',
        startTimer: 'টাইমার শুরু',
        nextQuestion: 'পরের প্রশ্ন',
        resetQuiz: 'কুইজ রিসেট',
        skipQuestion: 'প্রশ্ন স্কিপ',
        completed: 'সম্পন্ন',
        langBtn: 'English',
        binaryInitial: 'ভ্যালু দিন এবং Start ক্লিক করুন।',
        sortInitial: 'অ্যালগরিদম বেছে Load Input ক্লিক করুন।',
        pleaseProvideNumbers: 'সঠিক সংখ্যা এবং target দিন।',
        startedClickNext: 'শুরু হয়েছে। চালাতে Next Step ক্লিক করুন।',
        clickStartFirst: 'আগে Start ক্লিক করুন।',
        searchAlreadyDone: 'সার্চ শেষ হয়েছে। Reset বা Start again ক্লিক করুন।',
        targetNotFound: 'Target পাওয়া যায়নি।',
        foundAtIndex: (target, index) => `Target ${target} index ${index} এ পাওয়া গেছে।`,
        moveRight: (mid, value) => `mid=${mid}, value=${value} < target। ডানে যান।`,
        moveLeft: (mid, value) => `mid=${mid}, value=${value} > target। বামে যান।`,
        resetComplete: 'রিসেট সম্পন্ন। ভ্যালু দিন এবং Start ক্লিক করুন।',
        sortProvideValid: 'সর্টিং এর জন্য সঠিক array দিন।',
        sortDataLoaded: 'ডেটা লোড হয়েছে। Next Step বা Run Full ক্লিক করুন।',
        sortRandomGenerated: 'র‌্যান্ডম array তৈরি হয়েছে।',
        binaryRandomGenerated: 'র‌্যান্ডম sorted array তৈরি হয়েছে। চালাতে Next Step ক্লিক করুন।',
        sortLoadFirst: 'আগে ইনপুট লোড করুন।',
        sortAlreadyComplete: 'Sorting ইতোমধ্যে সম্পন্ন।',
        sortCompleted: 'Sorting সম্পন্ন হয়েছে।',
        sortNothingToReset: 'রিসেট করার মতো কিছু নেই। আগে ডেটা লোড করুন।',
        sortResetDone: 'মূল ইনপুটে রিসেট করা হয়েছে।',
        sortSwitchedTo: title => `${title} এ পরিবর্তন করা হয়েছে।`,
        sortHistoryTitle: 'সম্পন্ন ধাপসমূহ',
        sortHistoryEmpty: 'এখনও কোনো ধাপ সম্পন্ন হয়নি।',
        stepWord: 'ধাপ',
        sortBubbleStepComplete: (stepNo, snapshot) => `Bubble pass ${stepNo} সম্পন্ন। Array: ${snapshot}`,
        sortSelectionStepComplete: (stepNo, snapshot) => `Selection ধাপ ${stepNo} সম্পন্ন। Array: ${snapshot}`,
        sortInsertionStepComplete: (stepNo, snapshot) => `Insertion ধাপ ${stepNo} সম্পন্ন। Array: ${snapshot}`,
        sortFinalComplete: snapshot => `চূড়ান্ত sorted array: ${snapshot}`,
        timerLabel: 'বাকি সময়',
        finalLabel: 'শেষ',
        timerStartedMsg: 'টাইমার শুরু হয়েছে। এই প্রশ্ন জমা দিতে একটি অপশন সিলেক্ট করুন।',
        timeUpMsg: 'সময় শেষ। পরের প্রশ্ন লোড হচ্ছে...',
        quizCompleted: 'কুইজ সম্পন্ন 🎉',
        finalScore: (score, total, percent, marks) => `চূড়ান্ত স্কোর: ${score}/${total} (${percent}%). মোট নম্বর: ${marks}`,
        assessmentComplete: 'মূল্যায়ন সম্পন্ন',
        totalQuestions: 'মোট প্রশ্ন',
        totalMarks: 'মোট নম্বর',
        timerAutoMsg: 'টাইমার অটো শুরু হয়েছে। প্রশ্ন জমা দিতে একটি অপশন সিলেক্ট করুন।',
        timerClickMsg: 'Start Timer ক্লিক করে একটি অপশন সিলেক্ট করুন।',
        questionLabel: 'প্রশ্ন',
        markLabel: 'নম্বর',
        timerShort: 'টাইমার',
        answerSubmitted: 'উত্তর জমা হয়েছে। পরের প্রশ্ন লোড হচ্ছে...',
        notAnswered: 'উত্তর দেওয়া হয়নি',
        notAnsweredTimeUp: 'উত্তর দেওয়া হয়নি (সময় শেষ)',
        resultQuestions: 'প্রশ্ন',
        resultCorrect: 'সঠিক',
        resultWrong: 'ভুল',
        resultMarks: 'নম্বর',
        resultPercent: 'শতকরা',
        scoreLabel: 'স্কোর',
        yourAnswer: 'আপনার উত্তর',
        correctAnswer: 'সঠিক উত্তর',
        selectedLabel: 'নির্বাচিত',
        checkedIndex: index => `index ${index} চেক করা হয়েছে।`,
        newMinAt: index => `নতুন min index ${index} এ পাওয়া গেছে।`,
        placedMinAt: index => `position ${index} এ minimum বসানো হয়েছে।`,
        shiftedAt: index => `index ${index} এর মান ডানে সরানো হয়েছে।`,
        insertedAt: index => `index ${index} এ key insert করা হয়েছে।`,
        swappedIndexes: (a, b) => `index ${a} এবং ${b} swap করা হয়েছে।`,
        comparedNoSwap: (a, b) => `index ${a} এবং ${b} তুলনা করা হয়েছে, swap হয়নি।`
      }
    };

    function t(key) {
      return i18n[currentLang][key] || i18n.en[key] || key;
    }

    function setListHtml(id, items) {
      const el = document.getElementById(id);
      if (!el || !Array.isArray(items)) return;
      el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
    }

    function setCheckListHtml(id, items) {
      const el = document.getElementById(id);
      if (!el || !Array.isArray(items)) return;
      el.innerHTML = items.map(item => `<div class="check">${item}</div>`).join('');
    }

    function applyLanguage() {
      document.documentElement.lang = currentLang === 'bn' ? 'bn' : 'en';
      document.getElementById('brandLabel').textContent = t('brand');
      document.getElementById('navGuideLink').textContent = t('navGuide');
      document.getElementById('navBinaryLink').textContent = t('navBinary');
      document.getElementById('navSortingLink').textContent = t('navSorting');
      var navVisual = document.getElementById('navVisualLink');
      if (navVisual) navVisual.textContent = t('navVisual');
      document.getElementById('navQuizLink').textContent = t('navQuiz');
      document.getElementById('heroTitle').innerHTML = t('heroTitle');
      document.getElementById('heroLead').textContent = t('heroLead');
      document.getElementById('heroGetTitle').textContent = t('heroGetTitle');
      setListHtml('heroGetList', t('heroGetList'));
      document.getElementById('heroPillBeginner').textContent = t('heroPillBeginner');
      document.getElementById('heroPillInterview').textContent = t('heroPillInterview');
      document.getElementById('heroPillStep').textContent = t('heroPillStep');
      document.getElementById('guideTitle').textContent = t('guideTitle');
      document.getElementById('studyHowTitle').textContent = t('studyHowTitle');
      setCheckListHtml('studyChecklist', t('studyChecklist'));
      document.getElementById('interviewTipsTitle').textContent = t('interviewTipsTitle');
      setListHtml('interviewTipsList', t('interviewTipsList'));
      document.getElementById('interviewProTip').innerHTML = t('interviewProTip');
      document.getElementById('binaryTitle').textContent = t('binaryTitle');
      document.getElementById('binaryDefTitle').textContent = t('binaryDefTitle');
      document.getElementById('binaryDefText').textContent = t('binaryDefText');
      document.getElementById('binaryPreTitle').textContent = t('binaryPreTitle');
      setListHtml('binaryPreList', t('binaryPreList'));
      document.getElementById('binaryHowTitle').textContent = t('binaryHowTitle');
      setListHtml('binaryHowList', t('binaryHowList'));
      document.getElementById('binaryComplexityTitle').textContent = t('binaryComplexityTitle');
      document.getElementById('binaryComplexityHead').innerHTML = t('binaryComplexityHead');
      document.getElementById('binaryComplexityBody').innerHTML = t('binaryComplexityBody');
      document.getElementById('binaryDryRunTitle').textContent = t('binaryDryRunTitle');
      document.getElementById('binaryDryRunHead').innerHTML = t('binaryDryRunHead');
      document.getElementById('binaryDryRunBody').innerHTML = t('binaryDryRunBody');
      document.getElementById('binaryMistakesTitle').textContent = t('binaryMistakesTitle');
      setListHtml('binaryMistakesList', t('binaryMistakesList'));
      document.getElementById('binaryWhereTitle').textContent = t('binaryWhereTitle');
      document.getElementById('binaryWhereText').textContent = t('binaryWhereText');
      document.getElementById('binarySimTitle').textContent = t('binarySimTitle');
      document.getElementById('binaryCodeTitle').textContent = t('binaryCodeTitle');
      document.getElementById('sortingTitle').textContent = t('sortingTitle');
      document.getElementById('sortingCompareTitle').textContent = t('sortingCompareTitle');
      document.getElementById('sortingCompareHead').innerHTML = t('sortingCompareHead');
      document.getElementById('sortingCompareBody').innerHTML = t('sortingCompareBody');
      document.getElementById('tabBubble').textContent = t('tabBubble');
      document.getElementById('tabSelection').textContent = t('tabSelection');
      document.getElementById('tabInsertion').textContent = t('tabInsertion');
      document.getElementById('algoStepsTitle').textContent = t('algoStepsTitle');
      document.getElementById('algoCodeTitle').textContent = t('algoCodeTitle');
      document.getElementById('sortingVisualTitle').textContent = t('sortingVisualTitle');
      sortHistoryTitle.textContent = t('sortHistoryTitle');
      document.getElementById('sortChooseTitle').textContent = t('sortChooseTitle');
      setListHtml('sortChooseList', t('sortChooseList'));
      document.getElementById('sortRealTitle').textContent = t('sortRealTitle');
      setListHtml('sortRealList', t('sortRealList'));
      document.getElementById('quizTitle').textContent = t('quizTitle');
      document.getElementById('footerLead').textContent = t('footerLead');

      document.getElementById('binaryStart').textContent = t('start');
      document.getElementById('binaryRandom').textContent = t('random');
      document.getElementById('binaryStep').textContent = t('nextStep');
      document.getElementById('binaryReset').textContent = t('reset');
      sortLoadBtn.textContent = t('loadInput');
      sortRandomBtn.textContent = t('random');
      sortStepBtn.textContent = t('nextStep');
      sortRunBtn.textContent = t('runFull');
      sortResetBtn.textContent = t('reset');
      quizStartTimerBtn.textContent = t('startTimer');
      resetQuizBtn.textContent = t('resetQuiz');
      langToggleBtn.textContent = t('langBtn');

      const quizData = getQuizData();
      if (nextQuizBtn.disabled && quizState.index >= quizData.length) {
        nextQuizBtn.textContent = t('completed');
      } else if (!nextQuizBtn.disabled && quizState.index < quizData.length) {
        nextQuizBtn.textContent = t('skipQuestion');
      }

      if (!binaryState.array.length) {
        binaryStatus.textContent = t('binaryInitial');
      }
      if (!sortState.array.length) {
        sortStatus.textContent = t('sortInitial');
      }

      renderAlgoInfo();
      renderSortHistory();
      renderQuiz();
    }

    const quizDataByLang = {
      en: [
        { q: 'Binary Search works correctly on which type of array?', options: ['Random array', 'Sorted array', 'Only reverse array', 'Only duplicate-free array'], ans: 1 },
        { q: 'Average time complexity of Binary Search is:', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], ans: 1 },
        { q: 'In Binary Search, if target is greater than arr[mid], what to do?', options: ['Move high to mid - 1', 'Move low to mid + 1', 'Stop immediately', 'Swap elements'], ans: 1 },
        { q: 'Best case time complexity of Binary Search is:', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 0 },
        { q: 'What is the iterative Binary Search space complexity?', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'], ans: 2 },
        { q: 'Bubble Sort compares which elements first?', options: ['Any two random elements', 'First and last elements', 'Adjacent elements', 'Only middle elements'], ans: 2 },
        { q: 'In Bubble Sort, after one full pass, where does the largest element go?', options: ['Beginning', 'Middle', 'End', 'Random position'], ans: 2 },
        { q: 'Worst-case time complexity of Bubble Sort is:', options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Bubble Sort is:', options: ['Stable', 'Unstable', 'Always O(log n)', 'Divide and conquer'], ans: 0 },
        { q: 'Selection Sort repeatedly selects:', options: ['Maximum from sorted part', 'Minimum from unsorted part', 'Random element', 'Only adjacent pairs'], ans: 1 },
        { q: 'Worst-case time complexity of Selection Sort is:', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Selection Sort performs approximately how many swaps?', options: ['Very high, like Bubble', 'About n-1 swaps', 'Zero swaps', 'Exactly n² swaps'], ans: 1 },
        { q: 'Selection Sort is generally considered:', options: ['Stable', 'Unstable', 'Recursive only', 'Hash-based'], ans: 1 },
        { q: 'Insertion Sort builds which portion gradually?', options: ['Sorted left portion', 'Sorted right portion', 'Unsorted middle', 'No portion'], ans: 0 },
        { q: 'Insertion Sort performs best when array is:', options: ['Reverse sorted', 'Nearly sorted', 'Random always', 'All unique only'], ans: 1 },
        { q: 'Worst-case time complexity of Insertion Sort is:', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Insertion Sort is:', options: ['Unstable', 'Stable', 'Heap-based', 'Always fastest'], ans: 1 },
        { q: 'Binary Search fails when input array is:', options: ['Sorted ascending', 'Sorted descending with adapted logic', 'Unsorted', 'Contains duplicates'], ans: 2 },
        { q: 'Which sort is usually fastest for a nearly sorted small array?', options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort'], ans: 2 },
        { q: 'In Selection Sort, what remains true after each outer loop pass?', options: ['Last element is always maximum', 'Prefix [0..i] is sorted', 'Array becomes stable', 'No comparisons are needed'], ans: 1 }
      ],
      bn: [
        { q: 'Binary Search কোন ধরনের array-এ ঠিকভাবে কাজ করে?', options: ['Random array', 'Sorted array', 'শুধু reverse array', 'শুধু duplicate-free array'], ans: 1 },
        { q: 'Binary Search এর average time complexity কত?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], ans: 1 },
        { q: 'Binary Search-এ target যদি arr[mid] থেকে বড় হয়, কী করবেন?', options: ['high কে mid - 1 এ নিন', 'low কে mid + 1 এ নিন', 'সাথে সাথে stop করুন', 'element swap করুন'], ans: 1 },
        { q: 'Binary Search এর best case time complexity কত?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 0 },
        { q: 'Iterative Binary Search এর space complexity কত?', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'], ans: 2 },
        { q: 'Bubble Sort প্রথমে কোন element গুলো compare করে?', options: ['যে কোনো random দুইটি element', 'প্রথম ও শেষ element', 'Adjacent elements', 'শুধু middle elements'], ans: 2 },
        { q: 'Bubble Sort এ এক pass শেষে সবচেয়ে বড় element কোথায় যায়?', options: ['শুরুতে', 'মাঝখানে', 'শেষে', 'random অবস্থানে'], ans: 2 },
        { q: 'Bubble Sort এর worst-case time complexity কত?', options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Bubble Sort হলো:', options: ['Stable', 'Unstable', 'সবসময় O(log n)', 'Divide and conquer'], ans: 0 },
        { q: 'Selection Sort বারবার কী নির্বাচন করে?', options: ['sorted অংশের maximum', 'unsorted অংশের minimum', 'random element', 'শুধু adjacent pair'], ans: 1 },
        { q: 'Selection Sort এর worst-case time complexity কত?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Selection Sort আনুমানিক কত swap করে?', options: ['Bubble এর মতো অনেক বেশি', 'প্রায় n-1 swap', 'কোনো swap না', 'ঠিক n² swap'], ans: 1 },
        { q: 'Selection Sort সাধারণত কেমন ধরা হয়?', options: ['Stable', 'Unstable', 'শুধু recursive', 'Hash-based'], ans: 1 },
        { q: 'Insertion Sort ধীরে ধীরে কোন অংশ তৈরি করে?', options: ['বাম পাশে sorted অংশ', 'ডান পাশে sorted অংশ', 'মাঝের unsorted অংশ', 'কোনো অংশ না'], ans: 0 },
        { q: 'Insertion Sort সবচেয়ে ভালো কাজ করে যখন array হয়:', options: ['Reverse sorted', 'Nearly sorted', 'সবসময় random', 'শুধু unique values'], ans: 1 },
        { q: 'Insertion Sort এর worst-case time complexity কত?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], ans: 2 },
        { q: 'Insertion Sort হলো:', options: ['Unstable', 'Stable', 'Heap-based', 'সবসময় fastest'], ans: 1 },
        { q: 'Input array কেমন হলে Binary Search ব্যর্থ হয়?', options: ['Sorted ascending', 'যুক্তি বদলালে sorted descending', 'Unsorted', 'Duplicate থাকলে'], ans: 2 },
        { q: 'Nearly sorted ছোট array-এ সাধারণত কোন sort দ্রুত?', options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort'], ans: 2 },
        { q: 'Selection Sort এ প্রতিটি outer loop pass শেষে কী সত্য থাকে?', options: ['শেষ element সবসময় maximum', 'Prefix [0..i] sorted থাকে', 'Array stable হয়ে যায়', 'কোনো comparison লাগে না'], ans: 1 }
      ]
    };

    function getQuizData() {
      return quizDataByLang[currentLang] || quizDataByLang.en;
    }

    const quizState = {
      index: 0,
      score: 0,
      answered: false,
      responses: [],
      autoTimer: null,
      timer: null,
      timeLeft: 0,
      timerStarted: false,
      hasStartedOnce: false
    };

    function clearQuizTimers() {
      if (quizState.autoTimer) {
        clearTimeout(quizState.autoTimer);
        quizState.autoTimer = null;
      }
      if (quizState.timer) {
        clearInterval(quizState.timer);
        quizState.timer = null;
      }
    }

    function updateTimerPill() {
      if (quizState.timeLeft > 0 && quizState.timeLeft <= 3) {
        quizTimerPill.innerHTML = `${t('timerLabel')}: <span class="final-label">${t('finalLabel')}</span> ${quizState.timeLeft}s`;
      } else {
        quizTimerPill.textContent = `${t('timerLabel')}: ${quizState.timeLeft}s`;
      }
      quizTimerPill.classList.toggle('warn', quizState.timeLeft > 0 && quizState.timeLeft <= 3);
    }

    function startQuestionTimer() {
      const quizData = getQuizData();
      if (quizState.timerStarted || quizState.index >= quizData.length) return;

      quizState.hasStartedOnce = true;
      quizState.timerStarted = true;
      quizStartTimerBtn.style.display = 'none';
      quizStartTimerBtn.disabled = true;
      quizResult.className = 'quiz-result';
      quizResult.textContent = t('timerStartedMsg');
      [...quizAnswers.children].forEach(choice => (choice.disabled = false));

      quizState.timer = setInterval(() => {
        quizState.timeLeft -= 1;
        updateTimerPill();

        if (quizState.timeLeft <= 0) {
          clearQuizTimers();

          if (!quizState.responses[quizState.index]) {
            const timeoutQuestion = quizData[quizState.index];
            quizState.responses[quizState.index] = {
              question: timeoutQuestion.q,
              selected: t('notAnsweredTimeUp'),
              correct: timeoutQuestion.options[timeoutQuestion.ans],
              isCorrect: false
            };
          }

          quizState.answered = true;
          [...quizAnswers.children].forEach(choice => (choice.disabled = true));
          quizResult.className = 'quiz-result bad';
          quizResult.textContent = t('timeUpMsg');

          quizState.autoTimer = setTimeout(() => {
            quizState.index += 1;
            quizState.answered = false;
            renderQuiz();
          }, 450);
        }
      }, 1000);
    }

    function setSortRunLock(isLocked) {
      sortLoadBtn.disabled = isLocked;
      sortRandomBtn.disabled = isLocked;
      sortStepBtn.disabled = isLocked;
      sortRunBtn.disabled = isLocked;
      sortArrayInput.disabled = isLocked;
      algoTabButtons.forEach(btn => {
        btn.disabled = isLocked;
      });

      if (!isLocked) {
        sortResetBtn.disabled = false;
      }
    }

    function renderAlgoInfo() {
      const current = (algoData[currentLang] || algoData.en)[sortState.algorithm];
      algoTitle.textContent = current.title;
      algoDesc.textContent = current.desc;
      algoCode.textContent = current.code;
      algoSteps.innerHTML = current.steps.map(step => `<li>${step}</li>`).join('');
    }

    function renderQuiz() {
      clearQuizTimers();

      const quizData = getQuizData();
      const total = quizData.length;
      const markPerQuestion = 1;

      if (quizState.index >= total) {
        quizQuestion.textContent = t('quizCompleted');
        quizAnswers.innerHTML = '';
        const percent = Math.round((quizState.score / total) * 100);
        quizResult.className = 'quiz-result ' + (percent >= 70 ? 'good' : 'bad');
        quizResult.textContent = t('finalScore')(quizState.score, total, percent, `${quizState.score}/${total * markPerQuestion}`);
        quizScorePill.style.display = 'inline-flex';
        quizScorePill.textContent = `${t('scoreLabel')}: ${quizState.score}/${total}`;
        quizMeta.innerHTML = `<span class="quiz-badge">${t('assessmentComplete')}</span><span class="quiz-badge">${t('totalQuestions')}: ${total}</span><span class="quiz-badge">${t('totalMarks')}: ${total * markPerQuestion}</span>`;
        quizStartTimerBtn.style.display = 'none';
        quizStartTimerBtn.disabled = true;
        nextQuizBtn.disabled = true;
        nextQuizBtn.textContent = t('completed');
        quizState.timeLeft = 0;
        quizState.timerStarted = false;
        updateTimerPill();
        renderQuizResultCard(total, percent, markPerQuestion);
        return;
      }

      const current = quizData[quizState.index];
      quizResultCard.style.display = 'none';
      quizQuestion.textContent = current.q;
      quizResult.textContent = quizState.hasStartedOnce
        ? t('timerAutoMsg')
        : t('timerClickMsg');
      quizResult.className = 'quiz-result';
      quizAnswers.innerHTML = '';
      quizStartTimerBtn.style.display = quizState.hasStartedOnce ? 'none' : 'inline-block';
      quizStartTimerBtn.disabled = quizState.hasStartedOnce;
      nextQuizBtn.disabled = false;
      nextQuizBtn.textContent = t('skipQuestion');
      quizScorePill.style.display = 'none';
      quizScorePill.textContent = `${t('scoreLabel')}: ${quizState.score}/${total}`;
      quizMeta.innerHTML = `<span class="quiz-badge">${t('questionLabel')} ${quizState.index + 1}/${total}</span><span class="quiz-badge">${t('markLabel')}: ${markPerQuestion}</span><span class="quiz-badge">${t('timerShort')}: ${QUIZ_TIME_PER_QUESTION}s</span>`;

      quizState.timeLeft = QUIZ_TIME_PER_QUESTION;
      quizState.timerStarted = false;
      updateTimerPill();

      current.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.disabled = !quizState.hasStartedOnce;
        btn.addEventListener('click', () => {
          if (quizState.answered) return;
          quizState.answered = true;
          if (quizState.timer) {
            clearInterval(quizState.timer);
            quizState.timer = null;
          }

          if (idx === current.ans) {
            quizState.score += 1;
          }

          quizState.responses[quizState.index] = {
            question: current.q,
            selected: current.options[idx],
            correct: current.options[current.ans],
            isCorrect: idx === current.ans
          };

          quizScorePill.textContent = `${t('scoreLabel')}: ${quizState.score}/${total}`;
          [...quizAnswers.children].forEach(choice => (choice.disabled = true));
          quizResult.className = 'quiz-result';
          quizResult.textContent = t('answerSubmitted');

          quizState.autoTimer = setTimeout(() => {
            quizState.index += 1;
            quizState.answered = false;
            renderQuiz();
          }, 500);
        });
        quizAnswers.appendChild(btn);
      });

      if (quizState.hasStartedOnce) {
        startQuestionTimer();
      }
    }

    function renderQuizResultCard(total, percent, markPerQuestion) {
      const quizData = getQuizData();
      const correctCount = quizState.responses.filter(item => item && item.isCorrect).length;
      const wrongCount = total - correctCount;

      const resultItems = quizState.responses
        .map((item, idx) => {
          if (!item) {
            return `<article class="result-item wrong"><h4>Q${idx + 1}: ${t('notAnswered')}</h4><p>${t('selectedLabel')}: -</p><p>${t('correctAnswer')}: ${quizData[idx].options[quizData[idx].ans]}</p></article>`;
          }
          return `
            <article class="result-item ${item.isCorrect ? 'correct' : 'wrong'}">
              <h4>Q${idx + 1}: ${item.question}</h4>
              <p>${t('yourAnswer')}: ${item.selected}</p>
              <p>${t('correctAnswer')}: ${item.correct}</p>
            </article>
          `;
        })
        .join('');

      quizResultCard.innerHTML = `
        <div class="result-grid">
          <div class="result-stat">${t('resultQuestions')}<strong>${total}</strong></div>
          <div class="result-stat">${t('resultCorrect')}<strong>${correctCount}</strong></div>
          <div class="result-stat">${t('resultWrong')}<strong>${wrongCount}</strong></div>
          <div class="result-stat">${t('resultMarks')}<strong>${quizState.score}/${total * markPerQuestion}</strong></div>
          <div class="result-stat">${t('resultPercent')}<strong>${percent}%</strong></div>
        </div>
        <div class="result-list">${resultItems}</div>
      `;
      quizResultCard.style.display = 'block';
    }

    function renderBars() {
      sortBars.innerHTML = '';
      if (!sortState.array.length) {
        sortBars.innerHTML = `<span style="color: var(--muted);">${t('noDataLoaded')}</span>`;
        return;
      }

      const max = Math.max(...sortState.array, 1);
      sortState.array.forEach((value, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'bar-wrap';

        const bar = document.createElement('div');
        bar.className = 'bar';
        if (index === sortState.activeA) bar.classList.add('activeA');
        if (index === sortState.activeB) bar.classList.add('activeB');
        bar.style.height = `${(value / max) * 140 + 20}px`;

        const num = document.createElement('div');
        num.className = 'num';
        num.textContent = value;

        wrap.appendChild(bar);
        wrap.appendChild(num);
        sortBars.appendChild(wrap);
      });
    }

    function renderSortHistory() {
      if (!sortHistoryList) return;

      if (!sortState.stepHistory.length) {
        sortHistoryList.innerHTML = `<p class="sort-history-empty">${t('sortHistoryEmpty')}</p>`;
        return;
      }

      sortHistoryList.innerHTML = sortState.stepHistory
        .map((entry, index) => `<div class="sort-history-item"><strong>${t('stepWord')} ${index + 1}</strong><small class="sort-history-time">${entry.time}</small><span>${entry.text}</span></div>`)
        .join('');
      sortHistoryList.scrollTop = sortHistoryList.scrollHeight;
    }

    function formatSortSnapshot(values) {
      if (values.length <= 8) return values.join(', ');
      const head = values.slice(0, 4).join(', ');
      const tail = values.slice(-3).join(', ');
      return `${head}, ..., ${tail}`;
    }

    function getSortHistoryTime() {
      const locale = currentLang === 'bn' ? 'bn-BD' : 'en-US';
      return new Date().toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    function addSortHistoryEntry(entry) {
      sortState.completedSteps += 1;
      sortState.stepHistory.push({
        text: entry,
        time: getSortHistoryTime()
      });
      renderSortHistory();
    }

    function resetSortInternal(values) {
      sortState.original = [...values];
      sortState.array = [...values];
      sortState.i = 0;
      sortState.j = 0;
      sortState.min = 0;
      sortState.key = null;
      sortState.done = false;
      sortState.activeA = -1;
      sortState.activeB = -1;
      sortState.completedSteps = 0;
      sortState.stepHistory = [];
      if (sortState.running) {
        clearInterval(sortState.running);
        sortState.running = null;
      }
      setSortRunLock(false);
      renderBars();
      renderSortHistory();
    }

    function loadSortInput() {
      const values = parseNumbers(sortArrayInput.value);
      if (!values.length) {
        sortStatus.textContent = t('sortProvideValid');
        return;
      }
      resetSortInternal(values);
      sortStatus.textContent = t('sortDataLoaded');
    }

    function randomSortInput() {
      const values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
      sortArrayInput.value = values.join(',');
      resetSortInternal(values);
      sortStatus.textContent = t('sortRandomGenerated');
    }

    function bubbleStep() {
      const n = sortState.array.length;
      if (sortState.i >= n - 1) return true;
      if (sortState.j >= n - 1 - sortState.i) {
        const passNo = sortState.i + 1;
        addSortHistoryEntry(t('sortBubbleStepComplete')(passNo, formatSortSnapshot(sortState.array)));
        sortState.j = 0;
        sortState.i += 1;
        return sortState.i >= n - 1;
      }

      const a = sortState.j;
      const b = sortState.j + 1;
      sortState.activeA = a;
      sortState.activeB = b;

      if (sortState.array[a] > sortState.array[b]) {
        [sortState.array[a], sortState.array[b]] = [sortState.array[b], sortState.array[a]];
        sortStatus.textContent = t('swappedIndexes')(a, b);
      } else {
        sortStatus.textContent = t('comparedNoSwap')(a, b);
      }

      sortState.j += 1;
      return false;
    }

    function selectionStep() {
      const n = sortState.array.length;
      if (sortState.i >= n - 1) return true;

      if (sortState.j === 0) {
        sortState.min = sortState.i;
        sortState.j = sortState.i + 1;
      }

      if (sortState.j < n) {
        sortState.activeA = sortState.min;
        sortState.activeB = sortState.j;
        if (sortState.array[sortState.j] < sortState.array[sortState.min]) {
          sortState.min = sortState.j;
          sortStatus.textContent = t('newMinAt')(sortState.min);
        } else {
          sortStatus.textContent = t('checkedIndex')(sortState.j);
        }
        sortState.j += 1;
        return false;
      }

      [sortState.array[sortState.i], sortState.array[sortState.min]] = [sortState.array[sortState.min], sortState.array[sortState.i]];
  sortStatus.textContent = t('placedMinAt')(sortState.i);
        addSortHistoryEntry(t('sortSelectionStepComplete')(sortState.i + 1, formatSortSnapshot(sortState.array)));
      sortState.i += 1;
      sortState.j = 0;
      return sortState.i >= n - 1;
    }

    function insertionStep() {
      const n = sortState.array.length;
      if (sortState.i === 0) sortState.i = 1;
      if (sortState.i >= n) return true;

      if (sortState.key === null) {
        sortState.key = sortState.array[sortState.i];
        sortState.j = sortState.i - 1;
      }

      if (sortState.j >= 0 && sortState.array[sortState.j] > sortState.key) {
        sortState.activeA = sortState.j;
        sortState.activeB = sortState.j + 1;
        sortState.array[sortState.j + 1] = sortState.array[sortState.j];
        sortStatus.textContent = t('shiftedAt')(sortState.j);
        sortState.j -= 1;
        return false;
      }

      sortState.array[sortState.j + 1] = sortState.key;
      sortStatus.textContent = t('insertedAt')(sortState.j + 1);
      addSortHistoryEntry(t('sortInsertionStepComplete')(sortState.i, formatSortSnapshot(sortState.array)));
      sortState.key = null;
      sortState.i += 1;
      return sortState.i >= n;
    }

    function sortStep() {
      if (!sortState.array.length) {
        sortStatus.textContent = t('sortLoadFirst');
        return;
      }
      if (sortState.done) {
        sortStatus.textContent = t('sortAlreadyComplete');
        return;
      }

      let finished = false;
      if (sortState.algorithm === 'bubble') finished = bubbleStep();
      if (sortState.algorithm === 'selection') finished = selectionStep();
      if (sortState.algorithm === 'insertion') finished = insertionStep();

      renderBars();

      if (finished) {
        sortState.done = true;
        sortState.activeA = -1;
        sortState.activeB = -1;
        renderBars();
        addSortHistoryEntry(t('sortFinalComplete')(formatSortSnapshot(sortState.array)));
        sortStatus.textContent = t('sortCompleted');
      }
    }

    function runSortFull() {
      if (!sortState.array.length) {
        sortStatus.textContent = t('sortLoadFirst');
        return;
      }
      if (sortState.running) return;

      setSortRunLock(true);

      sortState.running = setInterval(() => {
        if (sortState.done) {
          clearInterval(sortState.running);
          sortState.running = null;
          setSortRunLock(false);
          return;
        }
        sortStep();
      }, 350);
    }

    function resetSort() {
      if (!sortState.original.length) {
        sortStatus.textContent = t('sortNothingToReset');
        return;
      }
      resetSortInternal(sortState.original);
      sortStatus.textContent = t('sortResetDone');
    }

    algoTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        algoTabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sortState.algorithm = btn.dataset.algo;
        renderAlgoInfo();
        if (sortState.original.length) resetSortInternal(sortState.original);
        const current = (algoData[currentLang] || algoData.en)[sortState.algorithm];
        sortStatus.textContent = t('sortSwitchedTo')(current.title);
      });
    });

    sortLoadBtn.addEventListener('click', loadSortInput);
    sortRandomBtn.addEventListener('click', randomSortInput);
    sortStepBtn.addEventListener('click', sortStep);
    sortRunBtn.addEventListener('click', runSortFull);
    sortResetBtn.addEventListener('click', resetSort);
    quizStartTimerBtn.addEventListener('click', startQuestionTimer);

    nextQuizBtn.addEventListener('click', () => {
      const quizData = getQuizData();
      clearQuizTimers();
      quizState.timerStarted = false;
      if (quizState.index < quizData.length && !quizState.responses[quizState.index]) {
        const current = quizData[quizState.index];
        quizState.responses[quizState.index] = {
          question: current.q,
          selected: t('notAnswered'),
          correct: current.options[current.ans],
          isCorrect: false
        };
      }
      quizState.index += 1;
      quizState.answered = false;
      renderQuiz();
    });

    resetQuizBtn.addEventListener('click', () => {
      const quizData = getQuizData();
      quizState.index = 0;
      quizState.score = 0;
      quizState.answered = false;
      quizState.responses = [];
      quizState.timerStarted = false;
      quizState.hasStartedOnce = false;
      clearQuizTimers();
      quizState.timeLeft = QUIZ_TIME_PER_QUESTION;
      updateTimerPill();
      quizStartTimerBtn.style.display = 'inline-block';
      quizStartTimerBtn.disabled = false;
      quizScorePill.style.display = 'none';
      quizScorePill.textContent = `${t('scoreLabel')}: 0/${quizData.length}`;
      nextQuizBtn.disabled = false;
      nextQuizBtn.textContent = t('skipQuestion');
      quizResultCard.style.display = 'none';
      renderQuiz();
    });

    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'bn' : 'en';
      applyLanguage();
    });

    renderAlgoInfo();
    renderBinary();
    renderBars();
    renderQuiz();
    applyLanguage();
