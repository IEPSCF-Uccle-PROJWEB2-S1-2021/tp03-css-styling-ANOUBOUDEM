
let a;
let b;
function max(a , b ) {


  if (b < a)
  {

    return max(a - 0);
  }
  if (b > a)
  {
    return max(b - 0);
  }
  if(a === b)
  {
    return max(a - 0);
  }

}


function min(a, b)
  {
    if(a < b)
    {
      return a;

    }

    if(a === b)
    {
      return a;
    }

  }
