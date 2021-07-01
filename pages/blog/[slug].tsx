import Layout from "@/comps/layout";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/md";
import { Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import markdownStyles from "./markdown.module.css";

export default function Post({ post, morePosts }) {
  console.log(post);
  return (
    <Layout title={post.title} description={post.excerpt}>
      <Stack align="center" maxW="85vw">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={320}
          height={160}
        />
        <Heading>{post.title}</Heading>
      </Stack>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
