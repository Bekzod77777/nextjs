import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  return (
    <Box width={"100%"} height={"70vh"} sx={{ backgroundColor: "red" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map((item) => {
          <Box key={item.image}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image src={item.image} alt={item.title} fill />
            </Box>
          </Box>;
        })}
      </Carousel>
    </Box>
  );
};

export default Hero;

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Bekzod Jumayev",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations width Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Bekzod Jumayev",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];
