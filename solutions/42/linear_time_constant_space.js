let trap = function(height) {
    let n = height.length;
    let max = Math.max(...height);
    let mi = height.indexOf(max);
    let count = 0;
    let lmax = 0;
    for(let i=0; i<mi; i++){
        if(height[i] > lmax){
            lmax =  height[i];
        }else{
            count += lmax - height[i]
        }
    }
    let rmax = 0;
    for(let j=n-1; j>mi; j--){
        if(height[j] > rmax){
            rmax = height[j];
        }else{
            count +=  rmax - height[j];
        }
    }
    return count;
}
