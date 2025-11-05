export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What does STL stand for in C++?",
    options: ["Standard Template Library", "System Type Library", "Structured Template Language", "Standard Type Library"],
    correctAnswer: 0,
    explanation: "STL stands for Standard Template Library, which provides generic classes and functions."
  },
  {
    id: 2,
    question: "Which header file is required to use vector in C++?",
    options: ["<array>", "<list>", "<vector>", "<container>"],
    correctAnswer: 2,
    explanation: "The <vector> header file must be included to use the vector container."
  },
  {
    id: 3,
    question: "What is the time complexity of push_back() in a vector?",
    options: ["O(1) amortized", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "push_back() has O(1) amortized time complexity as it occasionally needs to reallocate."
  },
  {
    id: 4,
    question: "Which STL container maintains elements in sorted order?",
    options: ["vector", "list", "set", "unordered_set"],
    correctAnswer: 2,
    explanation: "set maintains elements in sorted order using a balanced binary search tree."
  },
  {
    id: 5,
    question: "What data structure does std::stack use by default?",
    options: ["vector", "list", "deque", "array"],
    correctAnswer: 2,
    explanation: "std::stack uses deque as its default underlying container."
  },
  {
    id: 6,
    question: "Which function is used to remove an element from a map?",
    options: ["delete()", "remove()", "erase()", "clear()"],
    correctAnswer: 2,
    explanation: "erase() is used to remove elements from a map."
  },
  {
    id: 7,
    question: "What is the difference between map and unordered_map?",
    options: ["No difference", "map is sorted, unordered_map uses hash table", "map is faster", "unordered_map allows duplicates"],
    correctAnswer: 1,
    explanation: "map uses a tree structure and maintains order, while unordered_map uses a hash table."
  },
  {
    id: 8,
    question: "Which iterator is returned by begin() for an empty container?",
    options: ["nullptr", "0", "Same as end()", "undefined"],
    correctAnswer: 2,
    explanation: "For an empty container, begin() returns the same iterator as end()."
  },
  {
    id: 9,
    question: "What does the size() function return for a container?",
    options: ["Capacity", "Number of elements", "Memory used", "Maximum size"],
    correctAnswer: 1,
    explanation: "size() returns the number of elements currently stored in the container."
  },
  {
    id: 10,
    question: "Which algorithm is used to find an element in a sorted range?",
    options: ["find()", "search()", "binary_search()", "locate()"],
    correctAnswer: 2,
    explanation: "binary_search() is used to check if an element exists in a sorted range."
  },
  {
    id: 11,
    question: "What is the time complexity of accessing an element in a vector by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 0,
    explanation: "Accessing elements in a vector by index takes constant time O(1)."
  },
  {
    id: 12,
    question: "Which container allows duplicate elements?",
    options: ["set", "map", "multiset", "unordered_set"],
    correctAnswer: 2,
    explanation: "multiset allows duplicate elements while maintaining sorted order."
  },
  {
    id: 13,
    question: "What does the clear() function do?",
    options: ["Deallocates memory", "Removes all elements", "Resets capacity", "Returns size to 0"],
    correctAnswer: 1,
    explanation: "clear() removes all elements from the container but may not deallocate memory."
  },
  {
    id: 14,
    question: "Which header is needed for using algorithms like sort()?",
    options: ["<vector>", "<algorithm>", "<functional>", "<utility>"],
    correctAnswer: 1,
    explanation: "The <algorithm> header contains STL algorithms like sort()."
  },
  {
    id: 15,
    question: "What is the default ordering used by std::sort()?",
    options: ["Descending", "Ascending", "Random", "User-defined"],
    correctAnswer: 1,
    explanation: "std::sort() uses ascending order by default."
  },
  {
    id: 16,
    question: "Which container provides FIFO (First In First Out) behavior?",
    options: ["stack", "queue", "priority_queue", "deque"],
    correctAnswer: 1,
    explanation: "queue provides FIFO behavior."
  },
  {
    id: 17,
    question: "What does emplace_back() do compared to push_back()?",
    options: ["Same functionality", "Constructs in place", "Faster insertion", "Checks capacity"],
    correctAnswer: 1,
    explanation: "emplace_back() constructs the element in place, avoiding unnecessary copies."
  },
  {
    id: 18,
    question: "Which function checks if a container is empty?",
    options: ["size() == 0", "empty()", "Both A and B", "None"],
    correctAnswer: 2,
    explanation: "Both size() == 0 and empty() can check if a container is empty, but empty() is preferred."
  },
  {
    id: 19,
    question: "What is the underlying structure of std::priority_queue?",
    options: ["Binary tree", "Heap", "Hash table", "Linked list"],
    correctAnswer: 1,
    explanation: "priority_queue is implemented using a heap data structure."
  },
  {
    id: 20,
    question: "Which iterator type allows both reading and writing?",
    options: ["input_iterator", "output_iterator", "forward_iterator", "random_access_iterator"],
    correctAnswer: 3,
    explanation: "random_access_iterator provides the most functionality including read/write access."
  },
  {
    id: 21,
    question: "What does std::reverse() do?",
    options: ["Sorts in descending order", "Reverses element order", "Reverses bits", "Reverses string"],
    correctAnswer: 1,
    explanation: "std::reverse() reverses the order of elements in a range."
  },
  {
    id: 22,
    question: "Which container is best for frequent insertions/deletions in the middle?",
    options: ["vector", "array", "list", "deque"],
    correctAnswer: 2,
    explanation: "list provides O(1) insertion/deletion in the middle when you have an iterator."
  },
  {
    id: 23,
    question: "What does the count() function return for a map?",
    options: ["Number of elements", "0 or 1", "Size of map", "Iterator"],
    correctAnswer: 1,
    explanation: "For map, count() returns 0 or 1 since keys are unique."
  },
  {
    id: 24,
    question: "Which function is used to swap two containers?",
    options: ["exchange()", "swap()", "switch()", "replace()"],
    correctAnswer: 1,
    explanation: "swap() is used to exchange the contents of two containers."
  },
  {
    id: 25,
    question: "What is the time complexity of insert() in a set?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: 2,
    explanation: "insert() in a set has O(log n) time complexity due to tree structure."
  },
  {
    id: 26,
    question: "Which algorithm finds the maximum element?",
    options: ["max()", "max_element()", "maximum()", "find_max()"],
    correctAnswer: 1,
    explanation: "max_element() returns an iterator to the maximum element in a range."
  },
  {
    id: 27,
    question: "What does the capacity() function return?",
    options: ["Current size", "Maximum possible size", "Allocated storage", "Number of elements"],
    correctAnswer: 2,
    explanation: "capacity() returns the size of allocated storage, which may be larger than size()."
  },
  {
    id: 28,
    question: "Which container allows random access to elements?",
    options: ["list", "forward_list", "vector", "set"],
    correctAnswer: 2,
    explanation: "vector provides random access to elements with operator[]."
  },
  {
    id: 29,
    question: "What does std::accumulate() do?",
    options: ["Counts elements", "Sums elements", "Finds average", "Multiplies elements"],
    correctAnswer: 1,
    explanation: "std::accumulate() computes the sum of elements in a range (can be customized)."
  },
  {
    id: 30,
    question: "Which function removes duplicate consecutive elements?",
    options: ["unique()", "distinct()", "remove_duplicates()", "filter()"],
    correctAnswer: 0,
    explanation: "unique() removes consecutive duplicate elements from a sorted range."
  },
  {
    id: 31,
    question: "What is a pair in STL?",
    options: ["Two containers", "Two elements grouped together", "Two iterators", "Two algorithms"],
    correctAnswer: 1,
    explanation: "pair is a class template that stores two heterogeneous objects as a single unit."
  },
  {
    id: 32,
    question: "Which header file contains pair?",
    options: ["<pair>", "<utility>", "<tuple>", "<functional>"],
    correctAnswer: 1,
    explanation: "pair is defined in the <utility> header."
  },
  {
    id: 33,
    question: "What does lower_bound() return?",
    options: ["Minimum element", "First element >= value", "Last element < value", "Index of element"],
    correctAnswer: 1,
    explanation: "lower_bound() returns an iterator to the first element not less than the given value."
  },
  {
    id: 34,
    question: "Which is faster: vector or list for random access?",
    options: ["vector", "list", "Same speed", "Depends on size"],
    correctAnswer: 0,
    explanation: "vector provides O(1) random access while list requires O(n) traversal."
  },
  {
    id: 35,
    question: "What does std::transform() do?",
    options: ["Changes container type", "Applies function to elements", "Sorts elements", "Filters elements"],
    correctAnswer: 1,
    explanation: "transform() applies a function to each element and stores results."
  },
  {
    id: 36,
    question: "Which container is best for implementing a graph adjacency list?",
    options: ["vector<vector<int>>", "map<int, vector<int>>", "Both A and B", "list<list<int>>"],
    correctAnswer: 2,
    explanation: "Both vector<vector<int>> and map<int, vector<int>> are commonly used for adjacency lists."
  },
  {
    id: 37,
    question: "What is the difference between at() and operator[] for vector?",
    options: ["No difference", "at() does bounds checking", "operator[] is faster", "Both B and C"],
    correctAnswer: 3,
    explanation: "at() performs bounds checking and throws exceptions, while [] is faster but unsafe."
  },
  {
    id: 38,
    question: "Which algorithm is used to partition elements?",
    options: ["split()", "partition()", "divide()", "separate()"],
    correctAnswer: 1,
    explanation: "partition() reorders elements based on a predicate."
  },
  {
    id: 39,
    question: "What does make_pair() do?",
    options: ["Creates two elements", "Constructs a pair object", "Pairs two containers", "Links two pointers"],
    correctAnswer: 1,
    explanation: "make_pair() is a helper function to construct pair objects."
  },
  {
    id: 40,
    question: "Which container guarantees constant time insertion at both ends?",
    options: ["vector", "list", "deque", "array"],
    correctAnswer: 2,
    explanation: "deque provides O(1) insertion/deletion at both ends."
  },
  {
    id: 41,
    question: "What is the purpose of std::distance()?",
    options: ["Measures array size", "Counts elements between iterators", "Calculates memory distance", "Finds element position"],
    correctAnswer: 1,
    explanation: "distance() returns the number of elements between two iterators."
  },
  {
    id: 42,
    question: "Which function removes elements that satisfy a condition?",
    options: ["delete_if()", "remove_if()", "erase_if()", "filter()"],
    correctAnswer: 1,
    explanation: "remove_if() removes elements matching a predicate (use with erase for actual removal)."
  },
  {
    id: 43,
    question: "What does std::find_if() return?",
    options: ["Boolean", "Iterator to found element", "Index", "Count"],
    correctAnswer: 1,
    explanation: "find_if() returns an iterator to the first element satisfying the predicate."
  },
  {
    id: 44,
    question: "Which is true about std::array?",
    options: ["Dynamic size", "Fixed size", "Resizable", "Unlimited capacity"],
    correctAnswer: 1,
    explanation: "std::array has a fixed size determined at compile time."
  },
  {
    id: 45,
    question: "What does the reserve() function do for a vector?",
    options: ["Sets size", "Allocates capacity", "Removes elements", "Sorts elements"],
    correctAnswer: 1,
    explanation: "reserve() allocates memory without changing the size."
  },
  {
    id: 46,
    question: "Which algorithm creates a sorted copy?",
    options: ["sort()", "partial_sort()", "stable_sort()", "partial_sort_copy()"],
    correctAnswer: 3,
    explanation: "partial_sort_copy() creates a sorted copy of elements."
  },
  {
    id: 47,
    question: "What is a lambda function in C++?",
    options: ["Greek letter", "Anonymous function", "Library function", "Macro"],
    correctAnswer: 1,
    explanation: "Lambda functions are anonymous function objects in C++."
  },
  {
    id: 48,
    question: "Which container uses key-value pairs?",
    options: ["set", "vector", "map", "list"],
    correctAnswer: 2,
    explanation: "map stores elements as key-value pairs."
  },
  {
    id: 49,
    question: "What does std::copy() do?",
    options: ["Duplicates container", "Copies range of elements", "Creates backup", "Clones object"],
    correctAnswer: 1,
    explanation: "copy() copies elements from one range to another."
  },
  {
    id: 50,
    question: "Which is the correct way to iterate through a map?",
    options: ["for(auto x : map)", "for(auto& x : map)", "for(auto [key, value] : map)", "All of the above"],
    correctAnswer: 3,
    explanation: "All three methods are valid for iterating through a map in C++."
  },
  {
    id: 51,
    question: "What does std::merge() require?",
    options: ["Unsorted ranges", "Sorted ranges", "Equal sizes", "Same types"],
    correctAnswer: 1,
    explanation: "merge() requires input ranges to be sorted."
  },
  {
    id: 52,
    question: "Which function returns the number of occurrences?",
    options: ["find()", "count()", "search()", "locate()"],
    correctAnswer: 1,
    explanation: "count() returns the number of elements equal to a given value."
  },
  {
    id: 53,
    question: "What is the difference between set and multiset?",
    options: ["Speed", "multiset allows duplicates", "Different data structures", "Memory usage"],
    correctAnswer: 1,
    explanation: "multiset allows duplicate elements while set does not."
  },
  {
    id: 54,
    question: "Which algorithm checks if all elements satisfy a condition?",
    options: ["all_of()", "any_of()", "none_of()", "check_all()"],
    correctAnswer: 0,
    explanation: "all_of() returns true if all elements satisfy the predicate."
  },
  {
    id: 55,
    question: "What does std::next_permutation() do?",
    options: ["Finds next element", "Generates next permutation", "Increments iterator", "Advances pointer"],
    correctAnswer: 1,
    explanation: "next_permutation() rearranges elements into the next lexicographical permutation."
  },
  {
    id: 56,
    question: "Which container provides the fastest lookup?",
    options: ["vector", "list", "unordered_map", "set"],
    correctAnswer: 2,
    explanation: "unordered_map provides O(1) average lookup time using hash tables."
  },
  {
    id: 57,
    question: "What does the insert() function return for a set?",
    options: ["Iterator", "Boolean", "pair<iterator, bool>", "Size"],
    correctAnswer: 2,
    explanation: "insert() returns a pair containing an iterator and a boolean indicating success."
  },
  {
    id: 58,
    question: "Which algorithm is used for binary search?",
    options: ["find()", "search()", "binary_search()", "locate()"],
    correctAnswer: 2,
    explanation: "binary_search() performs binary search on a sorted range."
  },
  {
    id: 59,
    question: "What is the time complexity of std::sort()?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "std::sort() has O(n log n) average time complexity."
  },
  {
    id: 60,
    question: "Which function fills a range with a value?",
    options: ["set()", "fill()", "assign()", "populate()"],
    correctAnswer: 1,
    explanation: "fill() assigns a value to all elements in a range."
  }
];
