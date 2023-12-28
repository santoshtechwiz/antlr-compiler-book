
  <div class="stackedit__html"><h1 id="compiler-basics">Compiler Basics</h1>
<p>This chapter will look at What a compiler does and why we need them.<br>
Data flow between the parts of a compiler and what they do. The first thing always comes to your mind is why we need the compiler. We need it Because a computer cannot directly understand source code. As a result, the compiler acts as a bridge between human-readable and machine-readable formats. The compiler will parse the source file and convert it to a machine-readable object file.</p>
<h2 id="why-study-compilers">Why Study Compilers?</h2>
<p>To become a good programmer, you need to understand what happens 'under the hood when you write programs in a high-level language. To understand low-level languages (assembler, C#, Java, Go) better. Those languages are of prime importance, e.g. for writing operating systems, embedded<br>
code and generally code that needs to be fast. Most large programs tend to embed a programming language. The skill quickly to write an interpreter or compiler for such embedded languages is invaluable.</p>
<hr>
<blockquote>
<p>Until the 1950s: computers were programmed in assembly. 1951–1952: <strong>Grace Hopper</strong> developed the A-0 system for the UNIVAC I. She later contributed significantly to the design of COBOL. In 1957: the FORTRAN compiler was built at IBM Team led by John Backus.</p>
</blockquote>
<h2 id="what-is-a-compiler">What is a compiler?</h2>
<p>A compiler is a program that translates programs from one programming<br>
language to programs in another programming language. The translation<br>
should preserve meaning (what do “preserve” and “meaning” mean in this<br>
context?).</p>
<p><img src="/compiler-basic-II.png" alt="Image"></p>
<p>Typically, the input language (called source language) is more high-level than the output language (called target language). Examples.</p>
<ul>
<li>Source: Java, target: JVM bytecode.</li>
<li>Source: JVM bytecode, target: ARM/x86 machine code</li>
<li>Source C#, target: MSIL</li>
</ul>
<h2 id="what-does-a-compiler-do">What does a compiler do?</h2>
<p>Let’s consider the following code (It’s written in C#)</p>
<p><img src="/chapter-01/what-compiler-does.png" alt="Image"></p>
<p><img src= src=src={process.env.PUBLIC_URL + '/img/logo.png'}  alt="Image"></p>


<p>Apart from translating source code from high-level to low-level language, the compiler also has other responsibilities. After reading the source code written in the high-level language, it performs the below operations -</p> 
<ol>
<li>Performs source code pre-processing. Collect all of the files needed<br>
for the source code to compile.</li>
<li>The complete source code is parsed. Then it checks the source code<br>
for syntax mistakes.</li>
<li>Analyzes the source code’s syntax thoroughly. To comprehend the<br>
source code’s structure and semantics.</li>
<li>To improve efficiency, optionally transform the source code into an<br>
intermediate code known as object code.</li>
<li>Translates object code into executable code, a binary language.</li>
</ol>
<h2 id="compilation-phases">Compilation Phases</h2>
<p>From development through execution, a computer program passes through several stages. From human-readable source code to binary-encoded computer instructions (machine code). This section will go over the many stages of a program’s life cycle.</p>
<p><img src="/chapter-01/54fc720d-078c-4c3d-a19b-d27efc3006d2_smallRaw.png" alt="Image"></p>
<ol>
<li>Lexical Analysis ( characters <em>→</em> words)</li>
<li>Syntax Analysis (words <em>→</em> sentences)</li>
<li>Semantic Analysis</li>
<li>Intermediate Code Generation</li>
<li>Code Optimization</li>
<li>Code Generation</li>
</ol>
<p>The compilation process can be divided into three phases: the front end, the middle end, and the back end. Each phase performs a specific task in the compilation process, as described below.</p>
<ol>
<li>
<p><strong>The Front End</strong> - In this phase, the compiler analyzes the source code to determine its structure and meaning. It breaks the code into smaller components, such as keywords, operators, and identifiers, and builds a syntax tree that represents the structure of the code. The front end also performs semantic analysis, which involves checking the code for type errors and other logical errors.</p>
</li>
<li>
<p><strong>The Middle End</strong> - In this phase, the compiler transforms the code represented by the syntax tree into an intermediate representation (IR), which is a lower-level language that is closer to machine code. This transformation typically involves optimizing the code to improve its efficiency and reduce its size. The middle end is also responsible for managing the data and control flow of the program.</p>
</li>
<li>
<p><strong>The Back End</strong> - In this phase, the compiler generates the target machine code from the intermediate representation. This involves translating the IR into assembly language or binary code that can be executed by the target machine. The back end also performs machine-specific optimizations, such as instruction scheduling and register allocation, to produce efficient code that runs as fast as possible on the target machine.</p>
</li>
</ol>
<blockquote>
<p>A just-in-time (JIT) compiler translates virtual machine code to native code before execution.</p>
</blockquote>
<h2 id="lexical-analysis">Lexical Analysis</h2>
<p>The goal of lexical Analysis is to convert a stream of characters from the source program into a stream of tokens representing recognized keywords, identifiers, numbers, and punctuation.</p>
<p>The Lexical Analyzer (or Lexer) will convert characters into `words’ or <em>tokens</em>, such as:</p>
<ul>
<li>Identifiers, e.g. position</li>
<li>Reserved words or keywords, e.g. if</li>
<li>Numbers, e.g. 123</li>
<li>Operators, e.g. &lt;=</li>
</ul>
<p><img src="/chapter-01/lexical.png" alt="Image"></p>
<ul>
<li>Done by the lexer, also called a scanner</li>
<li>Identifies lexeme within the source code</li>
<li>White space and comments are ignored</li>
<li>Generate a stream of tokens and also create a symbol table</li>
</ul>
<h2 id="syntax-analysis">Syntax Analysis</h2>
<p>The second phase of the compilation process is syntax analysis. It takes the tokens produced by lexical Analysis as input and generates a parse tree. The parse tree is also called a syntax tree. The token organizations are checked against the source code grammar in this phase. Furthermore, the parser performs syntax analysis. Finally, it checks whether the expression made by the tokens is syntactically correct.</p>
<p>Let’s see the parse tree of the following code</p>
<pre class=" language-csharp"><code class="prism  language-csharp">    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

</code></pre>
<p><img src="/chapter-01/5c627d3b-98ab-4f3c-a928-2f1b53915ec4_smallRaw.png" alt="Image"></p>
<div class="alert-info">
</div><p>It will convert the <em>linear</em> string of tokens into <em>structured</em><br>
representations such as expression trees and program flow graphs.</p>

<blockquote>
<p>Syntactic Analysis can be decomposed into</p>
</blockquote>
<ul>
<li>
<p>A <strong>lexer</strong> (which breaks the source program down into tokens)</p>
</li>
<li>
<p>A <strong>parse</strong>r (which determines the phrase structure of the source<br>
program).</p>
</li>
</ul>
<h2 id="semantic-analysis">Semantic Analysis</h2>
<p>This phase checks the source program for semantic errors in a compiler and gathers type information for the intermediate code generation phase. This phase evaluates the source program stored in the AST.</p>
<p>Abstract Syntax Tree is a tree representation of the program. Used for</p>
<ul>
<li>Semantic analysis (e.g. type checking)</li>
<li>Some optimization (e.g. constant folding)</li>
<li>Intermediate code generation (sometimes intermediate code = AST)</li>
</ul>
<pre class=" language-csharp"><code class="prism  language-csharp">    <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
</code></pre>
<p><img src="/chapter-01/download.png" alt="Image"></p>
<h2 id="intermediate-code-generation">Intermediate Code Generation</h2>
<p>Intermediate code generation is a phase in the compilation process where the source code is translated into an intermediate language or code that is easier to analyze and optimize than the original source code. The main purpose of intermediate code generation is to transform the source code into a form that can be efficiently processed by subsequent compiler phases, such as optimization and target code generation.</p>
<p>The intermediate code is typically represented in a language-agnostic format, which means that it is independent of the source programming language and the target platform. This allows the same intermediate code to be used for different source languages and target platforms, which can save development time and effort.</p>
<p>The intermediate code generation phase involves analyzing the source code and generating a sequence of low-level instructions that represent the code’s behavior without the details of the target platform. The intermediate code is usually designed to be simple and easy to optimize, so that the compiler can focus on improving the performance of the generated code.</p>
<p>For example, consider the following C# code:</p>
<pre class=" language-csharp"><code class="prism  language-csharp"><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre>
<p>The intermediate code generation phase might generate the following intermediate code:</p>
<pre class=" language-csharp"><code class="prism  language-csharp">t1 <span class="token operator">=</span> <span class="token number">2</span>
t2 <span class="token operator">=</span> <span class="token number">3</span>
t3 <span class="token operator">=</span> t1 <span class="token operator">+</span> t2
x <span class="token operator">=</span> t3
</code></pre>
<p>Here, <code>t1</code>, <code>t2</code>, and <code>t3</code> are temporary variables used to store intermediate values, and the final assignment statement assigns the value of t3 to the variable x. This intermediate code is much simpler than the source code and can be easily optimized by subsequent phases of the compiler.</p>
<p>Overall, intermediate code generation is an essential step in the compilation process that enables efficient optimization and code generation.</p>
<blockquote>
<p>MSIL Equivalent</p>
</blockquote>
<pre class=" language-csharp"><code class="prism  language-csharp">ldc<span class="token punctuation">.</span>i4<span class="token number">.2</span>    <span class="token comment">// push the value 2 onto the evaluation stack</span>
ldc<span class="token punctuation">.</span>i4<span class="token number">.3</span>    <span class="token comment">// push the value 3 onto the evaluation stack</span>
<span class="token keyword">add</span>         <span class="token comment">// pop the top two values from the stack, add them, and push the result onto the stack</span>
stloc<span class="token number">.0</span>     <span class="token comment">// pop the top value from the stack and store it in the local variable at index 0 (which corresponds to variable x)</span>
</code></pre>
<div class="alert-info">
</div><p>Here, <code>ldc.i4</code> is an instruction that pushes a 32-bit integer value onto the evaluation stack, add is an instruction that pops the top two values from the stack, adds them, and pushes the result onto the stack, and stloc is an instruction that pops the top value from the stack and stores it in the specified local variable.</p>

<div class="alert-info">
</div><p>The MSIL code is similar to the intermediate code we saw earlier, but it is expressed in terms of low-level instructions that are specific to the .NET Framework. The MSIL code is also platform-independent, which means that it can be compiled into native code for any platform that supports the .NET Framework.</p>

<hr>
<div class="alert-info">
</div><p>Overall, MSIL is a powerful and flexible intermediate language that enables efficient optimization and code generation for .NET applications.</p>

<h2 id="code-optimization">Code Optimization</h2>
<p>The code optimization phase is a crucial step in which the compiler analyzes the code produced by the previous phases (such as lexical analysis, syntax analysis, and semantic analysis) and tries to optimize it for performance and efficiency.<br>
The optimization phase typically involves analyzing the code’s control flow, data flow, and memory usage to identify and eliminate redundancies, simplify expressions, and improve the use of available resources. Some common optimizations performed by compilers include constant folding, loop unrolling, and instruction reordering.<br>
Let’s consider an example in C# to understand this better. Suppose you have the following code snippet: Instead, The code can remove this to give the following:</p>
<pre class=" language-csharp"><code class="prism  language-csharp">
<span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> z <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>


</code></pre>
<p>During the optimization phase, the compiler may recognize that x and y are constant values and can be replaced with their sum 15, resulting in the following optimized code:</p>
<pre class=" language-csharp"><code class="prism  language-csharp"><span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
</code></pre>
<p>By eliminating unnecessary assignment statements and evaluating the constant expression at compile time, the optimized code can be more efficient and faster to execute.</p>
<div class="alert-info">
</div><p>Keep in mind that the optimization phase is not always guaranteed to improve performance, and it can sometimes introduce new issues or bugs. It’s important to balance optimization with correctness and maintainability to ensure that the resulting code is both fast and reliable.</p>

<h2 id="what-is-an-interpreter">What is an interpreter?</h2>
<p>An interpreter is a program that converts high-level language source code to machine code. It’s similar to a compiler in that it performs the exact role of translating between high-level and low-level languages. Despite their similarities, the interpreter and compiler have different operating mechanisms.</p>
<p>Unlike a compiler, an interpreter does not translate the entire code at once. Instead, it scans the complete source code in one go. Single instructions are converted to machine code or intermediate code. The translated machine code instruction is then immediately executed, and if necessary, the next instruction is translated.</p>
<h2 id="compilers-vs-interpreters">Compilers vs interpreters</h2>
<p>Interpreters are a second way to run programs, but they run differently. See the below image for the working of these two.</p>
<p><img src="/chapter-01/c-i.png" alt="Image"></p>
<div class="alert-info">
</div><p>Compilers can optimize the code during the compilation process, which results in faster and more efficient code. Once the optimization is done, the optimized code can be executed multiple times without having to redo the optimizations. This is because the optimized code is saved as a binary file that can be executed directly on the target machine without the need for <a href="http://re-optimization.In">re-optimization.In</a> contrast, interpreters do not perform any optimization during the parsing and execution of the code. Instead, they interpret the code line-by-line and perform the necessary operations for each line as they encounter it. This results in slower execution times compared to compiled code.</p>
 
<div class="alert-info">
</div><p>Interpreters are often preferred over compilers due to their simplicity and ease of use. They allow for a streamlined development process as they do not require a separate compilation step, and often provide more helpful error messages than compilers. Interpreted code is also more flexible, allowing for dynamic changes to the code at runtime. However, interpreted code tends to be slower and less secure than compiled code, which can be a disadvantage in some scenarios. Ultimately, the choice between an interpreter and a compiler depends on the specific needs and requirements of the project.</p>

</div>

