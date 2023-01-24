import React from 'react';
import quotes from './QuotesDatabase';


class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentQuote:quotes[0].quote,
            currentAuthor:quotes[0].author,
            backgroundColor:'blue'
        }
    }
    newQuote=()=>{
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({backgroundColor:randomColor});
        document.body.style.backgroundColor = "#" + this.state.backgroundColor;
        const quote = quotes[Math.floor(Math.random()*quotes.length)];
        while(quote.quote===this.state.currentQuote){
             quote = quotes[Math.floor(Math.random()*quotes.length)];
        }
        this.setState({currentQuote:quote.quote,currentAuthor:quote.author})
        
    }
  
  
    render(){
        return(
            <>
                <div id='quote-box'>
                    <div id='text'>
                    <p>{this.state.currentQuote}</p>
                    </div>
                    <div id='author'>
                    <p>{this.state.currentAuthor}</p>
                    </div>
                    <div id='buttons'>
                    <button id='new-quote'  onClick={this.newQuote}>New Quote</button>
                    </div>
                </div>
            </>
        )
    }
}
export default QuoteBox;