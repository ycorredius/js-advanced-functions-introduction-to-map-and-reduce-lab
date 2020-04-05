// Your code here
function mapToNegativize(source){
    let result = []
    for(let i=0; i<source.length;i++){
        result.push (source[i] * (-1));
    }
    return result;
}

function mapToNoChange(source){
    let result = []
    for(let i=0; i<source.length;i++){
        result.push (source[i]);
    }
    return result;
}

function mapToSquare(source){
    let result = []
    for(let i=0; i<source.length;i++){
        result.push(source[i] * source[i]);
    }
    return result;
}

function mapToDouble (source){
    let result = []
    for(let i=0; i<source.length;i++){
        result.push (source[i] * 2);
    }
    return result;
}

function reduceToTotal(source, start=0){
    let result = start;
    for(let i=0; i<source.length;i++){
        result += source[i]; 
    }
    return result;
}

function reduceToAllTrue(source){
    let result = true;
    for(let i=0; i<source.length;i++){
        if (source[i]){
            continue;
        }else{
            result = false;
        }
    }
    return result;
}

function reduceToAnyTrue(source){
    let result = false;
    for(let i=0; i<source.length;i++){
        if (source[i]){
            result = true;
        }else{
            continue;
        }
    }
    return result;
}