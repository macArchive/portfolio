import Hero from "@/comps/blog/hero";
import List from "@/comps/blog/list";
import Tags from "@/comps/blog/tags";
import Cta from "@/comps/general/cta";
import Layout from "@/layout/index";
import { getAllPosts } from "@/lib/api";
import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";

export default function Blog({ allPosts }) {
  const [tag, setTag] = useState("recent");
  return (
    <Layout
      title="Blog"
      description="A Freelance Web Developer building fast, responsive and beautiful websites making use of cutting edge technology and perfect SEO techniques."
    >
      <Stack spacing={8}>
        <Hero />
        <List tag={tag} posts={allPosts} />
        <Tags set={setTag} />
        <Cta
          heading="Interested in More Content?!"
          text="Check out my YouTube channel for more technology and programming content."
          button="Click Here"
          leftIcon={<AiFillYoutube fontSize={24} />}
          url="https://www.youtube.com/channel/UCnTtBprmR4yTz3ieMSuWzlA"
        />
      </Stack>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "topic",
    "coverImage",
    "date",
    "slug",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
