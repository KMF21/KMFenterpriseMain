import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bg6 from '../packages/ui/assets/images/g3.jpg'
import bg7 from '../packages/ui/assets/images/team1.jpg'
import bg8 from '../packages/ui/assets/images/g5.jpg'
import bg9 from '../packages/ui/assets/images/team2.jpg'
import bg10 from '../packages/ui/assets/images/g4.jpg'
import bg11 from '../packages/ui/assets/images/team3.jpg'

const BlogSection = () => {
  return (
    <div>
      {/*/w3l-blog*/}

      <section className="w3l-blog">
        <div className="bloghome py-5" id="Newsblog">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="w3title-header text-center">
              <h6 className="title-subw3hny">Articles</h6>
              <h3 className="title-w3l mb-5">
                Stay up to date with our fresh news
              </h3>
            </div>
            <div className="row w3l-blogpost-content">
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg6}
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      How to Win The Customers` Appreciation &amp; Loyalty
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg7}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> Moses Bliss</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>20 July, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg8}
                        alt="blog-img"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      Targeted Marketing for Business School Students
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg9}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> David Bolaji</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>25 July, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <Link href="#blog-single" className="zoom d-block">
                      <Image
                        className="card-img-bottom img-fluid d-block"
                        src={bg10}
                        alt="Card image cap"
                      />
                    </Link>
                  </div>
                  <div className="card-body blog-details">
                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                      <p>News</p>
                    </div>
                    <Link href="#blog-single" className="blog-desc">
                      What You Must Know Making Investments Today
                    </Link>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <Link href="#author" className="post-author">
                        <Image
                          src={bg11}
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </Link>
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value">by</span>
                          <Link href="#author"> Somtochwkwu Wence</Link>
                        </li>
                      </ul>
                      <div className="date">
                        <p>28 July, 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*//w3l-blog*/}
    </div>
  )
}

export default BlogSection
