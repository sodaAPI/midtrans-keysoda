<a name="readme-top"></a>

  <h3 align="center">Keysoda - Midtrans Sandbox Integration (Payment API)</h3>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


### Built With

This Project is built with :

* [![ReactJs][React.js]][React-url]
* [![NodeJs][Node.js]][Nodejs-url]
* [![ExpressJs][Expressjs]][Express-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow the instruction below to install the project locally.

### Installation

Follow the steps below for installation of this project.

1. Clone the repo.
   ```sh
   git clone https://github.com/sodaAPI/midtrans-keysoda.git
   ```
2. Install NPM packages in ./client-side/ and ./server-side/
   ```sh
   npm install
   ```
3. Setting your Midtrans Client Key and Server Key on App.jsx and OrderRoutes.js .
  ```sh
  //App.js
  const midtransClientKey = "YOUR CLIENT KEY";

  //OrderRoutes.js
  const snap = new midtransclient.Snap({
    isProduction: false,
    serverKey: "YOUR SERVER KEY",
    clientKey: "YOUR CLIENT KEY",
    });
  ```
4. Start Front-End and Back-end on folder client-side and server-side
   ```js
   npm run dev
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React_Js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4
[Node.js]: https://img.shields.io/badge/Node_Js-20232A?style=for-the-badge&logo=node.js&logoColor=339933
[Expressjs]: https://img.shields.io/badge/Express_Js-20232A?style=for-the-badge&logo=express&logoColor=000000
[TailwindCSS-url]: https://tailwindcss.com/
[Express-url]: https://expressjs.com/
[Nodejs-url]: https://nodejs.org/en/
[React-url]: https://reactjs.org/
