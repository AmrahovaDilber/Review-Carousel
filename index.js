const carReviews = [
  {
    image: "./assets/porsche.jpg",
    carName: "Porsche",
    reviewText: "The best car which I have",
    description:
      "Porsche offers a blend of luxury, speed, and a thrilling driving experience that is unmatched. Every ride feels special with its precise handling and powerful engine.",
    rating: 5,
  },
  {
    image: "./assets/ferrari.webp",
    carName: "Ferrari",
    reviewText: "A dream car for many!",
    description:
      "Ferrari stands for elegance and raw power. It’s a dream car for many, offering an exhilarating drive with its stunning design and high-performance capabilities.",
    rating: 4.8,
  },
  {
    image: "./assets/bmw.jpeg",
    carName: "BMW",
    reviewText: "Luxury and performance",
    description:
      "BMW combines luxury and performance, providing a smooth and powerful ride that stands out on the road. Its advanced engineering and elegant design make it a top choice for car enthusiasts.",
    rating: 4.7,
  },
  {
    image: "./assets/Mercedes.jpeg",
    carName: "Mercedes",
    reviewText: "Class and comfort",
    description:
      "Mercedes-Benz is synonymous with luxury and comfort, providing an exceptional driving experience with advanced features. It’s the perfect blend of style, comfort, and performance.",
    rating: 4.9,
  },
  {
    image: "./assets/range-rover.webp",
    carName: "Range Rover",
    reviewText: "Unmatched luxury and off-road capability",
    description:
      "Range Rover offers unmatched luxury combined with exceptional off-road capability. It’s perfect for those who want to travel in style and comfort, regardless of the terrain.",
    rating: 4.9,
  },
  {
    image: "./assets/zeekr.jpg",
    carName: "Zeekr",
    reviewText: "Innovative and electric",
    description:
      "Zeekr is a newcomer in the electric vehicle market, offering innovative designs and impressive performance. It’s a great choice for those looking to embrace the future of sustainable driving.",
    rating: 4.7,
  },
  {
    image: "./assets/tesla.jpg",
    carName: "Tesla",
    reviewText: "Future of electric cars",
    description:
      "Tesla is leading the charge in electric vehicles with cutting-edge technology and sustainable solutions. It provides a futuristic driving experience with impressive acceleration and innovative features.",
    rating: 4.9,
  },
  {
    image: "./assets/audi.jpg",
    carName: "Audi",
    reviewText: "Elegant and powerful",
    description:
      "Audi offers a sophisticated driving experience with innovative technology and dynamic performance. Its sleek design and powerful engine make it a standout in its class.",
    rating: 4.6,
  },
  {
    image: "./assets/lamborghini.webp",
    carName: "Lamborghini",
    reviewText: "Speed and style",
    description:
      "Lamborghini is a symbol of speed and style, offering a thrilling and visually striking driving experience. Its aggressive design and roaring engine are sure to turn heads.",
    rating: 4.9,
  },
  {
    image: "./assets/jaquar.jpg",
    carName: "Jaguar",
    reviewText: "Refined performance",
    description:
      "Jaguar combines refined performance with luxury, delivering a smooth and powerful ride with timeless elegance. It’s a perfect blend of tradition and modern technology.",
    rating: 4.5,
  },
  {
    image: "./assets/lexus.jpg",
    carName: "Lexus",
    reviewText: "Luxury and technology",
    description:
      "Lexus offers a perfect blend of luxury and cutting-edge technology, ensuring a comfortable and high-tech driving experience. It’s known for its reliability and advanced safety features.",
    rating: 4.7,
  },
  {
    image: "./assets/maserati.jpg",
    carName: "Maserati",
    reviewText: "Italian excellence",
    description:
      "Maserati stands for Italian excellence, delivering an exquisite driving experience with unmatched style and performance. Its luxurious interiors and powerful engines make it a joy to drive.",
    rating: 4.8,
  },
  {
    image: "./assets/rollsroyce.avif",
    carName: "Rolls-Royce",
    reviewText: "The pinnacle of luxury",
    description:
      "Rolls-Royce is synonymous with the pinnacle of luxury, offering unparalleled comfort and elegance. Every journey in a Rolls-Royce is a statement of sophistication and opulence.",
    rating: 5,
  },
  {
    image: "./assets/bentley.webp",
    carName: "Bentley",
    reviewText: "Exquisite craftsmanship",
    description:
      "Bentley is known for its exquisite craftsmanship and powerful performance, delivering a luxurious and dynamic driving experience. It’s the epitome of British luxury.",
    rating: 4.8,
  },
  {
    image: "./assets/astonmartin.jpg",
    carName: "Aston Martin",
    reviewText: "Timeless elegance",
    description:
      "Aston Martin combines timeless elegance with powerful performance, offering a refined and thrilling driving experience. It’s a symbol of British engineering excellence.",
    rating: 4.7,
  },
];

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const cardsContainer = document.querySelector("#cardsContainer");

let currentIndex = 0;

prevButton.addEventListener("click", handlePrev);
nextButton.addEventListener("click", handleNext);

function handlePrev() {
  currentIndex -= 3;
  if (currentIndex < 0) {
    currentIndex = carReviews.length - 3;
  }
  start();
}

function handleNext() {
  currentIndex += 3;
  if (currentIndex >= carReviews.length) {
    currentIndex = 0;
  }
  start();
}

function start() {
  cardsContainer.innerHTML = "";
  const reviewsToShow = carReviews.slice(currentIndex, currentIndex + 3);
  reviewsToShow.forEach((item) => {
    cardsContainer.innerHTML += `
        <div class="w-[400px] h-[450px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div class="w-full h-[220px]">
            <img src=${item.image} alt="${item.carName}" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col justify-center items-center p-4">
            <div class="flex space-x-1 mb-3 text-yellow-500">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="text-2xl font-bold mb-1 text-gray-800">${item.carName}</p>
            <p class="text-lg font-semibold mb-2 text-gray-600 text-center">${item.reviewText}</p>
            <p class="text-sm text-gray-500 text-center leading-tight">${item.description}</p>
          </div>
        </div>
      `;
  });
}

start();
