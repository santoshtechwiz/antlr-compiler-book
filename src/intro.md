<h1 id="introduction">Introduction</h1>
<h2 id="whats-in-this-book">What’s in this book?</h2>
<p>“Create Compiler In C# Using ANTLR-Crash Course”  is  a  comprehensive  guide  for  C# developers  who  are  interested  in  leveraging  ANTLR  to  create  their  own  domain-specific  language (DSL), interpreter, or  programming  language. This  book  covers  all  the  essential  concepts  of  ANTLR  and  provides  a  hands-on  approach  to  building  a  complete  compiler  using  C#.</p>
<p>Throughout  the  book, we  will  explore  the  fundamentals  of  ANTLR  and  its  integration  with  C#, allowing  you  to  gain  a  solid  understanding  of  the  underlying  principles  and  techniques  of  compiler  construction. The  code  examples  provided  in  the  book  are  designed  to  be  beginner-friendly, making  it  easier  for  readers  to  grasp  the  concepts  and  follow  along.</p>
<p>The  book  follows  a  step-by-step  approach, guiding  you  through  each  stage  of  compiler  development, from  lexical  analysis  to  semantic  analysis  and  code  generation. We  will  discuss  important  topics  such  as  grammar  specification, tokenization, parsing, abstract  syntax  trees (ASTs), symbol  tables, type  checking, and intermediate code generation.</p>
<p>By  the  end  of  this  book, you  will  have  developed  a  fully  functional  compiler  using  ANTLR  and  C#, equipped  with  the  knowledge  and  skills  to  build  your  own  language  or  DSL. The  book  emphasizes  practical  implementation, providing  you  with  hands-on  experience  and  insights  into  the  inner  workings  of  a  compiler.</p>
<p>Whether  you  are  a  C# developer  looking  to  expand  your  skills, a  language  enthusiast  interested  in  the  intricacies  of  compiler  construction, or  someone  who  wants  to  explore  the  fascinating  world  of  language  design, this  book  is  your  comprehensive  guide  to  building  a  compiler  with  ANTLR  and  C#.</p>
<h2 id="prerequisites--and--project--setup">Prerequisites  and  Project  Setup</h2>
<p>To  make  the  most  out  of  this  book, it  is  recommended  to  have  a  basic  understanding  of  automata  theory  and  programming  in  C#. Additionally, familiarity  with  the .NET  framework  will  be  beneficial. If  you  are  new  to  these  topics, it  may  be  helpful  to  brush  up  on  the  fundamentals  before  diving  into  the  chapters.</p>
<p>Before  embarking  on  the  journey  of  building  a  compiler  with  ANTLR, it  is  assumed  that  you  have  already  set  up  an  ANTLR  project  and  have  a  basic  understanding  of  its  structure. If  you  haven’t done so, it is recommended to follow the steps outlined in Chapter “<strong>Configure ANTLR On Windows</strong>”, where we discuss the installation and configuration of ANTLR, as well as the setup of a C# project.</p>
<p>By  completing  the  setup  process, you  will  have  a  functioning  ANTLR  project  in  C#, ready  to  begin  implementing  the  various  stages  of  the  compiler. The  subsequent  chapters  in  this  book  will  build  upon  this  foundation, assuming  that  you  have  successfully  created  the  ANTLR  project  and  are  ready  to  proceed.</p>
<p>Throughout  the  book, we  will  focus  on  the  implementation  of  the  different  components  of  the  compiler, such  as  lexing, parsing, semantic  analysis, and  code  generation. We  will  explore  how  ANTLR  simplifies  the  process  of  building  these  components  and  enables  us  to  generate  a  fully  functional  compiler.</p>
<p>By  assuming  that  the  ANTLR  project  is  set  up  and  ready  to  go, we  can  dive  straight  into  the  core  concepts  and  techniques  of  compiler  development. This  approach  allows  us  to  focus  on  the  compiler-specific  topics  without  getting  bogged  down  in  the  project  setup  details.</p>
<p>So, if  you  have  successfully  configured  your  ANTLR  project  in  C# and  are  eager  to  explore  the  exciting  world  of  compiler  construction, you’re all set to embark on this journey. Let’s  dive  into  the  chapters  and  start  building  our  compiler  step  by  step!me  you’ve already created an ANTLR project and are ready</p>
<p>to  get  started.</p>
<h2 id="what--is--not--covered">What  is  not  covered?</h2>
<p>In  addition  to  the  topics  covered  in  this  book, there  are  several  other  important  concepts  related  to  compilers  that  are  not  explicitly  addressed. These  concepts  include:</p>
<h3 id="automata--theory">Automata  Theory</h3>
<p>Automata  theory  forms  the  foundation  of  compiler  design  and  is  concerned  with  the  study  of  abstract  machines  and  computational  models. While  this  book  focuses  on  the  practical  implementation  of  a  compiler, it  does  not  delve  into  the  theoretical  aspects  of  automata  theory, such  as  finite  automata, regular  expressions, context-free  grammars, and  parsing  algorithms. Understanding  these  concepts  can  provide  valuable  insights  into  the  theoretical  underpinnings  of  compilers  and  their  connection  to  formal  languages.</p>
<h3 id="three-address--code--generation">Three-Address  Code  Generation</h3>
<p>Three-address  code  is  an  intermediate  representation  used  in  many  compiler  designs. It  provides  a  compact  and  structured  representation  of  program  instructions  by  breaking  down  complex  statements  into  simpler  operations  involving  at  most  three  operands. Although  this  book  primarily  focuses  on  lexing, parsing, and  semantic  analysis  stages, it  does  not  cover  the  detailed  implementation  of  three-address  code  generation. Exploring  techniques  for  generating  efficient  three-address  code  from  high-level  language  constructs  is  an  important  aspect  of  compiler  optimization  and  code  generation.</p>
<h3 id="optimization--techniques">Optimization  Techniques</h3>
<p>Compiler  optimization  plays  a  crucial  role  in  improving  the  performance  and  efficiency  of  compiled  programs. While  this  book  introduces  basic  semantic  analysis  and  type  checking, it does not extensively cover optimization techniques such as constant folding, common subexpression elimination, loop optimizations, and register allocation. These optimization strategies aim to enhance the generated code’s speed, size, and resource utilization. Understanding and implementing such techniques can significantly impact the performance of the compiled programs.</p>
<h3 id="integration--with--additional--tools--and--libraries">Integration  with  Additional  Tools  and  Libraries</h3>
<p>The  book  primarily  focuses  on  the  core  implementation  of  the  compiler  using  C# and  ANTLR. However, in  practical  compiler  development, there  are  various  tools  and  libraries  that  can  enhance  the  development  process. These  tools  may  include  lexer  and  parser  generators, abstract  syntax  tree (AST) manipulation  libraries, and  code  generation  frameworks. Readers  can  explore  integrating  these  tools  and  libraries  into  their  compiler  projects  to  streamline  development  and  improve  productivity.</p>
<h3 id="targeting-.net--framework">Targeting .NET  Framework</h3>
<p>While  this  book  covers  the  implementation  of  the  compiler  using  C# and  ANTLR, it  does  not  specifically  address  the  intricacies  of  targeting  the .NET  Core  platform. Readers  should  be  aware  that .NET  Core  has  its  own  runtime, libraries, and  execution  environment, which  may  have  specific  considerations  for  the  compiled  programs. Exploring  the  guidelines  and  best  practices  for  developing  and  deploying  applications  on .NET  Core  can  provide  a  deeper  understanding  of  how  the  compiled  code  interacts  with  the  platform.</p>
<h1 id="highlights--of--the--book">Highlights  of  the  Book</h1>
<p>By  the  end  of  this  book, you  will  have  created  a  compiler  that  supports  essential  programming  constructs  such  as  scopes, loops, and  function  declarations. You  will  also  learn  how  to  use  the  ANTLR  parser  generator  to  generate  a  lexer  and  parser  for  a  custom  language, how  to  construct  an  abstract  syntax  tree (AST) that  represents  a  program, and  how  to  perform  semantic  analysis  to  ensure  your  program  is  semantically  correct. You  will  also  learn  how  to  generate  Microsoft  Intermediate  Language (MSIL) code  that  corresponds  to  your  program  and  how  to  assemble  the  MSIL  code  into  an  executable  assembly  that  can  be  run  on  the .NET  runtime.</p>
<blockquote>
<p>One  of  the  key  features  of  this  custom  compiler  is  its  ability  to  support  different  types  of  statements  and  expressions, including  var  declarations, assignments, arrays, conditionals, loops, and function calls. This makes it a versatile tool for building complex programs.</p>
</blockquote>
<h2 id="the--architecture--of--the--compiler">The  architecture  of  the  compiler</h2>
<p>Creating  a  compiler  is  a  complex  task  that  requires  a  deep  understanding  of  programming  languages, parsers, semantic  analysis, and  code  generation. In  this  chapter, we  will  explore  the  architecture  of  the  compiler  written  in  C# using  the  ANTLR  parser  generator. We  will  discuss  the  key  components  of  the  compiler  and  how  they  work  together  to  transform  source  code  into  executable  code.</p>
<p>The  architecture  of  <code>SimpleCompiler</code>  is  divided  into  several  key  components  that  work  together  to  compile  source  code  written  in  a  custom  language. These  components are:</p>
<ol>
<li>
<p>ANTLR Grammar: The  ANTLR  grammar  defines  the  syntax  and  structure  of  the  custom  language. It  is  used  to  generate  a  lexer  and  parser  for  the  language, allowing  the  compiler  to  recognize  valid  code  and  generate  an  abstract  syntax  tree (AST) that  represents  the  program.</p>
</li>
<li>
<p>SimpleLanguageAstBuilder: The  AST  builder  is  responsible  for  constructing  an  AST  from  the  parse  tree  generated  by  the  ANTLR  parser. It  traverses  the  parse  tree, creating  nodes  in  the  AST  that  correspond  to  the  various  constructs  in  the  language. The  resulting  AST  represents  the  program  in  a  structured  form  that  can  be  analyzed  and  transformed.</p>
</li>
<li>
<p>SemanticAnalyzerVisitor: The  semantic  analyzer  visitor  is  responsible  for  analyzing  the  program  to  ensure  that  it  is  semantically  correct. It  checks  for  errors  such  as  undeclared  variables, type  mismatches, and invalid expressions. If any errors are detected, they are reported back to the user.</p>
</li>
<li>
<p>MSILCodeGenerator: The  MSIL  code  generator  is  responsible  for  generating  Microsoft  Intermediate  Language (MSIL) code  that  corresponds  to  the  program. MSIL  is  a  low-level, stack-based  language  that  is  used  by  the .NET  runtime  to  execute  code.</p>
</li>
<li>
<p>ILASM: ILASM  is  a  command-line  tool  that  is  used  to  assemble  the  MSIL  code  into  an  executable  assembly  that  can  be  run  on  the .NET  runtime. The  MSIL  code  generated  by  the  compiler  is  passed  to  ILASM, which  produces  an  assembly  file  that  can  be  executed.</p>
</li>
</ol>
<p>Each  of  these  components  plays  a  crucial  role  in  the  compilation  process. The  ANTLR  grammar  defines  the  syntax  of  the  language, the  AST  builder  constructs  a  structured  representation  of  the  program, the  semantic  analyzer  ensures  the  program  is  semantically  correct, the  MSIL  code  generator  generates  low-level  code, ILASM  assembles  the  code  into  an  executable, and  the  output  component  writes  the  executable  to  disk.</p>
<p>By  understanding  the  architecture  of  <code>SimpleCompiler</code>, you  will  gain  a  deep  appreciation  for  the  intricacies  involved  in  building  a  compiler. You  will  also  be  better  equipped  to  make  modifications  to  the  compiler  to  support  new  language  features  or  optimizations.</p>
<p><img src="./arch.png" alt="Simple  Compiler"></p>
<h2 id="simplecompiler--features">SimpleCompiler  Features</h2>
<p>The  <code>SimpleCompiler</code>  supports  all  the  features  of  a  modern  programming  language, including  types, variables, arrays, functions, loops, and  conditionals. It  also  supports  a  REPL (Read-Eval-Print-Loop) that  allows  you  to  interactively  write  and  execute  code. The  following  sections  describe  the  features  of  the  compiler  in  more  detail.</p>
<h2 id="how--to--run--the--compiler">How  to  run  the  compiler</h2>
<p>To  run  the  compiler, go  to  the  directory  where  it  is  cloned  or  downloaded  and  execute  the  command  <code>dotnet run</code>  and  it  will  welcome  you  with  a  REPL.</p>
<blockquote>
<p>The  REPL  is  a  command-line  interface  that  allows  you  to  interact  with  the  compiler. When  you  run  the  compiler, you  will  see  a  prompt  that  looks  like  this:</p>
</blockquote>
<p><img src="step-1.png" alt="Simple  Compiler"></p>
<p>You  can  use  the  REPL  to  write  code, load  code  from  a  file, and  execute  code. Here  are  the  available  commands:</p>
<ul>
<li>
<p><code>edit</code>: Opens  the  code  in  Notepad.</p>
</li>
<li>
<p><code>file &lt;filename&gt;</code>: Loads  code  from  a  file.</p>
</li>
<li>
<p><code>exit</code>: Exits  the  REPL.</p>
</li>
<li>
<p><code>cls</code>: Clears  the  screen.</p>
</li>
</ul>
<p>To  write  code, simply  type  it  in  and  terminate  statements  with<code>;;</code>. To  write  a  multiline  statement  type <code>#</code> and  once  done  type <code>;;</code> then  it  will  execute  the  code  and  show  the  output</p>
<h3 id="variables--and--printing">Variables  and  printing</h3>
<p>You  can  declare  variables  in  the  REPL  and  print  their  values  using  the  following  built-in  functions:</p>
<ul>
<li>
<p><code>print</code>: Prints  without  a  newline.</p>
</li>
<li>
<p><code>println</code>: Prints  with  a  newline.</p>
</li>
<li>
<p><code>printf</code>: Prints  with  a  format.</p>
</li>
</ul>
<pre class=" language-csharp"><code class="prism  language-csharp">
<span class="token keyword">int</span>  a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">int</span>  b<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">int</span>  c<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<p><img src="step-2.png" alt="Simple  Compiler"></p>
<h3 id="scope">Scope</h3>
<p>SimpleCompiler  supports  scoping  of  variables. Variables  declared  in  the  global  scope  are  accessible  throughout  the  program. However, variables  declared  within  a  function  are  only  accessible  within  that  function  and  not  outside  of  it. For  instance, if  you  try  to  access  a  variable  declared  within  a  function  from  outside  of  it, the  compiler  will  raise  an  error.</p>
<pre class=" language-csharp"><code class="prism  language-csharp">
<span class="token keyword">int</span>  a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">int</span>  a<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>

<span class="token keyword">int</span>  c<span class="token operator">=</span>a<span class="token operator">+</span>b<span class="token punctuation">;</span>

<span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<p><img src="step-3.png" alt="Simple  Compiler"></p>
<p>In  this  example, the  variable <code>g</code> is  defined  outside  of  any  function, making  it  a  global  variable. This  means  it  can  be  accessed  from  anywhere  in  the  program, including  inside  functions. In  the <code>Add</code> function, we  can  access  the  global  variable  g.</p>
<p><img src="step-6.png" alt="Scope"></p>
<p>In  the <code>Add</code> function, we  can  access  and  print  the  global  variable  g.</p>
<p>Here  is  another  example  of  how  scope  works  in  SimpleCompiler. In  the  following  code, variable  a  is  declared  inside  the <code>Function</code> function. This  means  that  a  is  only  accessible  within <code>Function</code> and  cannot  be  accessed  outside  of  it. If  we  try  to  print  the  value  of  a  from  outside  of  the  test  function (in  the  global  scope), SimpleCompiler  will  throw  an  error.</p>
<p><img src="step-8.png" alt="Simple  Compiler"></p>
<h2 id="type--checking">Type  Checking</h2>
<p>The  compiler  will  ensure  that  the  types  of  values  you  are  using  are  compatible  with  the  types  of  variables  you  are  assigning  them  to. For  example, this  will  result  in  an  error:</p>
<pre class=" language-csharp"><code class="prism  language-csharp">
<span class="token keyword">int</span>  a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>

a<span class="token operator">=</span><span class="token string">"Hello"</span><span class="token punctuation">;</span>

  

</code></pre>
<p><img src="step-4.png" alt="Simple  Compiler"></p>
<h2 id="functions">Functions</h2>
<p>In  the  SimpleCompiler  REPL, users  can  define  functions  and  execute  them. Since  there  is  no  specific  entry  point  in  the  compiler, users  can  define  a  function  and  call  it  to  execute  the  code. The  defined  function  will  be  automatically  called  from  the  main  function.</p>
<pre class=" language-csharp"><code class="prism  language-csharp">
  

<span class="token keyword">void</span>  <span class="token function">FizzBuzz</span><span class="token punctuation">(</span><span class="token keyword">int</span>  n<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span>  i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"FizzBuzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Fizz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Buzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

<span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

  

<span class="token function">FizzBuzz</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre>
<p><img src="step-5.png" alt="Simple Compiler"></p>
<h2 id="recursion">Recursion</h2>
<p>In SimpleCompiler, recursive functions can be defined and called just like any other function. When a function calls itself, it creates a new instance of itself and passes any necessary parameters. This new instance then executes the same code as the original function, creating another instance if necessary. This process continues until the base case is reached, at which point the function returns a value back up the call stack.</p>
<p><img src="step-7.png" alt="Simple Compiler"></p>
<p>Below is the code for the SimpeCompiler entry point and its components.</p>
<blockquote>
<p>Program.cs</p>
</blockquote>
<pre class=" language-csharp"><code class="prism  language-csharp">
  

<span class="token keyword">using</span>  System<span class="token punctuation">.</span>Diagnostics<span class="token punctuation">;</span>

  

<span class="token keyword">namespace</span>  SimpleCompiler

<span class="token punctuation">{</span>

<span class="token keyword">public</span>  <span class="token keyword">static</span>  <span class="token keyword">class</span>  <span class="token class-name">Program</span>

<span class="token punctuation">{</span>

<span class="token keyword">public</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span>  <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">try</span>

<span class="token punctuation">{</span>

REPL<span class="token punctuation">.</span><span class="token function">Repl</span><span class="token punctuation">(</span>Evaluate<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SimpleLanguageParseException</span>  ex<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>

REPL<span class="token punctuation">.</span><span class="token function">Repl</span><span class="token punctuation">(</span>Evaluate<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">private</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span>  <span class="token function">Evaluate</span><span class="token punctuation">(</span><span class="token keyword">string</span>  code<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">var</span>  input <span class="token operator">=</span> code<span class="token punctuation">;</span>

  

<span class="token keyword">var</span>  inputStream <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">AntlrInputStream</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  lexer <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SimpleLanguageLexer</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  tokenStream <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">CommonTokenStream</span><span class="token punctuation">(</span>lexer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  parser <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SimpleLanguageParser</span><span class="token punctuation">(</span>tokenStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

parser<span class="token punctuation">.</span><span class="token function">RemoveErrorListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  errorListener <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SimpleLanguageErrorListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

parser<span class="token punctuation">.</span><span class="token function">AddErrorListener</span><span class="token punctuation">(</span>errorListener<span class="token punctuation">)</span><span class="token punctuation">;</span>

  
  

<span class="token keyword">try</span>

<span class="token punctuation">{</span>

<span class="token keyword">var</span>  syntaxTree <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">program</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

errorListener<span class="token punctuation">.</span><span class="token function">ThrowParseException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">CheckTypes</span><span class="token punctuation">(</span>syntaxTree<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  visitor <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SimpleLanguageAstBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  abstractSyntaxTree <span class="token operator">=</span> visitor<span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>syntaxTree<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">GenerateCode</span><span class="token punctuation">(</span>abstractSyntaxTree<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SimpleLanguageParseException</span>  ex<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Syntax error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SemanticAnalyzerException</span>  ex<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">private</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span>  <span class="token function">CheckTypes</span><span class="token punctuation">(</span>IParseTree  tree<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">var</span>  typeCheckVisitor <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SemanticAnalyzerVisitor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

typeCheckVisitor<span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>typeCheckVisitor<span class="token punctuation">.</span>Errors<span class="token punctuation">.</span>Count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">return</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">throw</span>  <span class="token keyword">new</span>  <span class="token class-name">SemanticAnalyzerException</span><span class="token punctuation">(</span>typeCheckVisitor<span class="token punctuation">.</span>Errors<span class="token punctuation">.</span><span class="token function">Aggregate</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span>  a <span class="token operator">+</span> Environment<span class="token punctuation">.</span>NewLine <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">private</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span>  <span class="token function">GenerateCode</span><span class="token punctuation">(</span>AstNode  ast<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">var</span>  result <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">MSILCodeGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Visit</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Compile</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token keyword">public</span>  <span class="token keyword">static</span>  <span class="token keyword">void</span>  <span class="token function">Compile</span><span class="token punctuation">(</span><span class="token keyword">string</span>  ilCode<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

<span class="token keyword">try</span>

<span class="token punctuation">{</span>

<span class="token comment">// Create a temporary file to write the MSIL code to.</span>

<span class="token keyword">string</span>  tempFilePath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">GetTempFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

File<span class="token punctuation">.</span><span class="token function">WriteAllText</span><span class="token punctuation">(</span>tempFilePath<span class="token punctuation">,</span> ilCode<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// Define the paths and filenames of the ilasm.exe and the output .exe file.</span>

<span class="token keyword">string</span>  ilasmPath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">Combine</span><span class="token punctuation">(</span>Environment<span class="token punctuation">.</span><span class="token function">GetFolderPath</span><span class="token punctuation">(</span>Environment<span class="token punctuation">.</span>SpecialFolder<span class="token punctuation">.</span>Windows<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"Microsoft.NET"</span><span class="token punctuation">,</span> <span class="token string">"Framework64"</span><span class="token punctuation">,</span> <span class="token string">"v4.0.30319"</span><span class="token punctuation">,</span> <span class="token string">"ilasm.exe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">string</span>  exeFilePath <span class="token operator">=</span> Path<span class="token punctuation">.</span><span class="token function">ChangeExtension</span><span class="token punctuation">(</span>tempFilePath<span class="token punctuation">,</span> <span class="token string">".exe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// Invoke the ilasm.exe process to compile the MSIL code into an .exe file.</span>

ProcessStartInfo  ilasmProcessInfo <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span>ilasmPath<span class="token punctuation">,</span> $<span class="token string">"\"{tempFilePath}\" /output=\"{exeFilePath}\" /QUIET /nologo"</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

UseShellExecute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>

RedirectStandardOutput <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>

CreateNoWindow <span class="token operator">=</span> <span class="token keyword">true</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

Process  ilasmProcess <span class="token operator">=</span> Process<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>ilasmProcessInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>

ilasmProcess<span class="token punctuation">.</span><span class="token function">WaitForExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span>  exitCode <span class="token operator">=</span> ilasmProcess<span class="token punctuation">.</span>ExitCode<span class="token punctuation">;</span>

  

<span class="token comment">// If the compilation succeeded, invoke the .exe file and capture its output.</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>exitCode <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>exeFilePath<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

ProcessStartInfo  executeProcessInfo <span class="token operator">=</span> <span class="token keyword">new</span><span class="token punctuation">(</span>exeFilePath<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

UseShellExecute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">,</span>

RedirectStandardOutput <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>

RedirectStandardError <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">,</span>

CreateNoWindow <span class="token operator">=</span> <span class="token keyword">true</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

Process  executeProcess <span class="token operator">=</span> Process<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span>executeProcessInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">string</span>  output <span class="token operator">=</span> executeProcess<span class="token punctuation">.</span>StandardOutput<span class="token punctuation">.</span><span class="token function">ReadToEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

executeProcess<span class="token punctuation">.</span><span class="token function">WaitForExit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// Print the output and exit code of the .exe file.</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Green<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>$<span class="token string">"Execution completed with exit code {executeProcess.ExitCode}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">else</span>

<span class="token punctuation">{</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Compilation failed."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

  

<span class="token comment">// Delete the temporary files.</span>

File<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>tempFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>File<span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span>exeFilePath<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span>

File<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>exeFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span>  ex<span class="token punctuation">)</span>

<span class="token punctuation">{</span>

Console<span class="token punctuation">.</span>ForegroundColor <span class="token operator">=</span> ConsoleColor<span class="token punctuation">.</span>Red<span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>$<span class="token string">"Error: {ex.Message}"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Console<span class="token punctuation">.</span><span class="token function">ResetColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

  

</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>SimpleCompiler is a straightforward compiler. It includes a REPL, which allows you to quickly test your code. You can easily write powerful programs with features like variable declaration, printing, scope, and type checking.</p>
