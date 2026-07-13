    // --- Scroll Spy for Nav Highlight ---
    const sectionIds = [
      'guide',
      'binary',
      'sorting',
      'stack',
      'quiz'
    ];
    const navLinks = [
      document.getElementById('navGuideLink'),
      document.getElementById('navBinaryLink'),
      document.getElementById('navSortingLink'),
      document.getElementById('navStackLink'),
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

    const searchData = {
      en: {
        linear: {
          title: 'Searching Algorithms',
          defTitle: 'Definition',
          defText: 'Linear Search finds a target value in an array by checking each element sequentially from left to right.',
          preTitle: 'Pre-condition',
          preList: ['None. Works on sorted, unsorted, single, or empty collections.'],
          howTitle: 'How it Works',
          how: [
            'Start from index 0',
            'Compare current element with target',
            'If equal, target found at current index',
            'If not equal, move to the next index',
            'If end of array is reached, target is not found'
          ],
          complexityTitle: 'Complexity',
          complexityHead: '<tr><th>Case</th><th>Time</th><th>Space</th></tr>',
          complexityBody: '<tr><td>Best</td><td>O(1)</td><td>O(1)</td></tr><tr><td>Average</td><td>O(n)</td><td>O(1)</td></tr><tr><td>Worst</td><td>O(n)</td><td>O(1)</td></tr>',
          dryRunTitle: 'Linear Search Dry Run (Target = 23)',
          dryRunHead: '<tr><th>Step</th><th>Index</th><th>Value</th><th>Compared</th><th>Action</th></tr>',
          dryRunBody: '<tr><td>1</td><td>0</td><td>38</td><td>38 == 23 → False</td><td>Move Next</td></tr><tr><td>2</td><td>1</td><td>16</td><td>16 == 23 → False</td><td>Move Next</td></tr><tr><td>3</td><td>2</td><td>23</td><td>23 == 23 → True</td><td>Found 23</td></tr>',
          mistakesTitle: 'Common Mistakes',
          mistakesList: [
            'Returning target not found inside the loop before checking all elements.',
            'Iterating past the array bounds (out of bounds error).',
            'Not handling duplicate values correctly.'
          ],
          whereTitle: 'Where to Use',
          whereText: 'Use it for small unsorted arrays, linked lists, or simple lookups where the overhead of sorting is higher.',
          simTitle: 'Linear Search Step Simulator',
          codeTitle: 'C++ Code',
          code: `int linearSearch(int arr[], int size, int target) {\n  for (int i = 0; i < size; i++) {\n    if (arr[i] == target) return i;\n  }\n  return -1;\n}`
        },
        binary: {
          title: 'Searching Algorithms',
          defTitle: 'Definition',
          defText: 'Binary Search finds a target value in a sorted array by repeatedly checking the middle element and eliminating half of the search space.',
          preTitle: 'Pre-condition',
          preList: ['Array must be sorted (ascending)', 'Works on random-access collections (like arrays)'],
          howTitle: 'How it Works',
          how: [
            'Set low = 0 and high = n - 1',
            'Compute mid = floor((low + high) / 2)',
            'If array[mid] == target, found',
            'If target > array[mid], search right half',
            'If target < array[mid], search left half'
          ],
          complexityTitle: 'Complexity',
          complexityHead: '<tr><th>Case</th><th>Time</th><th>Space (Iterative)</th></tr>',
          complexityBody: '<tr><td>Best</td><td>O(1)</td><td>O(1)</td></tr><tr><td>Average</td><td>O(log n)</td><td>O(1)</td></tr><tr><td>Worst</td><td>O(log n)</td><td>O(1)</td></tr>',
          dryRunTitle: 'Binary Search Dry Run (Target = 23)',
          dryRunHead: '<tr><th>Step</th><th>Low</th><th>High</th><th>Mid</th><th>Action</th></tr>',
          dryRunBody: '<tr><td>1</td><td>0</td><td>9</td><td>4</td><td>16 < 23 → Right</td></tr><tr><td>2</td><td>5</td><td>9</td><td>7</td><td>56 > 23 → Left</td></tr><tr><td>3</td><td>5</td><td>6</td><td>5</td><td>Found 23</td></tr>',
          mistakesTitle: 'Common Mistakes',
          mistakesList: [
            'Applying Binary Search on unsorted data.',
            'Forgetting to update low/high after comparison.',
            'Infinite loops due to incorrect loop conditions.',
            'Ignoring edge cases like empty array.'
          ],
          whereTitle: 'Where to Use',
          whereText: 'Use it for lookups in sorted lists, searching sorted logs, and finding boundaries in monotonic arrays.',
          simTitle: 'Binary Search Step Simulator',
          codeTitle: 'C++ Code',
          code: `int binarySearch(int arr[], int size, int target) {\n  int low = 0;\n  int high = size - 1;\n\n  while (low <= high) {\n    int mid = low + (high - low) / 2;\n\n    if (arr[mid] == target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n\n  return -1;\n}`
        }
      },
      bn: {
        linear: {
          title: 'সার্চ অ্যালগরিদম',
          defTitle: 'সংজ্ঞা',
          defText: 'Linear Search একটি array-এর প্রতি উপাদান প্রথম থেকে শেষ পর্যন্ত ক্রমান্বয়ে চেক করে target খুঁজে বের করে।',
          preTitle: 'পূর্বশর্ত',
          preList: ['কোনো পূর্বশর্ত নেই। Sorted বা Unsorted যেকোনো array-তে কাজ করে।'],
          howTitle: 'কীভাবে কাজ করে',
          how: [
            'ইন্ডেক্স 0 থেকে শুরু করুন',
            'বর্তমান উপাদানের সাথে target তুলনা করুন',
            'সমান হলে বর্তমান ইন্ডেক্সে পাওয়া গেছে',
            'সমান না হলে পরবর্তী ইন্ডেক্সে যান',
            'অ্যারির শেষ পর্যন্ত না পাওয়া গেলে target নেই'
          ],
          complexityTitle: 'কমপ্লেক্সিটি',
          complexityHead: '<tr><th>কেস</th><th>সময়</th><th>স্পেস</th></tr>',
          complexityBody: '<tr><td>সেরা</td><td>O(1)</td><td>O(1)</td></tr><tr><td>গড়</td><td>O(n)</td><td>O(1)</td></tr><tr><td>খারাপতম</td><td>O(n)</td><td>O(1)</td></tr>',
          dryRunTitle: 'Linear Search ড্রাই রান (Target = 23)',
          dryRunHead: '<tr><th>ধাপ</th><th>ইন্ডেক্স</th><th>মান</th><th>তুলনা</th><th>অ্যাকশন</th></tr>',
          dryRunBody: '<tr><td>1</td><td>0</td><td>38</td><td>38 == 23 → মিথ্যা</td><td>সামনে যান</td></tr><tr><td>2</td><td>1</td><td>16</td><td>16 == 23 → মিথ্যা</td><td>সামনে যান</td></tr><tr><td>3</td><td>2</td><td>23</td><td>23 == 23 → সত্য</td><td>23 পাওয়া গেছে</td></tr>',
          mistakesTitle: 'সাধারণ ভুল',
          mistakesList: [
            'লুপের ভিতরে সব উপাদান চেক করার আগেই -1 রিটার্ন করে দেওয়া।',
            'অ্যারের বাউন্ডারি পার হয়ে যাওয়া (out of bounds error)।',
            'ডুপ্লিকেট মানগুলো ঠিকমতো হ্যান্ডেল না করা।'
          ],
          whereTitle: 'কোথায় ব্যবহার করবেন',
          whereText: 'ছোট আকারের আন-সর্টেড ডাটা, লিঙ্কড লিস্ট এবং খুব সাধারণ খোঁজাখুঁজিতে যেখানে সর্ট করার খরচ বেশি।',
          simTitle: 'Linear Search স্টেপ সিমুলেটর',
          codeTitle: 'C++ কোড',
          code: `int linearSearch(int arr[], int size, int target) {\n  for (int i = 0; i < size; i++) {\n    if (arr[i] == target) return i;\n  }\n  return -1;\n}`
        },
        binary: {
          title: 'সার্চ অ্যালগরিদম',
          defTitle: 'সংজ্ঞা',
          defText: 'Binary Search একটি sorted array-এ target value খুঁজে বের করে; প্রতি ধাপে middle element দেখে search space অর্ধেক করে।',
          preTitle: 'পূর্বশর্ত',
          preList: ['Array sorted (ascending) হতে হবে', 'Random-access collection (যেমন array)-এ ভালো কাজ করে'],
          howTitle: 'কীভাবে কাজ করে',
          how: [
            'low = 0 এবং high = n - 1 নিন',
            'mid = floor((low + high) / 2) হিসাব করুন',
            'array[mid] == target হলে পাওয়া গেছে',
            'target > array[mid] হলে ডান পাশে সার্চ করুন',
            'target < array[mid] হলে বাম পাশে সার্চ করুন'
          ],
          complexityTitle: 'কমপ্লেক্সিটি',
          complexityHead: '<tr><th>কেস</th><th>সময়</th><th>স্পেস (Iterative)</th></tr>',
          complexityBody: '<tr><td>সেরা</td><td>O(1)</td><td>O(1)</td></tr><tr><td>গড়</td><td>O(log n)</td><td>O(1)</td></tr><tr><td>খারাপতম</td><td>O(log n)</td><td>O(1)</td></tr>',
          dryRunTitle: 'বাইনারি সার্চ ড্রাই রান (Target = 23)',
          dryRunHead: '<tr><th>ধাপ</th><th>Low</th><th>High</th><th>Mid</th><th>অ্যাকশন</th></tr>',
          dryRunBody: '<tr><td>1</td><td>0</td><td>9</td><td>4</td><td>16 < 23 → ডান</td></tr><tr><td>2</td><td>5</td><td>9</td><td>7</td><td>56 > 23 → বাম</td></tr><tr><td>3</td><td>5</td><td>6</td><td>5</td><td>23 পাওয়া গেছে</td></tr>',
          mistakesTitle: 'সাধারণ ভুল',
          mistakesList: [
            'Unsorted ডেটাতে Binary Search প্রয়োগ করা।',
            'Comparison এর পরে low/high আপডেট করতে ভুলে যাওয়া।',
            'ভুল loop condition এর কারণে infinite loop হওয়া।',
            'Empty array-এর মতো edge case না ধরা।'
          ],
          whereTitle: 'কোথায় ব্যবহার করবেন',
          whereText: 'Sorted list এ lookup, sorted log search এবং monotonic array-এ boundary খুঁজতে এটি ব্যবহার করুন।',
          simTitle: 'বাইনারি সার্চ স্টেপ সিমুলেটর',
          codeTitle: 'C++ কোড',
          code: `int binarySearch(int arr[], int size, int target) {\n  int low = 0;\n  int high = size - 1;\n\n  while (low <= high) {\n    int mid = low + (high - low) / 2;\n\n    if (arr[mid] == target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n\n  return -1;\n}`
        }
      }
    };

    const searchState = {
      algorithm: 'linear', // 'linear' | 'binary'
      array: [],
      target: null,
      index: -1,
      low: 0,
      high: -1,
      mid: -1,
      done: false,
      foundIndex: -1,
      stepHistory: []
    };

    function parseNumbers(text) {
      return text
        .split(',')
        .map(v => Number(v.trim()))
        .filter(v => Number.isFinite(v));
    }

    function renderSearchInfo() {
      const current = (searchData[currentLang] || searchData.en)[searchState.algorithm];
      document.getElementById('binaryTitle').textContent = current.title;
      document.getElementById('binaryDefTitle').textContent = current.defTitle;
      document.getElementById('binaryDefText').textContent = current.defText;
      document.getElementById('binaryPreTitle').textContent = current.preTitle;
      setListHtml('binaryPreList', current.preList);
      document.getElementById('binaryHowTitle').textContent = current.howTitle;
      setListHtml('binaryHowList', current.how);
      document.getElementById('binaryComplexityTitle').textContent = current.complexityTitle;
      document.getElementById('binaryComplexityHead').innerHTML = current.complexityHead;
      document.getElementById('binaryComplexityBody').innerHTML = current.complexityBody;
      document.getElementById('binaryDryRunTitle').textContent = current.dryRunTitle;
      document.getElementById('binaryDryRunHead').innerHTML = current.dryRunHead;
      document.getElementById('binaryDryRunBody').innerHTML = current.dryRunBody;
      document.getElementById('binaryMistakesTitle').textContent = current.mistakesTitle;
      setListHtml('binaryMistakesList', current.mistakesList);
      document.getElementById('binaryWhereTitle').textContent = current.whereTitle;
      document.getElementById('binaryWhereText').textContent = current.whereText;
      document.getElementById('binarySimTitle').textContent = current.simTitle;
      document.getElementById('binaryCodeTitle').textContent = current.codeTitle;
      document.getElementById('binaryCode').textContent = current.code;
    }

    function renderBinary() {
      binaryView.innerHTML = '';
      if (!searchState.array.length) {
        binaryView.innerHTML = `<span style="color: var(--muted);">${t('noDataLoaded')}</span>`;
        return;
      }

      searchState.array.forEach((value, index) => {
        const el = document.createElement('div');
        el.className = 'cell';
        if (searchState.algorithm === 'binary') {
          if (index === searchState.low) el.classList.add('low');
          if (index === searchState.high) el.classList.add('high');
          if (index === searchState.mid) el.classList.add('mid');
        } else {
          if (index === searchState.index) el.classList.add('checking');
        }
        if (index === searchState.foundIndex) el.classList.add('found');
        el.textContent = value;
        binaryView.appendChild(el);
      });
    }

    function startBinary() {
      let values = parseNumbers(binaryArrayInput.value);
      if (searchState.algorithm === 'binary') {
        values.sort((a, b) => a - b);
      }
      const target = Number(binaryTargetInput.value);

      if (!values.length || !Number.isFinite(target)) {
        binaryStatus.textContent = t('pleaseProvideNumbers');
        return;
      }

      binaryArrayInput.value = values.join(',');
      searchState.array = values;
      searchState.target = target;
      searchState.index = -1;
      searchState.low = 0;
      searchState.high = values.length - 1;
      searchState.mid = -1;
      searchState.done = false;
      searchState.foundIndex = -1;
      searchState.stepHistory = [];

      const algoName = searchState.algorithm === 'linear' ? (currentLang === 'bn' ? 'Linear' : 'Linear') : (currentLang === 'bn' ? 'Binary' : 'Binary');
      document.getElementById('binaryDryRunTitle').textContent = t('liveDryRunTitle')(algoName, target);
      document.getElementById('binaryDryRunBody').innerHTML = '';

      renderBinary();
      binaryStatus.textContent = t('startedClickNext');
    }

    function randomBinaryInput() {
      let values = Array.from({ length: 10 }, () => Math.floor(Math.random() * 90) + 10);
      if (searchState.algorithm === 'binary') {
        values.sort((a, b) => a - b);
      }
      const target = values[Math.floor(Math.random() * values.length)];
      binaryArrayInput.value = values.join(',');
      binaryTargetInput.value = String(target);
      startBinary();
      if (searchState.algorithm === 'binary') {
        binaryStatus.textContent = t('binaryRandomGenerated');
      } else {
        binaryStatus.textContent = t('linearRandomGenerated');
      }
    }

    function stepLinear() {
      if (searchState.index >= searchState.array.length - 1) {
        searchState.done = true;
        searchState.index = -1;
        binaryStatus.textContent = t('linearNotFound');
        renderBinary();
        return;
      }

      searchState.index += 1;
      const currentValue = searchState.array[searchState.index];

      const stepNo = searchState.stepHistory.length + 1;
      const isFound = currentValue === searchState.target;
      const comparedStr = `${currentValue} == ${searchState.target} → ${isFound ? (currentLang === 'bn' ? 'সত্য' : 'True') : (currentLang === 'bn' ? 'মিথ্যা' : 'False')}`;
      const actionStr = isFound ? t('linearFoundAction')(searchState.target) : t('linearMoveAction');

      searchState.stepHistory.push({
        stepNo,
        index: searchState.index,
        value: currentValue,
        compared: comparedStr,
        action: actionStr
      });

      if (currentValue === searchState.target) {
        searchState.foundIndex = searchState.index;
        searchState.done = true;
        binaryStatus.textContent = t('linearFoundAtIndex')(searchState.target, searchState.index);
      } else {
        binaryStatus.textContent = t('linearCheckingIndex')(searchState.index, currentValue);
      }

      renderBinary();
      renderSearchDryRunTable();
    }

    function stepBinary() {
      if (searchState.mid !== -1) {
        const prevMidValue = searchState.array[searchState.mid];
        if (prevMidValue < searchState.target) {
          searchState.low = searchState.mid + 1;
        } else {
          searchState.high = searchState.mid - 1;
        }
      }

      if (searchState.low > searchState.high) {
        searchState.done = true;
        searchState.mid = -1;
        binaryStatus.textContent = t('targetNotFound');
        renderBinary();
        return;
      }

      searchState.mid = Math.floor((searchState.low + searchState.high) / 2);
      const midValue = searchState.array[searchState.mid];

      const stepNo = searchState.stepHistory.length + 1;
      let actionStr = '';
      if (midValue === searchState.target) {
        actionStr = t('linearFoundAction')(searchState.target);
      } else if (midValue < searchState.target) {
        actionStr = `${midValue} < ${searchState.target} → ${currentLang === 'bn' ? 'ডান' : 'Right'}`;
      } else {
        actionStr = `${midValue} > ${searchState.target} → ${currentLang === 'bn' ? 'বাম' : 'Left'}`;
      }

      searchState.stepHistory.push({
        stepNo,
        low: searchState.low,
        high: searchState.high,
        mid: searchState.mid,
        action: actionStr
      });

      if (midValue === searchState.target) {
        searchState.foundIndex = searchState.mid;
        searchState.done = true;
        binaryStatus.textContent = t('foundAtIndex')(searchState.target, searchState.mid);
      } else if (midValue < searchState.target) {
        binaryStatus.textContent = t('moveRight')(searchState.mid, midValue);
      } else {
        binaryStatus.textContent = t('moveLeft')(searchState.mid, midValue);
      }

      renderBinary();
      renderSearchDryRunTable();
    }

    function stepSearch() {
      if (!searchState.array.length) {
        binaryStatus.textContent = t('clickStartFirst');
        return;
      }
      if (searchState.done) {
        binaryStatus.textContent = t('searchAlreadyDone');
        return;
      }

      if (searchState.algorithm === 'linear') {
        stepLinear();
      } else {
        stepBinary();
      }
    }

    function resetBinary() {
      searchState.array = [];
      searchState.target = null;
      searchState.index = -1;
      searchState.low = 0;
      searchState.high = -1;
      searchState.mid = -1;
      searchState.done = false;
      searchState.foundIndex = -1;
      searchState.stepHistory = [];
      binaryView.innerHTML = '';
      binaryStatus.textContent = t('resetComplete');
      renderSearchInfo();
    }

    function renderSearchDryRunTable() {
      const body = document.getElementById('binaryDryRunBody');
      if (!body) return;

      if (searchState.algorithm === 'linear') {
        body.innerHTML = searchState.stepHistory
          .map(step => `
            <tr>
              <td>${step.stepNo}</td>
              <td>${step.index}</td>
              <td>${step.value}</td>
              <td>${step.compared}</td>
              <td>${step.action}</td>
            </tr>
          `).join('');
      } else {
        body.innerHTML = searchState.stepHistory
          .map(step => `
            <tr>
              <td>${step.stepNo}</td>
              <td>${step.low}</td>
              <td>${step.high}</td>
              <td>${step.mid}</td>
              <td>${step.action}</td>
            </tr>
          `).join('');
      }
    }

    document.getElementById('binaryStart').addEventListener('click', startBinary);
    document.getElementById('binaryRandom').addEventListener('click', randomBinaryInput);
    document.getElementById('binaryStep').addEventListener('click', stepSearch);
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
          code: `void bubbleSort(int arr[], int size) {\n  for (int i = 0; i < size - 1; i++) {\n    bool swapped = false;\n    for (int j = 0; j < size - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        int temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n        swapped = true;\n      }\n    }\n    if (!swapped) break;\n  }\n}`
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
          code: `void selectionSort(int arr[], int size) {\n  for (int i = 0; i < size - 1; i++) {\n    int minIndex = i;\n    for (int j = i + 1; j < size; j++) {\n      if (arr[j] < arr[minIndex]) minIndex = j;\n    }\n    int temp = arr[minIndex];\n    arr[minIndex] = arr[i];\n    arr[i] = temp;\n  }\n}`
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
          code: `void insertionSort(int arr[], int size) {\n  for (int i = 1; i < size; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = key;\n  }\n}`
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
          code: `void bubbleSort(int arr[], int size) {\n  for (int i = 0; i < size - 1; i++) {\n    bool swapped = false;\n    for (int j = 0; j < size - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        int temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n        swapped = true;\n      }\n    }\n    if (!swapped) break;\n  }\n}`
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
          code: `void selectionSort(int arr[], int size) {\n  for (int i = 0; i < size - 1; i++) {\n    int minIndex = i;\n    for (int j = i + 1; j < size; j++) {\n      if (arr[j] < arr[minIndex]) minIndex = j;\n    }\n    int temp = arr[minIndex];\n    arr[minIndex] = arr[i];\n    arr[i] = temp;\n  }\n}`
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
          code: `void insertionSort(int arr[], int size) {\n  for (int i = 1; i < size; i++) {\n    int key = arr[i];\n    int j = i - 1;\n    while (j >= 0 && arr[j] > key) {\n      arr[j + 1] = arr[j];\n      j--;\n    }\n    arr[j + 1] = key;\n  }\n}`
        }
      }
    };

    const stackData = {
      en: {
        basic: {
          title: 'Stack (LIFO)',
          desc: 'Stack is a linear data structure that follows the Last In First Out (LIFO) principle. Think of it like a stack of plates: you add plates to the top, and you can only remove plates from the top.',
          steps: [
            'Push: Adds an item to the top of the stack.',
            'Pop: Removes an item from the top of the stack.',
            'Peek / Top: Returns the top element without removing it.',
            'isEmpty: Checks if the stack has no elements.',
            'isFull: Checks if the stack has reached maximum capacity.'
          ],
          code: `#define MAX 1000\n\nclass Stack {\n  int top;\npublic:\n  int a[MAX];\n  Stack() { top = -1; }\n\n  bool push(int x) {\n    if (top >= (MAX - 1)) {\n      cout << "Stack Overflow\\n";\n      return false;\n    }\n    a[++top] = x;\n    return true;\n  }\n\n  int pop() {\n    if (top < 0) {\n      cout << "Stack Underflow\\n";\n      return 0;\n    }\n    return a[top--];\n  }\n\n  int peek() {\n    if (top < 0) return 0;\n    return a[top];\n  }\n\n  bool isEmpty() {\n    return (top < 0);\n  }\n};`
        },
        balancer: {
          title: 'Parentheses Balancer',
          desc: 'This stack application checks if parentheses/brackets in an expression are balanced. For every closing bracket, we check if it matches the bracket popped from the top of the stack.',
          steps: [
            'Scan expression from left to right.',
            'If opening bracket ( (, {, [ ), push to stack.',
            'If closing bracket ( ), }, ] ), check top of stack.',
            'If stack empty or mismatched, expression is unbalanced.',
            'Pop from stack if it matches the current closing bracket.',
            'At the end of expression, if stack is empty, it is balanced.'
          ],
          code: `bool isValid(string s) {\n  stack<char> st;\n  for (char c : s) {\n    if (c == \'(\' || c == \'{\' || c == \'[\') {\n      st.push(c);\n    } else {\n      if (st.empty()) return false;\n      if (c == \')\' && st.top() != \'(\') return false;\n      if (c == \'}\' && st.top() != \'{\') return false;\n      if (c == \']\' && st.top() != \'[\') return false;\n      st.pop();\n    }\n  }\n  return st.empty();\n}`
        },
        infix: {
          title: 'Infix to Postfix',
          desc: 'Infix expressions (like A + B) are converted to Postfix (like A B +) so that expressions can be evaluated easily by compilers. An operator stack is used to hold operators until their precedence permits them to be appended to the output string.',
          steps: [
            'Scan infix from left to right.',
            'If operand, append to output string.',
            'If opening parenthesis \'(\', push to stack.',
            'If closing parenthesis \')\', pop operators to output until \'(\' is reached.',
            'If operator, pop operators of higher or equal precedence from stack to output, then push current operator.',
            'At the end, pop remaining operators from stack to output.'
          ],
          code: `int prec(char c) {\n  if (c == \'^\') return 3;\n  if (c == \'/\' || c == \'*\') return 2;\n  if (c == \'+\' || c == \'-\') return 1;\n  return -1;\n}\n\nstring infixToPostfix(string s) {\n  stack<char> st;\n  string result;\n  for (char c : s) {\n    if (isalnum(c)) result += c;\n    else if (c == \'(\') st.push(\'(\');\n    else if (c == \')\') {\n      while (st.top() != \'(\') {\n        result += st.top();\n        st.pop();\n      }\n      st.pop();\n    } else {\n      while (!st.empty() && prec(c) <= prec(st.top())) {\n        result += st.top();\n        st.pop();\n      }\n      st.push(c);\n    }\n  }\n  while (!st.empty()) {\n    result += st.top();\n    st.pop();\n  }\n  return result;\n}`
        }
      },
      bn: {
        basic: {
          title: 'স্ট্যাক (LIFO)',
          desc: 'স্ট্যাক হলো একটি লিনিয়ার ডাটা স্ট্রাকচার যা Last In First Out (LIFO) নীতি মেনে চলে। এটিকে প্লেটের স্তূপের মতো ভাবা যেতে পারে: আপনি কেবল সবার উপরে প্লেট রাখতে পারেন এবং তুলে নেওয়ার সময়ও সবার ওপরের প্লেটটিই প্রথমে নিতে হবে।',
          steps: [
            'Push: স্ট্যাকের শীর্ষে একটি আইটেম যুক্ত করে।',
            'Pop: স্ট্যাকের শীর্ষ থেকে একটি আইটেম সরিয়ে নেয়।',
            'Peek / Top: শীর্ষ উপাদানটি না সরিয়ে শুধু প্রদর্শন করে।',
            'isEmpty: স্ট্যাক খালি কিনা তা পরীক্ষা করে।',
            'isFull: স্ট্যাকের সর্বোচ্চ ধারণ ক্ষমতা পূর্ণ হয়েছে কিনা তা পরীক্ষা করে।'
          ],
          code: `#define MAX 1000\n\nclass Stack {\n  int top;\npublic:\n  int a[MAX];\n  Stack() { top = -1; }\n\n  bool push(int x) {\n    if (top >= (MAX - 1)) {\n      cout << "Stack Overflow\\n";\n      return false;\n    }\n    a[++top] = x;\n    return true;\n  }\n\n  int pop() {\n    if (top < 0) {\n      cout << "Stack Underflow\\n";\n      return 0;\n    }\n    return a[top--];\n  }\n\n  int peek() {\n    if (top < 0) return 0;\n    return a[top];\n  }\n\n  bool isEmpty() {\n    return (top < 0);\n  }\n};`
        },
        balancer: {
          title: 'বন্ধনী সমতা পরীক্ষা (Parentheses Balancer)',
          desc: 'স্ট্যাকের একটি বহুল ব্যবহৃত প্রয়োগ হলো বন্ধনীর সমতা পরীক্ষা করা। প্রতিটি বন্ধনী চিহ্নের জন্য এটি চেক করে যে বন্ধনীটি স্ট্যাক থেকে পপ হওয়া বিপরীত বন্ধনীর সাথে মেলে কিনা।',
          steps: [
            'রাশিমালাটি বাম থেকে ডানে স্ক্যান করুন।',
            'যদি শুরুর বন্ধনী ( (, {, [ ) পাওয়া যায়, তবে স্ট্যাকে push করুন।',
            'যদি শেষের বন্ধনী ( ), }, ] ) পাওয়া যায়, তবে স্ট্যাকের শীর্ষ উপাদান চেক করুন।',
            'স্ট্যাক খালি থাকলে বা বন্ধনী অমিল হলে সমতা নষ্ট (unbalanced) হবে।',
            'মিলে গেলে স্ট্যাকের শীর্ষ থেকে বন্ধনীটি pop করুন।',
            'শেষে স্ট্যাক সম্পূর্ণ খালি থাকলে বন্ধনী বিন্যাস সঠিক বা Balanced।'
          ],
          code: `bool isValid(string s) {\n  stack<char> st;\n  for (char c : s) {\n    if (c == \'(\' || c == \'{\' || c == \'[\') {\n      st.push(c);\n    } else {\n      if (st.empty()) return false;\n      if (c == \')\' && st.top() != \'(\') return false;\n      if (c == \'}\' && st.top() != \'{\') return false;\n      if (c == \']\' && st.top() != \'[\') return false;\n      st.pop();\n    }\n  }\n  return st.empty();\n}`
        },
        infix: {
          title: 'Infix থেকে Postfix রূপান্তর',
          desc: 'কম্পাইলার যাতে গাণিতিক হিসাব সহজে করতে পারে সেজন্য Infix এক্সপ্রেশনকে (যেমন A + B) Postfix এক্সপ্রেশনে (A B +) রূপান্তর করা হয়। অপারেটরগুলোকে তাদের অগ্রাধিকার (precedence) অনুযায়ী সাজাতে একটি অপারেটর স্ট্যাক ব্যবহৃত হয়।',
          steps: [
            'Infix রাশিমালাটি বাম থেকে ডানে স্ক্যান করুন।',
            'অপারেন্ড (সংখ্যা/অক্ষর) পেলে সরাসরি আউটপুটে যোগ করুন।',
            'শুরুর বন্ধনী \'(\' পেলে স্ট্যাকে push করুন।',
            'শেষের বন্ধনী \')\' পেলে যতক্ষণ না \'(\' পাওয়া যায়, স্ট্যাকের অপারেটর পপ করে আউটপুটে নিন।',
            'অপারেটর পেলে, স্ট্যাকের শীর্ষের অপারেটরের অগ্রাধিকার বেশি বা সমান হলে পপ করে আউটপুটে নিন, তারপর নতুন অপারেটর পুশ করুন।',
            'স্ক্যান শেষে স্ট্যাকের সব অবশিষ্ট অপারেটর পপ করে আউটপুটে নিন।'
          ],
          code: `int prec(char c) {\n  if (c == \'^\') return 3;\n  if (c == \'/\' || c == \'*\') return 2;\n  if (c == \'+\' || c == \'-\') return 1;\n  return -1;\n}\n\nstring infixToPostfix(string s) {\n  stack<char> st;\n  string result;\n  for (char c : s) {\n    if (isalnum(c)) result += c;\n    else if (c == \'(\') st.push(\'(\');\n    else if (c == \')\') {\n      while (st.top() != \'(\') {\n        result += st.top();\n        st.pop();\n      }\n      st.pop();\n    } else {\n      while (!st.empty() && prec(c) <= prec(st.top())) {\n        result += st.top();\n        st.pop();\n      }\n      st.push(c);\n    }\n  }\n  while (!st.empty()) {\n    result += st.top();\n    st.pop();\n  }\n  return result;\n}`
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
        navBinary: 'Searching',
        navSorting: '3 Sorting',
        navStack: 'Stack',
        navVisual: 'Visualizer',
        navQuiz: 'Quiz',
        heroTitle: 'Learn <span class="gradient">Searching</span>, <span class="gradient">3 Core Sorting</span>, and <span class="gradient">Stack</span> Algorithms',
        heroLead: 'This page has one goal: to help you master Searching (Linear/Binary), 3 Core Sorting (Bubble/Selection/Insertion), and Stack (Basic/Applications) through clear explanations, complexity analysis, C++ code, and interactive simulations.',
        heroGetTitle: 'What you will get',
        heroGetList: [
          'Clear explanations and real use cases',
          'Complexity and comparison tables',
          'Step-by-step searching & sorting simulators',
          'Interactive Stack, Parentheses, and Postfix simulators',
          'C++ implementation code'
        ],
        heroPillBeginner: 'Beginner Friendly',
        heroPillInterview: 'Interview Focused',
        heroPillStep: 'Step by Step',
        stackTitle: 'Stack & Stack Applications',
        tabStackBasic: 'Basic Stack',
        tabStackBalancer: 'Parentheses Balancer',
        tabStackInfix: 'Infix to Postfix',
        stackSimTitle: 'Stack Interactive Simulator',
        stackStatusEmpty: 'Stack is Empty.',
        stackStatusSize: size => `Stack size: ${size}`,
        stackStatusPushed: val => `Pushed ${val} to stack.`,
        stackStatusPopped: val => `Popped ${val} from stack.`,
        stackStatusPeeked: val => `Top element is ${val}.`,
        stackOverflow: 'Stack Overflow! Maximum size is 6.',
        stackUnderflow: 'Stack Underflow! Stack is empty.',
        stackCleared: 'Stack cleared.',
        guideTitle: 'Study Guide',
        studyHowTitle: 'How to Study This Page',
        studyChecklist: [
          'First read concept + complexity of Binary Search.',
          'Run the binary simulator until you can predict each next step.',
          'Compare all 3 sorting algorithms from the table.',
          'Use sorting visualizer with your own input values.',
          'Read Stack LIFO concept and C++ code implementation.',
          'Step through Parentheses Balancer and Infix to Postfix simulators to understand stack tracing.',
          'Finish with quiz and try to score full marks.'
        ],
        interviewTipsTitle: 'Interview Tips',
        interviewTipsList: [
          'Always mention pre-condition for Binary Search: input must be sorted.',
          'For nearly sorted arrays, Insertion Sort often performs very well.',
          'Selection Sort does minimal swaps, useful when swap cost is high.',
          'Bubble Sort is easy to explain and good for learning swap logic.',
          'All core Stack operations (Push, Pop, Peek) have O(1) constant time complexity.',
          'Stack is a LIFO (Last In First Out) structure; remember overflow/underflow conditions.',
          'Identify key Stack applications: recursion execution, parentheses balancing, postfix conversion.'
        ],
        interviewProTip: 'Pro Tip: Explain both <strong>time complexity</strong> and <strong>why</strong> it occurs.',
        binaryInitial: 'Load values and click Start.',
        linearInitial: 'Load values and click Start.',
        linearMoveAction: 'Move Next',
        linearFoundAction: target => `Found ${target}`,
        liveDryRunTitle: (algo, target) => `${algo} Search Dry Run (Target = ${target})`,
        linearCheckingIndex: (index, val) => `Checking index ${index}: value ${val}.`,
        linearFoundAtIndex: (target, index) => `Found target ${target} at index ${index}!`,
        linearNotFound: 'Target not found in the array.',
        linearRandomGenerated: 'Random array generated. Click Next Step to continue.',
        searchSwitchedTo: title => `Switched to ${title}.`,
        sortingTitle: 'Three Core Sorting Algorithms',
        sortingCompareTitle: 'Comparison Table',
        sortingCompareHead: '<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>',
        sortingCompareBody: '<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr><tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>No</td></tr><tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>',
        algoStepsTitle: 'Steps',
        algoCodeTitle: 'C++ Code',
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
        sortBubbleOptimized: 'Array is fully sorted! Optimized early exit (no swaps in this pass).',
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
        navBinary: 'সার্চিং',
        navSorting: '৩টি সর্টিং',
        navStack: 'স্ট্যাক',
        navVisual: 'ভিজ্যুয়ালাইজার',
        navQuiz: 'কুইজ',
        heroTitle: '<span class="gradient">সার্চিং</span>, <span class="gradient">৩টি মূল সর্টিং</span> এবং <span class="gradient">স্ট্যাক</span> অ্যালগরিদম শিখুন',
        heroLead: 'এই পেজের একটাই লক্ষ্য: স্পষ্ট ব্যাখ্যা, কমপ্লেক্সিটি বিশ্লেষণ, C++ কোড এবং ইন্টারঅ্যাকটিভ সিমুলেশনের মাধ্যমে Searching (Linear/Binary), 3 Core Sorting (Bubble/Selection/Insertion) এবং Stack (Basic/Applications) ভালোভাবে শেখানো।',
        heroGetTitle: 'আপনি যা পাবেন',
        heroGetList: [
          'সহজ ভাষায় ব্যাখ্যা এবং বাস্তব উদাহরণ',
          'কমপ্লেক্সিটি ও তুলনামূলক টেবিল',
          'ধাপে ধাপে সার্চিং ও সর্টিং সিমুলেটর',
          'স্ট্যাক, বন্ধনী সমতা এবং Postfix রূপান্তর সিমুলেটর',
          'C++ ইমপ্লিমেন্টেশন কোড'
        ],
        heroPillBeginner: 'বিগিনার ফ্রেন্ডলি',
        heroPillInterview: 'ইন্টারভিউ ফোকাসড',
        heroPillStep: 'স্টেপ বাই স্টেপ',
        stackTitle: 'স্ট্যাক এবং এর ব্যবহার',
        tabStackBasic: 'বেসিক স্ট্যাক',
        tabStackBalancer: 'বন্ধনী সমতা পরীক্ষা',
        tabStackInfix: 'Infix থেকে Postfix',
        stackSimTitle: 'স্ট্যাক ইন্টারেক্টিভ সিমুলেটর',
        stackStatusEmpty: 'স্ট্যাক খালি রয়েছে।',
        stackStatusSize: size => `স্ট্যাকের বর্তমান সাইজ: ${size}`,
        stackStatusPushed: val => `স্ট্যাকে ${val} পুশ করা হয়েছে।`,
        stackStatusPopped: val => `স্ট্যাক থেকে ${val} পপ করা হয়েছে।`,
        stackStatusPeeked: val => `শীর্ষ উপাদানটি হলো ${val}।`,
        stackOverflow: 'Stack Overflow! সর্বোচ্চ সাইজ হলো ৬।',
        stackUnderflow: 'Stack Underflow! স্ট্যাক খালি।',
        stackCleared: 'স্ট্যাক খালি করা হয়েছে।',
        guideTitle: 'স্টাডি গাইড',
        studyHowTitle: 'এই পেজ কীভাবে পড়বেন',
        studyChecklist: [
          'প্রথমে Binary Search এর কনসেপ্ট ও কমপ্লেক্সিটি পড়ুন।',
          'বাইনারি সিমুলেটর চালিয়ে পরের স্টেপ আগে থেকে অনুমান করার অভ্যাস করুন।',
          'টেবিল দেখে ৩টি sorting algorithm তুলনা করুন।',
          'নিজের ভ্যালু দিয়ে sorting visualizer ব্যবহার করুন।',
          'স্ট্যাকের LIFO কনসেপ্ট এবং Push/Pop/Peek অপারেশনের নিয়মগুলো পড়ুন।',
          'বন্ধনী সমতা পরীক্ষা ও Infix থেকে Postfix সিমুলেটরে ধাপে ধাপে স্ট্যাক ট্র্যাকিং প্র্যাকটিস করুন।',
          'শেষে কুইজ দিয়ে ফুল মার্কস পাওয়ার চেষ্টা করুন।'
        ],
        interviewTipsTitle: 'ইন্টারভিউ টিপস',
        interviewTipsList: [
          'Binary Search বলার সময় pre-condition (input sorted হতে হবে) অবশ্যই উল্লেখ করুন।',
          'Nearly sorted array হলে Insertion Sort অনেক সময় ভালো কাজ করে।',
          'Swap cost বেশি হলে Selection Sort উপকারী হতে পারে।',
          'Swap logic বোঝাতে Bubble Sort খুব সহজ।',
          'স্ট্যাকের সব মৌলিক অপারেশন (Push, Pop, Peek) এর Time Complexity হলো O(1) বা ধ্রুবক সময়।',
          'স্ট্যাক একটি LIFO কাঠামো; মনে রাখুন overflow (পূর্ণ) ও underflow (খালি) কন্ডিশন।',
          'স্ট্যাকের প্রধান প্রয়োগগুলো মনে রাখুন: রিকার্শন কল ট্র্যাকিং, বন্ধনী জোড় মেলানো, পোস্টফিক্স রূপান্তর।'
        ],
        interviewProTip: 'প্রো টিপ: শুধু <strong>time complexity</strong> না, <strong>কেন</strong> এমন হয় সেটাও ব্যাখ্যা করুন।',
        binaryInitial: 'ভ্যালু দিন এবং Start ক্লিক করুন।',
        linearInitial: 'ভ্যালু দিন এবং Start ক্লিক করুন।',
        linearMoveAction: 'সামনে যান',
        linearFoundAction: target => `${target} পাওয়া গেছে`,
        liveDryRunTitle: (algo, target) => `${algo} Search ড্রাই রান (Target = ${target})`,
        linearCheckingIndex: (index, val) => `index ${index} চেক করা হচ্ছে: মান ${val}।`,
        linearFoundAtIndex: (target, index) => `Target ${target} index ${index} এ পাওয়া গেছে!`,
        linearNotFound: 'Target পাওয়া যায়নি।',
        linearRandomGenerated: 'র‌্যান্ডম array তৈরি হয়েছে। চালাতে Next Step ক্লিক করুন।',
        searchSwitchedTo: title => `${title} এ পরিবর্তন করা হয়েছে।`,
        sortingTitle: 'তিনটি মূল সর্টিং অ্যালগরিদম',
        sortingCompareTitle: 'তুলনামূলক টেবিল',
        sortingCompareHead: '<tr><th>অ্যালগরিদম</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>',
        sortingCompareBody: '<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr><tr><td>Selection Sort</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>না</td></tr><tr><td>Insertion Sort</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>হ্যাঁ</td></tr>',
        algoStepsTitle: 'ধাপসমূহ',
        algoCodeTitle: 'C++ কোড',
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
        sortBubbleOptimized: 'অ্যারেটি সম্পূর্ণ সর্ট করা! অপ্টিমাইজড আর্লি এক্সিট (এই পাসে কোনো সোয়াপ হয়নি)।',
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
      document.getElementById('navStackLink').textContent = t('navStack');
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
      renderSearchInfo();
      document.getElementById('sortingTitle').textContent = t('sortingTitle');
      document.getElementById('sortingCompareTitle').textContent = t('sortingCompareTitle');
      document.getElementById('sortingCompareHead').innerHTML = t('sortingCompareHead');
      document.getElementById('sortingCompareBody').innerHTML = t('sortingCompareBody');
      document.getElementById('tabBubble').textContent = t('tabBubble');
      document.getElementById('tabSelection').textContent = t('tabSelection');
      document.getElementById('tabInsertion').textContent = t('tabInsertion');
      document.getElementById('stackTitle').textContent = t('stackTitle');
      document.getElementById('tabStackBasic').textContent = t('tabStackBasic');
      document.getElementById('tabStackBalancer').textContent = t('tabStackBalancer');
      document.getElementById('tabStackInfix').textContent = t('tabStackInfix');
      document.getElementById('stackSimTitle').textContent = t('stackSimTitle');
      renderStackInfo();
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

      if (!searchState.array.length) {
        binaryStatus.textContent = t(searchState.algorithm + 'Initial');
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
        { q: 'In Selection Sort, what remains true after each outer loop pass?', options: ['Last element is always maximum', 'Prefix [0..i] is sorted', 'Array becomes stable', 'No comparisons are needed'], ans: 1 },
        { q: 'Linear Search has what worst-case time complexity?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 2 },
        { q: 'Which of the following is true for Linear Search?', options: ['Requires sorted array', 'Does not require sorted array', 'Only works on even length arrays', 'Time complexity is always O(log n)'], ans: 1 },
        { q: 'What is the best-case time complexity of Linear Search?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 0 },
        { q: 'What is the average number of comparisons in a successful Linear Search on an array of size n?', options: ['n', 'n / 2', 'log n', '1'], ans: 1 },
        { q: 'In Linear Search, if target is not present in the array, how many comparisons are made?', options: ['0', 'log n', 'n / 2', 'n'], ans: 3 },
        { q: 'Stack works on which principle?', options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'LILO (Last In Last Out)', 'Random Access'], ans: 1 },
        { q: 'Which operation is used to insert an element into a Stack?', options: ['Pop', 'Peek', 'Push', 'Enqueue'], ans: 2 },
        { q: 'Stack Overflow condition occurs when trying to:', options: ['Push on a full stack', 'Pop from an empty stack', 'Peek an empty stack', 'Check if stack is empty'], ans: 0 },
        { q: 'Which of the following is a classic application of Stack?', options: ['Binary Search', 'Parentheses balancing check', 'Finding minimum element', 'Sorting random values'], ans: 1 },
        { q: 'What is the postfix representation of the infix expression: A + B * C?', options: ['A B C * +', 'A B + C *', 'A B C + *', '+ A * B C'], ans: 0 },
        { q: 'What is the value of the postfix expression: 5 3 2 * +?', options: ['16', '11', '10', '25'], ans: 1 },
        { q: 'Which data structure is used by compilers to implement recursion and function calls?', options: ['Queue', 'Linked List', 'Stack', 'Tree'], ans: 2 },
        { q: 'What is the term for looking at the top element of a stack without removing it?', options: ['Pop', 'Peek', 'Push', 'Rear'], ans: 1 },
        { q: 'What happens when an opening parenthesis \'(\' is encountered during Infix to Postfix conversion?', options: ['Appended to output', 'Pushed to stack', 'Ignored', 'Pops operators of higher precedence'], ans: 1 },
        { q: 'Which stack application uses a stack to evaluate postfix expressions?', options: ['Prefix Evaluation', 'Postfix Evaluation', 'Depth First Search', 'All of the above'], ans: 1 },
        { q: 'If a stack is implemented using an array, what does top = -1 indicate?', options: ['Stack Overflow', 'Stack Underflow / Empty', 'Stack is Full', 'Random State'], ans: 1 },
        { q: 'In C++, which header file must be included to use the standard stack container?', options: ['<vector>', '<array>', '<stack>', '<algorithm>'], ans: 2 },
        { q: 'Which data structure is typically used to implement the Undo/Redo feature in text editors?', options: ['Queue', 'Graph', 'Stack', 'Binary Tree'], ans: 2 },
        { q: 'Attempting to pop an element from an empty stack leads to which error?', options: ['Stack Overflow', 'Stack Underflow', 'Index Out of Bounds', 'Null Pointer Exception'], ans: 1 },
        { q: 'When evaluating a postfix expression, when an operator is encountered, how are operands popped?', options: ['First popped is right operand, second popped is left operand', 'First popped is left operand, second popped is right operand', 'Both popped at once randomly', 'Only one operand is popped'], ans: 0 }
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
        { q: 'Selection Sort এ প্রতিটি outer loop pass শেষে কী সত্য থাকে?', options: ['শেষ element সবসময় maximum', 'Prefix [0..i] sorted থাকে', 'Array stable হয়ে যায়', 'কোনো comparison লাগে না'], ans: 1 },
        { q: 'Linear Search এর worst-case time complexity কত?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 2 },
        { q: 'Linear Search এর ক্ষেত্রে নিচের কোনটি সঠিক?', options: ['অবশ্যই sorted array লাগবে', 'কোনো sorted array লাগে না', 'শুধু জোড় দৈর্ঘ্যের অ্যারেতে কাজ করে', 'Time complexity সবসময় O(log n)'], ans: 1 },
        { q: 'Linear Search এর best-case time complexity কত?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], ans: 0 },
        { q: 'n সাইজের অ্যারেতে সফল Linear Search এর গড় তুলনা (average comparisons) কয়টি?', options: ['n', 'n / 2', 'log n', '1'], ans: 1 },
        { q: 'Linear Search-এ target যদি অ্যারেতে না থাকে, তবে মোট কয়টি তুলনা করা হয়?', options: ['0', 'log n', 'n / 2', 'n'], ans: 3 },
        { q: 'স্ট্যাক (Stack) কোন নীতিতে কাজ করে?', options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'LILO (Last In Last Out)', 'Random Access'], ans: 1 },
        { q: 'স্ট্যাকে কোনো নতুন উপাদান যুক্ত করতে কোন অপারেশনটি ব্যবহৃত হয়?', options: ['Pop', 'Peek', 'Push', 'Enqueue'], ans: 2 },
        { q: 'নিচের কোন সময়ে Stack Overflow ঘটে?', options: ['পূর্ণ স্ট্যাকে Push করতে গেলে', 'খালি স্ট্যাক থেকে Pop করতে গেলে', 'খালি স্ট্যাকের Peek করতে গেলে', 'স্ট্যাক খালি আছে কিনা চেক করতে গেলে'], ans: 0 },
        { q: 'নিচের কোনটি স্ট্যাকের একটি আদর্শ প্র্যাকটিক্যাল ব্যবহার?', options: ['বাইনারি সার্চ', 'বন্ধনী সমতা পরীক্ষা (Parentheses balancing)', 'সর্বনিম্ন উপাদান খুঁজে বের করা', 'এলোমেলো মান সাজানো (Sorting)'], ans: 1 },
        { q: 'Infix এক্সপ্রেশন A + B * C এর Postfix রূপ কোনটি?', options: ['A B C * +', 'A B + C *', 'A B C + *', '+ A * B C'], ans: 0 },
        { q: 'Postfix এক্সপ্রেশন 5 3 2 * + এর মান কত?', options: ['16', '11', '10', '25'], ans: 1 },
        { q: 'কম্পাইলার রিকার্শন (Recursion) এবং ফাংশন কল ইমপ্লিমেন্ট করতে কোন ডাটা স্ট্রাকচার ব্যবহার করে?', options: ['Queue', 'Linked List', 'Stack', 'Tree'], ans: 2 },
        { q: 'স্ট্যাক থেকে কোনো উপাদান না সরিয়ে শুধুমাত্র শীর্ষ উপাদানটি দেখার অপারেশনকে কী বলে?', options: ['Pop', 'Peek', 'Push', 'Rear'], ans: 1 },
        { q: 'Infix থেকে Postfix রূপান্তরের সময় শুরুর বন্ধনী \'(\' পাওয়া গেলে কী করা হয়?', options: ['আউটপুটে যোগ করা হয়', 'স্ট্যাকে পুশ করা হয়', 'উপেক্ষা করা হয়', 'বেশি অগ্রাধিকারের অপারেটর পপ করা হয়'], ans: 1 },
        { q: 'নিচের কোনটিতে পোস্টফিক্স এক্সপ্রেশনের মান বের করতে স্ট্যাক ব্যবহৃত হয়?', options: ['Prefix Evaluation', 'Postfix Evaluation', 'Depth First Search', 'সবগুলোই সঠিক'], ans: 1 },
        { q: 'যদি অ্যারে দিয়ে স্ট্যাক ইমপ্লিমেন্ট করা হয়, তবে top = -1 দিয়ে কী বোঝানো হয়?', options: ['Stack Overflow', 'স্ট্যাক খালি / Stack Empty', 'স্ট্যাক পূর্ণ', 'এলোমেলো অবস্থা'], ans: 1 },
        { q: 'C++ এ স্ট্যান্ডার্ড স্ট্যাক কন্টেইনার ব্যবহার করতে কোন হেডার ফাইলটি যুক্ত করতে হয়?', options: ['<vector>', '<array>', '<stack>', '<algorithm>'], ans: 2 },
        { q: 'টেক্সট এডিটরে Undo/Redo ফিচার ইমপ্লিমেন্ট করতে সাধারণত কোন ডাটা স্ট্রাকচার ব্যবহৃত হয়?', options: ['Queue', 'Graph', 'Stack', 'Binary Tree'], ans: 2 },
        { q: 'একটি খালি স্ট্যাক থেকে উপাদান পপ (Pop) করার চেষ্টা করলে নিচের কোন ত্রুটি বা এরর ঘটে?', options: ['Stack Overflow', 'Stack Underflow', 'Index Out of Bounds', 'Null Pointer Exception'], ans: 1 },
        { q: 'একটি Postfix এক্সপ্রেশন মূল্যায়নের সময় যখন কোনো অপারেটর পাওয়া যায়, তখন পপ হওয়া অপারেন্ডের ক্রম কেমন হয়?', options: ['প্রথম পপ হওয়া মানটি ডান অপারেন্ড, দ্বিতীয়টি বাম অপারেন্ড', 'প্রথম পপ হওয়া মানটি বাম অপারেন্ড, দ্বিতীয়টি ডান অপারেন্ড', 'উভয় মান এলোমেলোভাবে পপ হয়', 'শুধু একটি অপারেন্ড পপ হয়'], ans: 0 }
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
      return values.join(', ');
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
      sortState.swapped = false;
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

      if (sortState.j === 0) {
        sortState.swapped = false;
      }

      if (sortState.j >= n - 1 - sortState.i) {
        const passNo = sortState.i + 1;
        addSortHistoryEntry(t('sortBubbleStepComplete')(passNo, formatSortSnapshot(sortState.array)));
        if (!sortState.swapped) {
          sortStatus.textContent = t('sortBubbleOptimized');
          return true;
        }
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
        sortState.swapped = true;
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

    const searchTabButtons = document.querySelectorAll('#searchTabs .tab');
    searchTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        searchTabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        searchState.algorithm = btn.dataset.search;

        searchState.array = [];
        searchState.target = null;
        searchState.index = -1;
        searchState.low = 0;
        searchState.high = -1;
        searchState.mid = -1;
        searchState.done = false;
        searchState.foundIndex = -1;

        if (searchState.algorithm === 'linear') {
          binaryArrayInput.value = "38,16,72,5,23,56,8,91,2,12";
        } else {
          binaryArrayInput.value = "2,5,8,12,16,23,38,56,72,91";
        }
        binaryTargetInput.value = "23";

        renderSearchInfo();
        renderBinary();
        binaryStatus.textContent = t(searchState.algorithm + 'Initial');
      });
    });

    // Scroll Progress and Back-to-Top Logic
    const progressBar = document.getElementById('scrollProgress');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
      // 1. Update Scroll Progress Bar
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }

      // 2. Show/Hide Back to Top Button
      if (backToTopBtn) {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // --- STACK AND APPLICATIONS SIMULATORS LOGIC ---
    const stackTabs = document.getElementById('stackTabs');
    let activeStackTab = 'basic'; // 'basic' | 'balancer' | 'infix'
    
    function renderStackInfo() {
      const current = stackData[currentLang][activeStackTab];
      if (!current) return;
      document.getElementById('stackInfoTitle').textContent = current.title;
      document.getElementById('stackInfoDesc').textContent = current.desc;
      
      const list = document.getElementById('stackOperationsList');
      if (list) {
        list.innerHTML = current.steps.map(step => `<li>${step}</li>`).join('');
      }
      
      const codeBox = document.getElementById('stackCode');
      if (codeBox) {
        codeBox.textContent = current.code;
      }
    }

    if (stackTabs) {
      stackTabs.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => {
          stackTabs.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeStackTab = btn.getAttribute('data-stack');
          
          document.querySelectorAll('.stack-control-panel').forEach(panel => {
            panel.classList.add('is-hidden');
          });
          
          if (activeStackTab === 'basic') {
            document.getElementById('stackBasicControls').classList.remove('is-hidden');
          } else if (activeStackTab === 'balancer') {
            document.getElementById('stackBalancerControls').classList.remove('is-hidden');
          } else if (activeStackTab === 'infix') {
            document.getElementById('stackInfixControls').classList.remove('is-hidden');
          }
          
          renderStackInfo();
        });
      });
    }

    // 1. Basic Stack Visualizer
    const basicStackArray = [];
    const maxBasicStackSize = 6;
    
    const stackInputVal = document.getElementById('stackInputVal');
    const stackPushBtn = document.getElementById('stackPushBtn');
    const stackPopBtn = document.getElementById('stackPopBtn');
    const stackPeekBtn = document.getElementById('stackPeekBtn');
    const stackClearBtn = document.getElementById('stackClearBtn');
    
    const stackVisualContainer = document.getElementById('stackVisualContainer');
    const stackStatus = document.getElementById('stackStatus');
    const stackSizePill = document.getElementById('stackSizePill');
    const stackTopPill = document.getElementById('stackTopPill');
    
    function updateBasicStackUI() {
      if (!stackVisualContainer) return;
      stackVisualContainer.innerHTML = '';
      
      basicStackArray.forEach((val, idx) => {
        const el = document.createElement('div');
        el.className = 'stack-element';
        el.textContent = val;
        el.id = `stack-el-${idx}`;
        stackVisualContainer.appendChild(el);
      });
      
      if (stackSizePill) {
        stackSizePill.textContent = `Size: ${basicStackArray.length}`;
      }
      if (stackTopPill) {
        stackTopPill.textContent = `Top: ${basicStackArray.length > 0 ? basicStackArray[basicStackArray.length - 1] : 'None'}`;
      }
    }
    
    if (stackPushBtn) {
      stackPushBtn.addEventListener('click', () => {
        const val = stackInputVal.value.trim();
        if (val === '') return;
        
        if (basicStackArray.length >= maxBasicStackSize) {
          stackStatus.textContent = t('stackOverflow');
          stackStatus.className = 'status match-fail';
          return;
        }
        
        basicStackArray.push(val);
        updateBasicStackUI();
        
        stackStatus.textContent = t('stackStatusPushed')(val);
        stackStatus.className = 'status';
        stackInputVal.value = '';
      });
    }
    
    if (stackPopBtn) {
      stackPopBtn.addEventListener('click', () => {
        if (basicStackArray.length === 0) {
          stackStatus.textContent = t('stackUnderflow');
          stackStatus.className = 'status match-fail';
          return;
        }
        
        const topIdx = basicStackArray.length - 1;
        const topEl = document.getElementById(`stack-el-${topIdx}`);
        if (topEl) {
          topEl.classList.add('popping');
        }
        
        setTimeout(() => {
          const popped = basicStackArray.pop();
          updateBasicStackUI();
          stackStatus.textContent = t('stackStatusPopped')(popped);
          stackStatus.className = 'status';
        }, 250);
      });
    }
    
    if (stackPeekBtn) {
      stackPeekBtn.addEventListener('click', () => {
        if (basicStackArray.length === 0) {
          stackStatus.textContent = t('stackUnderflow');
          stackStatus.className = 'status match-fail';
          return;
        }
        
        updateBasicStackUI();
        const topIdx = basicStackArray.length - 1;
        const topEl = document.getElementById(`stack-el-${topIdx}`);
        if (topEl) {
          topEl.classList.add('peeking');
        }
        
        const topVal = basicStackArray[topIdx];
        stackStatus.textContent = t('stackStatusPeeked')(topVal);
        stackStatus.className = 'status';
      });
    }
    
    if (stackClearBtn) {
      stackClearBtn.addEventListener('click', () => {
        basicStackArray.length = 0;
        updateBasicStackUI();
        stackStatus.textContent = t('stackCleared');
        stackStatus.className = 'status';
      });
    }

    // 2. Parentheses Balancer Simulator
    const balancerState = {
      expression: '',
      index: -1,
      stack: [],
      trace: [],
      done: false,
      isValid: true
    };
    
    const balancerInput = document.getElementById('balancerInput');
    const balancerStartBtn = document.getElementById('balancerStartBtn');
    const balancerStepBtn = document.getElementById('balancerStepBtn');
    const balancerResetBtn = document.getElementById('balancerResetBtn');
    
    const balancerStackContainer = document.getElementById('balancerStackContainer');
    const balancerInputDisplay = document.getElementById('balancerInputDisplay');
    const balancerTraceBody = document.getElementById('balancerTraceBody');
    const balancerStatus = document.getElementById('balancerStatus');
    
    function renderBalancerUI() {
      if (!balancerStackContainer) return;
      balancerStackContainer.innerHTML = '';
      balancerState.stack.forEach(char => {
        const el = document.createElement('div');
        el.className = 'stack-element';
        el.textContent = char;
        balancerStackContainer.appendChild(el);
      });
      
      balancerInputDisplay.innerHTML = balancerState.expression.split('').map((char, idx) => {
        let cls = 'balancer-char-token';
        if (idx === balancerState.index) cls += ' active';
        else if (idx < balancerState.index) cls += ' processed';
        return `<span class="${cls}">${char}</span>`;
      }).join('');
      
      balancerTraceBody.innerHTML = balancerState.trace.map(tr => `
        <tr>
          <td>${tr.char}</td>
          <td>${tr.operation}</td>
          <td>[${tr.stackState.join(', ')}]</td>
          <td class="${tr.status.includes('Mismatched') || tr.status.includes('Empty') || tr.status.includes('Not Balanced') || tr.status.includes('ভুল') || tr.status.includes('অমিল') ? 'match-fail' : (tr.status.includes('Balanced') || tr.status.includes('Matched') || tr.status.includes('সঠিক') || tr.status.includes('সফল') ? 'match-success' : '')}">${tr.status}</td>
        </tr>
      `).join('');
    }
    
    if (balancerStartBtn) {
      balancerStartBtn.addEventListener('click', () => {
        const expr = balancerInput.value.trim();
        if (!expr) return;
        
        balancerState.expression = expr;
        balancerState.index = -1;
        balancerState.stack = [];
        balancerState.trace = [];
        balancerState.done = false;
        balancerState.isValid = true;
        
        balancerStatus.textContent = currentLang === 'bn' 
          ? 'সিমুলেশন শুরু হয়েছে। পরবর্তী ধাপ দেখতে Next Step ক্লিক করুন।'
          : 'Simulation started. Click Next Step to step through.';
        balancerStatus.className = 'status';
        
        renderBalancerUI();
      });
    }
    
    if (balancerStepBtn) {
      balancerStepBtn.addEventListener('click', () => {
        if (!balancerState.expression) {
          balancerStatus.textContent = currentLang === 'bn' ? 'প্রথমে রাশিমালা দিয়ে Start ক্লিক করুন।' : 'Please enter an expression and click Start first.';
          balancerStatus.className = 'status match-fail';
          return;
        }
        if (balancerState.done) {
          balancerStatus.textContent = currentLang === 'bn' ? 'সিমুলেশন ইতোমধ্যে শেষ হয়েছে।' : 'Simulation already finished.';
          return;
        }
        
        balancerState.index += 1;
        
        if (balancerState.index >= balancerState.expression.length) {
          balancerState.done = true;
          const isBalanced = balancerState.stack.length === 0 && balancerState.isValid;
          
          const statusText = isBalanced
            ? (currentLang === 'bn' ? 'সব ব্র্যাকেট মিলেছে। রাশিমালাটি Balanced!' : 'Balanced expression!')
            : (currentLang === 'bn' ? 'স্ট্যাক খালি নয় বা অমিল আছে। রাশিমালাটি Unbalanced!' : 'Unbalanced expression!');
            
          balancerState.trace.push({
            char: '-',
            operation: currentLang === 'bn' ? 'শেষ যাচাই' : 'Final Check',
            stackState: [...balancerState.stack],
            status: isBalanced 
              ? (currentLang === 'bn' ? 'Balanced (সঠিক)' : 'Balanced')
              : (currentLang === 'bn' ? 'Unbalanced (ভুল)' : 'Unbalanced')
          });
          
          balancerStatus.textContent = statusText;
          balancerStatus.className = isBalanced ? 'status match-success' : 'status match-fail';
          renderBalancerUI();
          return;
        }
        
        const char = balancerState.expression[balancerState.index];
        let op = '';
        let status = '';
        
        if (char === '(' || char === '{' || char === '[') {
          balancerState.stack.push(char);
          op = `Push '${char}'`;
          status = currentLang === 'bn' ? 'শুরুর বন্ধনী পুশ করা হলো' : 'Opening bracket pushed';
        } else if (char === ')' || char === '}' || char === ']') {
          if (balancerState.stack.length === 0) {
            balancerState.isValid = false;
            balancerState.done = true;
            op = `Check '${char}'`;
            status = currentLang === 'bn' ? 'ভুল! খালি স্ট্যাক কিন্তু শেষের বন্ধনী এসেছে।' : 'Mismatched! Empty stack on closing bracket.';
            balancerState.trace.push({ char, operation: op, stackState: [...balancerState.stack], status });
            balancerStatus.textContent = currentLang === 'bn' ? 'ভুল! বন্ধনী সমতা বজায় রাখেনি।' : 'Invalid! Stack empty on closing bracket.';
            balancerStatus.className = 'status match-fail';
            renderBalancerUI();
            return;
          }
          
          const top = balancerState.stack[balancerState.stack.length - 1];
          const matches = (char === ')' && top === '(') || 
                          (char === '}' && top === '{') || 
                          (char === ']' && top === '[');
                          
          if (matches) {
            balancerState.stack.pop();
            op = `Pop ('${top}' match '${char}')`;
            status = currentLang === 'bn' ? 'সফল জোড় এবং পপ' : 'Matched and popped';
          } else {
            balancerState.isValid = false;
            balancerState.done = true;
            op = `Check '${char}'`;
            status = currentLang === 'bn' ? `ভুল! অমিল: '${top}' এর বিপরীতে '${char}'` : `Mismatch: '${top}' vs '${char}'`;
            balancerState.trace.push({ char, operation: op, stackState: [...balancerState.stack], status });
            balancerStatus.textContent = currentLang === 'bn' ? `ভুল! বন্ধনী অমিল: '${top}' এবং '${char}'` : `Mismatch error: '${top}' and '${char}'`;
            balancerStatus.className = 'status match-fail';
            renderBalancerUI();
            return;
          }
        } else {
          op = currentLang === 'bn' ? 'উপেক্ষা' : 'Ignore';
          status = currentLang === 'bn' ? 'ব্র্যাকেট নয়' : 'Non-bracket skipped';
        }
        
        balancerState.trace.push({
          char,
          operation: op,
          stackState: [...balancerState.stack],
          status
        });
        
        balancerStatus.textContent = currentLang === 'bn' 
          ? `চরিত্র '${char}' প্রসেস করা হচ্ছে।`
          : `Processing char '${char}'.`;
          
        renderBalancerUI();
      });
    }
    
    if (balancerResetBtn) {
      balancerResetBtn.addEventListener('click', () => {
        balancerState.expression = '';
        balancerState.index = -1;
        balancerState.stack = [];
        balancerState.trace = [];
        balancerState.done = false;
        balancerState.isValid = true;
        balancerStatus.textContent = currentLang === 'bn' ? 'রিসেট করা হয়েছে।' : 'Reset completed.';
        balancerStatus.className = 'status';
        balancerInputDisplay.innerHTML = '';
        balancerTraceBody.innerHTML = '';
        balancerStackContainer.innerHTML = '';
      });
    }

    // 3. Infix to Postfix Converter Simulator
    const infixState = {
      expression: '',
      index: -1,
      stack: [],
      postfix: '',
      trace: [],
      done: false
    };
    
    const infixInput = document.getElementById('infixInput');
    const infixStartBtn = document.getElementById('infixStartBtn');
    const infixStepBtn = document.getElementById('infixStepBtn');
    const infixResetBtn = document.getElementById('infixResetBtn');
    
    const infixStackContainer = document.getElementById('infixStackContainer');
    const infixInputDisplay = document.getElementById('infixInputDisplay');
    const infixPostfixOutput = document.getElementById('infixPostfixOutput');
    const infixTraceBody = document.getElementById('infixTraceBody');
    const infixStatus = document.getElementById('infixStatus');
    
    function getPrecedence(char) {
      if (char === '^') return 3;
      if (char === '*' || char === '/') return 2;
      if (char === '+' || char === '-') return 1;
      return -1;
    }
    
    function isOperand(char) {
      return (char >= 'a' && char <= 'z') || 
             (char >= 'A' && char <= 'Z') || 
             (char >= '0' && char <= '9');
    }
    
    function renderInfixUI() {
      if (!infixStackContainer) return;
      infixStackContainer.innerHTML = '';
      infixState.stack.forEach(char => {
        const el = document.createElement('div');
        el.className = 'stack-element';
        el.textContent = char;
        infixStackContainer.appendChild(el);
      });
      
      infixInputDisplay.innerHTML = infixState.expression.split('').map((char, idx) => {
        let cls = 'balancer-char-token';
        if (idx === infixState.index) cls += ' active';
        else if (idx < infixState.index) cls += ' processed';
        return `<span class="${cls}">${char}</span>`;
      }).join('');
      
      infixPostfixOutput.textContent = infixState.postfix || '-';
      
      infixTraceBody.innerHTML = infixState.trace.map(tr => `
        <tr>
          <td>${tr.char}</td>
          <td>${tr.operation}</td>
          <td>[${tr.stackState.join(', ')}]</td>
          <td>${tr.postfixOut}</td>
        </tr>
      `).join('');
    }
    
    if (infixStartBtn) {
      infixStartBtn.addEventListener('click', () => {
        const expr = infixInput.value.replace(/\s+/g, '');
        if (!expr) return;
        
        infixState.expression = expr;
        infixState.index = -1;
        infixState.stack = [];
        infixState.postfix = '';
        infixState.trace = [];
        infixState.done = false;
        
        infixStatus.textContent = currentLang === 'bn' 
          ? 'সিমুলেশন শুরু হয়েছে। পরবর্তী ধাপ দেখতে Next Step ক্লিক করুন।'
          : 'Simulation started. Click Next Step to step through.';
        infixStatus.className = 'status';
        
        renderInfixUI();
      });
    }
    
    if (infixStepBtn) {
      infixStepBtn.addEventListener('click', () => {
        if (!infixState.expression) {
          infixStatus.textContent = currentLang === 'bn' ? 'প্রথমে রাশিমালা দিয়ে Start ক্লিক করুন।' : 'Please enter expression and click Start first.';
          infixStatus.className = 'status';
          return;
        }
        if (infixState.done) {
          infixStatus.textContent = currentLang === 'bn' ? 'সিমুলেশন ইতোমধ্যে শেষ হয়েছে।' : 'Simulation already finished.';
          return;
        }
        
        infixState.index += 1;
        
        if (infixState.index >= infixState.expression.length) {
          if (infixState.stack.length > 0) {
            const popped = infixState.stack.pop();
            infixState.postfix += popped;
            
            infixState.trace.push({
              char: '-',
              operation: currentLang === 'bn' ? `পপ '${popped}' (অবশিষ্ট)` : `Pop '${popped}' (Remaining)`,
              stackState: [...infixState.stack],
              postfixOut: infixState.postfix
            });
            
            infixStatus.textContent = currentLang === 'bn' 
              ? `স্ট্যাকের অবশিষ্ট অপারেটর '${popped}' পপ করে আউটপুটে নেওয়া হলো।`
              : `Popping remaining operator '${popped}' to output.`;
          } else {
            infixState.done = true;
            infixState.trace.push({
              char: '-',
              operation: currentLang === 'bn' ? 'সমাপ্ত' : 'Done',
              stackState: [],
              postfixOut: infixState.postfix
            });
            
            infixStatus.textContent = currentLang === 'bn'
              ? `রূপান্তর সম্পন্ন! চূড়ান্ত Postfix রাশি: ${infixState.postfix}`
              : `Conversion complete! Final Postfix: ${infixState.postfix}`;
            infixStatus.className = 'status match-success';
          }
          renderInfixUI();
          return;
        }
        
        const char = infixState.expression[infixState.index];
        let op = '';
        
        if (isOperand(char)) {
          infixState.postfix += char;
          op = currentLang === 'bn' ? `আউটপুটে যোগ (${char})` : `Append '${char}'`;
          infixStatus.textContent = currentLang === 'bn'
            ? `অপারেন্ড '${char}' সরাসরি আউটপুটে যোগ করা হলো।`
            : `Operand '${char}' appended to output.`;
        } else if (char === '(') {
          infixState.stack.push(char);
          op = `Push '('`;
          infixStatus.textContent = currentLang === 'bn'
            ? `'(' চিহ্নে স্ট্যাকে পুশ করা হলো।`
            : `'(' pushed to stack.`;
        } else if (char === ')') {
          let popStr = '';
          while (infixState.stack.length > 0 && infixState.stack[infixState.stack.length - 1] !== '(') {
            const popped = infixState.stack.pop();
            infixState.postfix += popped;
            popStr += popped;
          }
          if (infixState.stack.length > 0 && infixState.stack[infixState.stack.length - 1] === '(') {
            infixState.stack.pop();
          }
          op = currentLang === 'bn' ? `পপ অপারেটরস (${popStr})` : `Pop operators: ${popStr}`;
          infixStatus.textContent = currentLang === 'bn'
            ? `')' পাওয়া গেছে, '(' পর্যন্ত অপারেটর পপ করে আউটপুটে নেওয়া হলো।`
            : `')' found, popped operators up to '(' to output.`;
        } else {
          let poppedStr = '';
          while (
            infixState.stack.length > 0 &&
            getPrecedence(infixState.stack[infixState.stack.length - 1]) >= getPrecedence(char)
          ) {
            const popped = infixState.stack.pop();
            infixState.postfix += popped;
            poppedStr += popped;
          }
          infixState.stack.push(char);
          op = poppedStr 
            ? (currentLang === 'bn' ? `পপ ও পুশ (${poppedStr} -> Push ${char})` : `Pop & Push (${poppedStr} -> Push ${char})`)
            : `Push '${char}'`;
            
          infixStatus.textContent = currentLang === 'bn'
            ? `অপারেটর '${char}' এর চেয়ে বেশি/সমান অগ্রাধিকারের অপারেটর পপ করে স্ট্যাকে '${char}' পুশ করা হলো।`
            : `Higher/equal precedence operators popped, then '${char}' pushed.`;
        }
        
        infixState.trace.push({
          char,
          operation: op,
          stackState: [...infixState.stack],
          postfixOut: infixState.postfix
        });
        
        renderInfixUI();
      });
    }
    
    if (infixResetBtn) {
      infixResetBtn.addEventListener('click', () => {
        infixState.expression = '';
        infixState.index = -1;
        infixState.stack = [];
        infixState.postfix = '';
        infixState.trace = [];
        infixState.done = false;
        
        infixStatus.textContent = currentLang === 'bn' ? 'রিসেট করা হয়েছে।' : 'Reset completed.';
        infixStatus.className = 'status';
        
        infixInputDisplay.innerHTML = '';
        infixPostfixOutput.textContent = '-';
        infixTraceBody.innerHTML = '';
        infixStackContainer.innerHTML = '';
      });
    }

    renderAlgoInfo();
    renderSearchInfo();
    renderBinary();
    renderBars();
    renderQuiz();
    updateBasicStackUI();
    applyLanguage();
