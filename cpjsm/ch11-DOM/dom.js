//* Document Object Model (DOM)

/*

The DOM provides a structured representation of a document
allowing you to access and manipulate its content and structure.

It represents the structure of a document and provides a way for programming languages like
JavaScript to understand and modify it.


What is the DOM?
-> Structure Representation: The DOM represents how a document is structured, 
allowing for easy access and modification.
-> Language Agnostic: While the DOM is not a programming language itself, it provides a standard 
interface for languages like JavaScript to interact with documents.
-> HTML Focus: In this lesson, we'll focus on the HTML DOM, which defines how an HTML page is structured and can be modified.

//* HTML DOM

The HTML DOM is a tree of nested HTML elements that define the structure of a web page. It specifies:

- Structure: How an HTML page is organized.
- Modification: How elements can be added, removed, or changed.
- Properties and Styles: Attributes and styles that can be applied to elements.
- Standards: The version of the standard to be followed and valid elements for structuring a page.



//* Core and Specific DOMs

- Core DOM: Defines the basic structure for all documents.
- Specific DOMs: Extend the core DOM to support specific document types, such as HTML and XML.


//* Accessing the DOM
 DOM elements can be accessed and modified using various methods. Here's a simple example 
 to demonstrate how you can interact with the DOM:

Example: Alert on Document Load
You can use the onload event to trigger an action once the DOM is fully loaded:

<body onload="window.alert('Document loaded')"></body>;


Example: Adding Content Dynamically
Here's how you can add content to the DOM dynamically once it is loaded. In this example, we'll display today's date:

*/
