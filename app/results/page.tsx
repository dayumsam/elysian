// 'use client'

// import styles from '../styles/Home.module.scss'

import { useEffect } from 'react';
import titleCase from '../lib/helper'

export default function ResultSection({data,setContactVisible}){

    data = data["output"]
    let primaryStyle = data[0]  

    return(
        <>
            <div className={styles.textcenter}>
                <h1>Your style overview</h1>
            </div>
            <div className={styles.imgrow}>
                {primaryStyle.images.map((img)=>(
                    <div className={styles.img} key={img.fileId} style={{backgroundImage: `url(${img.url})`}}/>
                ))}
            </div>

            <div className={styles.textcenter}>
                <p className={styles.texttitle}>{primaryStyle.content.styles.replaceAll('_', ' ')}</p>
            </div>

            <div className={styles.textcenter}>
                <p>{primaryStyle.content.details}</p>
            </div>

            <div className={styles.linkSection}>
                <p className={styles.title}>
                    Shop with us
                </p>

                <p className={styles.sub}>
                   Explore our carefully curated collection with a personalised shopping experience
                </p>

                <a href={`https://www.elysiandekor.com/shop?Design+Style=${titleCase(primaryStyle.content.styles).replaceAll('_', '+')}`} target="_top" className={styles.btn}>Start Decorating</a>
            </div>


            <div className={styles.stylerow}>
                <div className={styles.styletip}>
                    <h3>Style Tip 1</h3>
                    <p>
                    {primaryStyle.content.tip_1}
                    </p>
                </div>

                <div className={styles.styletip}>
                    <h3>Style Tip 2</h3>
                    <p>
                    {primaryStyle.content.tip_2}
                    </p>
                </div>
            </div>

            <div className={styles.stylerow}>
                <div className={styles.styletip}>
                    <h3>Style Tip 3</h3>
                    <p>
                    {primaryStyle.content.tip_3}
                    </p>
                </div>

                <div className={styles.styletip}>
                    <h3>Style Tip 4</h3>
                    <p>
                    {primaryStyle.content.tip_4}
                    </p>
                </div>
            </div>


            <div className={styles.stylerow}>
                <div className={styles.styletip}>
                    <h3>Style Tip 5</h3>
                    <p>
                    {primaryStyle.content.tip_5}
                    </p>
                </div>

                <div className={styles.styletip}>
                    <h3>Style Tip 6</h3>
                    <p>
                    {primaryStyle.content.tip_6}
                    </p>
                </div>
            </div>

            <div className={styles.linkSection}>
                <p className={styles.title}>
                    Be on trend
                </p>

                <p className={styles.sub}>
                    Read about the tips to elevate your space with the latest industry trends
                </p>

                <a href="https://www.elysiandekor.com/blog" target="_top" className={styles.btn}>Read our blog</a>
            </div>

            <div className={styles.textcenter}>
                <h1>Other recommendations</h1>
            </div>

            <div className={styles.row}>
                <div className={styles.imgrow}>
                    {data[1].images.map((img)=>(
                        <div className={styles.img} key={img.fileId} style={{backgroundImage: `url(${img.url})`}}/>
                    ))}
                </div>

                <div className={styles.textcenter}>
                    <p className={styles.texttitle}>{data[1].content.styles.replaceAll('_', ' ')}</p>
                </div>

                <div className={styles.textcenter}>
                    <p>{data[1].content.details}</p>
                </div>

                <div className={styles.textcenter}>
                    <a href={`https://www.elysiandekor.com/shop?Design+Style=${titleCase(data[1].content.styles).replaceAll('_', '+')}`} target="_top" className={styles.btn}>See Details</a>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.imgrow}>
                    {data[2].images.map((img)=>(
                        <div className={styles.img} key={img.fileId} style={{backgroundImage: `url(${img.url})`}}/>
                    ))}
                </div>

                <div className={styles.textcenter}>
                    <p className={styles.texttitle}>{data[2].content.styles.replaceAll('_', ' ')}</p>
                </div>

                <div className={styles.textcenter}>
                    <p>{data[2].content.details}</p>
                </div>

                <div className={styles.textcenter}>
                <a href={`https://www.elysiandekor.com/shop?Design+Style=${titleCase(data[2].content.styles).replaceAll('_', '+')}`} target="_top" className={styles.btn}>See Details</a>
                </div>
            </div>

            <div className={styles.linkSection}>
                <p className={styles.title}>
                    Get Inspired
                </p>

                <p className={styles.sub}>
                    Explore 100+ unique interior design styles based on their Popularity, Ambience, Culture and Period
                </p>

                <a href="https://www.elysiandekor.com/explore" target="_top" className={styles.btn}>Explore</a>
            </div>
        </>
    )
}