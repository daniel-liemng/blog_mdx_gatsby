import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import styles from "../css/postcard.module.css"

const PostCard = ({ post }) => {
  const { title, slug, author, date } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  const { excerpt } = post

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{excerpt}</p>
          <Link to={slug} className={styles.link}>
            read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PostCard
