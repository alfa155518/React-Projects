

import NftCard from "../components/NftCard";

import { NFT__DATA } from "../assets/data/data";

import Hero from "../components/Hero";

import '../css/market.css'
import { useState } from "react";






const Market = () => {

    const [data,SetData] = useState(NFT__DATA)


    // Sort Items By High, Mid, Low
    const handelSortItem = (e) => {
        // Filter By High Rate
        if (e === 'high') {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 6);
            SetData(filterData)
        }
        // Filter By Mid Rate
        if (e === 'mid') {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 5.50 && item.currentBid < 6);
            SetData(filterData)
        }
        // Filter By Low Rate
        if (e === 'low') {
            const filterData = NFT__DATA.filter((item) => item.currentBid > 4.89 && item.currentBid < 5.50);
            SetData(filterData)
        }

    }


    return (
        <>
        <Hero title={'Market Place'}/>
        <div className="product-filter">
            <div className="filter-left">
                <div className="all-category">
                    <form>
                        <h6>All Category</h6>
                        <select>
                            <option value=''>Art</option>
                            <option value=''>Music</option>
                            <option value=''>Domain Name</option>
                            <option value=''>Virtual World</option>
                            <option value=''>Trending Cards</option>
                        </select>
                    </form>
                </div>
                <div className="items">
                    <form>
                        <h6>All Items</h6>
                        <select>
                            <option value='single-item'>single-item</option>
                            <option value='Bundle'>Bundle</option>
                        </select>
                    </form>
                </div>
                
            </div>
            <div className="filter-right">
            <form>
                        <h6>Sort By</h6>
                        <select onChange={(e) => handelSortItem(e.target.value)}>
                            <option value='high'>High-Rate</option>
                            <option value='mid'>Mid-Rate</option>
                            <option value='low'>Low-Rate</option>
                        </select>
                    </form>
            </div>
        </div>
        <section className="products">
            <h3 className="section-name">Products</h3>
            <div className="boxes">
                {
                    data.map((item) => {
                        return (
                            <NftCard key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </section>
        </>
    )

}



export default Market;