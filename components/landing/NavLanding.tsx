import React from 'react'
import Link from 'next/link'

function NavLanding({props}:{props:string}) {
  return (
    <>
        {/*//Header*/}
        {/*/inner-page*/}
        <div className="inner-banner py-5">
            <section className="w3l-breadcrumb text-left py-sm-5 ">
            <div className="container">
                <div className="w3breadcrumb-gids">
                <div className="w3breadcrumb-left text-left">
                    <h2 className="inner-w3-title">{props}</h2>
                    <p className="inner-page-para mt-2">
                    The Unique Solutions for Your Business
                    </p>
                </div>
                <div className="w3breadcrumb-right">
                    <ul className="breadcrumbs-custom-path">
                    <li>
                        <Link href="index.html">Home</Link>
                    </li>
                    <li className="active">
                        <span className="fas fa-angle-double-right mx-2" /> {props}
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>
        </div>
        {/*//inner-page*/}
        {/*/bottom-3-grids*/}
    </>

  )
}

export default NavLanding