import React, { useState } from 'react'
import axios from 'axios'
import '../styles/products.css'
import Item from './item'

function Products() {

    const [n,setN] = useState('')
    const [min,setMin] = useState('')
    const [max,setMax] = useState('')
    const [company,setCompany] = useState('AMZ')
    const [type,setType] = useState('Computer')
    const [products,setProcuts] = useState(null)
    const [item,setItem] = useState(false)

    const [itemval,setItemVal] = useState(null)

    console.log(products)

    const SHOW = ()=>{
        setItem(!item)
    }

    const setVal = (val)=>{
        setItemVal(val)
    }
    

    const GetProducts = async()=>{
        console.log(n,min,max)
        axios.post('http://localhost:8000/products',{n: n, min: min, max: max, company: company,type: type})
        .then((res)=>{
            setProcuts(res.data)
        })
    }


  return (
    <div className="container">
        <input type='text' placeholder='Number of products' onChange={(e) => setN(e.target.value)} className="input-field" />
        <input type='text' placeholder='Minimum price' onChange={(e) => setMin(e.target.value)} className="input-field" />
        <input type='text' placeholder='Maximum price' onChange={(e) => setMax(e.target.value)} className="input-field" />
        <select value={company} onChange={(e)=>setCompany(e.target.value)}>
                <option value="AMZ">AMZ</option>
                <option value="FLP">FLP</option>
                <option value="SNP">SNP</option>
                <option value="MYN">MYN</option>
                <option value="AZO">AZO</option>
        </select>
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
        </select>
        <button onClick={GetProducts} className="btn">Get Products</button>

        <div className="product-list">
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
  )
}

export default Products