# AptiCraft-Tour
Secure web app where users log in to access interactive digital-twin tours and simulations.
## follow the style and topics of the site url ###
https://www.marzipano.net/

### Approach of software or web development -IBM ###
https://www.ibm.com/think/topics/software-development

### Approach of Software or web development - Turing 
https://www.turing.com/resources/web-development-process  


*** Process of data flow pipeline *** 
Apps works with next.js and react - where next js manages server side actions and react manage ui how it looks like or how user interaction and response comes on ui level and user get response as data, login, auth, or any ui looks. 
    So the concept is - trying to add more load to server side and reduce load to dom/ user agent so user browser gets light weight. When we think about the performance of user side or different configuration of devices, the process gives a better performance on the ui or browser side.

*** Design of Contents jsx ***
So whee page jsx takes full html content and most of the part as like a frame and when user intend to visualize / see data then data comes from server through content as page jsx child. So when the intend comes that time the call comes fro dom to server through react, so building react fiber sometimes waste but client side load should lighter. 

*** Contents *** 
Contents keeps all ui which are related with topics of development Approach but only the ui structure, how & who keep data and looks of ui but no data its actualy carries. When user intend comes from dom that times datat comes from server to react to dom. So it keeps browser so light. And there are three ui contains Contents jsx but its depending what content user asking that data only passing on that data pipeline. Sso server only carries one content data at a time. 



### Some of the development process inside ###

*** layout.js *** 
layout.js in Next.js is a Server Component that defines the persistent, shared UI structure (like the <html>, <body>, header, and footer) that wraps all pages. It manages the data pipeline by being the first component executed on the server, allowing you to fetch and provide data globally to all nested pages and components without client interaction.It executes on the server to generate and send the foundational,pre-rendered HTML structure quickly, enabling the browser to instantly build the DOM.

### Tailwind CSS Pipeline (Server-to-Browser) ###

Server Execution: When a browser requests a page, the Next.js server first executes app/layout.jsx. This component imports globals.css, which contains the full set of Tailwind utility definitions.

HTML Generation: The server processes all component JSX (including the specific Tailwind utility classes defined via className="...") and generates the final, raw HTML string.

Bundle Inclusion: Next.js ensures the complete, compiled Tailwind stylesheet bundle is linked in the <head> of this generated HTML.

Client Delivery: The server sends the complete HTML (with embedded Tailwind class names) and the linked CSS bundle to the browser.

DOM/Style Application: The browser receives the HTML, instantly renders the content (DOM), and applies the corresponding styles by looking up the received class names within the loaded global Tailwind CSS bundle. All styles are available immediately upon load.