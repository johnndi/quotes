import { useState  } from 'react'
import './Quotes.css'
import { FidgetSpinner } from 'react-loader-spinner'
const Quotes = () =>{
    const [quote, setQuote] = useState(null)
    const[ load, setLoad] = useState()
    const handleRequest= async event =>{
        event.preventDefault
        try{
        setLoad(true)
            let api_url = "https://api.adviceslip.com/advice"
        let result = await fetch (api_url)
        let response = await result.json()
        setQuote(response.slip.advice)
        setLoad(false)
    }
    catch (error){
    setQuote("an error occured please checkyour internet connection")
    setLoad(false)
    }

        }

     


    return(
<div>
<h2>quotes </h2>
<div className='quotebox'>
<h2 className='dailyquotes'>daily quotes </h2>
<p className='quote'>{quote}</p>
{
<p>{load &&  <FidgetSpinner Color="black" size={80}/>}</p>
}
<button onClick={handleRequest}>get quote</button>

</div>

</div>
    );
}
export default Quotes;