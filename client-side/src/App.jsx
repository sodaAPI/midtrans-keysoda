import "./App.css";
import Navbar from "./components/Navbar";
import KeyboardBanner from "./assets/images/keyboard-soda.jpeg";
import KeyboardCatalog1 from "./assets/images/keyboard-catalog-1.jpg";
import KeyboardCatalog2 from "./assets/images/keyboard-catalog-2.jpg";
import KeyboardCatalog3 from "./assets/images/keyboard-catalog-3.jpg";
import KeyboardCatalog4 from "./assets/images/keyboard-catalog-4.jpg";
import KeyboardCatalog5 from "./assets/images/keyboard-catalog-5.jpg";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState("");
  let Rupiah = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  const keyboardDataArray = [
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Alicer 75",
      image: KeyboardCatalog1,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Lorem 75",
      image: KeyboardCatalog2,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Ipsum 104",
      image: KeyboardCatalog3,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 3000000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Dolor HHKB 60",
      image: KeyboardCatalog4,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 4500000,
    },
    {
      id: ~~(Math.random() * 100) + 1,
      name: "Sit Amet 65",
      image: KeyboardCatalog5,
      description: `We offer a wide variety of keyboards for all your typing needs. From basic to advanced models, we have something for everyone!`,
      price: 2750000,
    },
  ];

  const toggleClick = async (KeyboardData) => {
    const data = {
      order_id: KeyboardData.id,
      name: KeyboardData.name,
      price: KeyboardData.price,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `http://localhost:1000/api/order/process-order`,
      data,
      config
    );

    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Payment", JSON.stringify(result));
          setToken("");
        },
        onPending: (result) => {
          localStorage.setItem("Payment", JSON.stringify(result));
          setToken("");
        },

        onError: (error) => {
          console.log(error);
          setToken("");
        },
        onClose: () => {
          console.log("You haven't pay");
          setToken("");
        },
      });
    }
  }, [token]);

  useEffect(() => {
    const midtransURL = "https://app.sandbox.midtrans.com/snap/snap.js";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransURL;

    const midtransClientKey = "YOUR CLIENT KEY";
    scriptTag.setAttribute("data-client-key", midtransClientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="flex flex-col sm:py-10 md:py-20 lg:py-40 px-5 sm:px-10 md:px-20 lg:px-40 h-screen">
      <Navbar />
      <div className="flex flex-col items-center sm:py-20 lg:flex-row py-28 gap-10 sm:gap-28 lg:gap-40">
        <div className="flex flex-col gap-6 sm:gap-10 lg:gap-16 w-full sm:w-2/3 lg:w-full">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl">
            Modern and Latest Keyboard for Keyboard Enthusiast.
          </h1>
          <p className="font-normal text-justify text-sm sm:text-base lg:w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
            sapien eu arcu mollis vehicula. Donec tincidunt libero tellus, quis
            ornare urna tempus eget. Nam aliquam commodo vestibulum. Phasellus
            at lectus purus. In hac habitasse platea dictumst. Curabitur
            condimentum erat ipsum, nec blandit ipsum consectetur at.
          </p>
          <div className="flex flex-row gap-4 sm:gap-6">
            <button className="p-2 sm:p-3 lg:p-4 rounded-2xl font-semibold hover:font-bold bg-[#D1EF7F] transition transform duration-500 animate ease-in-out hover:scale-125">
              Shop now
            </button>
            <button className="p-2 sm:p-3 lg:p-4 rounded-2xl font-semibold underline underline-offset-2 sm:underline-offset-4 lg:underline-offset-6 hover:underline-offset-8 transition transform duration-500 animate ease-in-out hover:scale-125">
              Shop now
            </button>
          </div>
        </div>
        <div className="relative w-full animate-floating">
          <img
            src={KeyboardBanner}
            className="rounded-3xl relative w-full"
            alt="Keyboard Banner"
          />
          <div className="flex flex-col absolute bottom-0 bg-gradient-to-t from-10% from-[#d1ef7fbe] to-[#00000009] rounded-b-3xl shadow-xl overflow-hidden px-4 py-4 pt-10 w-full">
            <h1 className="font-bold text-white text-lg">
              Keyboard Collection
            </h1>
            <p className="text-white text-md">Experience the real things</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-start items-center sm:py-20">
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
          <h1 className="text-lg font-extrabold sm:text-xl md:text-2xl lg:text-5xl w-full sm:w-[500px]">
            Our New Exclusive Collections
          </h1>
          <a className="w-full sm:w-[500px] text-lg font-semibold text-[#585858be]">
            Elevate your typing feel with our curated selection of premium
            keyboard and accessories.
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center py-5 gap-5">
          <button className="p-3 bg-[#d1ef7fbe] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            All Keyboards
          </button>
          <button className="p-3 bg-[#e2e2e2be] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            60% Keyboards
          </button>
          <button className="p-3 bg-[#e2e2e2be] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            65% Keyboards
          </button>
          <button className="p-3 bg-[#e2e2e2be] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            75% Keyboards
          </button>
          <button className="p-3 bg-[#e2e2e2be] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            TKL Keyboards
          </button>
          <button className="p-3 bg-[#e2e2e2be] hover:font-bold font-semibold rounded-xl sm:my-10 transition transform duration-500 animate ease-in-out hover:scale-125">
            Ergo Keyboards
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center w-full py-5">
          {keyboardDataArray.map((KeyboardData, index) => (
            <div key={index} className="relative">
              <img
                className="md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] object-cover rounded-xl"
                src={KeyboardData.image}
                alt={`Keyboard Catalog ${index + 1}`}
              />
              <div className="flex flex-col absolute bottom-0 bg-gradient-to-t from-15% from-[#d1ef7fbe] to-[#00000013] rounded-b-xl shadow-xl overflow-hidden p-2 w-full">
                <h1 className="font-bold text-white text-lg sh">
                  {KeyboardData.name}
                </h1>
                <p className="text-white text-md">
                  {Rupiah.format(KeyboardData.price)}
                </p>
              </div>
              <div className="absolute bottom-5 right-5">
                <button
                  onClick={() => toggleClick(KeyboardData)}
                  className="bg-white p-2 rounded-xl hover:text-yellow-500 transition transform duration-500 animate ease-in-out hover:scale-125">
                  <AddShoppingCartOutlinedIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
