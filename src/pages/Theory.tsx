import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Theory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">C++ STL Theory</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive guide to the Standard Template Library
          </p>
        </div>

        <Tabs defaultValue="intro" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 h-auto">
            <TabsTrigger value="intro">Introduction</TabsTrigger>
            <TabsTrigger value="vector">Vector</TabsTrigger>
            <TabsTrigger value="map">Map & Set</TabsTrigger>
            <TabsTrigger value="stack">Stack & Queue</TabsTrigger>
            <TabsTrigger value="list">List & Deque</TabsTrigger>
            <TabsTrigger value="unordered">Unordered</TabsTrigger>
            <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
            <TabsTrigger value="iterators">Iterators</TabsTrigger>
            <TabsTrigger value="pair">Pair & Tuple</TabsTrigger>
            <TabsTrigger value="string">String</TabsTrigger>
          </TabsList>

          <TabsContent value="intro">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">What is STL?</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Standard Template Library (STL) is a powerful set of C++ template classes to provide general-purpose 
                classes and functions with templates that implement many popular and commonly used algorithms and data structures.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Main Components</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Containers:</strong> Data structures like vector, map, set, list, etc.</li>
                <li><strong>Algorithms:</strong> Functions for sorting, searching, manipulating data</li>
                <li><strong>Iterators:</strong> Objects that point to elements in containers</li>
                <li><strong>Functors:</strong> Objects that can be called like functions</li>
              </ul>

              <div className="bg-muted p-4 rounded-lg mt-6">
                <code className="text-sm">
                  #include &lt;vector&gt;<br/>
                  #include &lt;algorithm&gt;<br/>
                  #include &lt;iostream&gt;
                </code>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="vector">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Vector Container</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vector is a dynamic array that can grow and shrink in size. It provides random access to elements 
                and is one of the most commonly used STL containers.
              </p>

              <h3 className="text-xl font-semibold mt-6">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Dynamic size - grows automatically when needed</li>
                <li>Random access - O(1) time complexity</li>
                <li>Fast insertion/deletion at the end - O(1) amortized</li>
                <li>Slower insertion/deletion in the middle - O(n)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Common Operations</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>vector&lt;int&gt; v; <span className="text-muted-foreground">// Declaration</span></div>
                <div>v.push_back(10); <span className="text-muted-foreground">// Add element</span></div>
                <div>v.pop_back(); <span className="text-muted-foreground">// Remove last element</span></div>
                <div>v.size(); <span className="text-muted-foreground">// Get size</span></div>
                <div>v[0]; <span className="text-muted-foreground">// Access element</span></div>
                <div>v.clear(); <span className="text-muted-foreground">// Remove all elements</span></div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="map">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Map & Set Containers</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Map Container</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Map is an associative container that stores elements in key-value pairs. Keys are unique and 
                    the map is sorted by keys using a balanced binary search tree.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Stores key-value pairs</li>
                    <li>Keys are unique and sorted</li>
                    <li>Fast lookup, insertion, deletion - O(log n)</li>
                    <li>Implemented as Red-Black tree</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Common Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>map&lt;string, int&gt; m;</div>
                    <div>m["key"] = 100; <span className="text-muted-foreground">// Insert/Update</span></div>
                    <div>{'m.insert({"key", 100});'}</div>
                    <div>m.erase("key"); <span className="text-muted-foreground">// Remove element</span></div>
                    <div>m.find("key"); <span className="text-muted-foreground">// Find element</span></div>
                    <div>m.count("key"); <span className="text-muted-foreground">// Returns 0 or 1</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Set Container</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Set is a container that stores unique elements in a sorted order. It's useful when you need 
                    to maintain a collection of distinct values.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Stores unique elements only</li>
                    <li>Elements are automatically sorted</li>
                    <li>Fast insertion, deletion, search - O(log n)</li>
                    <li>Implemented as balanced BST</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Common Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>set&lt;int&gt; s;</div>
                    <div>s.insert(10); <span className="text-muted-foreground">// Add element</span></div>
                    <div>s.erase(10); <span className="text-muted-foreground">// Remove element</span></div>
                    <div>s.find(10); <span className="text-muted-foreground">// Find element</span></div>
                    <div>s.count(10); <span className="text-muted-foreground">// Returns 0 or 1</span></div>
                    <div>s.size(); <span className="text-muted-foreground">// Get size</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Multimap & Multiset</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Multimap allows duplicate keys, and multiset allows duplicate values. Both maintain sorted order.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="stack">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Stack, Queue & Priority Queue</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Stack (LIFO)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Stack follows Last In First Out (LIFO) principle. Elements are inserted and removed from the same end (top).
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>stack&lt;int&gt; st;</div>
                    <div>st.push(10); <span className="text-muted-foreground">// Add to top</span></div>
                    <div>st.pop(); <span className="text-muted-foreground">// Remove from top</span></div>
                    <div>st.top(); <span className="text-muted-foreground">// Access top element</span></div>
                    <div>st.empty(); <span className="text-muted-foreground">// Check if empty</span></div>
                    <div>st.size(); <span className="text-muted-foreground">// Get size</span></div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border border-accent/20">
                    <p className="text-sm"><strong>Use Case:</strong> Function call stack, undo operations, expression evaluation</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Queue (FIFO)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Queue follows First In First Out (FIFO) principle. Elements are inserted at the rear and removed from the front.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>queue&lt;int&gt; q;</div>
                    <div>q.push(10); <span className="text-muted-foreground">// Add to rear</span></div>
                    <div>q.pop(); <span className="text-muted-foreground">// Remove from front</span></div>
                    <div>q.front(); <span className="text-muted-foreground">// Access front element</span></div>
                    <div>q.back(); <span className="text-muted-foreground">// Access rear element</span></div>
                    <div>q.empty(); <span className="text-muted-foreground">// Check if empty</span></div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border border-accent/20">
                    <p className="text-sm"><strong>Use Case:</strong> BFS algorithm, task scheduling, printer queue</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Priority Queue (Heap)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Priority queue is a heap-based container where the largest (or smallest) element is always at the top.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>priority_queue&lt;int&gt; pq; <span className="text-muted-foreground">// Max heap</span></div>
                    <div>pq.push(10); <span className="text-muted-foreground">// Insert element</span></div>
                    <div>pq.top(); <span className="text-muted-foreground">// Get largest element</span></div>
                    <div>pq.pop(); <span className="text-muted-foreground">// Remove largest</span></div>
                    <div className="mt-2">priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minpq;</div>
                    <div className="text-muted-foreground">// Min heap declaration</div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border border-accent/20">
                    <p className="text-sm"><strong>Use Case:</strong> Dijkstra's algorithm, heap sort, scheduling tasks by priority</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="list">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">List & Deque Containers</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">List (Doubly Linked List)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    List is implemented as a doubly linked list. It provides efficient insertion and deletion at any position.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Bidirectional iteration</li>
                    <li>O(1) insertion/deletion at any position (with iterator)</li>
                    <li>No random access - must traverse sequentially</li>
                    <li>No contiguous memory</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>list&lt;int&gt; lst;</div>
                    <div>lst.push_back(10); <span className="text-muted-foreground">// Add at end</span></div>
                    <div>lst.push_front(5); <span className="text-muted-foreground">// Add at front</span></div>
                    <div>lst.pop_back(); <span className="text-muted-foreground">// Remove from end</span></div>
                    <div>lst.pop_front(); <span className="text-muted-foreground">// Remove from front</span></div>
                    <div>lst.insert(it, 20); <span className="text-muted-foreground">// Insert at position</span></div>
                    <div>lst.erase(it); <span className="text-muted-foreground">// Remove at position</span></div>
                    <div>lst.sort(); <span className="text-muted-foreground">// Sort the list</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Deque (Double Ended Queue)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Deque allows efficient insertion and deletion at both ends. It provides random access like vector.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>O(1) insertion/deletion at both ends</li>
                    <li>Random access with []</li>
                    <li>Not stored in contiguous memory</li>
                    <li>Slightly slower than vector for random access</li>
                  </ul>

                  <h4 className="font-semibold mt-4 mb-2">Operations</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>deque&lt;int&gt; dq;</div>
                    <div>dq.push_back(10); <span className="text-muted-foreground">// Add at end</span></div>
                    <div>dq.push_front(5); <span className="text-muted-foreground">// Add at front</span></div>
                    <div>dq[0]; <span className="text-muted-foreground">// Random access</span></div>
                    <div>dq.pop_back(); <span className="text-muted-foreground">// Remove from end</span></div>
                    <div>dq.pop_front(); <span className="text-muted-foreground">// Remove from front</span></div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border border-accent/20">
                    <p className="text-sm"><strong>When to use:</strong> When you need fast insertion at both ends with random access</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="unordered">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Unordered Containers (Hash Tables)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unordered containers use hash tables for O(1) average time complexity operations. They don't maintain any order.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Unordered Map</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hash table implementation of map. Faster than map but elements are not sorted.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Average O(1) for search, insert, delete</li>
                    <li>Worst case O(n) due to collisions</li>
                    <li>No ordering of elements</li>
                    <li>Keys must be hashable</li>
                  </ul>

                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm mt-4">
                    <div>unordered_map&lt;string, int&gt; um;</div>
                    <div>um["key"] = 100;</div>
                    <div>um.find("key"); <span className="text-muted-foreground">// O(1) average</span></div>
                    <div>um.count("key");</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Unordered Set</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hash table implementation of set. Faster lookups than set but no ordering.
                  </p>

                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>unordered_set&lt;int&gt; us;</div>
                    <div>us.insert(10); <span className="text-muted-foreground">// O(1) average</span></div>
                    <div>us.find(10);</div>
                    <div>us.erase(10);</div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Map vs Unordered Map</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li><strong>Use map:</strong> When you need sorted order, or consistent O(log n) performance</li>
                    <li><strong>Use unordered_map:</strong> When you need faster lookups and don't care about order</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="algorithms">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">STL Algorithms</h2>
              <p className="text-muted-foreground leading-relaxed">
                STL provides a rich set of algorithms that work with containers. These algorithms are 
                template functions that can operate on different data types.
              </p>

              <h3 className="text-xl font-semibold mt-6">Sorting & Searching</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>sort(v.begin(), v.end()); <span className="text-muted-foreground">// Sort ascending</span></div>
                <div>binary_search(v.begin(), v.end(), 5);</div>
                <div>lower_bound(v.begin(), v.end(), 5);</div>
                <div>upper_bound(v.begin(), v.end(), 5);</div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Manipulation</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>reverse(v.begin(), v.end());</div>
                <div>unique(v.begin(), v.end()); <span className="text-muted-foreground">// Remove duplicates</span></div>
                <div>fill(v.begin(), v.end(), 0);</div>
                <div>transform(v.begin(), v.end(), result.begin(), func);</div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Numeric</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>accumulate(v.begin(), v.end(), 0); <span className="text-muted-foreground">// Sum</span></div>
                <div>count(v.begin(), v.end(), 5);</div>
                <div>max_element(v.begin(), v.end());</div>
                <div>min_element(v.begin(), v.end());</div>
              </div>

              <h3 className="text-xl font-semibold mt-6">More Algorithms</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>for_each(v.begin(), v.end(), func);</div>
                <div>copy(v.begin(), v.end(), result.begin());</div>
                <div>rotate(v.begin(), v.begin()+2, v.end());</div>
                <div>next_permutation(v.begin(), v.end());</div>
                <div>partition(v.begin(), v.end(), predicate);</div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg mt-6 border border-primary/20">
                <h4 className="font-semibold mb-2">Algorithm Categories</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Non-modifying:</strong> find, count, search, equal</li>
                  <li><strong>Modifying:</strong> copy, fill, replace, remove, reverse</li>
                  <li><strong>Sorting:</strong> sort, partial_sort, nth_element</li>
                  <li><strong>Binary search:</strong> binary_search, lower_bound, upper_bound</li>
                  <li><strong>Set operations:</strong> merge, set_union, set_intersection</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="pair">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Pair & Tuple</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Pair</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pair is a simple container to store two heterogeneous objects as a single unit.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Usage</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>pair&lt;int, string&gt; p;</div>
                    <div>p = make_pair(1, "hello");</div>
                    <div>p.first; <span className="text-muted-foreground">// Access first element</span></div>
                    <div>p.second; <span className="text-muted-foreground">// Access second element</span></div>
                    <div className="mt-2">{'pair<int, string> p2 = {2, "world"};'}</div>
                    <div className="mt-2">vector&lt;pair&lt;int, string&gt;&gt; vec;</div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg mt-4 border border-accent/20">
                    <p className="text-sm"><strong>Common use:</strong> Storing coordinates, return multiple values, map elements</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Tuple</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tuple is a generalization of pair that can hold multiple elements of different types.
                  </p>

                  <h4 className="font-semibold mt-4 mb-2">Usage</h4>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>tuple&lt;int, string, double&gt; t;</div>
                    <div>t = make_tuple(1, "hello", 3.14);</div>
                    <div>get&lt;0&gt;(t); <span className="text-muted-foreground">// Access first element</span></div>
                    <div>get&lt;1&gt;(t); <span className="text-muted-foreground">// Access second</span></div>
                    <div className="mt-2">auto [x, y, z] = t; <span className="text-muted-foreground">// Structured binding (C++17)</span></div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="string">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">String Operations</h2>
              <p className="text-muted-foreground leading-relaxed">
                C++ string class provides many useful functions for string manipulation.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Basic Operations</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>string s = "hello";</div>
                    <div>s.length(); <span className="text-muted-foreground">// or s.size()</span></div>
                    <div>s.push_back('!'); <span className="text-muted-foreground">// Add char</span></div>
                    <div>s.pop_back(); <span className="text-muted-foreground">// Remove last char</span></div>
                    <div>s.clear(); <span className="text-muted-foreground">// Empty the string</span></div>
                    <div>s.empty(); <span className="text-muted-foreground">// Check if empty</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">String Manipulation</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>s.substr(0, 3); <span className="text-muted-foreground">// Get substring</span></div>
                    <div>s.find("lo"); <span className="text-muted-foreground">// Find substring</span></div>
                    <div>s.replace(0, 2, "Hi"); <span className="text-muted-foreground">// Replace</span></div>
                    <div>s.insert(2, "XX"); <span className="text-muted-foreground">// Insert at position</span></div>
                    <div>s.erase(0, 2); <span className="text-muted-foreground">// Erase characters</span></div>
                    <div>s + " world"; <span className="text-muted-foreground">// Concatenation</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Conversion & Comparison</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>stoi("123"); <span className="text-muted-foreground">// String to int</span></div>
                    <div>to_string(123); <span className="text-muted-foreground">// Int to string</span></div>
                    <div>s1.compare(s2); <span className="text-muted-foreground">// Compare strings</span></div>
                    <div>s1 == s2; <span className="text-muted-foreground">// Equality check</span></div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Useful String Algorithms</h3>
                  <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div>reverse(s.begin(), s.end()); <span className="text-muted-foreground">// Reverse</span></div>
                    <div>sort(s.begin(), s.end()); <span className="text-muted-foreground">// Sort characters</span></div>
                    <div>transform(s.begin(), s.end(), s.begin(), ::toupper);</div>
                    <div className="text-muted-foreground">// Convert to uppercase</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="iterators">
            <Card className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">Iterators</h2>
              <p className="text-muted-foreground leading-relaxed">
                Iterators are objects that point to elements in containers. They act like pointers and 
                provide a way to traverse through container elements.
              </p>

              <h3 className="text-xl font-semibold mt-6">Iterator Types</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Input Iterator:</strong> Read only, forward movement</li>
                <li><strong>Output Iterator:</strong> Write only, forward movement</li>
                <li><strong>Forward Iterator:</strong> Read/write, forward movement</li>
                <li><strong>Bidirectional Iterator:</strong> Forward and backward movement</li>
                <li><strong>Random Access Iterator:</strong> Full random access like pointers</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">Using Iterators</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2 font-mono text-sm">
                <div>vector&lt;int&gt;::iterator it;</div>
                <div>{'for(it = v.begin(); it != v.end(); ++it) {'}</div>
                <div className="pl-4">cout &lt;&lt; *it &lt;&lt; " ";</div>
                <div>{'}'}</div>
                <div className="mt-4 text-muted-foreground">// Modern C++ range-based loop</div>
                <div>{'for(auto x : v) {'}</div>
                <div className="pl-4">cout &lt;&lt; x &lt;&lt; " ";</div>
                <div>{'}'}</div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Theory;
