class Solution {
    public int bulbSwitch(int n) {
        
        Map<Integer,Boolean> lamps = new HashMap<>();
    int count = 0;
    for (int i = 1; i * i <= n; i++) {
        count++;
    }
    return count;
    
}
}