import Image from 'next/image'
import bg4 from '../packages/ui/assets/images/ab1.png'
import bg5 from '../packages/ui/assets/images/ab2.png'

const MidSliderSection = () => {
  return (
    <>
      {' '}
      {/* <!--/w3l-midslider--> */}
      <section className="w3l-midslider py-5" id="midslider">
        {/* /grids */}
        <div className="container py-md-5">
          <div className="row">
            <div className="col-lg-7 stats_info-images pe-lg-5">
              <div className="stats_info-images-right row">
                <div className="col-6 mid-slider-content">
                  <Image src={bg4} className="img-fluid radius-image" alt="" />
                </div>
                <div className="col-6 mid-slider-content">
                  <Image src={bg5} className="img-fluid radius-image" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 title-content text-left ps-lg-5 mt-lg-0 mt-5">
              <h6 className="title-subw3hny mb-1">Why Us</h6>
              <h3 className="title-w3l mb-3">
                We Partner with Conscious Businesses to Grow Impact & Income
              </h3>
              <p className="mb-3">
                At KMFenterprise we specialise in telling your story through
                intentional design that creates impact (and income!). We love
                working with clients driven by purpose who&apos;ve built their
                businesses from the ground up and are ready for a brand
                reflective of the impactful industry leaders they&apos;ve
                become.
              </p>

              {/* <ul className="icon-list-items mt-3">
                <li className="icon-list-item">
                  <i aria-hidden="true" className="fas fa-check" />
                  Innovative ideas
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Professional assistance
                </li>
                <li className="icon-list-item mt-2">
                  <i aria-hidden="true" className="fas fa-check" />
                  Financial advisory
                </li>
              </ul> */}
            </div>
            {/*/grids */}
          </div>
          {/*/grids */}
        </div>
      </section>
      {/*//w3l-midslider*/}
    </>
  )
}

export default MidSliderSection
