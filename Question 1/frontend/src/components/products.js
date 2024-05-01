import React, { useState } from 'react'
import axios from 'axios'
import '../styles/products.css'
import Item from './item'

function Products() {

    const [n,setN] = useState('10')
    const [company,setCompany] = useState('AMZ')
    const [type,setType] = useState('Computer')
    const [products,setProducts] = useState(null)
    const [item,setItem] = useState(false)
    const [range, setRange] = useState({
        min: '0',
        max: '1000'
    })

    // DUMMY DATA
    const dummy = [
        {
            productName: 'Laptop1',
            price: 899,
            rating: 4.5,
            availability: 'yes',
            discount: 24
        },
        {
            productName: 'Laptop2',
            price: 899,
            rating: 4.5,
            availability: 'yes',
            discount: 24
        },
        {
            productName: 'Laptop3',
            price: 899,
            rating: 4.5,
            availability: 'out-of-stock',
            discount: 24
        }
    ]
    // THIS IS A DUMMY DATA FOR TESTING

    const [itemval,setItemVal] = useState(null)

    console.log(products)

    const SHOW = ()=>{
        setItem(!item)
    }

    const setVal = (val)=>{
        setItemVal(val)
    }
    

    const GetProducts = async()=>{
        console.log(n,range.min,range.max)
        axios.post('http://localhost:8000/products',{n: n, min: range.min, max: range.max, company: company,type: type})
        .then((res)=>{
            setProducts(res.data)
        })
    }
    const RangeSet = (i)=>{
        i==1? setRange({min: 0, max: 500}) : <></>
        i==2? setRange({min: 500, max: 1000}) : <></>
        i==3? setRange({min: 1000, max: 5000}) : <></>
        i==4? setRange({min: 5000, max: 10000}) : <></>
        i==5? setRange({min: 0, max: 10000}) : <></>
    }
  return (
    <div className='ALL'>
                <div>
                    <h1>SHOP ELECTRONICS</h1>
                </div>
            <div className="container">
                <label>Products:</label><input type='text' placeholder='Number of products' onChange={(e) => setN(e.target.value)} className="input-field" />
                <label>BUDGET: </label>
                <select onChange={(e)=>RangeSet(e.target.value)}>
                        <option value="1">$0 - $500</option>
                        <option value="1">$0 - $500</option>
                        <option value="2">$500 - $1000</option>
                        <option value="3">$1000 - $5000</option>
                        <option value="4">$5000 - $10000</option>
                        <option value="5">$10000+</option>
                </select>
                <br></br>
                <label>Select Company</label>
                <select value={company} onChange={(e)=>setCompany(e.target.value)}>
                        <option value="AMZ">AMZ</option>
                        <option value="FLP">FLP</option>
                        <option value="SNP">SNP</option>
                        <option value="MYN">MYN</option>
                        <option value="AZO">AZO</option>
                </select>
                <br></br>
                <label>Select Electronics</label>
                <select value={type} onChange={(e)=>setType(e.target.value)}>
                        <option value="Phone">PHONE</option>
                        <option value="Computer">COMPUTER</option>
                        <option value="Tv">TV</option>
                        <option value="Earphone">EARPHONE</option>
                        <option value="Tablet">TABLET</option>
                        <option value="Charger">CHARGER</option>
                        <option value="Mouse">MOUSE</option>
                        <option value="keypad">KEYPAD</option>
                        <option value="Bluetooth">BLUETOOTH</option>
                        <option value="Pendrive">PENDRIVE</option>
                        <option value="Remote">REMOTE</option>
                        <option value="Speaker">SPEAKER</option>
                        <option value="Headset">HEADSET</option>
                        <option value="Laptop">LAPTOP</option>
                        <option value="Pc">PC</option>
                </select><br></br>
                <button onClick={GetProducts} className="btn">Get Products</button>

                <div className="product-list">
                    {/* use dummy variable as dummy data for product showcase */}
                    {products==null? 'No Products Found, Search for Products': <> </>}
                    {products &&     
                        products.map((val, ind) => (
                            <div>
                                <div className="product" key={ind} onClick={()=>{
                                    SHOW()
                                    setVal(val)
                                }}>
                                    <div className='Each'>
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <p>{val.productName}</p><br></br>
                                    </div>
                                    <p>Price: ${val.price}</p><br/>
                                    <p>Rating: {val.rating}</p><br/>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            {item && <Item item={itemval} SHOW={SHOW} open={item}/>}
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Products