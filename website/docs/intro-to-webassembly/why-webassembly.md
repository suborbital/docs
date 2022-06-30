# Why WebAssembly

As the web has progressed from document database to application platform to runs-damn-near-everything platform, the needs of the web browser evolved. While JavaScript is a vibrant and powerful language with a wide variety of libraries and a robust ecosystem, many computing platforms rely on other languages.

When building high-performance applications, some programming languages lend themselves better to the task of processing large amounts of data, running machine learning models, rendering complex graphics, etc. The advent of WebAssembly came from the desire to run C++ code natively in the browser. After an initial experiment called asm.js which was a compile target for C++ and Emscripten that generated JavaScript, the learnings were used to design a next-gen bytecode standard with a sandboxed execution environment. This is an abridged history on the evolution of WebAssembly into the portable, performant, and flexible technology we know today.

In our view, WebAssembly's utility rests upon three tentpoles: performance, portability, and security.

- WebAssembly is portable, meaning it can be run on any operating system or hardware architecture
- WebAssembly is performant, providing nearly the same level of performance as native code
- WebAssembly is secure, ensuring code is executed within a sandbox that embodies deny-by-default security

By capitalizing on these three properties, and adding the ability to compile many different languages to this common bytecode format, a powerful computing platform has emerged. WebAssembly has become a sought-after technology that is used to run code in the browser, on the server, on IoT devices, and more. It is a young but very promising tool that enables developers to solve everyday problems with a technology that is inherently more secure.