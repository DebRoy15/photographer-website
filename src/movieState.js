//Import Images
import winter1 from "./img/winter-1.jpg";
import winter2 from "./img/winter-2.jpg";
import winter3 from "./img/winter-3.jpg";
import winter4 from "./img/winter-4.jpg";

import sports1 from "./img/sports-1.jpg";
import sports2 from "./img/sports-2.jpg";
import sports3 from "./img/sports-3.jpg";
import sports4 from "./img/sports-4.jpg";

import wildLife1 from "./img/wild-life-1.jpg";
import wildLife2 from "./img/wild-life-2.jpg";
import wildLife3 from "./img/wild-life-3.jpg";
import wildLife4 from "./img/wild-life-4.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Winter Collection",
      mainImg: winter4,
      secondImg: winter2,
      thirdImg: winter3,
      forthImg: winter1,
      url: "/work/winter",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Sports Collection",
      mainImg: sports4,
      secondImg: sports2,
      thirdImg: sports3,
      forthImg: sports1,
      url: "/work/sports",

      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Wild-Life Collection",
      mainImg: wildLife4,
      secondImg: wildLife2,
      thirdImg: wildLife3,
      forthImg: wildLife1,
      url: "/work/wild",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
