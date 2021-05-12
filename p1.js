
// PHP Program for Checking 
// double base Palindrome.
  
// converts number to base 
// k by changing it into string.
function integer_to_string(n, b)
{
    str = "";
    while (n > 0)
    {
        digit = n % b;
        n = (int)(n / b);
        str = (digit + '0') . str;
    }
    return str;
}
  
// function to check
// for palindrome
function isPalindrome(i, k)
{
    $temp = i;
      
    // m stores reverse
    // of a number
    m = 0;
    while ($temp > 0)
    {
        m = ($temp % 10) + (m * 10);
        $temp = (int)($temp / 10);
    }
      
    // if reverse is
    // equal to number
    if (m == i) 
    {
      
        // converting to base k
        str = integer_to_string(m, k);
        str1 = str;
      
        // reversing number in base k
        // str=strrev(str);
      
        // checking palindrome
        // in base k
        if (strcmp(strrev(str), str1) == 0) 
        {
            return i;
        }
    }
    return 0;
}
  
// function to find
// sum of palindromes
function sumPalindrome(n, k)
{
      
    sum = 0;
    for (i = 0; i < n; i++) 
    {
        sum += isPalindrome(i, k);
    }
    alert("Total sum is ") . sum;
}
  
// Driver code
n = 100;
k = 2;
  
sumPalindrome(n, k);
  
// This code is contributed 
// by mits 

