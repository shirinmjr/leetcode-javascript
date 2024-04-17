class Solution {
    public int[] sumZero(int n) {
        int[] result = new int[n];
        int x=1;
            if(n%2 == 0){                               
                for (int i = 0 ; i<n ; i+=2){                
                    result[i] = x;
                    result[i+1] = -x;               
                   x++;     
                }
            }else{
                result[0]=0;
                for (int i = 1 ; i<n; i+=2){                
                result[i] = x;
                result[i+1] = -x;               
               x++;  
                  
                }
            }
             
    
          return result;
}
    }