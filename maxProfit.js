let stock = [7,1,5,3,6,4];
let profit = 0;

const maxProfit = stock => {
    for(let i=0;i<stock.length;i++){
        for(let j=0;j<stock.length;j++){
            if(stock[j]<stock[j+1]){
                let c= stock[j];
                stock[j] = stock[j+1];
                stock[j+1] = c;
            }
        }
    }
    return profit = stock[0] - stock[stock.length-1];
}

const t = maxProfit(stock);
console.log(t);