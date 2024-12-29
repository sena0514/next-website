import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

import {News} from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <Image
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
              className={styles.image}
            />
            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createAd} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
