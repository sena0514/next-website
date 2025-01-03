import styles from "./page.module.css";
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";

import {News} from "@/app/_libs/microcms";

const data: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createAd: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP3に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createAd: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createAd: "2023/04/19",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーで世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          className={styles.bgimg}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
