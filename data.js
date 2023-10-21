import firstBook from "./src/assets/first_book_2.png";
import firstBookAudio from "./src/assets/first_book_audio.png";
import firstBookCd from "./src/assets/first_book_cd.png";

import secondBook from "./src/assets/second_book_2.png";
import secondBookAudio from "./src/assets/second_book_audio.png";
import secondBookCd from "./src/assets/second_book_cd.png";

import { formatToUSD } from "./src/utils/helper";
import amazonLogo from "./src/assets/amazon.png";
import meganBookLogo from "./src/assets/Megan.png";
import megankLogo from "./src/assets/Megank.png";
import UrbanStoreLogo from "./src/assets/Urban Store.png";
import Article1 from "./src/assets/article1.jpg";
import Article2 from "./src/assets/article2.jpg";
import Article3 from "./src/assets/article3.jpg";
import Article4 from "./src/assets/article4.jpg";
import Article5 from "./src/assets/article5.jpg";
import Article6 from "./src/assets/article6.jpg";

export const booksData = [
  {
    versions: [
      {
        image: firstBook,
        title: "Atomic One's",
        price: formatToUSD(13.84),
        priceNumber: 13.84,
        type: "Printed book",
        path: "atomic-ones",
        publisher: "The Hilton Book",
        language: "English",
        paperback: 254,
        ISBN: 98547152365,
        dimensions: "20 x 14 x 4cm",
      },
      {
        image: firstBookAudio,
        title: "Atomic One's - Audio",
        price: formatToUSD(68.97),
        priceNumber: 68.97,
        type: "Audio",
        path: "atomic-ones-audio",

        publisher: "Discovery Book Palace",
        language: "French",
        paperback: 180,
        ISBN: 98547152365,
        dimensions: "20 x 14 x 4cm",
      },
      {
        image: firstBookCd,
        title: "Atomic One's - CD",
        price: formatToUSD(27.95),
        priceNumber: 27.95,
        type: "Audio CD + Printed Book",
        path: "atomic-ones-cd",
        publisher: "Oxford Book Palace",
        language: "French",
        paperback: 175,
        ISBN: 84512654849,
        dimensions: "20 x 18cm",
      },
    ],

    description:
      "As the book contains theoretical content as well as solved questions.",
    content:
      "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
  },
  {
    versions: [
      {
        image: secondBook,
        title: "The Dark Light",
        price: formatToUSD(86.11),
        priceNumber: 86.11,
        type: "Printed book",
        path: "the-dark-light",
        publisher: "Blue Berry Book House",
        language: "English",
        paperback: 245,
        ISBN: 98547152367,
        dimensions: "20 x 14 x 4cm",
      },
      {
        image: secondBookAudio,
        title: "The Dark Light - Audio",
        price: formatToUSD(73.22),
        priceNumber: 73.22,
        type: "Audio",
        path: "the-dark-light-audio",
        publisher: "Generic Book Publishers",
        language: "English",
        paperback: 274,
        ISBN: 98547125417,
        dimensions: "20 x 28 x 4cm",
      },
      {
        image: secondBookCd,
        title: "The Dark Light - CD",
        price: formatToUSD(83.55),
        priceNumber: 83.55,
        type: "Audio CD + Printed Book",
        path: "the-dark-light-CD",
        publisher: "The Hilton Book",
        language: "English",
        paperback: 189,
        ISBN: 98541152365,
        dimensions: "20 x 14 x 4cm",
      },
    ],
    description:
      "As the book contains theoretical content as well as solved questions.",
    content:
      "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
  },
];

export const trustedByData = [
  {
    image: amazonLogo,
    title: "Amazen Corp",
    description:
      "They has been helping readers, music lovers, and videophiles find quality material.",
  },
  {
    image: meganBookLogo,
    title: "Megan Books",
    description:
      "We help physical bookstores manage their overstock to the book inventory.",
  },
  {
    image: megankLogo,
    title: "Megank",
    description:
      "Bookstore serving up the full spectrum of Black literature and wine black books",
  },
  {
    image: UrbanStoreLogo,
    title: "Urban Store",
    description:
      " We also carry the latest records, issues of all of your favorite comic books.",
  },
];

export const knowladgeSectionData = [
  {
    title: "Chapter-1 Get Started Intro",
    text: "You can double your knowledge by reading this ever needed book that can last a lifetime.",
    numberOfPages: 106,
    length: 2,
  },
  {
    title: "Chapter-2 The Roman Culture",
    text: "It will help to improve your life career with the perfect and needed knowledge about your life.",
    numberOfPages: 108,
    length: 3,
  },

  {
    title: "Chapter-3 How They Servived",
    text: "We wanted to create an easy, convenient way for you to get your books & support.",
    numberOfPages: 250,
    length: 4,
  },

  {
    title: "Chapter-4 The End Of Romans",
    text: "Promote your book via Pages shop to support your writing & reading career.",
    numberOfPages: 175,
    length: 3,
  },
];
export const articlesData = [
  {
    title: "The principles of writing and the reading",
    text: "Dramatically maintain clicks-and-mortar solutions without the main functional solutions.",
    image: Article1,
    id: 1,
  },
  {
    title: "Books changed my ideology about life",
    text: "Dramatically visualize customer-directed convergence without revolutionary ROI.",
    image: Article2,
    id: 2,
  },
  {
    title: " Effective and best blogs for book lovers",
    text: "Taking seamless key performance indicators offline to maximize the long book reading tail.",
    image: Article3,
    id: 3,
  },
  {
    title: "Words which don’t look even slightly believable",
    text: "Podcasting operational change management inside of workflows to establish a framework.",
    image: Article4,
    id: 4,
  },
  {
    title: "Many variations of pass majority have suffered",
    text: "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
    image: Article5,
    id: 5,
  },
  {
    title: "Significant reading has more info number",
    text: "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
    image: Article6,
    id: 6,
  },
];

export const accordionData = [
  {
    question: "What is Textbook Rental ?",
    answer:
      "Textbook rental is simple! Now at The Bookstore, you can rent a range of textbooks, and then you return them at the end of the Rental Agreement by the Due Date.",
  },
  {
    question: "Can I purchase a digital book?",
    answer:
      "Yes, many titles are available in digital format from our online affiliates. You will see them listed along with other versions of the book, when available",
  },
  {
    question: "Can I pick up the books in person?",
    answer:
      'Yes - choose "In-Store Pickup Next Business Day" as your shipping method. There is no charge for this service, and you can pick up the books without having to stand in line.',
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Absolutely! Unfortunately, this website cannot generate international shipping quotes. If you'd like to have your books shipped outside of USA.",
  },
  {
    question: "Are shipping charges per book?",
    answer:
      "Shipping charges are per order. It is the same price to have one book shipped or several as long as they are shipped in the same package.",
  },
];
